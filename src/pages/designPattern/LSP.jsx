import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const LSP = () => {
  const lspBadExample = `function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

function DisabledButton() {
    return <button disabled>Cannot Click</button>; // Missing onClick
}`;

  const lspGoodExample = `function Button({ label, onClick, disabled = false }) {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Liskov Substitution Principle (LSP)</h1>

      <div className="workshop-description">
        <p>
          The Liskov Substitution Principle states that objects of a superclass
          should be replaceable with objects of a subclass without affecting the
          correctness of the program. In React, this means child components
          should be able to replace their parent components without breaking the
          application.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Why Follow LSP in React?</h2>
        <p>Following LSP in React helps you:</p>
        <ul>
          <li>Create more consistent and predictable component hierarchies</li>
          <li>Make components more reliably interchangeable</li>
          <li>
            Build robust component libraries where specialized components can be
            used in place of base components
          </li>
          <li>Avoid surprising behaviors when swapping components</li>
          <li>
            Maintain backward compatibility as your component system evolves
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Bad Example (Violating LSP)</h2>
        <p>Here's an example of a component hierarchy that violates LSP:</p>
        <CodeHighlighter
          title="Button.jsx"
          language="jsx"
          code={lspBadExample}
        />
        <p>
          <strong>Problem:</strong> <code>DisabledButton</code> doesn't maintain
          the contract established by
          <code>Button</code>. It removes the <code>onClick</code>{" "}
          functionality, which can break expectations and cause errors if code
          expects all button components to handle clicks.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Good Example (Following LSP)</h2>
        <p>
          Here's a better approach that respects the Liskov Substitution
          Principle:
        </p>
        <CodeHighlighter
          title="Button.jsx (Refactored)"
          language="jsx"
          code={lspGoodExample}
        />
        <p>
          <strong>Why is this better?</strong>
        </p>
        <ul>
          <li>
            A single <code>Button</code> component handles both enabled and
            disabled states
          </li>
          <li>
            The <code>onClick</code> handler is always present, maintaining the
            interface contract
          </li>
          <li>
            The disabled state is controlled by a prop, not by completely
            changing the component interface
          </li>
        </ul>
        <p>
          With this approach, any code that expects a Button will work correctly
          whether the button is disabled or not, because the component maintains
          the same interface.
        </p>
      </div>

      <div className="workshop-section">
        <h2>LSP Implementation Strategies in React</h2>
        <ul>
          <li>
            <strong>Consistent props</strong> - Always maintain the same
            essential props in similar components
          </li>
          <li>
            <strong>Use composition</strong> - Build specialized components by
            composing base components
          </li>
          <li>
            <strong>Props forwarding</strong> - Use the spread operator to pass
            through unknown props
          </li>
          <li>
            <strong>Default behaviors</strong> - Provide sensible defaults for
            optional functionality
          </li>
          <li>
            <strong>Type checking</strong> - Use TypeScript or PropTypes to
            enforce component interfaces
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
            <Link to="/designPattern/OCP">Open/Closed Principle</Link>
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

export default LSP;
