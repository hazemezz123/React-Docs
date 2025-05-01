import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import reactLogo from "../logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const navRef = useRef(null);

  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/use")) return "hooks";
    if (path.startsWith("/workshops")) return "workshops";
    if (path === "/about") return "about";
    return "";
  };

  const activeSection = getActiveSection();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown("");
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown("");
  };

  // Toggle dropdown
  const toggleDropdown = (dropdown) => {
      setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  // Scroll to top when clicking a link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <Link to="/" className={styles.navbarLogo} onClick={scrollToTop}>
          <img
            src={reactLogo}
            alt="React Logo"
              className={styles.logoImage}
          />
            <span className={styles.logoText}>React Guide</span>
        </Link>
        </div>

        <ul
          className={`${styles.navMenu} ${
            isMenuOpen ? styles.navMenuActive : ""
          }`}
        >
          {/* Mobile theme toggle */}
          <button className={styles.mobileThemeToggle} onClick={toggleTheme}>
            <span>
              {theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </span>
            {theme === "light" ? (
              <FaMoon
                className={styles.mobileThemeToggleIcon}
                style={{ color: "#6a5acd" }}
              />
            ) : (
              <FaSun
                className={styles.mobileThemeToggleIcon}
                style={{ color: "#FFA500" }}
              />
            )}
          </button>

          <li className={styles.navItem}>
            <Link
              to="/"
              className={`${styles.navLink} ${
                activeSection === "home" ? styles.navLinkActive : ""
              }`}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>

          <li className={styles.navItem}>
            <span
              className={`${styles.navLink} ${
                activeSection === "hooks" ? styles.navLinkActive : ""
              }`}
              onClick={() => toggleDropdown("hooks")}
            >
              Hooks
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  activeDropdown === "hooks" ? styles.dropdownIconActive : ""
                }`}
              />
            </span>
            <div
              className={`${styles.dropdownContent} ${
                activeDropdown === "hooks" ? styles.dropdownVisible : ""
              }`}
            >
              <div className={styles.dropdownArrow}></div>
              <Link
                to="/usestate"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/usestate"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useState
              </Link>
              <Link
                to="/useeffect"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/useeffect"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useEffect
              </Link>
              <Link
                to="/usecontext"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/usecontext"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useContext
              </Link>
              <Link
                to="/usereducer"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/usereducer"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useReducer
              </Link>
              <Link
                to="/useref"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/useref"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useRef
              </Link>
              <Link
                to="/usememo"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/usememo"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                useMemo
              </Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <span
              className={`${styles.navLink} ${
                activeSection === "workshops" ? styles.navLinkActive : ""
              }`}
              onClick={() => toggleDropdown("workshops")}
            >
              Workshops
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  activeDropdown === "workshops"
                    ? styles.dropdownIconActive
                    : ""
                }`}
              />
            </span>
            <div
              className={`${styles.dropdownContent} ${
                activeDropdown === "workshops" ? styles.dropdownVisible : ""
              }`}
            >
              <div className={styles.dropdownArrow}></div>
              <Link
                to="/workshops"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                All Workshops
              </Link>
              <Link
                to="/workshops/1"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops/1"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                1: Setting Up React
              </Link>
              <Link
                to="/workshops/2"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops/2"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                2: Bootstrap in React
              </Link>
              <Link
                to="/workshops/3"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops/3"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                3: Events & useState
              </Link>
              <Link
                to="/workshops/4"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops/4"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                4: Advanced State
              </Link>
              <Link
                to="/workshops/5"
                className={`${styles.dropdownLink} ${
                  location.pathname === "/workshops/5"
                    ? styles.dropdownLinkActive
                    : ""
                }`}
                onClick={scrollToTop}
              >
                5: React Router
              </Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link
              to="/about"
              className={`${styles.navLink} ${
                activeSection === "about" ? styles.navLinkActive : ""
              }`}
              onClick={scrollToTop}
            >
              About me ?
            </Link>
          </li>
        </ul>

        <div className={styles.navbarRight}>
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
            className={`${styles.themeToggle} ${
              theme === "dark" ? styles.themeToggleActive : ""
            }`}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
            {theme === "light" ? (
              <FaMoon style={{ color: "#6a5acd" }} />
            ) : (
              <FaSun style={{ color: "#FFA500" }} />
            )}
        </button>

        {/* Mobile menu button */}
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <div
              className={`${styles.menuIconBar} ${
                isMenuOpen ? styles.menuIconBarFirst : ""
              }`}
          ></div>
          <div
              className={`${styles.menuIconBar} ${
                isMenuOpen ? styles.menuIconBarSecond : ""
              }`}
          ></div>
          <div
              className={`${styles.menuIconBar} ${
                isMenuOpen ? styles.menuIconBarLast : ""
              }`}
          ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
