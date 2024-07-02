// src/CodeEditor.js
import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css'; // Create and import CSS for styling

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
      />
      <Highlight
        theme={themes.vsDark}
        code={code}
        language="javascript"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
