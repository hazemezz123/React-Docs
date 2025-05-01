import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const WorkshopWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className={`workshop-container ${isDark ? "dark" : ""}`}>
      {children}
    </div>
  );
};

export default WorkshopWrapper;
