import { BadgeCheck, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section>
      <div>
        <div className="text-sm font-semibold text-white/70">Features</div>
        <h3 className="mt-2 text-2xl font-semibold">Everything you need to launch</h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} className="glass-strong p-6 hover:brightness-110 transition">
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-indigo-500/25 flex items-center justify-center">
                    <it.icon className="h-5 w-5 text-violet-200" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{it.title}</CardTitle>
                    <CardDescription>{it.desc}</CardDescription>
                  </div>
                </div>
              </div>
              <Badge>{it.badge}</Badge>
            </CardHeader>
            <CardContent>
              <div className="mt-3 text-sm text-white/60">
                Built with premium UI patterns for investor-ready demos.
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

