import { BadgeCheck, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const items = [
  {
    icon: Sparkles,
    title: "Trend Scoring",
    desc: "Opportunity score, growth %, and urgency—built for quick decisions.",
    badge: "Signal",
  },
  {
    icon: Zap,
    title: "AI Campaign Brief",
    desc: "Objective, reel script, hashtags & CTA generated in seconds.",
    badge: "AI",
  },
  {
    icon: BadgeCheck,
    title: "Creator Matching",
    desc: "Engagement rate + fit score to maximize relevance and retention.",
    badge: "Creators",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#0a0a0f] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b7cff]">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Everything needed to launch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From detecting trends to launching campaigns, TrendPulse automates
            the entire workflow in minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Card
              key={it.title}
              className="
            group
            border border-white/10
            bg-[#111118]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#8b7cff]/40
            hover:shadow-[0_0_35px_rgba(139,124,255,0.18)]
          "
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#8b7cff]/20 to-[#6d5dfc]/10">
                    <it.icon className="size-6 text-[#b6acff]" />
                  </div>

                  <Badge className="border-0 bg-[#8b7cff]/15 text-[#b6acff]">
                    {it.badge}
                  </Badge>
                </div>

                <CardTitle className="mt-6 text-xl font-black text-white">
                  {it.title}
                </CardTitle>

                <CardDescription className="mt-2 text-base text-slate-400">
                  {it.desc}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="h-px bg-white/10" />

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Built to help brands react before trends fade and launch
                  campaigns faster than traditional workflows.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#8b7cff]">
                  Learn more →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
