React Applications from Workshop-React_JS.pdf
This document contains all the React applications described in the "WorkShop-React_JS.pdf" file, organized by workshop. Each section includes the complete code for the applications, file structure, setup instructions, and dependencies. The applications cover topics such as setting up a React project, using Bootstrap for styling, handling events and state with useState, managing complex state with useReducer, sharing state with useContext, fetching data with useEffect, and implementing routing with React Router.
Prerequisites
To run these applications, ensure you have the following installed:

Node.js and npm: Download and install from nodejs.org.
A code editor (e.g., VS Code).
Terminal for running commands.

General Setup Instructions

Install Node.js and npm:
Download the installer from nodejs.org.
Run the installer, ensuring the npm package manager is selected.
Verify installation:node -v
npm -v




Create a React Project:
Run the following command to create a new React project:npx create-react-app my-react-project
cd my-react-project


Start the development server:npm start




Install Dependencies:
Specific dependencies (e.g., Bootstrap, React Router, Axios) will be listed in each workshop section.



Project Structure
Each application assumes a standard React project structure created by create-react-app:
my-react-project/
├── public/
│   ├── index.html
│   ├── images/ (for card images in Workshop 2)
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/ (for reusable components)
│   ├── CountProvider.jsx (for Workshop 4)
│   ├── Employee.js (for Workshop 4)
├── package.json

Workshop 1: Setting Up a React Project
Application: Basic React Project Setup
Description: This workshop covers installing Node.js, npm, and creating a React project using create-react-app.
Setup Instructions:

Follow the general setup instructions above to install Node.js, npm, and create a React project.
No additional dependencies are required.

File Structure:
my-react-project/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/App.js:
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;

src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Running the Application:

Navigate to the project directory:cd my-react-project


Start the development server:npm start


The application will open in your browser at http://localhost:3000, displaying "Welcome to React".

Workshop 2: Using Bootstrap in React
Application 1: Bootstrap Button
Description: A simple button styled with Bootstrap classes.
Dependencies:

Install Bootstrap:npm install bootstrap



File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

src/App.js:
import React from 'react';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


The application displays a Bootstrap-styled primary button.

Application 2: Dynamic Button Component with Props
Description: A reusable button component that accepts a label prop to display a dynamic message.
File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── ButtonComponent.js
│   ├── index.js

Code:
src/ButtonComponent.js:
import React from 'react';

function ButtonComponent({ label }) {
  return <button className="btn btn-primary mx-2">{label}</button>;
}

export default ButtonComponent;

src/App.js:
import React from 'react';
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent label="Click Me!" />
      <ButtonComponent label="Submit" />
    </div>
  );
}

export default App;

src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Running the Application:

Start the development server:npm start


The application displays two Bootstrap-styled buttons with different labels.

Application 3: Card Component with Props
Description: A reusable card component that displays a title, text, and image from the public/images/ folder using props.
Dependencies:

Ensure Bootstrap is installed (see Application 1).
Place image files (e.g., team-1.jpg, team-2.jpg, team-3.jpg, team-4.jpg) in the public/images/ folder.

File Structure:
my-react-project/
├── public/
│   ├── images/
│   │   ├── team-1.jpg
│   │   ├── team-2.jpg
│   │   ├── team-3.jpg
│   │   ├── team-4.jpg
├── src/
│   ├── App.js
│   ├── Card.js
│   ├── index.js

Code:
src/Card.js:
import React from 'react';

function Card({ title, text, image }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        className="card-img-top"
        alt="card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;

src/App.js:
import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-around">
        <Card title="Card 1" text="This is the first card." image="team-1.jpg" />
        <Card title="Card 2" text="This is the second card." image="team-2.jpg" />
        <Card title="Card 3" text="This is the third card." image="team-3.jpg" />
        <Card title="Card 4" text="This is the fourth card." image="team-4.jpg" />
      </div>
    </div>
  );
}

export default App;

src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Running the Application:

Ensure the images are in public/images/.
Start the development server:npm start


