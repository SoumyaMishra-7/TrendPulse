import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2 w-full rounded-full bg-white/10", className)}>
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_10px_30px_rgba(124,58,237,0.35)]"
        initial={{ width: 0 }}
        animate={{ width: `${v}%` }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      />
    </div>
  );
}

