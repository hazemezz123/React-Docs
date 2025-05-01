import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaPuzzlePiece,
  FaObjectGroup,
  FaLayerGroup,
  FaSitemap,
} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import "../../style/Workshop.css";

const DesignPattern = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const solidPrinciples = [
    {
      name: "SRP (Single Responsibility Principle)",
      path: "/designPattern/SRP",
      description:
        "A class should have only one reason to change, meaning it should have only one job or responsibility.",
    },
    {
      name: "OCP (Open/Closed Principle)",
      path: "/designPattern/OCP",
      description:
        "Software entities should be open for extension but closed for modification.",
    },
    {
      name: "LSP (Liskov Substitution Principle)",
      path: "/designPattern/LSP",
      description:
        "Objects should be replaceable with instances of their subtypes without altering program correctness.",
    },
    {
      name: "ISP (Interface Segregation Principle)",
      path: "/designPattern/ISP",
      description:
        "Many client-specific interfaces are better than one general-purpose interface.",
    },
    {
      name: "DIP (Dependency Inversion Principle)",
      path: "/designPattern/DIP",
      description:
        "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
    },
  ];

  const otherPatterns = [
    {
      id: 1,
      title: "Factory & Singleton Patterns",
      icon: <FaPuzzlePiece />,
      description:
        "Learn how to implement object creation patterns in React, including factory functions for dynamic component creation and Context API as a singleton for global state management.",
      path: "/designPattern/factoryAndSingleton",
      type: "Creational Patterns",
    },
    {
      id: 2,
      title: "Adapter & Composite Patterns",
      icon: <FaLayerGroup />,
      description:
        "Explore structural patterns that help transform data between incompatible interfaces and build complex component hierarchies from simpler building blocks.",
      path: "/designPattern/adapterAndComposite",
      type: "Structural Patterns",
    },
    {
      id: 3,
      title: "Template Method Pattern",
      icon: <FaSitemap />,
      description:
        "Learn how to define a skeleton of an algorithm in a method, deferring some steps to subclasses while maintaining the algorithm's structure.",
      path: "/designPattern/templateMethod",
      type: "Behavioral Patterns",
    },
  ];

  return (
    <div className={`workshops-container ${isDark ? "dark" : ""}`}>
      <h1 className="workshops-heading">React Design Patterns</h1>
      <p className="workshops-description">
        Explore comprehensive guides on design patterns that will help you write
        cleaner, more maintainable React code. These patterns represent best
        practices developed by experienced developers to solve common design
        problems in software development.
      </p>

      <section className="design-pattern-section">
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2>SOLID Principles</h2>
        </div>
        <p className="section-description">
          The SOLID principles are fundamental design principles for
          object-oriented programming that make software designs more
          understandable, flexible, and maintainable.
        </p>
        <div className="principles-grid">
          {solidPrinciples.map((principle, index) => (
            <div key={index} className="principle-card">
              <h3>{principle.name}</h3>
              <p>{principle.description}</p>
              <Link to={principle.path} className="workshop-link">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="design-pattern-section">
        <div className="section-header">
          <FaObjectGroup className="section-icon" />
          <h2>Other Design Patterns</h2>
        </div>
        <p className="section-description">
          Beyond SOLID principles, these design patterns provide reusable
          solutions to common problems in software design, categorized as
          creational, structural, and behavioral patterns.
        </p>
        <div className="patterns-grid">
          {otherPatterns.map((pattern) => (
            <div key={pattern.id} className="pattern-card">
              <div className="pattern-card-header">
                <span className="pattern-icon">{pattern.icon}</span>
                <div>
                  <h3>{pattern.title}</h3>
                  <span className="pattern-type">{pattern.type}</span>
                </div>
              </div>
              <p>{pattern.description}</p>
              <Link to={pattern.path} className="workshop-link">
                Explore Pattern
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesignPattern;
