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
    <section>
      <div>
        <div className="text-sm font-semibold text-white/70">Testimonials</div>
        <h3 className="mt-2 text-2xl font-semibold">Built for speed—and results</h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="glass-strong p-6">
            <div className="flex items-center justify-between">
              <Quote className="h-5 w-5 text-violet-200" />
              <div className="text-xs font-semibold text-white/50">Customer</div>
            </div>
            <div className="mt-4 text-sm text-white/75 leading-relaxed">“{t.quote}”</div>
            <div className="mt-5 text-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="text-white/60">{t.role}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

