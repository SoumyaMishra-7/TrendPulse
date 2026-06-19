import { Sparkles, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#8b7cff] to-[#6d5dfc] shadow-[0_0_30px_rgba(139,124,255,0.35)]">
                <Sparkles className="size-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">TrendPulse</h3>
                <p className="text-sm text-slate-400">
                  From Trend to Campaign in Under 2 Hours
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-slate-500 leading-7">
              AI-powered trend intelligence that helps brands discover
              opportunities, generate campaign briefs, match creators, and
              launch campaigns before trends disappear.
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-bold text-white">Product</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer">
                  Trend Intelligence
                </li>
                <li className="hover:text-white cursor-pointer">
                  AI Campaign Briefs
                </li>
                <li className="hover:text-white cursor-pointer">
                  Creator Matching
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Use Cases</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer">
                  D2C Launches
                </li>
                <li className="hover:text-white cursor-pointer">
                  Influencer Campaigns
                </li>
                <li className="hover:text-white cursor-pointer">
                  Product Marketing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer">Demo</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">
                  Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-12 rounded-3xl border border-[#8b7cff]/20 bg-gradient-to-r from-[#171722] to-[#101014] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-bold text-white">
                Ready to launch faster?
              </h4>
              <p className="mt-1 text-slate-400">
                Generate trend-driven campaigns in minutes.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-xl bg-[#8b7cff] px-5 py-3 font-semibold text-white transition hover:bg-[#7a69ff]">
              Get Started
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TrendPulse. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
