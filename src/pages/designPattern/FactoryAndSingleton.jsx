import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const FactoryAndSingleton = () => {
  const factoryPatternCode = `// Factory function
function createButton(type) {
    switch (type) {
        case "primary":
            return <button className="btn-primary">Primary</button>;
        case "secondary":
            return <button className="btn-secondary">Secondary</button>;
        case "danger":
            return <button className="btn-danger">Danger</button>;
        default:
            return <button className="btn-default">Default</button>;
    }
}

// Use the factory
export default function App() {
    return (
        <div>
            {createButton("primary")}
            {createButton("danger")}
        </div>
    );
}`;

  const singletonPatternCode = `import React, { createContext, useContext, useState } from "react";

// Create a single context to store state
const AppContext = createContext();

export function AppProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to access application context
export function useAppContext() {
    return useContext(AppContext);
}

// Usage
export default function App() {
    const { theme, setTheme } = useAppContext();
    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Factory & Singleton Patterns in React</h1>

      <div className="workshop-description">
        <p>
          Factory and Singleton are two of the most commonly used design
          patterns in software development. In React applications, these
          patterns can help organize code, promote reusability, and manage
          global state.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Factory Pattern</h2>
        <p>
          The Factory Pattern is a creational pattern that provides an interface
          for creating objects without specifying their concrete classes. In
          React, this pattern is useful for creating components dynamically
          based on different conditions or parameters.
        </p>

        <h3>Basic Factory Pattern Example</h3>
        <p>
          In this example, we create a factory function that returns different
          button components based on the type provided:
        </p>
        <CodeHighlighter
          title="ButtonFactory.jsx"
          language="jsx"
          code={factoryPatternCode}
        />

        <h3>When to Use the Factory Pattern</h3>
        <ul>
          <li>
            When you need to create different components based on conditions
          </li>
          <li>When you want to encapsulate the creation logic in one place</li>
          <li>
            When you want to add new types of components without modifying
            existing code
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Singleton Pattern</h2>
        <p>
          The Singleton Pattern ensures that a class has only one instance and
          provides a global point of access to it. In React, we can implement
          this pattern using Context API to maintain a single source of truth
          for application state.
        </p>

        <h3>React Context as a Singleton</h3>
        <p>
          React Context provides a way to share values like themes, user data,
          or other global state between components without passing props through
          every level of the component tree:
        </p>
        <CodeHighlighter
          title="ThemeContext.jsx"
          language="jsx"
          code={singletonPatternCode}
        />

        <h3>When to Use the Singleton Pattern</h3>
        <ul>
          <li>
            When you need a single, shared instance of state across the
            application
          </li>
          <li>
            When you want to avoid prop drilling through multiple component
            levels
          </li>
          <li>When you need a global mechanism for state updates</li>
        </ul>

        <h3>Benefits of Using Context as a Singleton</h3>
        <ul>
          <li>Centralized state management</li>
          <li>Prevents duplication of state logic</li>
          <li>Makes component testing easier by allowing mock contexts</li>
          <li>Reduces complexity in component interaction</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Practice Exercise</h2>
        <p>
          Try implementing a factory function that creates form input components
          (text input, checkbox, radio button, etc.) based on a configuration
          object. Then, create a form context singleton to manage form
          validation and submission.
        </p>
        <p>
          This exercise will help you understand how these patterns can work
          together in a real-world application.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the Factory and Singleton patterns, continue
          to learn about other design patterns:
        </p>
        <ul>
          <li>
            <Link to="/designPattern/adapterAndComposite">
              Adapter & Composite Patterns
            </Link>
          </li>
          <li>
            <Link to="/designPattern/templateMethod">
              Template Method Pattern
            </Link>
          </li>
        </ul>
      </div>
    </WorkshopWrapper>
  );
};

export default FactoryAndSingleton;
