import { Reveal } from "@/components/motion/Reveal";
import { Hero } from "@/components/landing/Hero";
import {
  ProblemSection,
  HowItWorksSection,
} from "@/components/landing/sections/Sections";
import { FeaturesSection } from "@/components/landing/sections/Features";
import { PricingSection } from "@/components/landing/sections/Pricing";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="mx-auto  pb-20 md:px-8">
        <div className="grid gap-14">
          <Reveal>
            <ProblemSection />
          </Reveal>
          <Reveal>
            <HowItWorksSection />
          </Reveal>
          <Reveal>
            <FeaturesSection />
          </Reveal>
          <Reveal>
            <PricingSection />
          </Reveal>
          <Reveal>
            <TestimonialsSection />
          </Reveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
