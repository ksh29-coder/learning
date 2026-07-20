// Parent monitoring dashboard, served at /parent (see src/index.js).
//
// It is a READ surface, gated by the PARENT_PIN the backend holds - the kids
// never see this route in their app, and it derives everything from the remote
// event stream, so it works from the parent's OWN device, not just the machine
// the kids use. No worksheet localStorage is touched here.

import React, { useState, useCallback } from 'react';
import './ParentDashboard.css';

const DAYS = [
  'My First Python Program',
  'Variables',
  'If / Else',
  'Loops',
  'Functions',
  'Lists',
  'Classes & Objects',
  'Polymorphism & Inheritance',
  'Final Project'
];

const PROFILE_META = {
  michael: { label: 'Michael', icon: '👦' },
  isabella: { label: 'Isabella', icon: '👧' }
};

function fmtDuration(totalSeconds) {
  const s = Math.max(0, Math.round(Number(totalSeconds) || 0));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ${s % 60}s`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m`;
}

function fmtTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString();
}

const evTime = (e) => e.client_ts || e.created_at || '';

// Turn a flat event list into everything the dashboard renders.
function aggregate(events) {
  const attempts = events.filter((e) => e.type === 'answer_attempt');
  const dayViews = events.filter((e) => e.type === 'day_view');
  const chats = events.filter((e) => e.type === 'chat_message');
  const sessions = events.filter((e) => e.type === 'session_start');

  const timeByDay = {};
  dayViews.forEach((e) => {
    const sec = Number(e.payload && e.payload.seconds) || 0;
    timeByDay[e.day] = (timeByDay[e.day] || 0) + sec;
  });

  // Latest verdict per (day, question), so re-answering a question correctly
  // updates its score instead of counting twice.
  const latest = {};
  attempts.forEach((e) => {
    const qid = e.payload && e.payload.questionId;
    if (qid == null) return;
    const key = `${e.day}|${qid}`;
    const t = evTime(e);
    if (!latest[key] || String(t) > String(latest[key].t)) {
      latest[key] = { correct: !!(e.payload && e.payload.isCorrect), t };
    }
  });

  const dayStats = {};
  Object.keys(latest).forEach((key) => {
    const day = key.split('|')[0];
    if (!dayStats[day]) dayStats[day] = { correct: 0, total: 0 };
    dayStats[day].total += 1;
    if (latest[key].correct) dayStats[day].correct += 1;
  });

  const attemptsByDay = {};
  attempts.forEach((e) => {
    attemptsByDay[e.day] = (attemptsByDay[e.day] || 0) + 1;
  });

  const totalTime = Object.values(timeByDay).reduce((a, b) => a + b, 0);
  const totalQuestions = Object.keys(latest).length;
  const totalCorrect = Object.values(latest).filter((v) => v.correct).length;
  const lastActive = events
    .map(evTime)
    .filter(Boolean)
    .sort()
    .slice(-1)[0];

  return {
    attempts: attempts.slice().sort((a, b) => String(evTime(a)).localeCompare(String(evTime(b)))),
    chats: chats.slice().sort((a, b) => String(evTime(a)).localeCompare(String(evTime(b)))),
    timeByDay,
    dayStats,
    attemptsByDay,
    totals: {
      totalTime,
      totalQuestions,
      totalCorrect,
      accuracy: totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
      chatCount: chats.length,
      sessionCount: sessions.length,
      lastActive
    }
  };
}

function StatCard({ label, value }) {
  return (
    <div className="pd-stat">
      <div className="pd-stat-value">{value}</div>
      <div className="pd-stat-label">{label}</div>
    </div>
  );
}

