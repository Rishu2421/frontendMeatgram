// ScrollButton.js
import React from 'react';

function ScrollButton({ items }) {
  return (
    <div className="scroll-button">
      {items.map((item, index) => (
        <a key={index} href={`#${item.id}`}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default ScrollButton;
