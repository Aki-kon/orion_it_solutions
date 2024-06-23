import React from "react";
import anime from "animejs/lib/anime.es.js";
const TestComponent = () => {
  const Load = () => {
    anime({
      targets: ".staggering-grid-demo",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
      loop: true,
    });
  };
  window.addEventListener("load", () => {
    Load();
  });
  return (
    <>
      <div className="container">
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
      </div>
      <div className="container">
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
      </div>
      <div className="container">
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
        <div className="staggering-grid-demo"></div>
      </div>
    </>
  );
};

export default TestComponent;
