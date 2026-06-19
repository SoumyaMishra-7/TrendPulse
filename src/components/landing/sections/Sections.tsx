import { Sparkles, TrendingUp, Wand2 } from "lucide-react";
import { CheckCircle2, Clock3, XCircle } from "lucide-react";
import {
  BarChart3,
  FileText,
  Megaphone,
  Radar,
  UsersRound,
} from "lucide-react";

const steps = [
  {
    icon: Radar,
    title: "Detect Trends",
    description: "Identify viral trends from social media.",
  },
  {
    icon: BarChart3,
    title: "Analyze Trend",
    description: "Predict virality and trend lifespan.",
  },
  {
    icon: FileText,
    title: "Generate Brief",
    description: "AI creates campaign objectives and content ideas.",
  },
  {
    icon: UsersRound,
    title: "Match Creators",
    description: "Find influencers with highest trend fit score.",
  },
  {
    icon: Megaphone,
    title: "Launch Campaign",
    description: "Activate campaigns instantly.",
  },
];
const traditional = [
  "Campaign Creation: 4-6 Weeks",
  "Manual Research",
  "Manual Creator Discovery",
  "Slow Execution",
];

const trendPulse = [
  "Campaign Creation: < 2 Minutes",
  "AI Trend Detection",
  "Instant Creator Matching",
  "One Click Launch",
];

const metrics = [
  { value: "48 Hours", label: "Average Trend Lifespan" },
  { value: "4.5M+", label: "Indian Creators" },
  { value: "2 Minutes", label: "Campaign Generation" },
];

export function ProblemSection() {
  return (
    <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6d5dfc]">
            Problem vs Solution
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-black tracking-normal text-[#101014] text-balance sm:text-5xl">
            Brands lose the trend while the campaign is still in process.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <XCircle className="size-5 text-rose-500" />
              <h3 className="text-xl text-black font-black">
                Traditional Marketing
              </h3>
            </div>
            <div className="space-y-3">
              {traditional.map((item) => (
                <p
                  key={item}
                  className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#8fffd2]/40 bg-[#101014] p-6 text-white shadow-xl shadow-slate-900/15">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="size-5 text-[#8fffd2]" />
              <h3 className="text-xl font-black">TrendPulse</h3>
            </div>
            <div className="space-y-3">
              {trendPulse.map((item) => (
                <p
                  key={item}
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white/80"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Clock3 className="mb-6 size-5 text-[#6d5dfc]" />
            <p className="text-4xl font-black text-[#101014]">{metric.value}</p>
            <p className="mt-2 font-semibold text-slate-500">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section id="demo" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6d5dfc]">
            How It Works
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#101014] text-balance sm:text-5xl">
            A complete AI workflow for campaign speed.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-white text-[#6d5dfc] shadow-sm">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-black text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-black text-[#101014]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
