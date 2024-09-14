import { motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";

export const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      {/* Global Configuration using MotionConfig */}
      <MotionConfig
        transition={{ duration: 1 }}        // Set default transition for all children
        reducedMotion="user"                // Respect user's device setting for reduced motion
        nonce="random_nonce_string"         // Example nonce for Content Security Policy
      >
        <button onClick={() => setIsVisible(!isVisible)} style={{ marginBottom: "20px" }}>
          Toggle Visibility
        </button>

        {/* Motion component with global transition configuration */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}   // Initial state when the component is mounted
            animate={{ opacity: 1, scale: 1 }}     // Final state after animation
            exit={{ opacity: 0, scale: 0.8 }}      // State when the component is removed
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "lightcoral",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              color: "white",
            }}
          >
            I Fade In & Out!
          </motion.div>
        )}
      </MotionConfig>
    </div>
  );
};
