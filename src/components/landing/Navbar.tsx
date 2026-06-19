import Link from "next/link";
import { PlayCircle, Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8 lg:px-10">
      <Link href="/" className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-white text-[#101014] shadow-sm">
          <Zap className="size-5" />
        </div>
        <div>
          <p className="text-lg font-black leading-none text-white">
            TrendPulse
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            AI Campaign OS
          </p>
        </div>
      </Link>

      {/* <div className="hidden items-center gap-2 sm:flex">
        <a
          href="#demo"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white"
        >
          <PlayCircle className="size-4" />
          Watch Demo
        </a>
        <a
          href="#start"
          className="inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-black text-[#101014] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
        >
          Start Campaign
        </a>
      </div> */}
    </nav>
  );
}
