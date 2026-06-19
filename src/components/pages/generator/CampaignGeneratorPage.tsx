"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Copy, Download, Sparkles, RotateCcw } from "lucide-react";

import AppShell from "@/components/shell/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDemoStore } from "@/lib/state/demoStore";
import { sampleBriefs, type CampaignBrief } from "@/lib/mock/data";

export function CampaignGeneratorPage() {
  const router = useRouter();
  const { selectedTrend, generatedBrief, setGeneratedBrief, selectedCreators, setSelectedCreators } =
    useDemoStore();

  const [working, setWorking] = React.useState(false);

  const brief: CampaignBrief | null =
    generatedBrief ?? (selectedTrend ? sampleBriefs[selectedTrend.id] ?? null : null);

  async function runGenerate(regenerate?: boolean) {
    if (!selectedTrend) return;
    setWorking(true);

    const fallbackBrief = sampleBriefs[selectedTrend.id] ?? {
      objective: "Launch a creator-led trend campaign",
      contentStrategy: "A short hook + routine shots + CTA",
      reelScript: "[0-5s] Hook…\n[5-20s] Value…\n[20-30s] CTA…",
      hashtags: ["#TrendPulse", "#D2C", "#Creators"],
      cta: "Shop now",
    };

    try {
      console.log("Gemini request started");

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trendName: selectedTrend.name,
          trendCategory: selectedTrend.category,
          trendScore: selectedTrend.score,
        }),
        signal: controller.signal,
      });

      window.clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("Gemini request failed");
      }

      const aiResponse = (await response.json()) as CampaignBrief;

      if (
        typeof aiResponse.objective !== "string" ||
        typeof aiResponse.contentStrategy !== "string" ||
        typeof aiResponse.reelScript !== "string" ||
        !Array.isArray(aiResponse.hashtags) ||
        !aiResponse.hashtags.every((tag) => typeof tag === "string") ||
        typeof aiResponse.cta !== "string"
      ) {
        throw new Error("Invalid Gemini response");
      }

      console.log("Gemini success");
      setGeneratedBrief(aiResponse);
    } catch {
      console.log("Gemini fallback activated");
      setGeneratedBrief(fallbackBrief);
    }

    // Also simulate creator selection on first generate
    if (selectedCreators.length === 0 || regenerate) {
      // Mock selection: top 3 creators by fit score
      const top = ["neha", "rahul", "ananya"];
      setSelectedCreators(top.map((id) => ({
        id,
        name: id === "neha" ? "Neha Beauty" : id === "rahul" ? "Rahul Fitness" : "Ananya Lifestyle",
        niche: "Mock niche",
        followers: 250_000,
        engagementRate: 4.5,
        city: "Mock city",
        fitScore: id === "neha" ? 96 : id === "rahul" ? 88 : 85,
      })));
    }


    setWorking(false);
    router.push("/creators");
  }

  function onCopy(text: string) {
    navigator.clipboard?.writeText(text);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white/70">AI Campaign Generator</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">AI Generated Campaign Strategy</h1>
            <p className="mt-3 text-white/70">
              Wow moment: copy-ready creative generated from your selected trend. (Mocked AI)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {selectedTrend && (
              <Badge className="bg-white/5 text-white/70 ring-1 ring-white/10">Trend: {selectedTrend.name}</Badge>
            )}
            <Button variant="primary" onClick={() => runGenerate(false)} disabled={working}>
              {working ? "Generating…" : "Generate & Select Creators"}
            </Button>
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass-strong overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white/70">Generated Content</div>
                  <div className="mt-2 text-2xl font-semibold">Campaign brief</div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm" onClick={() => onCopy(JSON.stringify(brief, null, 2))}>
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => runGenerate(true)}
                    disabled={working}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Regenerate
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      if (!brief) return;
                      const blob = new Blob([JSON.stringify(brief, null, 2)], { type: "application/json" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "trendpulse-campaign-brief.json";
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              {!brief ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                  Select a trend in the Dashboard to generate a brief.
                </div>
              ) : (
                <div className="mt-5 space-y-5">
                  <SectionCard title="Campaign Objective" icon={<Sparkles className="h-4 w-4 text-violet-200" />}>
                    <div className="text-sm text-white/80">{brief.objective}</div>
                  </SectionCard>

                  <SectionCard title="Content Strategy" icon={<Sparkles className="h-4 w-4 text-violet-200" />}>
                    <div className="text-sm text-white/80">{brief.contentStrategy}</div>
                  </SectionCard>

                  <SectionCard title="Reel Script" icon={<Sparkles className="h-4 w-4 text-violet-200" />}>
                    <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                      {brief.reelScript}
                    </pre>
                  </SectionCard>

                  <div className="grid gap-5 md:grid-cols-2">
                    <SectionCard title="Hashtags" icon={<Sparkles className="h-4 w-4 text-violet-200" />}>
                      <div className="flex flex-wrap gap-2">
                        {brief.hashtags.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </SectionCard>

                    <SectionCard title="CTA" icon={<Sparkles className="h-4 w-4 text-violet-200" />}>
                      <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm font-semibold text-violet-200">
                        {brief.cta}
                      </div>
                    </SectionCard>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Card className="glass-strong p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white/70">Creator handoff</div>
                    <div className="mt-2 text-2xl font-semibold">Ready in seconds</div>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-indigo-500/25 ring-1 ring-white/10" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {["Objective aligned", "Script timing included", "Hashtags scoped", "CTA conversion focused"].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-violet-300/80" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <Card className="glass-strong p-6">
              <div className="text-sm font-semibold text-white/70">Next</div>
              <div className="mt-2 text-xl font-semibold">Match creators</div>
              <p className="mt-2 text-sm text-white/70">We’ll highlight best-fit creators and show animated fit bars.</p>
              <Button
                variant="primary"
                className="mt-4 w-full rounded-2xl"
                onClick={() => router.push("/creators")}
              >
                Go to Creator Matching
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        {icon}
        <div className="text-sm font-semibold text-white/70">{title}</div>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

