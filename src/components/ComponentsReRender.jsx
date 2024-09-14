import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function List() {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);

  // Function to shuffle the items array
  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Click the button to shuffle the list:</h2>
      <button onClick={shuffleItems} style={{ marginBottom: "20px" }}>
        Shuffle List
      </button>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <AnimatePresence>
          {items.map((item) => (
            <motion.li
              key={item}
              layout="position" // Ensures layout animations are enabled
              initial={{ opacity: 0, y: -20 }} // Starting state when the item enters
              animate={{ opacity: 1, y: 0 }} // Animates to this state when the list updates
              exit={{ opacity: 0, y: 20 }} // Animation when item is removed
              transition={{ duration: 0.4 }} // Adjusting the animation duration
              style={{
                padding: "10px 20px",
                marginBottom: "10px",
                backgroundColor: "lightblue",
                borderRadius: "5px",
                fontSize: "18px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Item {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default List;
