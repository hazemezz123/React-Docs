import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const SRP = () => {
  const srpBadExample = `function UserProfile({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <button onClick={() => alert("Logged out")}>Logout</button>
        </div>
    );
}`;

  const srpGoodExample = `function UserInfo({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}

function LogoutButton() {
    return <button onClick={() => alert("Logged out")}>Logout</button>;
}

function UserProfile({ user }) {
    return (
        <div>
            <UserInfo user={user} />
            <LogoutButton />
        </div>
    );
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Single Responsibility Principle (SRP)</h1>

      <div className="workshop-description">
        <p>
          The Single Responsibility Principle (SRP) states that a component
          should have only one reason to change. In React, this means each
          component should be responsible for a single piece of functionality.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Why Follow SRP in React?</h2>
        <p>Following SRP in React leads to:</p>
        <ul>
          <li>More maintainable components with focused functionality</li>
          <li>Easier testing since each component has one responsibility</li>
          <li>Better reusability across different parts of your application</li>
          <li>Clearer component interfaces and prop requirements</li>
          <li>Easier debugging when issues arise</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Bad Example (Violating SRP)</h2>
        <p>
          This component is doing too much: it displays user information AND
          handles logout functionality.
        </p>
        <CodeHighlighter
          title="UserProfile.jsx"
          language="jsx"
          code={srpBadExample}
        />
        <p>
          <strong>Problem:</strong> This component displays user details and
          handles logout functionality, mixing two separate responsibilities. If
          we need to change either the display logic or the logout
          functionality, we'd have to modify the same component.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Good Example (Following SRP)</h2>
        <p>Here's how we can refactor the component to respect SRP:</p>
        <CodeHighlighter
          title="UserProfile.jsx (Refactored)"
          language="jsx"
          code={srpGoodExample}
        />
        <p>
          <strong>Why is this better?</strong>
        </p>
        <ul>
          <li>
            <code>UserInfo</code> only handles displaying user data
          </li>
          <li>
            <code>LogoutButton</code> is responsible only for the logout action
          </li>
          <li>
            <code>UserProfile</code> combines them without mixing
            responsibilities
          </li>
        </ul>
        <p>
          Now if we need to change how user information is displayed, we only
          modify <code>UserInfo</code>. If we need to change the logout
          functionality, we only modify <code>LogoutButton</code>.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Practical SRP Tips</h2>
        <ul>
          <li>Separate data fetching logic from rendering components</li>
          <li>Create dedicated components for specific UI elements</li>
          <li>Extract complex logic into custom hooks</li>
          <li>Split large components into smaller, focused ones</li>
          <li>
            Create wrapper components for layout vs. components for behavior
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Continue to other SOLID principles:</p>
        <ul>
          <li>
            <Link to="/designPattern/OCP">Open/Closed Principle</Link>
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

export default SRP;
