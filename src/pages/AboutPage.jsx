import React, { useContext, useEffect } from "react";
import "../style/AboutPage.css";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaCode,
  FaEnvelope,
  FaLaptopCode,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaLaravel,
  FaGit,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className={`about-container ${theme === "dark" ? "dark" : ""}`}>
      <header className="about-header">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About React Guide
        </motion.h1>
        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your journey into React development starts here. Learn, build, and
          master React with our comprehensive guides and hands-on workshops.
        </motion.p>
      </header>

      <div className="about-hero">
        <motion.div
          className="profile-container"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/122169138?v=4"
              alt="Hazem Ezz"
              className="profile-image"
            />
          </div>
          <h2>Hazem Ezz</h2>
          <p className="profile-title">React Developer & Educator</p>
          <div className="social-links">
            <a
              href="https://github.com/hazemezz123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hazem-ezz-424498285/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557867570271"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.section
            className="about-section"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">My Story</h2>
            <p className="about-text">
              Hello! I'm Hazem, a passionate React developer with a love for
              creating intuitive, dynamic user interfaces. My journey in web
              development started with HTML and CSS, but I quickly fell in love
              with the component-based architecture and efficiency of React.
            </p>
            <p className="about-text">
              With several years of experience building React applications, I
              created this guide to share my knowledge and help others master
              React development through practical, hands-on learning. I believe
              the best way to learn is by doing, which is why this site focuses
              heavily on interactive examples and workshops.
            </p>
            <div className="skills-container">
              <span className="skill">
                <FaReact className="skill-icon react" /> React
              </span>
              <span className="skill">
                <FaJs className="skill-icon js" /> JavaScript
              </span>
              <span className="skill">
                <FaPhp className="skill-icon php" /> PHP
              </span>
              <span className="skill">
                <FaHtml5 className="skill-icon html" /> HTML5
              </span>
              <span className="skill">
                <FaCss3Alt className="skill-icon css" /> CSS3
              </span>
              <span className="skill">
                <FaNode className="skill-icon node" /> Node.js
              </span>
              <span className="skill">
                <FaLaravel className="skill-icon laravel" /> Laravel
              </span>
              <span className="skill">
                <FaGit className="skill-icon git" /> Git
              </span>
              <span className="skill">
                <FaGithub className="skill-icon github" /> GitHub
              </span>
            </div>
          </motion.section>

          <motion.section
            className="about-section"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="section-title">About React Guide</h2>
            <p className="about-text">
              React Guide is a comprehensive learning platform designed to take
              you from React basics to advanced concepts through detailed
              explanations and practical exercises.
            </p>
            <p className="about-text">
              My goal is to make React accessible to everyone, regardless of
              their prior experience. The site is organized into sections
              covering React hooks, complete workshops for building real
              applications, and deep dives into React's core concepts.
            </p>
            <div className="quote-box">
              <blockquote>
                "The best way to learn is by building something that excites
                you."
              </blockquote>
            </div>
          </motion.section>

          <motion.section
            className="about-section"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <motion.div className="project-card" variants={fadeInUp}>
                <div className="project-image">
                  <div className="project-overlay">
                    <FaReact className="project-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">PectoScan</h3>
                  <p className="project-desc">
                    A React.js application that scans food products and
                    determines expiration dates using machine learning
                    algorithms.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">TensorFlow.js</span>
                    <span className="project-tag">Firebase</span>
                  </div>
                  <a href="#" className="project-link">
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>

              <motion.div className="project-card" variants={fadeInUp}>
                <div className="project-image">
                  <div className="project-overlay">
                    <FaLaptopCode className="project-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Dern-Support IT Solutions</h3>
                  <p className="project-desc">
                    A responsive website for an IT support company featuring
                    service listings, ticket system, and client testimonials.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Express</span>
                  </div>
                  <a href="#" className="project-link">
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>

              <motion.div className="project-card" variants={fadeInUp}>
                <div className="project-image">
                  <div className="project-overlay">
                    <FaCode className="project-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Scooter Rental Website</h3>
                  <p className="project-desc">
                    A React application for an electric scooter rental service
                    in Egypt with booking system, maps integration, and payment
                    processing.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Google Maps API</span>
                    <span className="project-tag">Stripe</span>
                  </div>
                  <a href="#" className="project-link">
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="about-section education-section"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <h2 className="section-title">Teaching Philosophy</h2>
            <div className="education-container">
              <div className="education-item">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-content">
                  <h3>Learning by Doing</h3>
                  <p>
                    I believe the most effective learning happens when you build
                    real projects. That's why every concept is accompanied by
                    practical examples you can try yourself.
                  </p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-icon">
                  <FaCode />
                </div>
                <div className="education-content">
                  <h3>Clear Explanations</h3>
                  <p>
                    Complex concepts are broken down into simple, digestible
                    pieces with visual aids and step-by-step instructions to
                    ensure complete understanding.
                  </p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-icon">
                  <FaReact />
                </div>
                <div className="education-content">
                  <h3>Progressive Learning</h3>
                  <p>
                    Tutorials start with the basics and gradually introduce more
                    advanced concepts, allowing you to build confidence and
                    skills at your own pace.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="contact-card"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-text">
              Have questions about React or suggestions for improving this
              guide? I'd love to hear from you!
            </p>
            <div className="contact-items">
              <a href="mailto:hazemezz988@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>hazemezz988@gmail.com</span>
              </a>
              <a
                href="https://github.com/hazemezz123"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub className="contact-icon" />
                <span>github.com/hazemezz123</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hazem-ezz-424498285/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin className="contact-icon" />
                <span>Hazem Ezz</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
