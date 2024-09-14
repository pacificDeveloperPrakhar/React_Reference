import { useState ,useRef} from 'react';
import { motion } from 'framer-motion';
// on update can be used to monitor the values of the style field that changes during the animation
export default function OnUpdateCreativeExample() {
//   const [background, setBackground] = useState('lightblue');
  const background=useRef("lightblue")
//   const [values, setValues] = useState({ x: 0, opacity: 1 });
  const values=useRef({x:0,opacity:1})
  function handleStartAnimaiton(){
    console.log("animation has been started")
  }
  // onUpdate callback
  function handleUpdate(latest) {
    // Update the background color based on the x value
    const newColor = `rgb(${Math.abs(latest.x % 255)}, 100, 200)`;
    background.current=newColor

    // Set the latest values to display on the screen
    values.current.x=latest.x.toFixed(0);
    values.current.opacity=latest.opacity.toFixed(2);
    console.log(background,values)
  }

  return (
    <motion.div
      style={{
        height: '100vh',
        backgroundColor: background.current,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize: '2rem',
      }}
    >
      {/* Display the real-time motion values */}
      <div>
        X: {values.current.x}, Opacity: {values.current.opacity}
      </div>

      {/* Animated div */}
      <motion.div
        animate={{ x: 200, opacity: 0.1 }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        onUpdate={handleUpdate}
        onAnimationStart={handleStartAnimaiton}
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'darkblue',
          borderRadius: 20,
        }}
      />
    </motion.div>
  );
}
