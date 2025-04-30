import React, { useState } from 'react';
import ExampleSection from '../components/ExampleSection';

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
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content can be toggled.</p>}
    </div>
  );
};

const FormDemo = () => {
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
};

const UseStatePage = () => {
  return (
    <div>
      <h1 className="page-title">useState Hook</h1>
      <p className="page-description">
        The <code>useState</code> hook allows you to add state to functional components. 
        It returns a stateful value and a function to update it.
      </p>
      
      <ExampleSection
        title="Basic Counter"
        description="A simple counter that increments and decrements a value using useState."
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
        demo={<CounterDemo />}
      />
      
      <ExampleSection
        title="Toggle Visibility"
        description="A component that toggles the visibility of content using a boolean state."
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
        demo={<ToggleDemo />}
      />
      
      <ExampleSection
        title="Form with Object State"
        description="A form that manages multiple input fields using an object state."
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
        demo={<FormDemo />}
      />
    </div>
  );
};

export default UseStatePage;
