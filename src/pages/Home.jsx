import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import "../style/Workshop.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron bg-light p-5 rounded mb-5">
        <h1 className="display-4">React Learning Hub</h1>
        <p className="lead">
          Welcome to the comprehensive guide to React! This interactive guide
          provides examples, explanations, and live demos for React Hooks and
          practical workshop applications.
        </p>
        <hr className="my-4" />
        <p>
          Choose a section below to start learning, or use the navigation menu
          to explore specific topics.
        </p>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">React Hooks</h2>
              <p className="card-text">
                Learn about React Hooks with interactive examples and detailed
                explanations. Each hook is presented with practical use cases
                and live demos.
              </p>
              <Link to="/usestate" className="btn btn-primary">
                Explore Hooks
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">React Workshops</h2>
              <p className="card-text">
                Practical workshops covering everything from setting up a React
                project to advanced state management and routing. Each workshop
                includes multiple applications.
              </p>
              <Link to="/workshops" className="btn btn-primary">
                Explore Workshops
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title mb-4">React Hooks</h2>
      <div className="hooks-grid">
        <div className="hook-card">
          <h2>useState</h2>
          <p>Manage state in functional components</p>
          <Link to="/usestate" className="hook-link">
            Learn useState →
          </Link>
        </div>

        <div className="hook-card">
          <h2>useEffect</h2>
          <p>Handle side effects in functional components</p>
          <Link to="/useeffect" className="hook-link">
            Learn useEffect →
          </Link>
        </div>

        <div className="hook-card">
          <h2>useContext</h2>
          <p>Access context values in functional components</p>
          <Link to="/usecontext" className="hook-link">
            Learn useContext →
          </Link>
        </div>

        <div className="hook-card">
          <h2>useReducer</h2>
          <p>Manage complex state logic in functional components</p>
          <Link to="/usereducer" className="hook-link">
            Learn useReducer →
          </Link>
        </div>

        <div className="hook-card">
          <h2>useRef</h2>
          <p>Access and persist values across renders</p>
          <Link to="/useref" className="hook-link">
            Learn useRef →
          </Link>
        </div>

        <div className="hook-card">
          <h2>useMemo</h2>
          <p>Memoize expensive calculations for performance</p>
          <Link to="/usememo" className="hook-link">
            Learn useMemo →
          </Link>
        </div>
      </div>

      <h2 className="section-title mb-4 mt-5">React Workshops</h2>
      <div className="workshops-grid">
        <div className="workshop-card">
          <h2>Workshop 1: Setting Up React</h2>
          <p>
            Learn how to set up a React project using create-react-app,
            including installing Node.js and npm.
          </p>
          <Link to="/workshops/1" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card">
          <h2>Workshop 2: Bootstrap in React</h2>
          <p>
            Integrate Bootstrap with React to create styled buttons, dynamic
            components with props, and card components.
          </p>
          <Link to="/workshops/2" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card">
          <h2>Workshop 3: Events & useState</h2>
          <p>
            Learn about event handling and state management using the useState
            hook in functional components.
          </p>
          <Link to="/workshops/3" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card">
          <h2>Workshop 4: Advanced State</h2>
          <p>
            Explore advanced state management techniques using useReducer,
            useContext, and data fetching with useEffect.
          </p>
          <Link to="/workshops/4" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card">
          <h2>Workshop 5: React Router</h2>
          <p>
            Implement client-side routing in your React applications using React
            Router.
          </p>
          <Link to="/workshops/5" className="workshop-link">
            Explore Workshop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
