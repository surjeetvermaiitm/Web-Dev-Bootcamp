import React, { useState } from "react";
import "./Ripple.css";

function Ripple() {
  //useState hook for managing the state
  const [ripples, setRipples] = useState([]);

  function handleClick(e) {
    // Create a new ripple effect
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      size: 20,
      opacity: 0.5,
    };

    // Add the new ripple effect to the state
    setRipples([...ripples, newRipple]);

    // Remove the ripple effect after a short delay
    setTimeout(() => {
      setRipples(ripples.slice(1));
    }, 500);
  }

  return (
    <div className="ripple-container" onClick={handleClick}>
      <h1>Ripple Effect App</h1>
      <p>Click anywhere on screen to get Ripple Effect</p>
      {/* render all available ripples in span */}
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple-effect"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: ripple.size,
            height: ripple.size,
            opacity: ripple.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default Ripple;
