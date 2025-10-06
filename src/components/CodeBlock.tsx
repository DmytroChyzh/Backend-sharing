import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  className = '', 
  language = 'text' 
}) => {
  return (
    <div className={`code-scroll ${className}`}>
      <pre className="mono text-sm md:text-base p-4 md:p-6 bg-gray-900/80 rounded-lg overflow-x-auto whitespace-pre">
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
