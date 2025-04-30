import React from "react";
import "../style/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-content">
        <div className="about-image-container">
          <img
            src="https://avatars.githubusercontent.com/u/122169138?v=4"
            alt="Profile"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h2>Welcome to React Guide</h2>

          <p>
            Hello! I'm a passionate React developer and educator dedicated to
            helping others learn and master React development. With several
            years of experience in web development and a deep understanding of
            React's ecosystem, I've created this platform to share my knowledge
            with the community.
          </p>

          <p>
            My journey with React began in 2016, and I've been fascinated by its
            component-based architecture and the elegant way it handles state
            management. Over the years, I've worked on numerous projects ranging
            from small business websites to large-scale enterprise applications,
            all built with React.
          </p>

          <p>
            This website is designed to be a comprehensive guide to React,
            focusing on both the fundamental concepts and advanced techniques.
            The Hooks section covers all the essential React hooks with
            practical examples, while the Workshops section provides
            step-by-step tutorials for building real-world applications.
          </p>

          <h3>My Teaching Philosophy</h3>

          <p>
            I believe in learning by doing. That's why all the content on this
            site includes practical examples that you can try yourself. I also
            believe in explaining concepts clearly and thoroughly, breaking down
            complex ideas into digestible pieces.
          </p>

          <p>
            Whether you're just starting with React or looking to deepen your
            knowledge, I hope this guide helps you on your journey. Feel free to
            reach out if you have any questions or suggestions for improving the
            content.
          </p>

          <div className="about-contact">
            <h3>Get in Touch</h3>
            <p>Email: example@reactguide.com</p>
            <p>Twitter: @reactguide</p>
            <p>GitHub: github.com/reactguide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
