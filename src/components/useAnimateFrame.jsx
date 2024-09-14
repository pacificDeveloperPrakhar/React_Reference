import * as React from "react";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function Component() {
  const ref = useRef(null);

  // Update the element's rotation on each animation frame
  useAnimationFrame((time, delta) => {
    // time is the total time elapsed, delta is the time between frames
    ref.current.style.transform = `rotateY(${time / 10}deg)`; // Slowing down rotation for visibility
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
      }}
    />
  );
}
