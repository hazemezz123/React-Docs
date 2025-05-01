import React, { useState } from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const Workshop3 = () => {
  const eventHandlingCode = `// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const myFunc = () => console.log('Welcome to Events');
  return (
    <div>
      <button className="btn btn-primary" onClick={myFunc}>
        Button 1
      </button>
      <button className="btn btn-dark">Button 2</button>
    </div>
  );
}`;

  const counterCode = `// src/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;`;

  const toggleCode = `// src/ToggleContent.js
import React, { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content is visible.</p>}
    </div>
  );
}

export default ToggleContent;`;

  const formCode = `// src/SignupForm.js
import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={() => console.log(\`Name: \${name}, Email: \${email}\`)}>
        Submit
      </button>
    </div>
  );
}

export default SignupForm;`;

  // Demo components
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [likes, setLikes] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="workshop-container">
      <h1 className="workshop-title">
        Workshop 3: Handling Events and State with useState
      </h1>

      <div className="workshop-description">
        <p>
          This workshop explores event handling and state management in React
          using the useState hook. You'll learn how to respond to user
          interactions, manage component state, and build interactive UI
          elements.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>Completed Workshop 1 and 2</li>
          <li>Understanding of React components and props</li>
          <li>Basic JavaScript knowledge (functions, events)</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Introduction to Events in React</h2>
        <p>
          React uses a synthetic event system that normalizes browser
          differences. You can handle events using attributes like{" "}
          <code>onClick</code>, <code>onChange</code>, etc.
        </p>
        <CodeHighlighter
          title="Basic Event Handling"
          language="jsx"
          code={eventHandlingCode}
        />
        <div className="demo-container">
          <button
            className="btn btn-primary"
            onClick={() => alert("Welcome to Events")}
          >
            Button 1
          </button>
          <button className="btn btn-dark ms-2">Button 2</button>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Introduction to useState Hook</h2>
        <p>
          The <code>useState</code> hook allows you to add state to functional
          components. It returns a stateful value and a function to update it.
        </p>
        <CodeHighlighter
          title="Counter Component with useState"
          language="jsx"
          code={counterCode}
        />
        <div className="demo-container">
          <p>Current count: {count}</p>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Toggle Content with useState</h2>
        <p>You can use a boolean state to toggle the visibility of content.</p>
        <CodeHighlighter
          title="Toggle Content Component"
          language="jsx"
          code={toggleCode}
        />
        <div className="demo-container">
          <button
            className="btn btn-primary"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Hide" : "Show"} Content
          </button>
          {isVisible && (
            <div className="mt-3">
              <p>This content can be toggled on and off.</p>
            </div>
          )}
        </div>
      </div>

      <div className="workshop-section">
        <h2>Form Handling with useState</h2>
        <p>
          You can use <code>useState</code> to manage form inputs.
        </p>
        <CodeHighlighter
          title="Signup Form Component"
          language="jsx"
          code={formCode}
        />
        <div className="demo-container">
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>

      <div className="workshop-section">
        <h2>More useState Examples</h2>

        <h3>Like Button</h3>
        <div className="demo-container">
          <button
            className="btn btn-outline-primary"
            onClick={() => setLikes(likes + 1)}
          >
            ❤️ Like
          </button>
          <p className="mt-2">
            {likes} {likes === 1 ? "Like" : "Likes"}
          </p>
        </div>

        <h3>Shopping Cart Item</h3>
        <div className="demo-container">
          <div className="card p-3">
            <h4>Product Name</h4>
            <p>$19.99</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="mx-3">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="mt-2">Total: ${(19.99 * quantity).toFixed(2)}</p>
          </div>
        </div>

        <h3>Theme Toggler</h3>
        <div className="demo-container">
          <div
           
          >
            <h4>Theme Toggle Example</h4>
            <p>This content changes appearance based on the selected theme.</p>
            <button
              className={`btn ${isDarkMode ? "btn-light" : "btn-dark"}`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              Switch to {isDarkMode ? "dark" : "light"} Mode
            </button>
          </div>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>
          Now that you've learned about handling events and state with useState,
          you can:
        </p>
        <ul>
          <li>
            Create more complex state management with multiple state variables
          </li>
          <li>Learn about the useEffect hook for side effects</li>
          <li>Explore more advanced state management techniques</li>
        </ul>
        <p>
          Continue to <Link to="/workshops/4">Workshop 4</Link> to learn about
          advanced state management.
        </p>
      </div>
    </div>
  );
};

export default Workshop3;