function ProfilePanel({ events }) {
  const a = aggregate(events);

  if (events.length === 0) {
    return <p className="pd-empty">No activity recorded yet for this child.</p>;
  }

  return (
    <div className="pd-panel">
      <div className="pd-stats">
        <StatCard label="Active time" value={fmtDuration(a.totals.totalTime)} />
        <StatCard label="Questions tried" value={a.totals.totalQuestions} />
        <StatCard label="Accuracy" value={`${a.totals.accuracy}%`} />
        <StatCard label="Total attempts" value={a.attempts.length} />
        <StatCard label="Chat messages" value={a.totals.chatCount} />
        <StatCard label="Last active" value={fmtTime(a.totals.lastActive)} />
      </div>

      <h3 className="pd-h3">Progress by day</h3>
      <div className="pd-table-wrap">
        <table className="pd-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Correct</th>
              <th>Attempts</th>
              <th>Active time</th>
            </tr>
          </thead>
          <tbody>
            {DAYS.map((topic, i) => {
              const day = i + 1;
              const stat = a.dayStats[day] || { correct: 0, total: 0 };
              const touched = stat.total > 0 || a.timeByDay[day] || a.attemptsByDay[day];
              return (
                <tr key={day} className={touched ? '' : 'pd-row-untouched'}>
                  <td>{day}</td>
                  <td>{topic}</td>
                  <td>{stat.total ? `${stat.correct} / ${stat.total}` : '—'}</td>
                  <td>{a.attemptsByDay[day] || '—'}</td>
                  <td>{a.timeByDay[day] ? fmtDuration(a.timeByDay[day]) : '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h3 className="pd-h3">Every attempt, in order</h3>
      {a.attempts.length === 0 ? (
        <p className="pd-empty">No answers checked yet.</p>
      ) : (
        <div className="pd-table-wrap">
          <table className="pd-table">
            <thead>
              <tr>
                <th>When</th>
                <th>Day</th>
                <th>Question</th>
                <th>Their answer</th>
                <th>Result</th>
                <th>Graded by</th>
              </tr>
            </thead>
            <tbody>
              {a.attempts.map((e) => {
                const p = e.payload || {};
                return (
                  <tr key={e.id} className={p.isCorrect ? 'pd-correct' : 'pd-wrong'}>
                    <td className="pd-nowrap">{fmtTime(evTime(e))}</td>
                    <td>{e.day}</td>
                    <td>{p.questionText || p.questionId || '—'}</td>
                    <td className="pd-answer">{p.answer == null ? '—' : String(p.answer)}</td>
                    <td>{p.isCorrect ? '✅' : '❌'}</td>
                    <td>{p.gradedBy || 'local'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <h3 className="pd-h3">Chat history</h3>
      {a.chats.length === 0 ? (
        <p className="pd-empty">No questions asked to the AI teacher yet.</p>
      ) : (
        <div className="pd-chat">
          {a.chats.map((e) => {
            const p = e.payload || {};
            const role = p.role === 'user' ? 'child' : 'teacher';
            return (
              <div key={e.id} className={`pd-msg pd-msg-${role}`}>
                <div className="pd-msg-meta">
                  {role === 'child' ? '🧒 asked' : '🦉 teacher'} · Day {e.day} · {fmtTime(evTime(e))}
                </div>
                <div className="pd-msg-body">{p.content}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ParentDashboard() {
  const [pin, setPin] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [profiles, setProfiles] = useState({});
  const [active, setActive] = useState('michael');
  const [sinceDays, setSinceDays] = useState(0);

  const load = useCallback(async (usePin, since) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/parent', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-parent-pin': usePin },
        body: JSON.stringify({ sinceDays: since || 0 })
      });
      if (res.status === 401) {
        setError('Wrong PIN.');
        setAuthed(false);
        return;
      }
      if (res.status === 503) {
        setError('Monitoring is not configured on the server yet (PARENT_PIN / Supabase).');
        return;
      }
      if (!res.ok) {
        setError('Could not load data. Try again in a moment.');
        return;
      }
      const data = await res.json();
      setProfiles(data.profiles || {});
      setAuthed(true);
      const first = Object.keys(data.profiles || {}).find((k) => (data.profiles[k] || []).length);
      if (first) setActive(first);
    } catch (e) {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  if (!authed) {
    return (
      <div className="pd-gate">
        <form
          className="pd-gate-card"
          onSubmit={(e) => {
            e.preventDefault();
            if (pin.trim()) load(pin.trim(), sinceDays);
          }}
        >
          <h1>🔐 Parent Dashboard</h1>
          <p>Enter your parent PIN to see how the kids are doing.</p>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Parent PIN"
            aria-label="Parent PIN"
            autoFocus
          />
          <button type="submit" disabled={loading || !pin.trim()}>
            {loading ? 'Checking…' : 'Unlock'}
          </button>
          {error && <div className="pd-error">{error}</div>}
        </form>
      </div>
    );
  }

  // Always show both kids' tabs (even empty), plus any unexpected profile that
  // turned up in the data.
  const profileKeys = Array.from(new Set([...Object.keys(PROFILE_META), ...Object.keys(profiles)]));

  return (
    <div className="pd-root">
      <header className="pd-header">
        <h1>📊 How the kids are doing</h1>
        <div className="pd-controls">
          <label>
            Range:{' '}
            <select
              value={sinceDays}
              onChange={(e) => {
                const v = Number(e.target.value);
                setSinceDays(v);
                load(pin.trim(), v);
              }}
            >
              <option value={0}>All time</option>
              <option value={1}>Last 24 hours</option>
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
            </select>
          </label>
          <button className="pd-refresh" onClick={() => load(pin.trim(), sinceDays)} disabled={loading}>
            {loading ? '…' : '↻ Refresh'}
          </button>
        </div>
      </header>

      {error && <div className="pd-error pd-error-inline">{error}</div>}

      <nav className="pd-tabs">
        {profileKeys.map((k) => {
          const meta = PROFILE_META[k] || { label: k, icon: '🙂' };
          const count = (profiles[k] || []).length;
          return (
            <button
              key={k}
              className={`pd-tab ${active === k ? 'active' : ''}`}
              onClick={() => setActive(k)}
            >
              {meta.icon} {meta.label} <span className="pd-tab-count">{count}</span>
            </button>
          );
        })}
      </nav>

      <ProfilePanel events={profiles[active] || []} />
    </div>
  );
}

export default ParentDashboard;
