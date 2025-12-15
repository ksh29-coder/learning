import React, { useState, useEffect } from 'react';
import './CodeRunner.css';

function CodeRunner({ code, title }) {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inputPrompts, setInputPrompts] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [showInputForm, setShowInputForm] = useState(false);

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

  // Detect input() calls in the code
  const detectInputCalls = (codeText) => {
    const inputRegex = /input\s*\(\s*([^)]*)\s*\)/g;
    const prompts = [];
    let match;
    let index = 0;

    while ((match = inputRegex.exec(codeText)) !== null) {
      const promptText = match[1]
        .replace(/^["']|["']$/g, '') // Remove quotes
        .trim() || `Input ${index + 1}`;
      prompts.push({
        id: index,
        prompt: promptText,
        originalMatch: match[0]
      });
      index++;
    }

    return prompts;
  };

  const handleRunClick = () => {
    const prompts = detectInputCalls(code);
    
    if (prompts.length > 0) {
      setInputPrompts(prompts);
      // Initialize input values if not already set
      const newInputValues = {};
      prompts.forEach(p => {
        if (!(p.id in inputValues)) {
          newInputValues[p.id] = '';
        }
      });
      setInputValues(prev => ({ ...prev, ...newInputValues }));
      setShowInputForm(true);
    } else {
      runCode([]);
    }
  };

  const runCode = async (providedInputs = []) => {
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
    setShowInputForm(false);

    try {
      // Capture stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      // Always override input() to prevent I/O errors in browser
      if (providedInputs.length > 0) {
        // Create a list of input values in Python
        const inputList = JSON.stringify(providedInputs);
        pyodide.runPython(`
_input_index = 0
_input_values = ${inputList}

def _custom_input(prompt=''):
    global _input_index
    if _input_index < len(_input_values):
        value = _input_values[_input_index]
        _input_index += 1
        if prompt:
            print(prompt, end='')
        return value
    else:
        if prompt:
            print(prompt, end='')
        return ''

# Override builtin input
import builtins
builtins.input = _custom_input
        `);
      } else {
        // If no inputs provided, return empty string (prevents I/O errors)
        pyodide.runPython(`
def _custom_input(prompt=''):
    if prompt:
        print(prompt, end='')
    return ''

import builtins
builtins.input = _custom_input
        `);
      }

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

  const handleInputSubmit = () => {
    const values = inputPrompts.map(p => inputValues[p.id] || '');
    runCode(values);
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
          onClick={handleRunClick}
          disabled={isRunning || !pyodide}
        >
          {isRunning ? '⏳ Running...' : '▶️ Run Code'}
        </button>
      </div>
      
      {showInputForm && inputPrompts.length > 0 && (
        <div className="input-form-container">
          <div className="input-form-header">
            <span>📝 Enter Input Values</span>
          </div>
          <div className="input-form-body">
            {inputPrompts.map(prompt => (
              <div key={prompt.id} className="input-field">
                <label>{prompt.prompt}:</label>
                <input
                  type="text"
                  value={inputValues[prompt.id] || ''}
                  onChange={(e) => setInputValues(prev => ({
                    ...prev,
                    [prompt.id]: e.target.value
                  }))}
                  placeholder={`Enter value for: ${prompt.prompt}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleInputSubmit();
                    }
                  }}
                />
              </div>
            ))}
            <div className="input-form-actions">
              <button
                className="submit-input-button"
                onClick={handleInputSubmit}
                disabled={isRunning}
              >
                ✓ Run with These Values
              </button>
              <button
                className="cancel-input-button"
                onClick={() => setShowInputForm(false)}
                disabled={isRunning}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
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

