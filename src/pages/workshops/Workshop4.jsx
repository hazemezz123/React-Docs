import React, { useReducer, createContext } from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const Workshop4 = () => {
  const reducerCode = `// src/App.js
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}

export default App;`;

  const contextCode = `// src/App.js
import React from 'react';
import Employee from './Employee';

const user = { name: 'Mohamed' };
const city = { name: 'Mansoura' };

export const UserContext = React.createContext();
export const CityContext = React.createContext();

export default function App() {
  return (
    <div>
      <UserContext.Provider value={user}>
        <CityContext.Provider value={city}>
          <Employee />
        </CityContext.Provider>
      </UserContext.Provider>
    </div>
  );
}`;

  const employeeCode = `// src/Employee.js
import React, { useContext } from 'react';
import { UserContext, CityContext } from './App';

export default function Employee() {
  const user = useContext(UserContext);
  const city = useContext(CityContext);

  return (
    <h1>
      {user.name} From: {city.name}
    </h1>
  );
}`;

  const countProviderCode = `// src/CountProvider.jsx
import React, { useState, createContext } from 'react';

export const CountContext = createContext();

export const CountStore = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
};

export default function CountProvider({ children }) {
  return (
    <CountContext.Provider value={CountStore()}>
      {children}
    </CountContext.Provider>
  );
}`;

  const dataFetchingCode = `// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="text-center py-5 row">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`;

  // Demo components
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // Context demo
  const UserContext = createContext();
  const CityContext = createContext();

  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Workshop 4: Advanced State Management</h1>

      <div className="workshop-description">
        <p>
          This workshop covers advanced state management techniques in React.
          You'll learn how to use useReducer for complex state logic, share
          state between components with useContext, and fetch data from APIs
          using useEffect.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>Completed Workshops 1-3</li>
          <li>
            Understanding of React components, props, and basic state management
          </li>
          <li>Familiarity with JavaScript ES6 features</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Using useReducer for Complex State</h2>
        <p>
          The <code>useReducer</code> hook is an alternative to{" "}
          <code>useState</code> for managing complex state logic. It's
          especially useful when the next state depends on the previous state.
        </p>
        <CodeHighlighter
          title="Counter with useReducer"
          language="jsx"
          code={reducerCode}
        />
        <div className="demo-container">
          <p>Count: {state.count}</p>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment
          </button>
          <button
            className="btn btn-secondary me-2"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Sharing State with useContext</h2>
        <p>
          The <code>useContext</code> hook allows you to share state between
          components without prop drilling. It's useful for global state that
          many components need to access.
        </p>
        <CodeHighlighter
          title="App.js with Context"
          language="jsx"
          code={contextCode}
        />
        <CodeHighlighter
          title="Employee.js using Context"
          language="jsx"
          code={employeeCode}
        />
        <div className="demo-container">
          <UserContext.Provider value={{ name: "Mohamed", role: "Developer" }}>
            <CityContext.Provider value={{ name: "Mansoura" }}>
              <div className="card p-3">
                <h3>Mohamed</h3>
                <p>From: Mansoura</p>
                <p>Role: Developer</p>
              </div>
            </CityContext.Provider>
          </UserContext.Provider>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Creating a Context Provider Component</h2>
        <p>
          You can create a dedicated provider component to manage state and
          provide it to your components.
        </p>
        <CodeHighlighter
          title="CountProvider.jsx"
          language="jsx"
          code={countProviderCode}
        />
        <p>
          This pattern allows you to encapsulate state management logic in a
          provider component and make it available to any component in your
          application.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Data Fetching with useEffect</h2>
        <p>
          The <code>useEffect</code> hook is perfect for handling side effects
          like data fetching.
        </p>
        <CodeHighlighter
          title="Data Fetching with useEffect"
          language="jsx"
          code={dataFetchingCode}
        />
        <div className="demo-container">
          <div className="alert alert-info">
            <p>
              This example would fetch posts from the JSONPlaceholder API and
              display them. For demonstration purposes, we're not making the
              actual API call here.
            </p>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Sample Post Title</h5>
              <p className="card-text">
                This is a sample post body that would be fetched from the API.
              </p>
            </div>
          </div>
        </div>
        <p>To use this example, you'll need to install Axios:</p>
        <CodeHighlighter
          title="Terminal"
          language="bash"
          code="npm install axios"
        />
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Now that you've learned about advanced state management, you can:</p>
        <ul>
          <li>Combine useReducer and useContext for global state management</li>
          <li>Create custom hooks to reuse state logic</li>
          <li>Implement more complex data fetching patterns</li>
          <li>Learn about client-side routing with React Router</li>
        </ul>
        <p>
          Continue to <Link to="/workshops/5">Workshop 5</Link> to learn about
          routing with React Router.
        </p>
      </div>
    </div>
  );
};

export default Workshop4;
