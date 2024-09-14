import React,{useRef} from 'react';
import { useScroll, useMotionValueEvent, useMotionTemplate,useTransform ,motion} from 'framer-motion';

export default function StoryPage() {
  // Initialize the scrollY motion value using useScroll
  const containerRef=useRef(null)
  const { scrollY,scrollYProgress } = useScroll({
    container:containerRef,
    layoutEffect:true
  });
  
  // Listen to changes in the scrollY value
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(scrollYProgress)
  });
  const color2 = useTransform(scrollYProgress, [0,0.5,1], ["rgba(255, 0, 0, 0)", "#700c99", "#45085e"]);
  const backgroundContainer=useMotionTemplate`linear-gradient(to bottom, rgba(255, 0, 0, 0), ${color2})`

  return (
    <motion.div className="h-full overflow-y-scroll w-full story-container" style={{ fontFamily: "grapenut", background:backgroundContainer}} ref={containerRef}>
      <div className="h-screen flex items-center justify-center font-grapenut">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Welcome to Page 1</h1>
          <p className="text-lg">
            This is the first page of the story. Here, you can introduce the setting or the main characters.
          </p>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center font-grapenut">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Welcome to Page 2</h1>
          <p className="text-lg">
            On this page, the story progresses with more details, conflicts, or plot twists. Keep the narrative engaging!
          </p>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center font-grapenut">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Welcome to Page 3</h1>
          <p className="text-lg">
            This is the final page of the story. Wrap up the story with a conclusion or a call to action.
          </p>
        </div>
      </div>
      {/* Add additional pages if needed */}
    </motion.div>
  );
}
