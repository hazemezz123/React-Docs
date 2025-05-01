import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const DIP = () => {
  const dipBadExample = `function DataFetcher() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}`;

  const dipGoodExample = `function DataDisplay({ fetchData }) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetchData().then(setData);
    }, [fetchData]);
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

// Usage with API
function App() {
    const fetchData = () => fetch("https://api.example.com/data").then(res => res.json());
    return <DataDisplay fetchData={fetchData} />;
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Dependency Inversion Principle (DIP)</h1>

      <div className="workshop-description">
        <p>
          The Dependency Inversion Principle states that high-level modules
          should not depend on low-level modules. Both should depend on
          abstractions. In React, this means components should depend on
          interfaces (props, contexts) rather than concrete implementations.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Why Follow DIP in React?</h2>
        <p>Following DIP in React helps you:</p>
        <ul>
          <li>
            Create more reusable components that work with various data sources
          </li>
          <li>Make testing easier by allowing dependency injection</li>
          <li>Reduce coupling between components and external systems</li>
          <li>
            Support multiple implementations (API, local data, mock data)
            without changing components
          </li>
          <li>Create a more flexible application architecture</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Bad Example (Violating DIP)</h2>
        <p>
          This component directly depends on the implementation details of data
          fetching:
        </p>
        <CodeHighlighter
          title="DataFetcher.jsx"
          language="jsx"
          code={dipBadExample}
        />
        <p>
          <strong>Problem:</strong> <code>DataFetcher</code> directly depends on
          the fetch API and a specific URL. This makes it inflexible, hard to
          test, and difficult to reuse with different data sources.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Good Example (Following DIP)</h2>
        <p>Here's a refactored version that follows DIP:</p>
        <CodeHighlighter
          title="DataDisplay.jsx"
          language="jsx"
          code={dipGoodExample}
        />
        <p>
          <strong>Why is this better?</strong>
        </p>
        <ul>
          <li>
            The component depends on an abstraction (<code>fetchData</code>{" "}
            function) rather than a concrete implementation
          </li>
          <li>The data fetching implementation is injected through props</li>
          <li>We can easily reuse the component with different data sources</li>
          <li>Testing is simplified since we can inject mock data functions</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>DIP Implementation Strategies in React</h2>
        <ul>
          <li>
            <strong>Prop injection</strong> - Pass implementation details as
            props
          </li>
          <li>
            <strong>Custom hooks</strong> - Abstract implementation details
            behind custom hooks
          </li>
          <li>
            <strong>Context providers</strong> - Use React Context to provide
            implementations to component trees
          </li>
          <li>
            <strong>Render props</strong> - Allow parent components to control
            rendering logic
          </li>
          <li>
            <strong>Higher-Order Components</strong> - Wrap components with
            implementation details
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
            <Link to="/designPattern/ISP">Interface Segregation Principle</Link>
          </li>
        </ul>
      </div>
    </WorkshopWrapper>
  );
};

export default DIP;
