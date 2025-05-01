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

  // Navigation items data structure
  const navItems = [
    {
      id: "home",
      label: "Home",
      path: "/",
      type: "link",
    },
    {
      id: "hooks",
      label: "Hooks",
      type: "dropdown",
      items: [
        { label: "useState", path: "/usestate" },
        { label: "useEffect", path: "/useeffect" },
        { label: "useContext", path: "/usecontext" },
        { label: "useReducer", path: "/usereducer" },
        { label: "useRef", path: "/useref" },
        { label: "useMemo", path: "/usememo" },
      ],
    },
    {
      id: "workshops",
      label: "Workshops",
      type: "dropdown",
      items: [
        { label: "All Workshops", path: "/workshops" },
        { label: "1: Setting Up React", path: "/workshops/1" },
        { label: "2: Bootstrap in React", path: "/workshops/2" },
        { label: "3: Events & useState", path: "/workshops/3" },
        { label: "4: Advanced State", path: "/workshops/4" },
        { label: "5: React Router", path: "/workshops/5" },
      ],
    },
    {
      id: "designPattern",
      label: "Design Patterns",
      type: "dropdown",
      items: [
        { label: "All Design Patterns", path: "/designPattern" },
        {
          label: "SRP (Single Responsibility Principle)",
          path: "/designPattern/SRP",
        },
        { label: "OCP (Open/Closed Principle)", path: "/designPattern/OCP" },
        {
          label: "LSP (Liskov Substitution Principle)",
          path: "/designPattern/LSP",
        },
        {
          label: "ISP (Interface Segregation Principle)",
          path: "/designPattern/ISP",
        },
        {
          label: "DIP (Dependency Inversion Principle)",
          path: "/designPattern/DIP",
        },
        {
          label: "Factory & Singleton",
          path: "/designPattern/factoryAndSingleton",
        },
        {
          label: "Adapter & Composite",
          path: "/designPattern/adapterAndComposite",
        },
        { label: "Template Method", path: "/designPattern/templateMethod" },
      ],
    },
    {
      id: "about",
      label: "About me ?",
      path: "/about",
      type: "link",
    },
  ];

  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/use")) return "hooks";
    if (path.startsWith("/workshops")) return "workshops";
    if (path.startsWith("/designPattern")) return "designPattern";
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

  // Render dropdown content
  const renderDropdownContent = (item) => {
    return (
      <div
        className={`${styles.dropdownContent} ${
          activeDropdown === item.id ? styles.dropdownVisible : ""
        }`}
      >
        <div className={styles.dropdownArrow}></div>
        {item.items.map((dropdownItem, index) => (
          <Link
            key={index}
            to={dropdownItem.path}
            className={`${styles.dropdownLink} ${
              location.pathname === dropdownItem.path
                ? styles.dropdownLinkActive
                : ""
            }`}
            onClick={scrollToTop}
          >
            {dropdownItem.label}
          </Link>
        ))}
      </div>
    );
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

          {/* Navigation Items */}
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              {item.type === "link" ? (
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    activeSection === item.id ? styles.navLinkActive : ""
                  }`}
                  onClick={scrollToTop}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <span
                    className={`${styles.navLink} ${
                      activeSection === item.id ? styles.navLinkActive : ""
                    }`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.label}
                    <FaChevronDown
                      className={`${styles.dropdownIcon} ${
                        activeDropdown === item.id
                          ? styles.dropdownIconActive
                          : ""
                      }`}
                    />
                  </span>
                  {renderDropdownContent(item)}
                </>
              )}
            </li>
          ))}
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
