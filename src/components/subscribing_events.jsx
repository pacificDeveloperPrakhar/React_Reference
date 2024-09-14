import React from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';

console.log("here this is to see if things are working perfectly")
function ExampleComponent() {
  // Create a motion value for the x position
  const x = useMotionValue(0);

  // Use useTransform to interpolate x into color stops for the gradient
  const color1 = useTransform(x, [-200, 0, 200], ['#ff6699', '#ffff99', '#6699ff']);
  const color2 = useTransform(x, [-200, 0, 200], ['#ff9966', '#99ff99', '#6666ff']);

  const textContent = useTransform(x, [0, 200], ['X Position: 0', `X Position: ${x}`]);
  // Use useMotionTemplate to create a dynamic gradient background string
  const background = useMotionTemplate`linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;

  // Use useTransform to interpolate x into font size
  const fontSize = useTransform(x, [-200, 0, 200], ['12px', '24px', '36px']);

  // Manually format the value of x for display
  return (
    <motion.div
      style={{
        x, // Bind the motion value to the x position
        background: background, // Bind the dynamic gradient background
        fontSize, // Bind the dynamic font size
        width: 300,
        height: 300,
        margin: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      drag="x" // Make the element draggable on the x-axis
    >
      {textContent}
    </motion.div>
  );
}

export default ExampleComponent;
