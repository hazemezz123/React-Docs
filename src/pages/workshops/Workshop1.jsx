import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const Workshop1 = () => {
  const appCode = `// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;`;

  const indexCode = `// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`;

  const setupInstructions = [
    "Install Node.js and npm from nodejs.org",
    "Run: npx create-react-app my-react-project",
    "Navigate to the project: cd my-react-project",
    "Start the development server: npm start",
  ];

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Workshop 1: Setting Up a React Project</h1>

      <div className="workshop-description">
        <p>
          This workshop covers the basics of setting up a React project using
          create-react-app. You'll learn how to install Node.js and npm, create
          a new React project, and understand the initial project structure.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>A computer with internet access</li>
          <li>Basic knowledge of HTML, CSS, and JavaScript</li>
          <li>A code editor (e.g., VS Code, Sublime Text)</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Setup Instructions</h2>
        <ol>
          {setupInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="workshop-section">
        <h2>Project Structure</h2>
        <p>
          After creating a new React project, you'll see the following
          structure:
        </p>
        <pre className="file-structure">
          {`my-react-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md`}
        </pre>
      </div>

      <div className="workshop-section">
        <h2>Key Files</h2>

        <h3>src/App.js</h3>
        <p>The main component that represents your application:</p>
        <CodeHighlighter title="App.js" language="jsx" code={appCode} />

        <h3>src/index.js</h3>
        <p>The entry point of your React application:</p>
        <CodeHighlighter title="index.js" language="jsx" code={indexCode} />

        <h3>public/index.html</h3>
        <p>
          The HTML template for your React application. The <code>div</code>{" "}
          with <code>id="root"</code> is where your React app will be mounted.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Running the Application</h2>
        <p>To start the development server and run your React application:</p>
        <CodeHighlighter title="Terminal" language="bash" code="npm start" />
        <p>
          This will start the development server and open your application in a
          browser at <code>http://localhost:3000</code>.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Now that you have set up your React project, you can:</p>
        <ul>
          <li>Modify the App.js file to create your own components</li>
          <li>Add styling to your components</li>
          <li>Learn about React components and props</li>
          <li>Explore React hooks for state management</li>
        </ul>
        <p>
          Continue to <Link to="/workshops/2">Workshop 2</Link> to learn how to
          use Bootstrap in React.
        </p>
      </div>
    </WorkshopWrapper>
  );
};

export default Workshop1;
