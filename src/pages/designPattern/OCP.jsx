import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const OCP = () => {
  const ocpBadExample = `function Alert({ type, message }) {
    if (type === "success") {
        return <div style={{ color: "green" }}>{message}</div>;
    } else if (type === "error") {
        return <div style={{ color: "red" }}>{message}</div>;
    } else {
        return <div>{message}</div>;
    }
}`;

  const ocpGoodExample = `function Alert({ children, style }) {
    return <div style={style}>{children}</div>;
}

function SuccessAlert({ message }) {
    return <Alert style={{ color: "green" }}>{message}</Alert>;
}

function ErrorAlert({ message }) {
    return <Alert style={{ color: "red" }}>{message}</Alert>;
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Open/Closed Principle (OCP)</h1>

      <div className="workshop-description">
        <p>
          The Open/Closed Principle states that software entities (classes,
          modules, functions) should be open for extension but closed for
          modification. In React, this means components should be designed so
          that their behavior can be extended without modifying their source
          code.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Why Follow OCP in React?</h2>
        <p>Following OCP in React helps you:</p>
        <ul>
          <li>
            Create components that are easier to extend with new functionality
          </li>
          <li>
            Avoid breaking existing functionality when adding new features
          </li>
          <li>Build more maintainable and scalable component libraries</li>
          <li>Make your components more robust against future requirements</li>
          <li>Reduce the risk of introducing bugs in existing code</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Bad Example (Violating OCP)</h2>
        <p>
          This Alert component violates OCP because adding a new alert type
          requires modifying the component's code:
        </p>
        <CodeHighlighter
          title="Alert.jsx"
          language="jsx"
          code={ocpBadExample}
        />
        <p>
          <strong>Problem:</strong> Every time a new alert type is needed (like
          "warning"), we must modify the Alert component by adding a new
          condition. This violates OCP because the component is not closed for
          modification.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Good Example (Following OCP)</h2>
        <p>Here's a refactored version that follows OCP:</p>
        <CodeHighlighter
          title="Alert.jsx (Refactored)"
          language="jsx"
          code={ocpGoodExample}
        />
        <p>
          <strong>Why is this better?</strong>
        </p>
        <ul>
          <li>
            The base <code>Alert</code> component is now closed for modification
          </li>
          <li>
            But it's open for extension - we can create new alert types without
            changing it
          </li>
          <li>
            Adding a new alert type just means creating a new component, not
            modifying existing ones
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>OCP Implementation Strategies in React</h2>
        <ul>
          <li>
            <strong>Component composition</strong> - Build smaller components
            that can be combined in different ways
          </li>
          <li>
            <strong>Higher-Order Components (HOCs)</strong> - Create functions
            that take a component and return an enhanced version
          </li>
          <li>
            <strong>Render props</strong> - Use props whose values are functions
            to share code between components
          </li>
          <li>
            <strong>Custom Hooks</strong> - Extract and share stateful logic
            between components
          </li>
          <li>
            <strong>Props for configuration</strong> - Design components that
            can be configured via props instead of internal logic
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Continue to other SOLID principles:</p>
        <ul>
          <li>
            <Link to="/designPattern/SRP">Single Responsibility Principle</Link>
          </li>
          <li>
            <Link to="/designPattern/LSP">Liskov Substitution Principle</Link>
          </li>
          <li>
            <Link to="/designPattern/ISP">Interface Segregation Principle</Link>
          </li>
          <li>
            <Link to="/designPattern/DIP">Dependency Inversion Principle</Link>
          </li>
        </ul>
      </div>
    </WorkshopWrapper>
  );
};

export default OCP;
