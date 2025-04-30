import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import reactLogo from "../logo.svg";

// Navbar component with inline styles
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const navRef = useRef(null);

  // Update active section based on current path
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else if (location.pathname.startsWith("/use")) {
      setActiveSection("hooks");
    } else if (location.pathname.startsWith("/workshops")) {
      setActiveSection("workshops");
    } else if (location.pathname === "/about") {
      setActiveSection("about");
    }

    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown("");
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
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

  // Toggle dropdown on mobile
  const toggleDropdown = (dropdown) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
    }
  };

  // Scroll to top when clicking a link
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // CSS Styles
  const styles = {
    navbar: {
      backgroundColor: "#20232a",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: 0,
      borderBottom: "1px solid rgba(97, 218, 251, 0.2)",
      width: "100%",
    },
    navbarContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0.6rem 2rem",
      height: "70px",
      position: "relative",
    },
    navbarLogo: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      marginRight: "2rem",
      zIndex: 10,
      position: "absolute",
      left: "2rem",
    },
    logoImage: {
      height: "40px",
      animation: "logo-spin infinite 20s linear",
    },
    logoText: {
      fontSize: "1.3rem",
      fontWeight: 600,
      marginLeft: "0.7rem",
      color: "#61dafb",
      letterSpacing: "0.5px",
    },
    navMenu: {
      display: "flex",
      listStyle: "none",
      margin: "0 auto",
      padding: 0,
    },
    navMenuActive: {
      transform: "translateX(0)",
    },
    navItem: {
      position: "relative",
      margin: "0 0.8rem",
    },
    navLink: {
      color: "#e6e6e6",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: 500,
      padding: "0.6rem 1rem",
      borderRadius: "4px",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      letterSpacing: "0.3px",
    },
    navLinkActive: {
      color: "#61dafb",
      backgroundColor: "rgba(97, 218, 251, 0.12)",
      fontWeight: 600,
    },
    dropdownIcon: {
      fontSize: "0.7rem",
      marginLeft: "0.5rem",
      transition: "transform 0.3s ease",
    },
    dropdownContent: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%) translateY(10px)",
      backgroundColor: "#282c34",
      minWidth: "200px",
      borderRadius: "6px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      padding: "0.5rem 0",
      marginTop: "0.5rem",
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
      zIndex: 100,
      border: "1px solid rgba(97, 218, 251, 0.15)",
    },
    dropdownContentVisible: {
      opacity: 1,
      visibility: "visible",
      transform: "translateX(-50%) translateY(0)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
      border: "1px solid rgba(97, 218, 251, 0.3)",
    },
    dropdownArrow: {
      position: "absolute",
      top: "-8px",
      left: "50%",
      marginLeft: "-8px",
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "8px solid #282c34",
      zIndex: 101,
    },
    dropdownLinkHover: {
      backgroundColor: "rgba(97, 218, 251, 0.08)",
      color: "#61dafb",
      borderLeft: "3px solid #61dafb",
      transform: "translateX(3px)",
      boxShadow: "inset 0 0 10px rgba(97, 218, 251, 0.1)",
    },
    dropdownLink: {
      color: "#e6e6e6",
      textDecoration: "none",
      display: "block",
      padding: "0.7rem 1.2rem",
      transition: "all 0.25s ease",
      borderLeft: "3px solid transparent",
      fontSize: "0.95rem",
      position: "relative",
      overflow: "hidden",
    },
    dropdownLinkActive: {
      backgroundColor: "rgba(97, 218, 251, 0.12)",
      color: "#61dafb",
      borderLeft: "3px solid #61dafb",
      fontWeight: 600,
    },
    menuIcon: {
      display: "none",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "24px",
      height: "18px",
      cursor: "pointer",
      zIndex: 10,
      position: "absolute",
      right: "2rem",
    },
    menuIconBar: {
      width: "100%",
      height: "2px",
      backgroundColor: "#e6e6e6",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    menuIconBarOpen: {
      backgroundColor: "#61dafb",
    },
    menuIconBarFirstOpen: {
      transform: "translateY(8px) rotate(45deg)",
      backgroundColor: "#61dafb",
    },
    menuIconBarSecondOpen: {
      opacity: 0,
    },
    menuIconBarLastOpen: {
      transform: "translateY(-8px) rotate(-45deg)",
      backgroundColor: "#61dafb",
    },
  };

  // Media query styles for mobile
  const mobileStyles =
    window.innerWidth <= 768
      ? {
          menuIcon: {
            ...styles.menuIcon,
            display: "flex",
          },
          navMenu: {
            ...styles.navMenu,
            position: "fixed",
            top: "70px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 70px)",
            backgroundColor: "#20232a",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "1.5rem 0",
            transform: "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            zIndex: 999,
            overflowY: "auto",
          },
          navItem: {
            ...styles.navItem,
            width: "85%",
            margin: "0.4rem 0",
          },
          navLink: {
            ...styles.navLink,
            width: "100%",
            padding: "0.8rem 1rem",
            justifyContent: "center",
            borderRadius: "6px",
          },
          dropdownContent: {
            ...styles.dropdownContent,
            position: "static",
            width: "100%",
            transform: "none",
            boxShadow: "none",
            borderRadius: "6px",
            backgroundColor: "#282c34",
            marginTop: "0.4rem",
            padding: 0,
            maxHeight: 0,
            overflow: "hidden",
            opacity: 1,
            visibility: "hidden",
            transition: "max-height 0.3s ease, padding 0.3s ease",
            border: "none",
          },
          dropdownContentActive: {
            maxHeight: "500px",
            padding: "0.4rem 0",
            visibility: "visible",
          },
          dropdownLink: {
            ...styles.dropdownLink,
            padding: "0.7rem 1.2rem",
            textAlign: "center",
            borderLeft: "none",
            borderBottom: "1px solid rgba(97, 218, 251, 0.08)",
          },
          dropdownLinkActive: {
            ...styles.dropdownLinkActive,
            borderLeft: "none",
          },
        }
      : {};

  // Merge styles with mobile styles
  const mergedStyles = {
    ...styles,
    ...mobileStyles,
  };

  // Add keyframes and hover styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* Hover styles for dropdowns */
      @media (min-width: 769px) {
        .nav-item:hover .dropdown-content {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(-50%) translateY(0) !important;
        }

        .nav-item:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-content a:hover {
          background-color: rgba(97, 218, 251, 0.08) !important;
          color: #61dafb !important;
          border-left: 3px solid #61dafb !important;
          transform: translateX(3px) !important;
          box-shadow: inset 0 0 10px rgba(97, 218, 251, 0.1) !important;
        }

        .dropdown-content {
          animation: fadeInDropdown 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes fadeInDropdown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          }
        }
      }
    `;
    document.head.appendChild(styleSheet);

    // Add scroll to top behavior to all links
    const addScrollToTopToLinks = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (
          link.getAttribute("href") &&
          link.getAttribute("href").startsWith("/")
        ) {
          link.addEventListener("click", () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          });
        }
      });
    };

    // Call after a short delay to ensure all links are rendered
    setTimeout(addScrollToTopToLinks, 100);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <nav style={mergedStyles.navbar} ref={navRef}>
      <div style={mergedStyles.navbarContainer}>
        <Link to="/" style={mergedStyles.navbarLogo}>
          <img
            src={reactLogo}
            alt="React Logo"
            style={mergedStyles.logoImage}
          />
          <span style={mergedStyles.logoText}>React Guide</span>
        </Link>

        {/* Navigation links */}
        <ul
          style={{
            ...mergedStyles.navMenu,
            ...(isMenuOpen ? mergedStyles.navMenuActive : {}),
          }}
        >
          <li style={mergedStyles.navItem}>
            <Link
              to="/"
              style={{
                ...mergedStyles.navLink,
                ...(activeSection === "home" ? mergedStyles.navLinkActive : {}),
              }}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>

          <li style={mergedStyles.navItem} className="nav-item">
            <span
              style={{
                ...mergedStyles.navLink,
                ...(activeSection === "hooks"
                  ? mergedStyles.navLinkActive
                  : {}),
              }}
              onClick={() => toggleDropdown("hooks")}
            >
              Hooks
              <i style={mergedStyles.dropdownIcon} className="dropdown-icon">
                ▼
              </i>
            </span>
            <div
              className="dropdown-content"
              style={{
                ...mergedStyles.dropdownContent,
                ...(activeDropdown === "hooks"
                  ? mergedStyles.dropdownContentActive
                  : {}),
              }}
            >
              <div style={mergedStyles.dropdownArrow}></div>
              <Link
                to="/usestate"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/usestate"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
                onClick={scrollToTop}
              >
                useState
              </Link>
              <Link
                to="/useeffect"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/useeffect"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
                onClick={scrollToTop}
              >
                useEffect
              </Link>
              <Link
                to="/usecontext"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/usecontext"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                useContext
              </Link>
              <Link
                to="/usereducer"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/usereducer"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                useReducer
              </Link>
              <Link
                to="/useref"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/useref"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                useRef
              </Link>
              <Link
                to="/usememo"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/usememo"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                useMemo
              </Link>
            </div>
          </li>

          <li style={mergedStyles.navItem} className="nav-item">
            <span
              style={{
                ...mergedStyles.navLink,
                ...(activeSection === "workshops"
                  ? mergedStyles.navLinkActive
                  : {}),
              }}
              onClick={() => toggleDropdown("workshops")}
            >
              Workshops
              <i style={mergedStyles.dropdownIcon} className="dropdown-icon">
                ▼
              </i>
            </span>
            <div
              className="dropdown-content"
              style={{
                ...mergedStyles.dropdownContent,
                ...(activeDropdown === "workshops"
                  ? mergedStyles.dropdownContentActive
                  : {}),
              }}
            >
              <div style={mergedStyles.dropdownArrow}></div>
              <Link
                to="/workshops"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                All Workshops
              </Link>
              <Link
                to="/workshops/1"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops/1"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                1: Setting Up React
              </Link>
              <Link
                to="/workshops/2"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops/2"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                2: Bootstrap in React
              </Link>
              <Link
                to="/workshops/3"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops/3"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                3: Events & useState
              </Link>
              <Link
                to="/workshops/4"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops/4"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                4: Advanced State
              </Link>
              <Link
                to="/workshops/5"
                style={{
                  ...mergedStyles.dropdownLink,
                  ...(location.pathname === "/workshops/5"
                    ? mergedStyles.dropdownLinkActive
                    : {}),
                }}
              >
                5: React Router
              </Link>
            </div>
          </li>

          <li style={mergedStyles.navItem}>
            <Link
              to="/about"
              style={{
                ...mergedStyles.navLink,
                ...(activeSection === "about"
                  ? mergedStyles.navLinkActive
                  : {}),
              }}
              onClick={scrollToTop}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div style={mergedStyles.menuIcon} onClick={toggleMenu}>
          <div
            style={{
              ...mergedStyles.menuIconBar,
              ...(isMenuOpen ? mergedStyles.menuIconBarFirstOpen : {}),
            }}
          ></div>
          <div
            style={{
              ...mergedStyles.menuIconBar,
              ...(isMenuOpen ? mergedStyles.menuIconBarSecondOpen : {}),
            }}
          ></div>
          <div
            style={{
              ...mergedStyles.menuIconBar,
              ...(isMenuOpen ? mergedStyles.menuIconBarLastOpen : {}),
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
