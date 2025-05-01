import React, { useState, useMemo, useCallback } from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
import HookWrapper from "../../components/HookWrapper";
import "../../style/WorkshopPage.css";

// Example components
const ExpensiveCalculationDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  // Expensive calculation that depends only on count
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // Simulate expensive calculation
    for (let i = 0; i < 1000000; i++) {}
    return num * 2;
  };

  // Memoize the calculation so it only re-runs when count changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  return (
    <div>
      <div>
        <h3>Expensive Calculation</h3>
        <p>Count: {count}</p>
        <p>Calculation result: {calculation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div className="mt-4">
        <h3>Todo List (Independent state)</h3>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo"
          className="me-2"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul style={{ marginTop: "10px" }}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      <p className="mt-3 text-muted">
        Notice that adding todos doesn't trigger the expensive calculation
        because it's memoized.
      </p>
    </div>
  );
};

const MemoizedComponentDemo = () => {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Style that depends on theme
  const themeStyles = useMemo(
    () => ({
      backgroundColor: darkTheme ? "#333" : "#FFF",
      color: darkTheme ? "#FFF" : "#333",
      padding: "20px",
      margin: "20px 0",
      borderRadius: "4px",
    }),
    [darkTheme]
  );

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)} className="me-2">
          Increment Count: {count}
        </button>
        <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      </div>

      <div style={themeStyles}>
        <p>This component uses a memoized style object.</p>
        <p>
          The style object is only recalculated when the theme changes, not when
          the count changes.
        </p>
      </div>
    </div>
  );
};

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  // Without useCallback, this function would be recreated on every render
  const addTodo = useCallback(() => {
    if (todoInput.trim()) {
      setTodos((t) => [...t, todoInput]);
      setTodoInput("");
    }
  }, [todoInput]);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <hr />

      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo"
          className="me-2"
        />
        <button onClick={addTodo}>Add Todo</button>

        <ul style={{ marginTop: "10px" }}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>

        <p className="mt-3 text-muted">
          The addTodo function is memoized with useCallback and only changes
          when todoInput changes.
        </p>
      </div>
    </div>
  );
};

const UseMemoPage = () => {
  return (
    <HookWrapper>
      <h1 className="workshop-title">useMemo & useCallback Hooks</h1>

      <div className="workshop-description">
        <p>
          The <code>useMemo</code> hook memoizes expensive calculations so they
          are only recomputed when dependencies change. The{" "}
          <code>useCallback</code> hook is similar but returns a memoized
          callback function instead of a value. Both help optimize performance
          by avoiding unnecessary recalculations or function recreations.
        </p>
      </div>

      <div className="workshop-section">
        <h2>useMemo for Expensive Calculations</h2>
        <p>
          Using useMemo to optimize expensive calculations and prevent
          unnecessary recalculations.
        </p>

        <CodeHighlighter
          title="Expensive Calculation Example"
          language="jsx"
          code={`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Expensive calculation that depends only on count
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // Simulate expensive calculation
    for (let i = 0; i < 1000000; i++) {}
    return num * 2;
  };

  // Memoize the calculation so it only re-runs when count changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  return (
    <div>
      <div>
        <h3>Expensive Calculation</h3>
        <p>Count: {count}</p>
        <p>Calculation result: {calculation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      
      <div>
        <h3>Todo List (Independent state)</h3>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      
      <p>
        Notice that adding todos doesn't trigger the expensive calculation
        because it's memoized.
      </p>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <ExpensiveCalculationDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>useMemo for Objects</h2>
        <p>
          Using useMemo to prevent unnecessary recreations of objects that would
          trigger re-renders.
        </p>

        <CodeHighlighter
          title="Memoized Style Object"
          language="jsx"
          code={`import React, { useState, useMemo } from 'react';

function MemoizedComponent() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Style that depends on theme
  const themeStyles = useMemo(() => ({
    backgroundColor: darkTheme ? '#333' : '#FFF',
    color: darkTheme ? '#FFF' : '#333',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '4px',
  }), [darkTheme]);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment Count: {count}
        </button>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          Toggle Theme
        </button>
      </div>
      
      <div style={themeStyles}>
        <p>This component uses a memoized style object.</p>
        <p>The style object is only recalculated when the theme changes, not when the count changes.</p>
      </div>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <MemoizedComponentDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>useCallback for Functions</h2>
        <p>
          Using useCallback to memoize functions and prevent unnecessary
          recreations.
        </p>

        <CodeHighlighter
          title="useCallback Example"
          language="jsx"
          code={`import React, { useState, useCallback } from 'react';

function CallbackComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Without useCallback, this function would be recreated on every render
  const addTodo = useCallback(() => {
    if (todoInput.trim()) {
      setTodos((t) => [...t, todoInput]);
      setTodoInput('');
    }
  }, [todoInput]);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      
      <hr />
      
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        
        <p>
          The addTodo function is memoized with useCallback and only changes
          when todoInput changes.
        </p>
      </div>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <UseCallbackDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>When to Use</h2>
        <p>Guidelines for when to use useMemo and useCallback:</p>

        <ul>
          <li>
            <strong>Use useMemo when:</strong>
            <ul>
              <li>
                You have expensive calculations that depend on specific props or
                state
              </li>
              <li>
                You need to create objects that would otherwise trigger
                re-renders in child components
              </li>
              <li>
                You need to ensure referential equality for objects passed to
                memoized components
              </li>
            </ul>
          </li>
          <li>
            <strong>Use useCallback when:</strong>
            <ul>
              <li>
                You pass callbacks to optimized child components that rely on
                reference equality
              </li>
              <li>You have event handlers that depend on props or state</li>
              <li>
                You need to ensure a function maintains the same reference
                across renders
              </li>
            </ul>
          </li>
          <li>
            <strong>Don't overuse these hooks:</strong>
            <ul>
              <li>
                For simple calculations or functions, the overhead of
                memoization may outweigh the benefits
              </li>
              <li>
                React's built-in optimizations are often sufficient for many use
                cases
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </HookWrapper>
  );
};

export default UseMemoPage;
