import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-white ring-1 ring-white/15",
        success: "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/20",
        warning: "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/20",
        danger: "bg-rose-500/15 text-rose-200 ring-1 ring-rose-400/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

