import React from 'react'
import { motion } from "framer-motion"

export default function FramerComponent() {
  return (
    <div>
      <div className='absolute inset-0 w-full h-full flex ' 
           style={{ placeContent: "center", alignItems: 'start' }}>  

        <motion.h1 className="heading" 
          style={{
            fontFamily: "grapenut",
            fontSize: "6rem",
            fontWeight: 900,
          }}>
          Framer motion
        </motion.h1>

        <motion.div className="div" 
          initial={{ x: "100vw" }}  // Start from the right side of the viewport
          animate={{ x: "-12%" }} // Animate to the left side of the viewport
          transition={{ duration: 2 ,repeat:Infinity,repeatType:"mirror",repeatDelay:0.2}} 
          style={{
            width: "6rem",
            height: "6rem",
            backgroundColor: "blue"
          }}>
        </motion.div>
      </div>
    </div>
  )
}
