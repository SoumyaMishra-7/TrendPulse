"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";

const score = 92;

function Kpi({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-xs font-semibold text-white/60">{label}</div>
        <div className="mt-1 text-lg font-semibold">{value}</div>
        <div className="mt-1 text-xs text-white/55">{sub}</div>
      </div>
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-indigo-500/25 ring-1 ring-white/10" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(circle_at_20%_40%,rgba(124,58,237,0.35),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_50%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 md:grid-cols-2 md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75"
          >
            <Sparkles className="h-4 w-4 text-violet-200" />
            AI trend scoring + creator matching
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
          >
            <span className="text-gradient">Spot Trends Before Your Competitors Do</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-4 text-base leading-relaxed text-white/75 md:text-lg"
          >
            TrendPulse transforms viral trends into influencer campaigns within hours
            instead of weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/brand"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)] transition hover:brightness-110"
            >
              Start Analysis
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3 text-xs"
          >
            {["No login", "No backend", "Mocked in demo"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold text-white/70"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-white/60">
                    Trend score
                  </div>
                  <div className="mt-1 flex items-center gap-3">
                    <div className="text-4xl font-semibold">{score}</div>
                    <div className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200 ring-1 ring-violet-400/25">
                      Opportunity
                    </div>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-indigo-500/25 ring-1 ring-white/10" />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Kpi
                  label="Creator matching"
                  value="Top fit"
                  sub="Neha Beauty (96)"
                />
                <Kpi label="AI campaign" value="Ready" sub="Brief in 12s" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-white/60">Momentum</div>
                  <div className="text-xs font-semibold text-white/70">+38% growth</div>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 5 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  />
                </div>

                <div className="mt-3 grid grid-cols-5 gap-2">
                  {[10, 18, 28, 40, 58].map((v, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 8 }}
                      animate={{ height: v }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                      className="rounded-xl bg-white/10 ring-1 ring-white/10"
                      style={{ minHeight: 8 }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <div
            id="demo"
            className="pointer-events-none absolute -bottom-10 left-6 hidden h-20 w-64 rotate-[-3deg] rounded-2xl bg-violet-500/15 blur-2xl sm:block"
          />
        </div>
      </div>
    </section>
  );
}

