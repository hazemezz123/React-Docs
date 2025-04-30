import React, { useReducer } from 'react';
import ExampleSection from '../components/ExampleSection';

// Example components
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const CounterDemo = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

// Todo list reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoDemo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'add', payload: text });
    setText('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            <span onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'delete', payload: todo.id })}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Form with useReducer
const formReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.field]: action.payload
      };
    case 'reset':
      return {
        name: '',
        email: '',
        message: ''
      };
    default:
      return state;
  }
};

const FormDemo = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = e => {
    dispatch({
      type: 'update',
      field: e.target.name,
      payload: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Form submitted with: ${JSON.stringify(formState)}`);
    dispatch({ type: 'reset' });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </form>
      <div>
        <h4>Form State:</h4>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </div>
    </div>
  );
};

const UseReducerPage = () => {
  return (
    <div>
      <h1 className="page-title">useReducer Hook</h1>
      <p className="page-description">
        The <code>useReducer</code> hook is an alternative to <code>useState</code> for managing complex state logic.
        It's especially useful when the next state depends on the previous state, or when you have multiple sub-values.
      </p>
      
      <ExampleSection
        title="Counter with useReducer"
        description="A counter that uses useReducer to manage state with actions."
        language="jsx"
        code={`import React, { useReducer } from 'react';

// Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`}
        demo={<CounterDemo />}
      />
      
      <ExampleSection
        title="Todo List with useReducer"
        description="A todo list that uses useReducer to manage adding, toggling, and deleting todos."
        language="jsx"
        code={`import React, { useReducer, useState } from 'react';

// Define the reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoList() {
  // Initialize useReducer with the reducer function and initial state
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'add', payload: text });
    setText('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            <span onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'delete', payload: todo.id })}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        demo={<TodoDemo />}
      />
      
      <ExampleSection
        title="Form with useReducer"
        description="A form that uses useReducer to manage multiple form fields."
        language="jsx"
        code={`import React, { useReducer } from 'react';

// Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.field]: action.payload
      };
    case 'reset':
      return {
        name: '',
        email: '',
        message: ''
      };
    default:
      return state;
  }
};

function Form() {
  // Initialize useReducer with the reducer function and initial state
  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = e => {
    dispatch({
      type: 'update',
      field: e.target.name,
      payload: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(\`Form submitted with: \${JSON.stringify(formState)}\`);
    dispatch({ type: 'reset' });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </form>
      <div>
        <h4>Form State:</h4>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </div>
    </div>
  );
}`}
        demo={<FormDemo />}
      />
    </div>
  );
};

export default UseReducerPage;
