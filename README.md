# Chipata Girls FC — Website

Marketing, storytelling, and donations site for Chipata Girls FC
(Eastern Province, Zambia).

Five-page Vite + React + Tailwind site:

1. **Home** — hero, impact, voices, CTA
2. **Our Story** — history, mission, programmes, letter from the director
3. **The Team** — season stats, players, coach voice, alumni, fixtures
4. **Donate** — Stripe-hosted checkout via Payment Link
5. **Contact** — email, phone, social, partnerships

## Run locally

```bash
npm install
cp .env.example .env        # fill in your real Stripe + contact values
npm run dev
```

## Stripe setup

The site uses **Stripe Payment Links** so donations work without a backend.

1. In the Stripe dashboard, create a Payment Link (https://dashboard.stripe.com/payment-links).
2. Turn on **"Let customers choose what to pay"** so one link handles every tier.
3. Set the success URL to `https://<your-domain>/?donation=success` — the site will show the Thank You page on return.
4. Copy the link URL into `.env` as `VITE_STRIPE_PAYMENT_LINK`.
5. (Optional) Create per-tier links and set `VITE_STRIPE_PAYMENT_LINK_25`, `_50`, `_100`, `_250`, `_500` to override.

Only publishable / public values belong in `.env` — the client bundle is public. Your Stripe **secret key** is never needed here; Stripe's hosted checkout handles the card details.

## Deploy

```bash
npm run build
```

Output goes to `build/`. Any static host works (Vercel, Netlify, Cloudflare Pages, S3+CloudFront). Remember to set the `VITE_*` env vars in your hosting provider's dashboard — they're baked into the bundle at build time.

## Project structure

```
src/
  App.tsx                 # page router (state-based)
  main.tsx                # entry
  lib/stripe-config.ts    # reads import.meta.env, exposes helpers
  components/
    Navigation.tsx
    HomePage.tsx
    AboutPage.tsx
    TeamPage.tsx
    DonatePage.tsx
    ContactPage.tsx
    ThankYouPage.tsx
    ui/                   # shadcn/ui primitives
```
