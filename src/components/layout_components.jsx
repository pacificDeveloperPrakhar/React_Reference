import React, { useState } from 'react';
import { AnimatePresence, motion, transform } from 'framer-motion';
import { duration } from '@mui/material';

export default function LayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:"100vw" }}>
      <motion.div 
        layout  // Using the layout prop to animate the layout change
        onClick={() => setIsExpanded(!isExpanded)} // Toggle expanded state on click
        style={{
          width: isExpanded ? 300 : 150, // Change the width based on expanded state
          height: 150,
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          cursor: 'pointer'
        }}
      >
        <motion.h2 layout="position">{isExpanded ? 'Expanded' : 'Click to Expand'}</motion.h2>

      </motion.div>
    </div>
  );
}
