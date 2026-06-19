import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "TrendPulse turned our weekly chaos into a two-hour launch routine. The brief is shockingly usable.",
    name: "Sana K.",
    role: "Head of Growth, Skincare D2C",
  },
  {
    quote:
      "The creator matching feels tuned. We launched faster and the engagement rate was consistently higher.",
    name: "Arjun P.",
    role: "Performance Marketing, Wellness Brand",
  },
  {
    quote:
      "Investor-demo quality UX. Judges actually cared about the product instead of the slides.",
    name: "Mira S.",
    role: "Founder, Lifestyle D2C",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0f] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b7cff]">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Built for speed — and results
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Marketing teams, founders, and growth leaders use TrendPulse to
            launch campaigns before trends disappear.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Card
              key={t.name}
              className={`group border transition-all duration-300
              ${
                index === 1
                  ? "border-[#8b7cff]/40 bg-gradient-to-b from-[#171722] to-[#101014] shadow-[0_0_35px_rgba(139,124,255,0.18)]"
                  : "border-white/10 bg-[#111118]"
              }
              hover:-translate-y-2 hover:border-[#8b7cff]/30
              hover:shadow-[0_0_30px_rgba(139,124,255,0.12)]
            `}
            >
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#8b7cff]/15">
                    <Quote className="size-5 text-[#b6acff]" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                    Verified
                  </span>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-300">
                  "{t.quote}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-[#8b7cff] to-[#6d5dfc] text-sm font-black text-white">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
