import { LazyMotion, domAnimations, m } from "framer-motion";

export default  DraggableBox = () => (
  <LazyMotion features={domAnimations}>
    {/* m.div behaves like motion.div but with no features preloaded */}
    <m.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      drag="x" // Restrict dragging to the x-axis
      dragConstraints={{ left: -100, right: 100 }} // Limit the drag range
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        cursor: 'grab',
      }}
    >
      Drag me
    </m.div>
  </LazyMotion>
);
