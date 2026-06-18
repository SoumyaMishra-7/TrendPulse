"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import AppShell from "@/components/shell/AppShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDemoStore } from "@/lib/state/demoStore";
import { trends, type Trend } from "@/lib/mock/data";

function urgencyToBadge(urgency: Trend["urgency"]) {
  if (urgency === "High") return { className: "bg-red-500/15 text-red-200 ring-1 ring-red-400/25", label: "Urgent" };
  if (urgency === "Medium") return { className: "bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/25", label: "Rising" };
  return { className: "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/25", label: "Stable" };
}

function toVelocityPoints(v: number[]) {
  return v.map((value, i) => ({ x: i + 1, value }));
}

export function TrendsDashboardPage() {
  const router = useRouter();
  const { brand, setSelectedTrend } = useDemoStore();

  const [selectedId, setSelectedId] = React.useState<string | null>(trends[0]?.id ?? null);

  const displayed = trends.slice(0, 5);
  const selected = displayed.find((t) => t.id === selectedId) ?? displayed[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white/70">
              <TrendingUp className="h-4 w-4 text-violet-200" />
              Trending Opportunities
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Trending Opportunities</h1>
            <p className="mt-3 text-white/70">
              {brand?.name ? (
                <>
                  Scored for <span className="font-semibold text-white/85">{brand.name}</span> •
                </>
              ) : (
                <>Scored for your brand context •</>
              )}{" "}
              pick a trend to generate a campaign.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge className="bg-white/5 text-white/70 ring-1 ring-white/10">5 trends • 10s preview</Badge>
            <Button
              variant="primary"
              onClick={() => {
                setSelectedTrend(selected);
                router.push("/generator");
              }}
              className="rounded-2xl"
            >
              Generate Campaign Brief
            </Button>
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-4">
            {displayed.map((t) => {
              const active = t.id === selected.id;
              const badge = urgencyToBadge(t.urgency);
              return (
                <motion.button
                  type="button"
                  key={t.id}
                  onClick={() => setSelectedId(t.id)}
                  initial={false}
                  animate={{ scale: active ? 1.01 : 1 }}
                  whileHover={{ scale: active ? 1.01 : 1.01 }}
                  className={
                    "w-full text-left glass-strong rounded-2xl p-5 transition " +
                    (active ? "ring-1 ring-violet-400/35 bg-white/5" : "hover:brightness-110")
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="text-base font-semibold text-white/90">{t.name}</div>
                        <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200 ring-1 ring-violet-400/25">
                          Score {t.score}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/70">
                        <span>{t.growthPct}% growth</span>
                        <span>•</span>
                        <span>{t.category}</span>
                        <span>•</span>
                        <span>Half-life ~{t.halfLifeHours}h</span>
                      </div>
                    </div>
                    <div className={"rounded-full px-3 py-1 text-xs font-semibold " + badge.className}>
                      {badge.label}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-white/60">Opportunity</div>
                      <div className="text-xs font-semibold text-white/75">{t.opportunityScore}</div>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 5 }}
                        animate={{ width: `${Math.min(100, t.opportunityScore)}%` }}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <Card className="glass-strong overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white/70">Selected Trend</div>
                  <div className="mt-1 text-2xl font-semibold">{selected.name}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/70">
                    <Badge className="bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/25">Velocity</Badge>
                    <span className="font-semibold text-white/85">{selected.growthPct}%</span>
                    <span>growth</span>
                    <span>•</span>
                    <span>Half-life ~{selected.halfLifeHours}h</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-violet-500/15 to-indigo-500/10 px-4 py-3 text-right">
                  <div className="text-xs font-semibold text-white/60">Trend Score</div>
                  <div className="mt-1 text-3xl font-semibold text-white/90">{selected.score}</div>
                </div>
              </div>

              <div className="mt-5 h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={toVelocityPoints(selected.velocity)}>
                    <XAxis dataKey="x" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 12,
                        color: "white",
                      }}
                      labelFormatter={() => ""}
                      formatter={(v: any) => [`${v}`, "Velocity"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="url(#grad)"
                      strokeWidth={3}
                      dot={false}
                      isAnimationActive
                      animationDuration={900}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Opportunity", v: selected.opportunityScore },
                  { k: "Category", v: selected.category },
                  { k: "Urgency", v: selected.urgency },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/60">{x.k}</div>
                    <div className="mt-2 text-sm font-semibold text-white/85">{String(x.v)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}


