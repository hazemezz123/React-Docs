import React, { useRef, useState, useEffect } from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
import HookWrapper from "../../components/HookWrapper";
import "../../style/WorkshopPage.css";

// Example components
const FocusInputDemo = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput} className="ms-2">
        Focus Input
      </button>
    </div>
  );
};

const CountRenderDemo = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>This component has rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const PreviousValueDemo = () => {
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
      <p>Previous value: {prevValue.current}</p>
    </div>
  );
};

const UseRefPage = () => {
  return (
    <HookWrapper>
      <h1 className="workshop-title">useRef Hook</h1>

      <div className="workshop-description">
        <p>
          The <code>useRef</code> hook creates a mutable reference that persists
          across renders. It's commonly used to access DOM elements directly,
          store previous values, or keep any mutable value that doesn't trigger
          a re-render when changed.
        </p>
      </div>

      <div className="workshop-section">
        <h2>DOM Reference</h2>
        <p>Using useRef to access and manipulate DOM elements directly.</p>

        <CodeHighlighter
          title="Focus Input Example"
          language="jsx"
          code={`import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <FocusInputDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Tracking Render Count</h2>
        <p>
          Using useRef to track the number of times a component has rendered.
        </p>

        <CodeHighlighter
          title="Render Counter"
          language="jsx"
          code={`import React, { useState, useRef, useEffect } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>This component has rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <CountRenderDemo />
        </div>
      </div>

      <div className="workshop-section">
        <h2>Previous Value</h2>
        <p>
          Using useRef to store and access the previous value of a state
          variable.
        </p>

        <CodeHighlighter
          title="Previous Value Tracker"
          language="jsx"
          code={`import React, { useState, useRef, useEffect } from 'react';

function PreviousValue() {
  const [value, setValue] = useState("");
  const prevValue = useRef("");
  
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
      <p>Previous value: {prevValue.current}</p>
    </div>
  );
}`}
        />

        <div className="demo-container">
          <PreviousValueDemo />
        </div>
      </div>
    </HookWrapper>
  );
};

export default UseRefPage;
