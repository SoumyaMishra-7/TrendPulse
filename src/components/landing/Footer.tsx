import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_10px_30px_rgba(124,58,237,0.35)]" />
            <div>
              <div className="text-sm font-semibold tracking-wide">TRENDPULSE</div>
              <div className="text-xs text-white/55">From Trend to Campaign in Under 2 Hours</div>
            </div>
          </div>

          <div className="grid gap-2 text-sm text-white/70 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-semibold text-white/60">Product</div>
              <div className="mt-1">Trend Intelligence</div>
              <div>AI Campaign Briefs</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-semibold text-white/60">Use cases</div>
              <div className="mt-1">D2C launches</div>
              <div>Creator activations</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-semibold text-white/60">Demo</div>
              <div className="mt-1">No backend</div>
              <div>Mocked data</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-200" />
            © {new Date().getFullYear()} TrendPulse
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