The application displays four Bootstrap-styled cards with different titles, texts, and images.

Workshop 3: Handling Events and State with useState
Application 1: Basic Event Handling
Description: A button that logs a message to the console when clicked.
File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/App.js:
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const myFunc = () => console.log('Welcome to Events');
  return (
    <div>
      <button className="btn btn-primary" onClick={myFunc}>
        Button 1
      </button>
      <button className="btn btn-dark">Button 2</button>
    </div>
  );
}

Running the Application:

Start the development server:npm start


Clicking "Button 1" logs "Welcome to Events" to the console.

Application 2: Counter Component
Description: A counter that increments when a button is clicked, using useState.
File Structure:
my-react-project/
├── src/
│   ├── Counter.js
│   ├── App.js
│   ├── index.js

Code:
src/Counter.js:
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

src/App.js:
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Clicking the "Increment" button increases the count displayed.

Application 3: Toggle Content
Description: A component that toggles the visibility of content using a boolean state.
File Structure:
my-react-project/
├── src/
│   ├── ToggleContent.js
│   ├── App.js
│   ├── index.js

Code:
src/ToggleContent.js:
import React, { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content is visible.</p>}
    </div>
  );
}

export default ToggleContent;

src/App.js:
import React from 'react';
import ToggleContent from './ToggleContent';

function App() {
  return (
    <div className="App">
      <ToggleContent />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Clicking the button toggles the visibility of the content.

Application 4: Signup Form
Description: A form that manages user inputs (name and email) using useState.
File Structure:
my-react-project/
├── src/
│   ├── SignupForm.js
│   ├── App.js
│   ├── index.js

Code:
src/SignupForm.js:
import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={() => console.log(`Name: ${name}, Email: ${email}`)}>
        Submit
      </button>
    </div>
  );
}

export default SignupForm;

src/App.js:
import React from 'react';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <SignupForm />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Enter name and email, then click "Submit" to log the values to the console.

Application 5: Like Button
Description: A button that increments a like counter using useState.
File Structure:
my-react-project/
├── src/
│   ├── LikeButton.js
│   ├── App.js
│   ├── index.js

Code:
src/LikeButton.js:
import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
}

export default LikeButton;

src/App.js:
import React from 'react';
import LikeButton from './LikeButton';

