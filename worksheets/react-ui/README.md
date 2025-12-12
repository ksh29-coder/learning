# Day 1 Worksheet - React UI

A fun, interactive React application for children to complete their Day 1 Python worksheet with answer checking and code execution features.

## Features

- 🎨 **Child-Friendly Design**: Colorful, engaging UI with animations and emojis
- ✅ **Answer Checking**: Automatic validation for Part 1 questions with helpful feedback
- 💻 **Code Editor**: Built-in code editor for writing Python code
- ▶️ **Code Runner**: Test and preview code output directly in the browser
- 💾 **Auto-Save**: Answers are automatically saved to localStorage
- 📊 **Score Tracking**: Visual score display with progress bar
- 📱 **Responsive**: Works on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the react-ui directory:
```bash
cd worksheets/react-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
react-ui/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Header with name/date inputs
│   │   ├── ScoreDisplay.js    # Score tracking component
│   │   ├── Part1.js           # Understanding Print questions
│   │   ├── Part2.js           # Code Practice exercises
│   │   ├── Part3.js           # ASCII Art challenges
│   │   ├── Part4.js           # Reflection questions
│   │   ├── Bonus.js           # Bonus challenge
│   │   ├── CodeEditor.js      # Code editor component
│   │   └── CodeRunner.js       # Code execution component
│   ├── App.js                 # Main app component
│   ├── App.css                # Main app styles
│   ├── index.js               # Entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Components Overview

### Part 1: Understanding Print
- Multiple choice question with radio buttons
- Two text input questions
- Real-time answer checking with feedback
- Hints for incorrect answers

### Part 2: Code Practice
- Code editor for fixing broken code
- Code editor for creating new programs
- Code runner to test output

### Part 3: ASCII Art Challenge
- Code editor for completing patterns
- Code editor for creating custom drawings
- Preview functionality to see art output

### Part 4: Reflection
- Text inputs for reflection questions
- Text area for future learning goals
- Notes section

### Bonus Challenge
- Special styling for bonus section
- Code editor for welcome sign
- Tips and suggestions

## Answer Checking

The app automatically checks answers for Part 1 questions:

- **Q1**: Multiple choice - exact match required
- **Q2**: Accepts variations like "quotes", "quote", '"', "'"
- **Q3**: Accepts "3" or "three"

Correct answers are marked with a green checkmark and celebration emoji. Incorrect answers show helpful hints.

## Data Persistence

All answers are automatically saved to browser localStorage. When you reload the page, your progress is restored.

## Code Execution

The CodeRunner component executes **real Python code** in the browser using **Pyodide** (Python compiled to WebAssembly):
- Full Python 3.x interpreter running in your browser
- Supports all Python syntax including loops, functions, and complex expressions
- No conversion needed - runs actual Python code
- Captures print() output and displays errors
- Shows output in a styled terminal-like window

**Note**: Pyodide loads from a CDN on first use, so an internet connection is required. The first load may take a few seconds.

## Customization

You can customize the app by:
- Modifying colors in CSS files
- Adding new questions in component files
- Adjusting answer checking logic in Part1.js
- Changing the score calculation in ScoreDisplay.js

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is part of the Python Learning curriculum.

