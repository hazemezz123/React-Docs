import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCode,
  FaBook,
  FaHome,
  FaInfo,
  FaEnvelope,
} from "react-icons/fa";
import reactLogo from "../logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <img
              src={reactLogo}
              alt="React Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>React Guide</span>
          </div>
          <p className={styles.footerDescription}>
            A comprehensive guide to learning React with practical examples,
            workshops, and detailed explanations of hooks and other React
            concepts.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/hazemezz123"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hazem-ezz-424498285/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557867570271"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLink}>
              <Link to="/" onClick={scrollToTop}>
                <FaHome /> Home
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/usestate" onClick={scrollToTop}>
                <FaCode /> Hooks
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/workshops" onClick={scrollToTop}>
                <FaBook /> Workshops
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/about" onClick={scrollToTop}>
                <FaInfo /> About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>React Hooks</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLink}>
              <Link to="/usestate" onClick={scrollToTop}>
                useState
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/useeffect" onClick={scrollToTop}>
                useEffect
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/usecontext" onClick={scrollToTop}>
                useContext
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/usereducer" onClick={scrollToTop}>
                useReducer
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/useref" onClick={scrollToTop}>
                useRef
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/usememo" onClick={scrollToTop}>
                useMemo
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <p className={styles.footerDescription}>
            Have questions about React or need help? Feel free to reach out!
          </p>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLink}>
              <a href="mailto:contact@reactguide.com">
                <FaEnvelope /> contact@reactguide.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          © {currentYear} React Guide. Created by{" "}
          <a
            href="https://github.com/hazemezz123"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hazem Ezz
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
