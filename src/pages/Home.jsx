import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import "../style/Workshop.css";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  useEffect(() => {
    // Add animation classes with delay to stagger the animations
    const animateElements = () => {
      document
        .querySelectorAll(".animate-on-load")
        .forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("animate-visible");
          }, 100 * index);
        });
    };

    animateElements();
  }, []);

  return (
    <div className={`home-container ${isDark ? "dark" : ""}`}>
      {/* Hero section with animation */}
      <div className="hero-section animate-on-load">
        <div className="hero-content">
          <h1 className="hero-title">React Learning GUIDE</h1>
          <p className="hero-subtitle">
            Welcome to the comprehensive guide to React! This interactive guide
            provides examples, explanations, and live demos for React Hooks and
            practical workshop applications.
          </p>
          <div className="hero-actions">
            <Link to="/usestate" className="hero-button primary">
              Start Learning <FaArrowRight className="icon-right" />
            </Link>
            <Link to="/about" className="hero-button secondary">
              About Us
            </Link>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="react-logo-container">
            <FaReact className="react-logo" />
          </div>
        </div>
      </div>

      {/* Enhanced feature cards section */}
      <div className="features-section">
        <div className="feature-card animate-on-load">
          <div className="feature-icon">
            <FaCode />
          </div>
          <div className="feature-content">
            <h2>React Hooks</h2>
            <p>
              Learn about React Hooks with interactive examples and detailed
              explanations. Each hook is presented with practical use cases.
            </p>
            <Link to="/usestate" className="feature-link">
              Explore Hooks <FaArrowRight className="icon-right" />
            </Link>
          </div>
        </div>

        <div className="feature-card animate-on-load">
          <div className="feature-icon">
            <FaLaptopCode />
          </div>
          <div className="feature-content">
            <h2>React Workshops</h2>
            <p>
              Practical workshops covering everything from setting up a React
              project to advanced state management and routing.
            </p>
            <Link to="/workshops" className="feature-link">
              Explore Workshops <FaArrowRight className="icon-right" />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="section-title mb-4 animate-on-load">React Hooks</h2>
      <div className="hooks-grid">
        <div className="hook-card animate-on-load">
          <h2>useState</h2>
          <p>Manage state in functional components</p>
          <Link to="/usestate" className="hook-link">
            Learn useState <FaArrowRight className="icon-right" />
          </Link>
        </div>

        <div className="hook-card animate-on-load">
          <h2>useEffect</h2>
          <p>Handle side effects in functional components</p>
          <Link to="/useeffect" className="hook-link">
            Learn useEffect <FaArrowRight className="icon-right" />
          </Link>
        </div>

        <div className="hook-card animate-on-load">
          <h2>useContext</h2>
          <p>Access context values in functional components</p>
          <Link to="/usecontext" className="hook-link">
            Learn useContext <FaArrowRight className="icon-right" />
          </Link>
        </div>

        <div className="hook-card animate-on-load">
          <h2>useReducer</h2>
          <p>Manage complex state logic in functional components</p>
          <Link to="/usereducer" className="hook-link">
            Learn useReducer <FaArrowRight className="icon-right" />
          </Link>
        </div>

        <div className="hook-card animate-on-load">
          <h2>useRef</h2>
          <p>Access and persist values across renders</p>
          <Link to="/useref" className="hook-link">
            Learn useRef <FaArrowRight className="icon-right" />
          </Link>
        </div>

        <div className="hook-card animate-on-load">
          <h2>useMemo</h2>
          <p>Memoize expensive calculations for performance</p>
          <Link to="/usememo" className="hook-link">
            Learn useMemo <FaArrowRight className="icon-right" />
          </Link>
        </div>
      </div>

      <h2 className="section-title mb-4 mt-5 animate-on-load">
        React Workshops
      </h2>
      <div className="workshops-grid">
        <div className="workshop-card animate-on-load">
          <div className="workshop-number">01</div>
          <h2>Setting Up React</h2>
          <p>
            Learn how to set up a React project using create-react-app,
            including installing Node.js and npm.
          </p>
          <Link to="/workshops/1" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card animate-on-load">
          <div className="workshop-number">02</div>
          <h2>Bootstrap in React</h2>
          <p>
            Integrate Bootstrap with React to create styled buttons, dynamic
            components with props, and card components.
          </p>
          <Link to="/workshops/2" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card animate-on-load">
          <div className="workshop-number">03</div>
          <h2>Events & useState</h2>
          <p>
            Learn about event handling and state management using the useState
            hook in functional components.
          </p>
          <Link to="/workshops/3" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card animate-on-load">
          <div className="workshop-number">04</div>
          <h2>Advanced State</h2>
          <p>
            Explore advanced state management techniques using useReducer,
            useContext, and data fetching with useEffect.
          </p>
          <Link to="/workshops/4" className="workshop-link">
            Explore Workshop
          </Link>
        </div>

        <div className="workshop-card animate-on-load">
          <div className="workshop-number">05</div>
          <h2>React Router</h2>
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
