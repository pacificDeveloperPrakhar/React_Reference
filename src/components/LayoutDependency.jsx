import { useState } from "react";
import { motion } from "framer-motion";

export default function Example() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <motion.div
        layout
        layoutDependency={toggle} // Only measure layout when `toggle` changes
        style={{
          width: toggle ? 200 : 100,
          height: 100,
          backgroundColor: "lightblue",
          marginBottom: 20,
        }}
        onClick={() => setToggle(!toggle)}
      >
        Click to resize
      </motion.div>
    </div>
  );
}