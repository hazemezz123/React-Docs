import React from 'react';
import CodeSnippet from './CodeSnippet';

const ExampleSection = ({ title, description, code, language, children, demoTitle }) => {
  return (
    <div className="example-section">
      <h2 className="example-title">{title}</h2>
      <p className="example-description">{description}</p>
      
      {code && (
        <CodeSnippet
          title={demoTitle || title}
          language={language || 'jsx'}
          code={code}
        />
      )}
      
      {children && (
        <div className="demo-container">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExampleSection;
