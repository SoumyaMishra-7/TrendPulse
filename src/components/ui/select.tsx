"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function Select({
  value,
  onChange,
  options,
  className,
}: {
  value?: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20",
        className
      )}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-[#0b0b16]">
          {o.label}
        </option>
      ))}
    </select>
  );
}

