import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Load.css"; // Ensure you have the appropriate styles for the loader

function Loader() {
  useEffect(() => {
    // Fade out loader after 2.5s
    gsap.to(".loader-container", {
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      delay: 2.5,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelector(".loader-container").style.display = "none";
      },
    });
  }, []);

  return (
    <div className="loader-container">
      <div className="dots-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
