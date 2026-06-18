import { Sparkles } from "lucide-react";

export function BrandSection() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_10px_30px_rgba(124,58,237,0.35)]" />
      <div>
        <div className="text-sm font-semibold tracking-wide text-white/90">TRENDPULSE</div>
        <div className="text-xs text-white/55">From Trend to Campaign</div>
      </div>
      <Sparkles className="h-4 w-4 text-violet-300" />
    </div>
  );
}

