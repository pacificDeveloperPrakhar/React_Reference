import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import React from "react";

function ExampleComponent() {
  // Create a motion value for the x position
  const x = useMotionValue(0);

  // Create transformations to change colors and gradient angle based on the x value
  const color1 = useTransform(x, [-200, 0, 200], ["#ff6699", "#ffcc66", "#6699ff"]);
  const color2 = useTransform(x, [-200, 0, 200], ["#ffcc66", "#66ffcc", "#ff6699"]);
  const angle = useTransform(x, [-200, 200], [0, 180]);

  // Use a motion template to create a string template for the background gradient
  const background = useMotionTemplate`linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <motion.div
      style={{
        x, // Bind the motion value to the x position
        background, // Use the template for background
        width: 300,
        height: 300,
        margin: 50,
        borderRadius: 10
      }}
      drag="x" // Make the element draggable on the x-axis
    />
  );
}

export default ExampleComponent;
