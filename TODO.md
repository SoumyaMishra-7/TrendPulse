# TrendPulse Prototype - TODO

## Setup
- [x] Scaffold Next.js + Tailwind app in `trendpulse-ui/`
- [x] Install core deps (framer-motion, lucide-react, recharts, zustand, radix, etc.)
- [x] Run `npm install` after SWC patch warning

## UI/Architecture (planned implementation)
- [ ] Update `src/app/globals.css` with purple glassmorphism + dark mode default
- [ ] Add app shell components: Sidebar + TopNav + Search + Notifications + User menu
- [ ] Create ShadCN-style UI primitives under `src/components/ui/*`
- [ ] Create motion helpers under `src/components/motion/*`

## Pages (6 routes)
- [ ] `/` Landing page (hero, problem, how it works, features, pricing, testimonials, footer)
- [ ] `/brand` Brand Input page (form + progress animation + mocked results)
- [ ] `/dashboard` Trending Opportunities (trend cards + velocity graph)
- [ ] `/generator` AI Generated Campaign Strategy (wow cards + copy/regenerate/export)
- [ ] `/creators` Best Creator Matches (creator cards + animated fit bars + top match highlight)
- [ ] `/launch` Campaign Ready (success animation + selected trend/creators/stats)

## Demo Flow
- [ ] Use zustand to pass mock state across pages (no auth/backend)
- [ ] Add smooth page transitions between routes

## Verification
- [ ] Ensure dev server has no runtime/TypeScript errors
- [ ] Quick manual check of all routes
- [ ] (Optional) `npm run build`

