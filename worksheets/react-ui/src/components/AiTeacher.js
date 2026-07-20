import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './AiTeacher.css';
import { AiTeacherContext } from '../context/AiTeacherContext';
import { buildStudentContext } from '../hooks/useStudentContext';
import { sendChat, isAiEnabled, setPassphrase } from '../lib/aiClient';
import { readChat, writeChat } from '../lib/chatHistory';
import { track } from '../lib/telemetry';

const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 12;

const greeting = (name, topic) => ({
  role: 'assistant',
  content:
    `Hi ${name}! I'm your Python helper. You're on ${topic}. ` +
    `Ask me anything you're stuck on - I'll give you hints so you can figure it out yourself.`
});

// Renders text safely. NEVER use dangerouslySetInnerHTML here: model output is
// untrusted, and a kid's chat is the last place you want raw HTML injected.
// Fenced code blocks become <pre>; everything else stays plain text.
function MessageBody({ text }) {
  const parts = String(text).split(/```(?:\w+)?\n?/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre key={i} className="ai-code">{part.replace(/\n$/, '')}</pre>
        ) : (
          part && <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Provides the AI teacher context AND renders the floating UI. It wraps the day
// content (rather than sitting beside it) so any component below can call
// useAiTeacher() to pop the panel open on a specific question.
function AiTeacher({ profile, day, children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Seed from the saved transcript so a reload keeps the conversation.
  const [messages, setMessages] = useState(() => readChat(profile));
  const [draft, setDraft] = useState('');
  const [pending, setPending] = useState(false);
  const [needsPassphrase, setNeedsPassphrase] = useState(false);
  const [passphraseDraft, setPassphraseDraft] = useState('');
  const [error, setError] = useState('');

  const available = isAiEnabled();
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // The widget is mounted OUTSIDE DaySelector's key={profile}, so it does not
  // remount when the kid is switched. Without this, Michael's conversation
  // would carry straight over into Isabella's session.
  useEffect(() => {
    setMessages(readChat(profile));
    setDraft('');
    setError('');
    setPending(false);
  }, [profile]);

  // Persist the transcript so it survives a refresh (it used to be lost).
  useEffect(() => {
    writeChat(profile, messages);
  }, [profile, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, pending]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const ask = useCallback(
    async (text, { questionText } = {}) => {
      const trimmed = String(text).trim().slice(0, MAX_MESSAGE_CHARS);
      if (!trimmed || pending) return;

      setError('');
      const nextMessages = [...messages, { role: 'user', content: trimmed }];
      setMessages(nextMessages);
      setDraft('');
      setPending(true);

      // Parent monitoring: keep the chat history off-device too. Fire-and-forget.
      track('chat_message', { profile, day, role: 'user', content: trimmed });

      try {
        const context = buildStudentContext(profile, day, { questionText });
        const data = await sendChat({
          profile,
          messages: nextMessages.slice(-MAX_HISTORY),
          context
        });

        const replyText = data.reply || data.fallback;
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: replyText, degraded: !data.reply }
        ]);
        track('chat_message', {
          profile,
          day,
          role: 'assistant',
          content: replyText,
          degraded: !data.reply
        });
      } catch (err) {
        if (err.code === 'bad_passphrase') {
          setNeedsPassphrase(true);
          setError('I need the family password before I can help.');
        } else if (err.code === 'rate_limited') {
          setError('Lots of questions! Give me a minute to catch up.');
        } else {
          setError("I couldn't reach my brain just now. Try again in a moment.");
        }
      } finally {
        setPending(false);
      }
    },
    [messages, pending, profile, day]
  );

  const openWithQuestion = useCallback(
    ({ questionId, questionText, studentAnswer }) => {
      setIsOpen(true);
      const prompt = studentAnswer
        ? `I'm stuck on this question: "${questionText}". I answered "${studentAnswer}" but I'm not sure. Can you help me understand?`
        : `I'm stuck on this question: "${questionText}". Can you give me a hint?`;
      ask(prompt, { questionText: { [questionId]: questionText } });
    },
    [ask]
  );

  const contextValue = useMemo(
    () => ({
      isOpen,
      available,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      openWithQuestion
    }),
    [isOpen, available, openWithQuestion]
  );

  const savePassphrase = () => {
    setPassphrase(passphraseDraft.trim());
    setPassphraseDraft('');
    setNeedsPassphrase(false);
    setError('');
  };

  if (!available) {
    // Feature flag off: the app renders exactly as it did before this feature.
    // Children still get a context whose `available: false` hides Ask buttons.
    return (
      <AiTeacherContext.Provider value={contextValue}>{children}</AiTeacherContext.Provider>
    );
  }

  const shown = messages.length
    ? messages
    : [greeting(profile === 'isabella' ? 'Isabella' : 'Michael', `Day ${day}`)];

  return (
    <AiTeacherContext.Provider value={contextValue}>
      {children}

      {!isOpen && (
        <button
          className="ai-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Ask the Python teacher"
          title="Ask the Python teacher"
        >
          <span className="ai-fab-icon" aria-hidden="true">🦉</span>
          <span className="ai-fab-label">Ask your teacher</span>
        </button>
      )}

      {isOpen && (
        <div className="ai-panel" role="dialog" aria-label="AI Python teacher">
          <div className="ai-panel-header">
            <span className="ai-panel-title">🦉 Your Python Helper</span>
            <button className="ai-close" onClick={() => setIsOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="ai-messages" ref={scrollRef}>
            {shown.map((m, i) => (
              <div key={i} className={`ai-msg ai-msg-${m.role}${m.degraded ? ' ai-msg-degraded' : ''}`}>
                <MessageBody text={m.content} />
              </div>
            ))}

            {pending && (
              <div className="ai-msg ai-msg-assistant ai-thinking">
                <span className="ai-dot" />
                <span className="ai-dot" />
                <span className="ai-dot" />
              </div>
            )}

            {error && <div className="ai-error">{error}</div>}
          </div>

          {needsPassphrase ? (
            <form
              className="ai-composer"
              onSubmit={(e) => {
                e.preventDefault();
                savePassphrase();
              }}
            >
              <input
                type="password"
                className="ai-input"
                value={passphraseDraft}
                onChange={(e) => setPassphraseDraft(e.target.value)}
                placeholder="Family password"
                aria-label="Family password"
              />
              <button className="ai-send" type="submit" disabled={!passphraseDraft.trim()}>
                Save
              </button>
            </form>
          ) : (
            <form
              className="ai-composer"
              onSubmit={(e) => {
                e.preventDefault();
                ask(draft);
              }}
            >
              <input
                ref={inputRef}
                type="text"
                className="ai-input"
                value={draft}
                maxLength={MAX_MESSAGE_CHARS}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask me anything about Python..."
                aria-label="Your question"
                disabled={pending}
              />
              <button className="ai-send" type="submit" disabled={pending || !draft.trim()}>
                Send
              </button>
            </form>
          )}

          <div className="ai-footnote">
            I give hints, not answers - so you get to solve it! Stuck for a while?{' '}
            <strong>Ask a grown-up 🧑</strong>
          </div>
        </div>
      )}
    </AiTeacherContext.Provider>
  );
}

export default AiTeacher;
