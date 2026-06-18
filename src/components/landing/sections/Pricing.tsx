import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Startup",
    price: "$29",
    desc: "For testing trend → campaign workflows.",
    highlight: false,
    bullets: ["5 trend scans", "1 AI brief / day", "Creator match preview"],
  },
  {
    name: "Growth",
    price: "$79",
    desc: "For monthly influencer campaign launches.",
    highlight: true,
    bullets: ["20 trend scans", "Unlimited briefs", "Export + launch flow"],
  },
  {
    name: "Enterprise",
    price: "$199",
    desc: "For teams running multiple D2C programs.",
    highlight: false,
    bullets: ["Custom scoring", "Creator sourcing support", "Priority demo reviews"],
  },
];

export function PricingSection() {
  return (
    <section>
      <div>
        <div className="text-sm font-semibold text-white/70">Pricing</div>
        <h3 className="mt-2 text-2xl font-semibold">Simple plans. Demo-ready.</h3>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <Card
            key={p.name}
            className={
              "glass-strong p-6 transition " +
              (p.highlight ? "ring-1 ring-violet-400/30" : "hover:brightness-110")
            }
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base">{p.name}</CardTitle>
                {p.highlight && (
                  <div className="text-xs font-semibold text-violet-200 bg-violet-500/15 ring-1 ring-violet-400/25 px-2 py-1 rounded-full">
                    Most popular
                  </div>
                )}
              </div>
              <CardDescription>{p.desc}</CardDescription>
              <div className="mt-3 text-3xl font-semibold">
                {p.price}
                <span className="text-sm font-medium text-white/60">/mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-white/70">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-violet-200" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button variant={p.highlight ? "primary" : "secondary"} className="w-full">
                  Choose {p.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

