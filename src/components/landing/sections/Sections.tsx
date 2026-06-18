import { Sparkles, TrendingUp, Wand2 } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="text-sm font-semibold text-white/70">The problem</div>
        <h3 className="mt-2 text-2xl font-semibold">Trends move faster than teams.</h3>
        <p className="mt-3 text-white/70">
          D2C brands waste weeks on research, approvals, and creator pitching—then launch when
          the trend is already cooling.
        </p>
      </div>

      <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
        {["Slow discovery", "Manual briefing", "Creator guesswork", "Late launches"].map(
          (t) => (
            <div key={t} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-500/30" />
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-white/60">
                    Missed momentum costs growth.
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      icon: TrendingUp,
      title: "Analyze trending signals",
      desc: "TrendPulse scores emerging opportunities and predicts decay (half-life).",
    },
    {
      icon: Wand2,
      title: "Generate a campaign brief",
      desc: "AI drafts objective, reel script, hashtags, and CTA—ready for creators.",
    },
    {
      icon: Sparkles,
      title: "Match & launch creators",
      desc: "Find creators with strong engagement + fit score. Activate the campaign instantly.",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-white/70">How it works</div>
          <h3 className="mt-2 text-2xl font-semibold">From Trend to Campaign in Under 2 Hours</h3>
        </div>
        <div className="hidden md:block glass rounded-2xl px-5 py-3 text-sm text-white/70">
          Designed for fast demo turnarounds.
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s, idx) => (
          <div key={s.title} className="glass-strong rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/15 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500/25 to-indigo-500/25 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-violet-200" />
              </div>
              <div className="font-semibold">Step {idx + 1}</div>
            </div>
            <div className="mt-4 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

