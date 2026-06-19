"use client";
import { ArrowDown, PlayCircle, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

const flow = [
  "Trend Detection",
  "AI Analysis",
  "Campaign Brief",
  "Creator Match",
  "Launch",
];

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-bold text-white shadow-sm backdrop-blur">
          <Sparkles className="size-4 text-[#8fffd2]" />
          AI-Powered Marketing Automation
        </div>

        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white text-balance sm:text-6xl lg:text-7xl">
          From Viral Trends to Live Campaigns in Minutes
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          TrendPulse helps brands detect emerging trends, generate campaign
          briefs, find the right creators, and launch campaigns before the trend
          disappears.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/brand"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-black text-[#101014] shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
          >
            Start Campaign
          </a>
          <Link
            href="#demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <PlayCircle className="size-4" />
            Watch Demo
          </Link>
        </div>
      </div>

      <div
        id="demo"
        className="rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <div className="rounded-xl bg-[#f8fafc] p-5 text-[#101014]">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6d5dfc]">
                Pipeline preview
              </p>
              <h2 className="mt-1 text-2xl font-black">Trend to campaign</h2>
            </div>
            <div className="grid size-11 place-items-center rounded-xl bg-[#101014] text-white">
              <Rocket className="size-5" />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {flow.map((step, index) => (
              <div key={step}>
                <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 shadow-sm">
                  <div className="grid size-9 place-items-center rounded-lg bg-[#eef2ff] text-sm font-black text-[#4f46e5]">
                    {index + 1}
                  </div>
                  <p className="font-black">{step}</p>
                </div>
                {index < flow.length - 1 ? (
                  <div className="grid h-6 place-items-center text-[#6d5dfc]">
                    <ArrowDown className="size-4" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
