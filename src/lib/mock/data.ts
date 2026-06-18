export type Trend = {
  id: string;
  name: string;
  score: number; // 0-100
  growthPct: number;
  category: string;
  halfLifeHours: number;
  urgency: "High" | "Medium" | "Low";
  opportunityScore: number;
  velocity: number[]; // 10 points
};

export type Creator = {
  id: string;
  name: string;
  niche: string;
  followers: number;
  engagementRate: number; // percent
  city: string;
  fitScore: number; // 0-100
};

export type CampaignBrief = {
  objective: string;
  contentStrategy: string;
  reelScript: string;
  hashtags: string[];
  cta: string;
};

export const trends: Trend[] = [
  {
    id: "glass-skin",
    name: "Glass Skin",
    score: 92,
    growthPct: 38,
    category: "Beauty",
    halfLifeHours: 26,
    urgency: "High",
    opportunityScore: 88,
    velocity: [18, 22, 26, 31, 35, 42, 49, 55, 63, 71],
  },
  {
    id: "ai-study-reels",
    name: "AI Study Reels",
    score: 89,
    growthPct: 31,
    category: "EdTech",
    halfLifeHours: 34,
    urgency: "High",
    opportunityScore: 84,
    velocity: [12, 15, 19, 23, 27, 30, 38, 44, 52, 58],
  },
  {
    id: "protein-snacks",
    name: "Protein Snacks",
    score: 84,
    growthPct: 22,
    category: "Food",
    halfLifeHours: 52,
    urgency: "Medium",
    opportunityScore: 79,
    velocity: [10, 12, 14, 17, 20, 24, 28, 33, 38, 43],
  },
  {
    id: "budget-travel",
    name: "Budget Travel",
    score: 81,
    growthPct: 18,
    category: "Lifestyle",
    halfLifeHours: 60,
    urgency: "Medium",
    opportunityScore: 76,
    velocity: [9, 10, 12, 14, 16, 19, 22, 26, 30, 34],
  },
  {
    id: "healthy-beverages",
    name: "Healthy Beverages",
    score: 79,
    growthPct: 15,
    category: "Wellness",
    halfLifeHours: 70,
    urgency: "Low",
    opportunityScore: 72,
    velocity: [8, 9, 10, 12, 13, 15, 17, 19, 21, 24],
  },
];

export const creators: Creator[] = [
  {
    id: "neha",
    name: "Neha Beauty",
    niche: "Skincare + Routine",
    followers: 420_000,
    engagementRate: 4.8,
    city: "Mumbai",
    fitScore: 96,
  },
  {
    id: "rahul",
    name: "Rahul Fitness",
    niche: "Nutrition + Lifestyle",
    followers: 310_000,
    engagementRate: 5.2,
    city: "Bengaluru",
    fitScore: 88,
  },
  {
    id: "ananya",
    name: "Ananya Lifestyle",
    niche: "Beauty + Lifestyle",
    followers: 250_000,
    engagementRate: 4.1,
    city: "Delhi",
    fitScore: 85,
  },
  {
    id: "arjun",
    name: "Tech with Arjun",
    niche: "AI + Study Productivity",
    followers: 380_000,
    engagementRate: 3.9,
    city: "Hyderabad",
    fitScore: 82,
  },
  {
    id: "karan",
    name: "Foodie Karan",
    niche: "Food Trends + Reviews",
    followers: 275_000,
    engagementRate: 4.6,
    city: "Chennai",
    fitScore: 78,
  },
];

export const sampleBriefs: Record<string, CampaignBrief> = {
  "glass-skin": {
    objective: "Drive D2C trial purchases for a new glass-skin serum drop using creator-led routine content.",
    contentStrategy:
      "Hook with a before/after lighting reveal, then compress the skincare routine into 3 shots. End with a 7-second ‘finish line’ texture close-up and a limited-time offer.",
    reelScript:
      "[0-2s] ‘POV: you just unlocked glass skin lighting…’ (dramatic zoom)\n[2-6s] Quick before/after comparison under ring light\n[6-14s] Apply serum: 3 taps + texture close-up (ASMR)\n[14-22s] Routine recap: cleanse → serum → moisturizer\n[22-30s] Result shot: hydrated glow + smile\n[30-35s] CTA: ‘Use code TRENDPULSE for 15% off—today only.’",
    hashtags: ["#GlassSkin", "#SkincareRoutine", "#SerumGlow", "#BeautyTok", "#D2CBeauty"],
    cta: "Shop the glow drop with code TRENDPULSE (15% off today).",
  },
};

