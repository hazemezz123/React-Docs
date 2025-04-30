import React, { createContext, useContext, useState } from 'react';
import ExampleSection from '../components/ExampleSection';

// Example components
const ThemeContext = createContext('light');

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  
  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  
  return (
    <button style={buttonStyle}>
      I am styled based on the theme context
    </button>
  );
};

const ThemedBox = () => {
  const theme = useContext(ThemeContext);
  
  const boxStyle = {
    backgroundColor: theme === 'dark' ? '#555' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px'
  };
  
  return (
    <div style={boxStyle}>
      <p>This box is styled based on the theme context</p>
      <ThemedButton />
    </div>
  );
};

const ThemeDemo = () => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <p>Current theme: {theme}</p>
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
};

// User context example
const UserContext = createContext(null);

const UserProfile = () => {
  const user = useContext(UserContext);
  
  return (
    <div>
      <h4>User Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const UserSettings = () => {
  const user = useContext(UserContext);
  
  return (
    <div>
      <h4>User Settings</h4>
      <p>Account type: {user.accountType}</p>
      <UserProfile />
    </div>
  );
};

const UserDemo = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    accountType: 'Premium'
  });
  
  return (
    <UserContext.Provider value={user}>
      <div>
        <UserSettings />
        <button
          onClick={() => 
            setUser({
              ...user,
              accountType: user.accountType === 'Premium' ? 'Basic' : 'Premium'
            })
          }
        >
          Toggle Account Type
        </button>
      </div>
    </UserContext.Provider>
  );
};

const UseContextPage = () => {
  return (
    <div>
      <h1 className="page-title">useContext Hook</h1>
      <p className="page-description">
        The <code>useContext</code> hook allows you to subscribe to React context without introducing nesting.
        It provides a way to share values between components without having to explicitly pass props through every level.
      </p>
      
      <ExampleSection
        title="Theme Context"
        description="A theme context that provides styling information to nested components."
        language="jsx"
        code={`import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext('light');

function ThemedButton() {
  // Use the context value
  const theme = useContext(ThemeContext);
  
  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  
  return (
    <button style={buttonStyle}>
      I am styled based on the theme context
    </button>
  );
}

function ThemedBox() {
  const theme = useContext(ThemeContext);
  
  const boxStyle = {
    backgroundColor: theme === 'dark' ? '#555' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px'
  };
  
  return (
    <div style={boxStyle}>
      <p>This box is styled based on the theme context</p>
      <ThemedButton />
    </div>
  );
}

function ThemeApp() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <p>Current theme: {theme}</p>
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}`}
        demo={<ThemeDemo />}
      />
      
      <ExampleSection
        title="User Context"
        description="A user context that provides user information to nested components."
        language="jsx"
        code={`import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value of null
const UserContext = createContext(null);

function UserProfile() {
  const user = useContext(UserContext);
  
  return (
    <div>
      <h4>User Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function UserSettings() {
  const user = useContext(UserContext);
  
  return (
    <div>
      <h4>User Settings</h4>
      <p>Account type: {user.accountType}</p>
      <UserProfile />
    </div>
  );
}

function UserApp() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    accountType: 'Premium'
  });
  
  return (
    <UserContext.Provider value={user}>
      <div>
        <UserSettings />
        <button
          onClick={() => 
            setUser({
              ...user,
              accountType: user.accountType === 'Premium' ? 'Basic' : 'Premium'
            })
          }
        >
          Toggle Account Type
        </button>
      </div>
    </UserContext.Provider>
  );
}`}
        demo={<UserDemo />}
      />
    </div>
  );
};

export default UseContextPage;
