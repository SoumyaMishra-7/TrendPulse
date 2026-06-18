"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Stagger({
  children,
  delay = 0.08,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const arr = React.Children.toArray(children);
  return (
    <motion.div initial="hidden" animate="show" className="contents">
      {arr.map((child, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: idx * delay, duration: 0.35 },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

