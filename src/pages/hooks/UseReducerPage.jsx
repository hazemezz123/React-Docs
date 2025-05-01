import React, { useReducer, useState } from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
import HookWrapper from "../../components/HookWrapper";
import "../../style/WorkshopPage.css";

// Example components
const CounterDemo = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })} className="me-2">
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })} className="me-2">
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const TodoListDemo = () => {
  const [task, setTask] = useState("");

  const initialState = {
    todos: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a project", completed: false },
    ],
    nextId: 3,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          todos: [
            ...state.todos,
            { id: state.nextId, text: action.text, completed: false },
          ],
          nextId: state.nextId + 1,
        };
      case "toggle":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case "delete":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
        };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: "add", text: task });
      setTask("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          className="me-2"
        />
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "8px" }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: "8px",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "toggle", id: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "delete", id: todo.id })}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FormDemo = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    errors: {
      name: "",
      email: "",
      password: "",
    },
    isSubmitting: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "field":
        return {
          ...state,
          [action.field]: action.value,
          errors: {
            ...state.errors,
            [action.field]: "",
          },
        };
      case "validate":
        const errors = { name: "", email: "", password: "" };

        if (!state.name) errors.name = "Name is required";
        if (!state.email) errors.email = "Email is required";
        else if (!state.email.includes("@")) errors.email = "Email is invalid";
        if (!state.password) errors.password = "Password is required";
        else if (state.password.length < 6)
          errors.password = "Password must be at least 6 characters";

        return {
          ...state,
          errors,
          isSubmitting: Object.values(errors).every((error) => !error),
        };
      case "submit":
        return {
          ...state,
          isSubmitting: false,
        };
      case "reset":
        return initialState;
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "validate" });

    // If validation passes, proceed with form submission
    if (state.isSubmitting) {
      // Simulate API call
      setTimeout(() => {
        alert(`Form submitted with Name: ${state.name}, Email: ${state.email}`);
        dispatch({ type: "submit" });
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "field",
              field: "name",
              value: e.target.value,
            })
          }
          className="form-control"
        />
        {state.errors.name && (
          <div className="text-danger">{state.errors.name}</div>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "field",
              field: "email",
              value: e.target.value,
            })
          }
          className="form-control"
        />
        {state.errors.email && (
          <div className="text-danger">{state.errors.email}</div>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "field",
              field: "password",
              value: e.target.value,
            })
          }
          className="form-control"
        />
        {state.errors.password && (
          <div className="text-danger">{state.errors.password}</div>
        )}
      </div>

      <div className="mt-3">
        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          className="btn btn-secondary"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

const UseReducerPage = () => {
  return (
    <HookWrapper>
      <h1 className="workshop-title">useReducer Hook</h1>

      <div className="workshop-description">
        <p>
          The <code>useReducer</code> hook is an alternative to{" "}
          <code>useState</code> that helps manage complex state logic. It's
          especially useful when state transitions depend on the previous state
          or when you have multiple sub-values in your state.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Basic Counter</h2>
        <p>A simple counter implemented with useReducer instead of useState.</p>

        <CodeHighlighter
          title="Counter with useReducer"
          language="jsx"
          code={`import React, { useReducer } from 'react';

function Counter() {
  const initialState = { count: 0 };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      default:
        throw new Error('Unknown action');
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <CounterDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Todo List</h2>
        <p>
          A more complex example with a todo list that can add, toggle, and
          delete items.
        </p>

        <CodeHighlighter
          title="Todo List with useReducer"
          language="jsx"
          code={`import React, { useReducer, useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  
  const initialState = {
    todos: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a project', completed: false },
    ],
    nextId: 3,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {
          todos: [...state.todos, { id: state.nextId, text: action.text, completed: false }],
          nextId: state.nextId + 1,
        };
      case 'toggle':
        return {
          ...state,
          todos: state.todos.map(todo => 
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'delete':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id),
        };
      default:
        throw new Error('Unknown action');
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: 'add', text: task });
      setTask('');
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <TodoListDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Form with Validation</h2>
        <p>
          A form example that uses useReducer to manage form state and
          validation.
        </p>

        <CodeHighlighter
          title="Form with useReducer"
          language="jsx"
          code={`import React, { useReducer } from 'react';

function FormWithValidation() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    errors: {
      name: '',
      email: '',
      password: '',
    },
    isSubmitting: false,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'field':
        return {
          ...state,
          [action.field]: action.value,
          errors: {
            ...state.errors,
            [action.field]: '',
          },
        };
      case 'validate':
        const errors = { name: '', email: '', password: '' };
        
        if (!state.name) errors.name = 'Name is required';
        if (!state.email) errors.email = 'Email is required';
        else if (!state.email.includes('@')) errors.email = 'Email is invalid';
        if (!state.password) errors.password = 'Password is required';
        else if (state.password.length < 6) errors.password = 'Password must be at least 6 characters';
        
        return {
          ...state,
          errors,
          isSubmitting: Object.values(errors).every(error => !error),
        };
      case 'submit':
        return {
          ...state,
          isSubmitting: false,
        };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action');
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'validate' });
    
    // If validation passes, proceed with form submission
    if (state.isSubmitting) {
      // Simulate API call
      setTimeout(() => {
        alert(\`Form submitted with Name: \${state.name}, Email: \${state.email}\`);
        dispatch({ type: 'submit' });
      }, 1000);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={e => dispatch({
            type: 'field',
            field: 'name',
            value: e.target.value,
          })}
        />
        {state.errors.name && <div>{state.errors.name}</div>}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={state.email}
          onChange={e => dispatch({
            type: 'field',
            field: 'email',
            value: e.target.value,
          })}
        />
        {state.errors.email && <div>{state.errors.email}</div>}
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={e => dispatch({
            type: 'field',
            field: 'password',
            value: e.target.value,
          })}
        />
        {state.errors.password && <div>{state.errors.password}</div>}
      </div>
      
      <div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </form>
  );
}`}
        />

        <div className="demo-container">
          <FormDemo />
        </div>
      </div>
    </HookWrapper>
  );
};

export default UseReducerPage;
