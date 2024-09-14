import * as React from "react";
import { motion, useTime, useTransform } from "framer-motion";


export default function TimeBox()  {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
    </div>
  );
};

