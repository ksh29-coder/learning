import React, { useState, useEffect } from 'react';
import './CodeRunner.css';

function CodeRunner({ code, title }) {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Pyodide on mount
  useEffect(() => {
    let mounted = true;
    
    const initPyodide = async () => {
      try {
        // Wait for Pyodide to be available from the script tag
        if (typeof window.loadPyodide === 'undefined') {
          // Wait a bit for the script to load
          await new Promise(resolve => setTimeout(resolve, 100));
          if (typeof window.loadPyodide === 'undefined') {
            throw new Error('Pyodide script not loaded');
          }
        }
        
        const pyodideInstance = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        });
        
        if (mounted) {
          setPyodide(pyodideInstance);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Failed to load Pyodide:', err);
        if (mounted) {
          setError('Failed to load Python interpreter. Please refresh the page.');
          setIsLoading(false);
        }
      }
    };

    initPyodide();

    return () => {
      mounted = false;
    };
  }, []);

  const runCode = async () => {
    if (!code.trim()) {
      setError('Please write some code first! 😊');
      setOutput('');
      return;
    }

    if (!pyodide) {
      setError('Python interpreter is still loading. Please wait...');
      return;
    }

    setIsRunning(true);
    setError('');
    setOutput('');

    try {
      // Capture stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      // Run the user's code
      pyodide.runPython(code);

      // Get the output
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      
      setOutput(stdout || '(No output)');
    } catch (e) {
      setError(`Error: ${e.message}\n\n💡 Tip: Check your Python syntax!`);
      setOutput('');
    } finally {
      setIsRunning(false);
    }
  };

  if (isLoading) {
    return (
      <div className="code-runner">
        <div className="runner-header">
          <h4>{title || 'Code Output'}</h4>
          <button className="run-button" disabled>
            ⏳ Loading Python...
          </button>
        </div>
        <div className="loading-message">
          🐍 Loading Python interpreter... This may take a moment on first load.
        </div>
      </div>
    );
  }

  return (
    <div className="code-runner">
      <div className="runner-header">
        <h4>{title || 'Code Output'}</h4>
        <button
          className="run-button"
          onClick={runCode}
          disabled={isRunning || !pyodide}
        >
          {isRunning ? '⏳ Running...' : '▶️ Run Code'}
        </button>
      </div>
      {(output || error) && (
        <div className={`output-container ${error ? 'error' : ''}`}>
          <div className="output-header">
            {error ? '❌ Error' : '📺 Output'}
          </div>
          <pre className="output-content">
            {error || output}
          </pre>
        </div>
      )}
    </div>
  );
}

export default CodeRunner;

