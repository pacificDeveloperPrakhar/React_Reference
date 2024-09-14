import { useRef, useState } from "react";
import { useAnimationFrame, useMotionValue } from "framer-motion";

function RotatingOnHover() {
  const ref = useRef(null);
  const isHovered=useRef(false) // Track the current rotation angle
  const rotation=useRef(0)
  useAnimationFrame((time,delta) => {
    if (isHovered.current) {
      const newRotation = rotation.current + time * 0.0005; // Calculate the new rotation based on time
      rotation.current=newRotation; // Update rotation state
      ref.current.style.transform = `rotate(${newRotation}deg)`; // Apply rotation
    }
  });

  const handleMouseEnter = () => {
    isHovered.current=true; // Start rotating on hover
  };

  const handleMouseLeave = () => {
    isHovered.current=false; // Stop rotating when mouse leaves
    // The rotation is saved to the state and applied on the next hover
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100px",
        height: "100px",
        background: "blue",
        transform: `rotate(${rotation.current}deg)`, // Apply the stored rotation angle
      }}
    />
  );
}

export default RotatingOnHover;
