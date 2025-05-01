import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../style/WorkshopPage.css";

const CodeSnippet = ({ title, language, code }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="code-snippet">
      <div className="code-snippet-header">
        <div className="code-snippet-title">{title}</div>
        <div className="code-snippet-lang">{language}</div>
      </div>
      <div className="code-snippet-content">
        <pre>{code}</pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
