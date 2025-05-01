import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const ISP = () => {
  const ispBadExample = `function UserCard({ name, email, phone, address, onDelete }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}`;

  const ispGoodExample = `function UserInfo({ name, email, phone, address }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
        </div>
    );
}

function UserCardWithDelete({ user, onDelete }) {
    return (
        <div>
            <UserInfo {...user} />
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Interface Segregation Principle (ISP)</h1>

      <div className="workshop-description">
        <p>
          The Interface Segregation Principle states that no client should be
          forced to depend on methods it does not use. In React, this means
          components should not be forced to accept props they don't need, and
          interfaces should be broken down into smaller, specific ones.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Why Follow ISP in React?</h2>
        <p>Following ISP in React helps you:</p>
        <ul>
          <li>Create more focused and reusable components</li>
          <li>
            Avoid "prop drilling" unnecessary values through component trees
          </li>
          <li>
            Make components easier to test since they have fewer dependencies
          </li>
          <li>Improve performance by reducing unnecessary re-renders</li>
          <li>Make your component APIs cleaner and more intuitive</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Bad Example (Violating ISP)</h2>
        <p>
          This component violates ISP by forcing all users to provide an{" "}
          <code>onDelete</code>
          handler, even in read-only contexts:
        </p>
        <CodeHighlighter
          title="UserCard.jsx"
          language="jsx"
          code={ispBadExample}
        />
        <p>
          <strong>Problem:</strong> Every usage of <code>UserCard</code> must
          provide an
          <code>onDelete</code> handler, even in contexts where deletion isn't
          appropriate (like read-only views or public profiles). The component
          forces clients to depend on functionality they may not need.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Good Example (Following ISP)</h2>
        <p>
          Here's a refactored version that follows ISP by separating the
          interfaces:
        </p>
        <CodeHighlighter
          title="UserCard.jsx (Refactored)"
          language="jsx"
          code={ispGoodExample}
        />
        <p>
          <strong>Why is this better?</strong>
        </p>
        <ul>
          <li>
            <code>UserInfo</code> only requires the data it needs to display
            information
          </li>
          <li>
            <code>UserCardWithDelete</code> extends the functionality for cases
            where deletion is needed
          </li>
          <li>
            Clients that only need to display user information are not forced to
            provide delete handlers
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>ISP Implementation Strategies in React</h2>
        <ul>
          <li>
            <strong>Smaller, focused components</strong> - Break large
            interfaces into smaller ones
          </li>
          <li>
            <strong>Composition over configuration</strong> - Build complex UIs
            by composing simple components
          </li>
          <li>
            <strong>Optional props</strong> - Use default values to make props
            optional when possible
          </li>
          <li>
            <strong>Context for shared state</strong> - Use React Context to
            avoid passing props through intermediary components
          </li>
          <li>
            <strong>Render props and children</strong> - Let parent components
            control rendering behavior without prop overload
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
            <Link to="/designPattern/LSP">Liskov Substitution Principle</Link>
          </li>
          <li>
            <Link to="/designPattern/DIP">Dependency Inversion Principle</Link>
          </li>
        </ul>
      </div>
    </WorkshopWrapper>
  );
};

export default ISP;
