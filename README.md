# Crema Centro Pass MVP

Deployable MVP for a civic-commerce SaaS pilot in Crema.

## Phase 1 — Architecture

### Stack
- Next.js 14 App Router (patched via semver) + TypeScript + Tailwind
- Supabase (Auth, Postgres, RLS, Storage-ready) + @supabase/ssr
- Mapbox static/interactive preview (token-based)
- Vercel-ready

### Route map
- `/` landing page
- `/apply-shop` shop onboarding application form
- `/auth/sign-in` demo auth switch
- `/app/*` citizen app
- `/shop/*` merchant dashboard
- `/admin/*` Comune/admin dashboard

### Folder structure
- `app/` routes + layouts
- `components/` UI and dashboard shell
- `lib/` types + seed/demo datasets
- `supabase/migrations` SQL schema
- `supabase/seed.sql` seed data

### Role model
- `admin`: governance, analytics, approvals
- `shop`: manages promo/check-ins/basic KPIs
- `user`: missions/check-ins/rewards/pass

### Product flows
1. User registers/signs in, opens pass, sees missions/events.
2. User checks into shops through unique shop QR identifier.
3. Points update wallet; rewards unlock and redeem.
4. Shop sees check-ins and promo impact.
5. Admin controls campaigns, missions, rewards, shop approvals.

## Phase 2 — Design & Logic

### Design system
- Mobile-first cards with clear CTA hierarchy.
- Civic-premium palette via `crema` brand colors.
- Lightweight shadcn-style button/badge primitives.

### Landing structure
- Hero + CTAs
- Value pillars (citizen/shop/Comune)
- 3-step flow
- Map preview
- shops/events/missions/rewards highlights
- FAQ + footer

### Mission/check-in/reward logic (MVP)
- Missions defined in table + mission steps.
- Check-ins table + anti-abuse cooldown concept (15 min per shop in UI policy).
- Points wallet + reward redemption lifecycle.

### Dashboard logic
- Shop: profile, promo, QR check-ins, trend metrics.
- Admin: entity management and KPI overview.

## Phase 3 — Implemented code
- Real Next.js codebase with all required surfaces.
- Supabase schema and seed with demo accounts and data.
- Route protection by role via middleware (cookie-driven demo mode).

## Demo accounts
- Admin: `admin@cremacentro.it` / `Admin123!`
- Shop: `negozio@cremacentro.it` / `Negozio123!`
- User: `utente@cremacentro.it` / `Utente123!`

## Local run
1. `npm install`
2. copy `.env.example` to `.env.local`
3. `npm run dev`
4. open `http://localhost:3000`

## Env vars
Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

## Supabase setup
1. Create project in Supabase.
2. Run SQL in `supabase/migrations/202603161700_init.sql`.
3. Run seed in `supabase/seed.sql`.
4. Create matching users in Supabase Auth with demo credentials.

## Deploy on Vercel
1. Push repo to Git provider.
2. Import project in Vercel.
3. Set env vars from above.
4. Build command: `npm run build`, output: default Next.js.


## Troubleshooting deployment

If GitHub PR shows **"This branch has conflicts that must be resolved"**, your feature branch is behind `main`:

```bash
git fetch origin
git checkout <your-pr-branch>
git merge origin/main
# resolve conflicts in listed files
git add .
git commit -m "chore: resolve merge conflicts with main"
git push
```

If Vercel fails during prerender on `/` with app-router errors, this MVP forces dynamic rendering for the landing route (`app/(public)/page.tsx`) to bypass static prerender instability in some Next 14 patch combinations.

