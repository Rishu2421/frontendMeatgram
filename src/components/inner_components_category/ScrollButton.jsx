import React from "react";

function ScrollButton({ items }) {
  if (!items || items.length === 0) {
    return null; // If items is undefined or empty, return null or handle accordingly
  }

  return (
    <div className="scroll-buttons">
      {items.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </div>
  );
}

export default ScrollButton;
