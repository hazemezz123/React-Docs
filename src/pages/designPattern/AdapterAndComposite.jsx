import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const AdapterAndComposite = () => {
  const adapterPatternCode = `// Data from API comes in different format
const apiData = {
    user_name: "JohnDoe",
    user_email: "john@example.com"
};

// Convert data to fit the component
class UserAdapter {
    constructor(apiData) {
        this.name = apiData.user_name;
        this.email = apiData.user_email;
    }
}

// React component uses data in a new format
function UserInfo({ user }) {
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default function App() {
    const adaptedUser = new UserAdapter(apiData);
    return <UserInfo user={adaptedUser} />;
}`;

  const compositePatternCode = `import React from "react";

function Comment({ text, replies }) {
    return (
        <div style={{ marginLeft: "20px", marginTop: "10px" }}>
            <p>{text}</p>
            {replies && replies.map((reply, index) => (
                <Comment key={index} text={reply.text} replies={reply.replies} />
            ))}
        </div>
    );
}

const commentData = {
    text: "This is a main comment",
    replies: [
        {
            text: "This is a reply",
            replies: [
                { text: "This is a nested reply" }
            ]
        }
    ]
};

export default function App() {
    return (
        <div>
            <Comment text={commentData.text} replies={commentData.replies} />
        </div>
    );
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Adapter & Composite Patterns in React</h1>

      <div className="workshop-description">
        <p>
          Adapter and Composite are two structural design patterns that help
          organize objects to form larger structures. These patterns are
          particularly useful in React applications when dealing with data
          transformation and hierarchical structures.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Adapter Pattern</h2>
        <p>
          The Adapter pattern allows objects with incompatible interfaces to
          work together. It acts as a bridge between two incompatible
          interfaces. In React, we often use adapters to transform API data into
          a format our components can use.
        </p>

        <h3>Basic Adapter Pattern Example</h3>
        <p>
          In this example, we adapt API data that comes in a different format to
          match what our React component expects:
        </p>
        <CodeHighlighter
          title="UserAdapter.jsx"
          language="jsx"
          code={adapterPatternCode}
        />

        <h3>When to Use the Adapter Pattern</h3>
        <ul>
          <li>
            When working with APIs that return data in a format different from
            what your components expect
          </li>
          <li>
            When integrating with third-party libraries that have incompatible
            interfaces
          </li>
          <li>
            When you need to make existing components work with new or legacy
            code without modifying their source
          </li>
          <li>
            When maintaining backward compatibility with changing API responses
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Composite Pattern</h2>
        <p>
          The Composite pattern lets you compose objects into tree structures to
          represent hierarchies. It lets clients treat individual objects and
          compositions of objects uniformly. In React, this pattern is useful
          for building complex UIs with nested components.
        </p>

        <h3>Basic Composite Pattern Example</h3>
        <p>
          In this example, we create a Comment component that can contain nested
          replies, forming a tree structure:
        </p>
        <CodeHighlighter
          title="CommentSystem.jsx"
          language="jsx"
          code={compositePatternCode}
        />

        <h3>When to Use the Composite Pattern</h3>
        <ul>
          <li>
            When you need to represent hierarchical structures like menus,
            organization charts, or nested comments
          </li>
          <li>
            When clients should be able to ignore differences between
            compositions of objects and individual objects
          </li>
          <li>
            When you want to build complex UIs from simpler components in a
            tree-like structure
          </li>
          <li>
            When you need recursive composition in your UI (e.g., nested lists,
            folders, or organizational structures)
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Practice Exercise</h2>
        <p>
          Try implementing a file system browser using the Composite pattern,
          where files and folders share a common interface, but folders can
          contain other files and folders. Use the Adapter pattern to transform
          the file system data from an API into your component's expected
          format.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the Adapter and Composite patterns, continue
          to learn about:
        </p>
        <ul>
          <li>
            <Link to="/designPattern/factoryAndSingleton">
              Factory & Singleton Patterns
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

export default AdapterAndComposite;
