import React,{useEffect,useState} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
export default function Unmounting() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
      <div> 
      <button className='' style={{
          fontFamily:"grapenut"
    }}
    onClick={()=>setIsExpanded(!isExpanded)}>click here</button>
    <AnimatePresence>
    {isExpanded&&<motion.div className="div" 
    initial={{width:0,height:150}}
    animate={{
        width:200
      }}
      transition={{
          duration:0.2,
          type:"spring",
          damping:11,
          stiffness:90
      }}
      exit={{
          width:0
      }}
      style={{
          margin:20,
          backgroundColor:"lightblue",
          transformOrigin:"left",
      }}>
    </motion.div>}
</AnimatePresence></div>
  )
}
