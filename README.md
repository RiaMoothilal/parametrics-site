# Parametrics — Marketing Website

Static marketing site for [parametrics.app](https://parametrics.app), built with Next.js 14 (App Router), Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS v4**
- **Framer Motion** (scroll-triggered animations)
- **TypeScript**

---

## Project Structure

```
/app
  page.tsx              ← Home page
  pricing/page.tsx      ← Pricing page
  faq/page.tsx          ← FAQ page
  privacy/page.tsx      ← Privacy Policy
  terms/page.tsx        ← Terms of Service
  sitemap.ts            ← Auto-generated sitemap.xml
  robots.ts             ← robots.txt
  layout.tsx            ← Root layout (metadata, fonts, SEO)
  globals.css           ← Global styles + Tailwind import

/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  ProblemSection.tsx
  FeatureCards.tsx
  HowItWorks.tsx
  ScreenshotGallery.tsx
  Testimonials.tsx
  PricingSection.tsx
  FAQSection.tsx

/public
  screenshots/          ← Drop your product screenshots here
  og-image.svg          ← Replace with a 1200×630 PNG for social sharing
```

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Build for Production

```bash
npm run build
```

Output is in the `/out` directory (static HTML/CSS/JS).

---

## Deploy to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Next.js. The `output: "export"` in `next.config.mjs` means it deploys as static files.

### Option B: GitHub → Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Framework Preset: **Next.js**
5. No environment variables needed
6. Click **Deploy**

Add your custom domain `parametrics.app` in Vercel → Settings → Domains.

---

## Deploy to Cloudflare Pages

### Option A: Cloudflare Dashboard

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a Project
3. Connect your GitHub repository
4. Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**

### Option B: Wrangler CLI

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name parametrics-site
```

Add your custom domain `parametrics.app` in Cloudflare Pages → Custom Domains.

---

## Adding Real Screenshots

1. Place your screenshots in `/public/screenshots/`:
   - `thermal-analysis.png`
   - `glide-efficiency.png`
   - `coaching-summary.png`

2. In `components/ScreenshotGallery.tsx`, replace the `PlaceholderScreen` component with an `<Image>` element:

```tsx
import Image from "next/image";

// Replace PlaceholderScreen usage with:
<Image
  src={s.file}
  alt={s.label}
  width={1200}
  height={750}
  style={{ width: "100%", height: "auto", borderRadius: "0.75rem" }}
/>
```

---

## Replacing OG Image

Replace `/public/og-image.svg` with a 1200×630 PNG named `og-image.png` and update the reference in `app/layout.tsx`:

```tsx
images: [{ url: "/og-image.png", width: 1200, height: 630 }]
```

---

## All CTAs link to

```
https://app.parametrics.app
```

Authentication happens inside the Shiny app. This site is intentionally static with no backend logic.
