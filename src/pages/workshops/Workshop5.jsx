import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const Workshop5 = () => {
  const homeCode = `// src/Home.js
import React from 'react';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;`;

  const aboutCode = `// src/About.js
import React from 'react';

function About() {
  return <h2>About Page</h2>;
}

export default About;`;

  const contactCode = `// src/Contact.js
import React from 'react';

function Contact() {
  return <h2>Contact Page</h2>;
}

export default Contact;`;

  const appCode = `// src/App.js
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

export default App;`;

  const installCode = `npm install react-router-dom`;

  // Demo components
  const Home = () => <h2>Home Page</h2>;
  const About = () => <h2>About Page</h2>;
  const Contact = () => <h2>Contact Page</h2>;

  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Workshop 5: Routing with React Router</h1>

      <div className="workshop-description">
        <p>
          This workshop demonstrates how to implement client-side routing in
          React applications using React Router. You'll learn how to create
          multiple pages, set up navigation, and handle route parameters.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>Completed Workshops 1-4</li>
          <li>Understanding of React components and state management</li>
          <li>Basic knowledge of web routing concepts</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Installing React Router</h2>
        <p>To add React Router to your project, run the following command:</p>
        <CodeHighlighter title="Terminal" language="bash" code={installCode} />
      </div>

      <div className="workshop-section">
        <h2>Creating Page Components</h2>
        <p>First, let's create some simple page components:</p>
        <CodeHighlighter title="Home.js" language="jsx" code={homeCode} />
        <CodeHighlighter title="About.js" language="jsx" code={aboutCode} />
        <CodeHighlighter title="Contact.js" language="jsx" code={contactCode} />
      </div>

      <div className="workshop-section">
        <h2>Setting Up React Router</h2>
        <p>Now, let's set up React Router in our App component:</p>
        <CodeHighlighter
          title="App.js with React Router"
          language="jsx"
          code={appCode}
        />
        <p>
          This sets up a basic navigation with three routes: Home, About, and
          Contact.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Live Demo</h2>
        <p>Here's a simple demonstration of React Router:</p>
        <div className="demo-container">
          <nav className="nav nav-pills mb-3">
            <ul className="nav-link">Home</ul>
            <ul className="nav-link">About</ul>
            <ul className="nav-link">Contact</ul>
          </nav>

          <div className="p-3 border rounded">
            <nav>
              <ul element={<Home />} />
              <ul element={<About />} />
              <ul element={<Contact />} />
            </nav>
          </div>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Key React Router Concepts</h2>
        <ul>
          <li>
            <strong>BrowserRouter</strong>: The router component that uses the
            HTML5 history API to keep your UI in sync with the URL.
          </li>
          <li>
            <strong>Routes</strong>: A container for Route components that
            defines what should be rendered when the URL matches a specific
            path.
          </li>
          <li>
            <strong>Route</strong>: Defines a mapping between a URL path and a
            component to render.
          </li>
          <li>
            <strong>Link</strong>: A component for navigation that renders an
            anchor tag but prevents the browser from reloading the page.
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Advanced Routing Techniques</h2>
        <h3>Route Parameters</h3>
        <p>You can define dynamic routes with parameters:</p>
        <CodeHighlighter
          title="Dynamic Routes"
          language="jsx"
          code={`<Route path="/users/:userId" element={<UserProfile />} />`}
        />
        <p>And access the parameters in your component:</p>
        <CodeHighlighter
          title="Accessing Route Parameters"
          language="jsx"
          code={`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}`}
        />

        <h3>Nested Routes</h3>
        <p>You can create nested routes for more complex UIs:</p>
        <CodeHighlighter
          title="Nested Routes"
          language="jsx"
          code={`<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>`}
        />

        <h3>Protected Routes</h3>
        <p>You can create protected routes that require authentication:</p>
        <CodeHighlighter
          title="Protected Routes"
          language="jsx"
          code={`function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

// Usage
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>`}
        />
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Now that you've learned about routing with React Router, you can:</p>
        <ul>
          <li>Create more complex routing structures</li>
          <li>Implement authentication and protected routes</li>
          <li>Use route parameters for dynamic content</li>
          <li>Explore other React Router features like navigation hooks</li>
        </ul>
        <p>
          Congratulations on completing all five workshops! You now have a solid
          foundation in React development.
        </p>
        <Link to="/workshops" className="btn btn-primary">
          Back to All Workshops
        </Link>
      </div>
    </div>
  );
};

export default Workshop5;
