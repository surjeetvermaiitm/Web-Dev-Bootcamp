import React, { useRef, useEffect } from "react";
import "./Ripple.css";

function Ripple() {
  const rippleRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      // Create the ripple effect element
      const ripple = document.createElement("span");
      ripple.classList.add("ripple-effect");
      ripple.style.left = `${e.clientX - 15}px`;
      ripple.style.top = `${e.clientY - 15}px`;
      rippleRef.current.appendChild(ripple);
      console.log("clicked");

      // Remove the ripple effect after a short delay
      setTimeout(() => {
        rippleRef.current.removeChild(ripple);
      }, 500);
    }

    // Add event listener to the window object
    window.addEventListener("click", handleClick);

    // Remove event listener on cleanup

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="ripple-container" ref={rippleRef}>
      {" "}
      <h1>Ripple Effect App</h1>
      <p>Click anywhere on screen to get Ripple Effect</p>
    </div>
  );
}

export default Ripple;
