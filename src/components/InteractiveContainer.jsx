import React from 'react';
import '../InteractiveContainer.css';

const InteractiveContainer = ({ children }) => {
  return (
    <div className="interactive-container">
      {children}
    </div>
  );
};

export default InteractiveContainer;
