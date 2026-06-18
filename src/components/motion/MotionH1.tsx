"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function MotionH1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}

