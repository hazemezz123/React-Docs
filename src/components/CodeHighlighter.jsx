import React, { useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext } from "../context/ThemeContext";
import { FaCopy, FaCheck } from "react-icons/fa";
import "../style/WorkshopPage.css";

const CodeHighlighter = ({ title, language, code }) => {
  const { theme } = useContext(ThemeContext);
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  // Set the appropriate style based on theme
  const codeStyle = isDark ? dracula : oneLight;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-highlighter">
      <div className="code-highlighter-header">
        <div className="code-highlighter-title">{title}</div>
        <div className="code-highlighter-actions">
          <div className="code-highlighter-lang">{language}</div>
          <button
            className="code-copy-button"
            onClick={copyToClipboard}
            aria-label="Copy code to clipboard"
            title="Copy code to clipboard"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span className="code-copy-text">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={
          language === "jsx"
            ? "jsx"
            : language === "bash"
            ? "bash"
            : "javascript"
        }
        style={codeStyle}
        customStyle={{
          margin: 0,
          padding: "20px",
          borderRadius: "0 0 6px 6px",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
