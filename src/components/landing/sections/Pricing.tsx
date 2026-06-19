import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    bullets: [
      "Custom scoring",
      "Creator sourcing support",
      "Priority demo reviews",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="bg-[#0a0a0f] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b7cff]">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Simple plans for every stage
          </h2>
          <p className="mt-4 text-slate-400">
            Start small, scale campaigns faster with AI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative overflow-hidden border transition-all duration-300
            ${
              p.highlight
                ? "border-[#8b7cff]/40 bg-gradient-to-b from-[#171722] to-[#101014] shadow-[0_0_40px_rgba(139,124,255,0.2)]"
                : "border-white/10 bg-[#111118] hover:-translate-y-2 hover:border-[#8b7cff]/30"
            }
          `}
            >
              {p.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-[#8b7cff]/20 px-3 py-1 text-xs font-bold text-[#b6acff]">
                  Most Popular
                </div>
              )}

              <CardHeader className="p-8">
                <CardTitle className="text-xl font-black text-white">
                  {p.name}
                </CardTitle>

                <CardDescription className="mt-2 text-slate-400">
                  {p.desc}
                </CardDescription>

                <div className="mt-6">
                  <span className="text-5xl font-black text-white">
                    {p.price}
                  </span>
                  <span className="ml-1 text-slate-400">/month</span>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="grid size-6 place-items-center rounded-full bg-[#8b7cff]/15">
                        <Check className="size-3 text-[#b6acff]" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full h-12 font-bold ${
                    p.highlight
                      ? "bg-[#8b7cff] text-white hover:bg-[#7a69ff]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Choose {p.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
