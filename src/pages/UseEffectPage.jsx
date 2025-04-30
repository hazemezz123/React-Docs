import React, { useState, useEffect } from 'react';
import ExampleSection from '../components/ExampleSection';

// Example components
const DocumentTitleDemo = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'React App';
    };
  }, [count]);
  
  return (
    <div>
      <p>Click the button to update the document title.</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const TimerDemo = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);
  
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const FetchDataDemo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder for demo purposes
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

const UseEffectPage = () => {
  return (
    <div>
      <h1 className="page-title">useEffect Hook</h1>
      <p className="page-description">
        The <code>useEffect</code> hook lets you perform side effects in functional components.
        It serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>,
        and <code>componentWillUnmount</code> in React class components.
      </p>
      
      <ExampleSection
        title="Document Title Effect"
        description="Updates the document title whenever the count changes."
        language="jsx"
        code={`import React, { useState, useEffect } from 'react';

function DocumentTitle() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'React App';
    };
  }, [count]);
  
  return (
    <div>
      <p>Click the button to update the document title.</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
        demo={<DocumentTitleDemo />}
      />
      
      <ExampleSection
        title="Timer with Cleanup"
        description="A timer that starts, pauses, and resets, demonstrating useEffect cleanup."
        language="jsx"
        code={`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);
  
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`}
        demo={<TimerDemo />}
      />
      
      <ExampleSection
        title="Data Fetching"
        description="Fetches data from an API when the component mounts."
        language="jsx"
        code={`import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder for demo purposes
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}`}
        demo={<FetchDataDemo />}
      />
    </div>
  );
};

export default UseEffectPage;
