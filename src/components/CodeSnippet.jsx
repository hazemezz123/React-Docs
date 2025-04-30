import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ title, language, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet-container">
      <div className="code-snippet-header">
        <span className="code-snippet-title">{title}</span>
        <button className="copy-button" onClick={copyToClipboard}>
          {copied ? (
            <>
              <span role="img" aria-label="check">
                ✓
              </span>{" "}
              Copied!
            </>
          ) : (
            <>
              <span role="img" aria-label="clipboard">
                📋
              </span>{" "}
              Copy
            </>
          )}
        </button>
      </div>
      <div className="code-snippet-content">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, borderRadius: "0 0 8px 8px" }}
          showLineNumbers={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
