import React, { useRef, useState, useEffect } from 'react';
import ExampleSection from '../components/ExampleSection';

// Example components
const FocusInputDemo = () => {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

const PreviousValueDemo = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  const prevCount = prevCountRef.current;
  
  return (
    <div>
      <p>Current: {count}, Previous: {prevCount !== undefined ? prevCount : 'None'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const StopwatchDemo = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(time => time + 1);
      }, 10);
    }
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);
  
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handleStop = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  const formatTime = () => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div>
      <p>{formatTime()}</p>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const UseRefPage = () => {
  return (
    <div>
      <h1 className="page-title">useRef Hook</h1>
      <p className="page-description">
        The <code>useRef</code> hook creates a mutable reference that persists across renders.
        It's commonly used to access DOM elements directly, store previous values, or hold mutable values
        that don't trigger re-renders when changed.
      </p>
      
      <ExampleSection
        title="Focus Input Element"
        description="Uses useRef to get a reference to an input element and focus it programmatically."
        language="jsx"
        code={`import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref to store the input DOM element
  const inputRef = useRef(null);
  
  const focusInput = () => {
    // Access the current property to get the DOM element
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
        demo={<FocusInputDemo />}
      />
      
      <ExampleSection
        title="Track Previous Value"
        description="Uses useRef to keep track of a previous state value."
        language="jsx"
        code={`import React, { useRef, useState, useEffect } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  // Create a ref to store the previous count
  const prevCountRef = useRef();
  
  useEffect(() => {
    // Update the ref after render
    prevCountRef.current = count;
  }, [count]);
  
  const prevCount = prevCountRef.current;
  
  return (
    <div>
      <p>Current: {count}, Previous: {prevCount !== undefined ? prevCount : 'None'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        demo={<PreviousValueDemo />}
      />
      
      <ExampleSection
        title="Stopwatch with Interval Reference"
        description="Uses useRef to store an interval ID that needs to be cleaned up."
        language="jsx"
        code={`import React, { useRef, useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // Create a ref to store the interval ID
  const intervalRef = useRef(null);
  
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(time => time + 1);
      }, 10);
    }
    
    // Clean up the interval on unmount or when dependencies change
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);
  
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handleStop = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  const formatTime = () => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    
    return \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}.\${milliseconds.toString().padStart(2, '0')}\`;
  };
  
  return (
    <div>
      <p>{formatTime()}</p>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`}
        demo={<StopwatchDemo />}
      />
    </div>
  );
};

export default UseRefPage;
