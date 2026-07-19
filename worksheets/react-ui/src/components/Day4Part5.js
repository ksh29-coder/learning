import React from 'react';
import './Part4.css';
import CodeEditor from './CodeEditor';

function Day4Part5({ answers, updateAnswer }) {
  const reflectionQuestions = [
    { key: 'reflection1', label: '1. A loop is used to:' },
    { key: 'reflection2', label: '2. The difference between a for loop and a while loop is:' },
    { key: 'reflection3', label: '3. One thing loops made easier today was:' },
    { key: 'reflection4', label: '4. One thing I found easy about loops:' },
    { key: 'reflection5', label: '5. One thing I found challenging about loops:' }
  ];

  return (
    <div className="part4-container">
      <div className="part-header">
        <h2>💭 Part 5: Reflection</h2>
        <p className="part-description">
          Think about what you've learned today about loops!
        </p>
      </div>

      <div className="reflection-card">
        <h3 className="reflection-title">What I Learned Today</h3>
        {reflectionQuestions.map((q) => (
          <div key={q.key} className="reflection-item">
            <label className="reflection-label">{q.label}</label>
            <input
              type="text"
              value={answers[q.key] || ''}
              onChange={(e) => updateAnswer(q.key, e.target.value)}
              placeholder="Enter your answer..."
              className="reflection-input"
            />
          </div>
        ))}
      </div>

      <div className="reflection-card">
        <h3 className="reflection-title">What I Want to Learn Next</h3>
        <CodeEditor
          value={answers.nextLearning || ''}
          onChange={(value) => updateAnswer('nextLearning', value)}
          placeholder="Write what you'd like to learn next..."
          height={100}
        />
      </div>

      <div className="reflection-card">
        <h3 className="reflection-title">Notes Section</h3>
        <p className="notes-description">
          Use this space to write down any questions or ideas:
        </p>
        <CodeEditor
          value={answers.notes || ''}
          onChange={(value) => updateAnswer('notes', value)}
          placeholder="Write your notes here..."
          height={150}
        />
      </div>
    </div>
  );
}

export default Day4Part5;




