import React, { useState } from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
import HookWrapper from "../../components/HookWrapper";
import "../../style/WorkshopPage.css";

// Example components
const CounterDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

const ToggleDemo = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <p>This content can be toggled.</p>}
    </div>
  );
};

const FormDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

const UseStatePage = () => {
  return (
    <HookWrapper>
      <h1 className="workshop-title">useState Hook</h1>

      <div className="workshop-description">
        <p>
          The <code>useState</code> hook allows you to add state to functional
          components. It returns a stateful value and a function to update it.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Basic Counter</h2>
        <p>
          A simple counter that increments and decrements a value using
          useState.
        </p>

        <CodeHighlighter
          title="Basic Counter"
          language="jsx"
          code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <CounterDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Toggle Visibility</h2>
        <p>
          A component that toggles the visibility of content using a boolean
          state.
        </p>

        <CodeHighlighter
          title="Toggle Visibility"
          language="jsx"
          code={`import React, { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content can be toggled.</p>}
    </div>
  );
}`}
        />

        <div className="demo-container">
          <ToggleDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Form with Object State</h2>
        <p>A form that manages multiple input fields using an object state.</p>

        <CodeHighlighter
          title="Form with Object State"
          language="jsx"
          code={`import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
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

export default UseStatePage;
