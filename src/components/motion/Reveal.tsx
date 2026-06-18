"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
} & MotionProps;

export function Reveal({ children, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