function App() {
  return (
    <div className="App">
      <LikeButton />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Clicking the "Like" button increments the like count.

Application 6: Shopping Cart Item
Description: A component that manages the quantity of an item in a shopping cart.
File Structure:
my-react-project/
├── src/
│   ├── CartItem.js
│   ├── App.js
│   ├── index.js

Code:
src/CartItem.js:
import React, { useState } from 'react';

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Item Name</h2>
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
      <span> {quantity} </span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default CartItem;

src/App.js:
import React from 'react';
import CartItem from './CartItem';

function App() {
  return (
    <div className="App">
      <CartItem />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Use the "+" and "-" buttons to adjust the quantity (minimum 1).

Application 7: Theme Toggler
Description: A component that toggles between light and dark modes.
File Structure:
my-react-project/
├── src/
│   ├── ThemeToggle.js
│   ├── App.js
│   ├── index.js

Code:
src/ThemeToggle.js:
import React, { useState } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        background: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#333',
      }}
    >
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;

src/App.js:
import React from 'react';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Click the button to toggle between light and dark modes.

Workshop 4: Advanced State Management
Application 1: Counter with useReducer
Description: A counter that uses useReducer to manage increment and decrement actions.
File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/App.js:
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}

export default App;

Running the Application:

Start the development server:npm start


Use the buttons to increment or decrement the count.

Application 2: Sharing State with useContext
Description: An application that shares user and city data between components using useContext.
File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── Employee.js
│   ├── index.js

Code:
src/App.js:
import React from 'react';
import Employee from './Employee';

const user = { name: 'Mohamed' };
const city = { name: 'Mansoura' };

export const UserContext = React.createContext();
export const CityContext = React.createContext();

export default function App() {
  return (
    <div>
      <UserContext.Provider value={user}>
        <CityContext.Provider value={city}>
          <Employee />
        </CityContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

src/Employee.js:
import React, { useContext } from 'react';
import { UserContext, CityContext } from './App';

export default function Employee() {
  const user = useContext(UserContext);
  const city = useContext(CityContext);

  return (
    <h1>
      {user.name} From: {city.name}
    </h1>
  );
}

Running the Application:

Start the development server:npm start


The application displays "Mohamed From: Mansoura".

Application 3: Counter with Context
Description: A counter that uses useContext to share state and actions across components.
File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── CountProvider.jsx
│   ├── index.js

Code:
src/CountProvider.jsx:
import React, { useState, createContext } from 'react';

export const CountContext = createContext();

export const CountStore = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
};

export default function CountProvider({ children }) {
  return (
    <CountContext.Provider value={CountStore()}>
      {children}
    </CountContext.Provider>
  );
}

src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountProvider from './CountProvider';

ReactDOM.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

src/App.js:
import React, { useContext } from 'react';
import { CountContext } from './CountProvider';

export default function App() {
  const { count, increment, decrement, reset } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

Running the Application:

Start the development server:npm start


Use the buttons to increment, decrement, or reset the count.

Application 4: Data Fetching with useEffect
Description: An application that fetches and displays posts from an API using useEffect.
Dependencies:

Install Axios:npm install axios



File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/App.js:
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="text-center py-5 row">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

Running the Application:

Start the development server:npm start


The application fetches and displays a list of posts from the JSONPlaceholder API.

Application 5: Single Post Fetching
Description: An application that fetches a single post based on an ID input.
Dependencies:

Ensure Axios is installed (see Application 4).

File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── index.js

Code:
src/App.js:
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState('');

  const getPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id || 1}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div className="text-center py-5 row">
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter post ID"
      />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

Running the Application:

Start the development server:npm start


Enter a post ID (e.g., 1) to fetch and display the corresponding post.

Workshop 5: Routing with React Router
Application: Multi-Page Navigation
Description: A single-page application with Home, About, and Contact pages using React Router.
Dependencies:

Install React Router:npm install react-router-dom



File Structure:
my-react-project/
├── src/
│   ├── App.js
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   ├── index.js

Code:
src/Home.js:
import React from 'react';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;

src/About.js:
import React from 'react';

function About() {
  return <h2>About Page</h2>;
}

export default About;

src/Contact.js:
import React from 'react';

function Contact() {
  return <h2>Contact Page</h2>;
}

export default Contact;

src/App.js:
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Running the Application:

Start the development server:npm start


Navigate between Home, About, and Contact pages using the links.

Notes

Code Fixes: Some code snippets in the PDF had syntax errors or incomplete sections (e.g., Workshop 4, Question 3). These were corrected to ensure functionality (e.g., fixing the CountProvider component syntax).
Images for Cards: For Workshop 2, Application 3, ensure you have the required images (team-1.jpg, team-2.jpg, etc.) in the public/images/ folder. You can use placeholder images if needed.
Running Multiple Applications: To test different applications, modify the src/App.js and other relevant files as needed, or create separate React projects for each workshop to avoid conflicts.
Dependencies: Ensure all dependencies (bootstrap, axios, react-router-dom) are installed in the project before running the applications.
React 18 Compatibility: The code uses ReactDOM.render, which is deprecated in React 18. For React 18, update index.js to use createRoot:import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);



Troubleshooting

Scripts Disabled Error: If you encounter a PowerShell error like "cannot be loaded because running scripts is disabled", run:Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


Missing Dependencies: If a module is not found, install it using npm install <module-name>.
Image Not Found: Ensure images are correctly placed in public/images/ and referenced using process.env.PUBLIC_URL.

This Markdown file provides all the React applications from the PDF, ready to be implemented in a React project. Copy this content into a .md file and follow the setup instructions to run each application.
