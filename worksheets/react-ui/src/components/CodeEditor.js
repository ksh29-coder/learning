import React from 'react';
import './CodeEditor.css';

function CodeEditor({ value, onChange, placeholder, height = 200 }) {
  const handleKeyDown = (e) => {
    // Handle Tab key to insert indentation
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = value;
      
      // Insert 2 spaces for indentation (Python standard)
      const spaces = '  ';
      
      if (start === end) {
        // No selection - just insert spaces at cursor
        const newText = text.substring(0, start) + spaces + text.substring(end);
        onChange(newText);
        
        // Set cursor position after inserted spaces
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
        }, 0);
      } else {
        // Selection - indent all selected lines
        const lines = text.split('\n');
        const startLine = text.substring(0, start).split('\n').length - 1;
        const endLine = text.substring(0, end).split('\n').length - 1;
        
        // Indent selected lines
        for (let i = startLine; i <= endLine; i++) {
          if (lines[i] !== undefined) {
            lines[i] = spaces + lines[i];
          }
        }
        
        const newText = lines.join('\n');
        onChange(newText);
        
        // Adjust cursor position
        setTimeout(() => {
          const newStart = start + spaces.length;
          const newEnd = end + (endLine - startLine + 1) * spaces.length;
          textarea.selectionStart = newStart;
          textarea.selectionEnd = newEnd;
        }, 0);
      }
    }
    
    // Handle Shift+Tab for outdenting
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = value;
      
      const lines = text.split('\n');
      const startLine = text.substring(0, start).split('\n').length - 1;
      const endLine = text.substring(0, end).split('\n').length - 1;
      
      // Outdent selected lines
      let removedChars = 0;
      for (let i = startLine; i <= endLine; i++) {
        if (lines[i] !== undefined && (lines[i].startsWith('  ') || lines[i].startsWith('\t'))) {
          if (lines[i].startsWith('  ')) {
            lines[i] = lines[i].substring(2);
            removedChars += 2;
          } else if (lines[i].startsWith('\t')) {
            lines[i] = lines[i].substring(1);
            removedChars += 1;
          }
        }
      }
      
      const newText = lines.join('\n');
      onChange(newText);
      
      // Adjust cursor position
      setTimeout(() => {
        const newStart = Math.max(0, start - (start === end ? 2 : 0));
        const newEnd = Math.max(0, end - removedChars);
        textarea.selectionStart = newStart;
        textarea.selectionEnd = newEnd;
      }, 0);
    }
  };

  return (
    <div className="code-editor-container">
      <textarea
        className="code-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{ height: `${height}px` }}
        spellCheck={false}
      />
    </div>
  );
}

export default CodeEditor;

