import { Reorder } from "framer-motion";
import { useState } from "react";

function List() {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reorder the list by dragging:</h2>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        style={{ listStyleType: "none", padding: 0 }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            style={{
              padding: "10px 20px",
              marginBottom: "10px",
              backgroundColor: "lightblue",
              borderRadius: "5px",
              cursor: "grab",
              fontSize: "18px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            whileDrag={{ scale: 1.05 }}
          >
            Item {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default List;
