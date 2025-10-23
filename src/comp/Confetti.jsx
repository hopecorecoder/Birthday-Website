// Confetti.jsx
import React, { useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  // Create reference setter for confetti
  const getInstance = (instance) => {
    refAnimationInstance.current = instance;
  };

  // Fire confetti burst from center
  const makeShot = (particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 0.5, y: 0.5 }, // middle of screen
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  const fire = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      gravity: 0.9,
    });
    makeShot(0.2, {
      spread: 60,
    });
    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 1.2,
    });
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.5,
    });
  };

  // fire once when mounted
  useEffect(() => {
    fire();
  }, );

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
