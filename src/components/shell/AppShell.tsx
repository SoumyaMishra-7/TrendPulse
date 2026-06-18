"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Sparkles, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandSection } from "@/components/shell/BrandSection";

const nav = [
  { href: "/", label: "Landing", icon: Sparkles },
  { href: "/dashboard", label: "Dashboard", icon: Sparkles },
  { href: "/generator", label: "Campaign Generator", icon: Sparkles },
  { href: "/creators", label: "Creators", icon: Sparkles },
  { href: "/launch", label: "Launch", icon: Sparkles },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -top-60 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-black/20 lg:block">
          <div className="px-6 py-6">
            <BrandSection />
          </div>

          <nav className="px-4 pb-6">
            <div className="space-y-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition " +
                      (active
                        ? "bg-white/10 ring-1 ring-white/15"
                        : "text-white/75 hover:bg-white/10")
                    }
                  >
                    <item.icon className={"h-4 w-4 " + (active ? "text-violet-300" : "text-white/70")} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="px-6 pb-6">
            <Button
              className="w-full"
              variant={"primary"}
              onClick={() => {
                // demo only
              }}
            >
              Start Analysis
            </Button>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/25 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="lg:hidden">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500" />
                    <div>
                      <div className="text-sm font-semibold">TRENDPULSE</div>
                      <div className="text-xs text-white/55">2 Hours to Campaign</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden flex-1 items-center justify-center md:flex">
                <div className="relative w-full max-w-xl">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-violet-400/40 focus:ring-2 focus:ring-violet-400/20"
                    placeholder="Search trends, creators, campaigns..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                  <Bell className="h-4 w-4 text-white/80" />
                </button>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <User className="h-4 w-4 text-white/80" />
                  <span className="hidden text-sm font-medium md:inline">Demo User</span>
                </div>
                <Link href="/brand" className="hidden md:block">
                  <Button variant="primary">Start</Button>
                </Link>
              </div>
            </div>
          </header>

          <main className="px-4 py-8 sm:px-6 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}

