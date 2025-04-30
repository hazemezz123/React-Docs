import React, { useState, useMemo, useCallback } from 'react';
import ExampleSection from '../components/ExampleSection';

// Example components
const ExpensiveCalculationDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  
  // Expensive calculation that should be memoized
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000; i++) {
      // Simulate expensive operation
    }
    return num * 2;
  };
  
  // Memoize the result of expensiveCalculation
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  
  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText('');
    }
  };
  
  return (
    <div>
      <div>
        <h4>Expensive Calculation</h4>
        <p>Count: {count}</p>
        <p>Calculated Value: {calculatedValue}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h4>Todo List (won't trigger calculation)</h4>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Memoized object demo
const MemoizedObjectDemo = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);
  
  // Without useMemo, this object would be recreated on every render
  const person = useMemo(() => {
    return { name, age };
  }, [name, age]);
  
  // Display the object reference to show it's stable
  const objectReference = JSON.stringify(person);
  
  return (
    <div>
      <p>Person: {person.name}, {person.age}</p>
      <p>Object Reference: {objectReference}</p>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button onClick={() => setAge(age + 1)}>Increment Age</button>
      </div>
    </div>
  );
};

// useCallback demo
const CallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  
  // useCallback is similar to useMemo but for functions
  const addTodo = useCallback(() => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText('');
    }
  }, [todos, text]);
  
  // This will show the function reference to demonstrate stability
  const functionReference = addTodo.toString().slice(0, 50) + '...';
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <div>
        <h4>Todo List with useCallback</h4>
        <p>Function Reference: {functionReference}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UseMemoPage = () => {
  return (
    <div>
      <h1 className="page-title">useMemo and useCallback Hooks</h1>
      <p className="page-description">
        The <code>useMemo</code> hook memoizes expensive calculations so they are only recomputed when dependencies change.
        The <code>useCallback</code> hook is similar but for functions, preventing unnecessary re-renders of child components.
      </p>
      
      <ExampleSection
        title="Expensive Calculation with useMemo"
        description="Memoizes an expensive calculation to prevent it from running on every render."
        language="jsx"
        code={`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  
  // Expensive calculation that should be memoized
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000; i++) {
      // Simulate expensive operation
    }
    return num * 2;
  };
  
  // Memoize the result of expensiveCalculation
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // Only recalculate when count changes
  
  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText('');
    }
  };
  
  return (
    <div>
      <div>
        <h4>Expensive Calculation</h4>
        <p>Count: {count}</p>
        <p>Calculated Value: {calculatedValue}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h4>Todo List (won't trigger calculation)</h4>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}`}
        demo={<ExpensiveCalculationDemo />}
      />
      
      <ExampleSection
        title="Memoized Object with useMemo"
        description="Uses useMemo to prevent an object from being recreated on every render."
        language="jsx"
        code={`import React, { useState, useMemo } from 'react';

function MemoizedObject() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);
  
  // Without useMemo, this object would be recreated on every render
  const person = useMemo(() => {
    return { name, age };
  }, [name, age]); // Only recreate when name or age changes
  
  // Display the object reference to show it's stable
  const objectReference = JSON.stringify(person);
  
  return (
    <div>
      <p>Person: {person.name}, {person.age}</p>
      <p>Object Reference: {objectReference}</p>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button onClick={() => setAge(age + 1)}>Increment Age</button>
      </div>
    </div>
  );
}`}
        demo={<MemoizedObjectDemo />}
      />
      
      <ExampleSection
        title="useCallback for Memoized Functions"
        description="Uses useCallback to memoize a function to prevent unnecessary re-renders."
        language="jsx"
        code={`import React, { useState, useCallback } from 'react';

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  
  // useCallback is similar to useMemo but for functions
  const addTodo = useCallback(() => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText('');
    }
  }, [todos, text]); // Only recreate when todos or text changes
  
  // This will show the function reference to demonstrate stability
  const functionReference = addTodo.toString().slice(0, 50) + '...';
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <div>
        <h4>Todo List with useCallback</h4>
        <p>Function Reference: {functionReference}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}`}
        demo={<CallbackDemo />}
      />
    </div>
  );
};

export default UseMemoPage;
