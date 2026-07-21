export type BillingPeriod = "monthly" | "annual";

export interface PricingTier {
  id: "free" | "pro" | "proplus";
  name: string;
  tagline: string;
  recommended?: boolean;
  cta: string;
  ctaHref?: string;
  // True for tiers where the CTA should start the 60-day free trial
  // (via /signup) instead of going straight to Paddle checkout. Only Pro
  // gets a trial today — /signup's beta_active grant always resolves to
  // "pro" tier (see ParametricsApp/R/entitlements.R), never proplus.
  startsTrial?: boolean;
  monthlyPriceId?: string;
  annualPriceId?: string;
  limits: string[];
  includesFrom?: string;
  features: string[];
}

export const PADDLE_ENVIRONMENT: "sandbox" | "production" =
  process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT === "production" ? "production" : "sandbox";

export const PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "";

const PRO_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRO_MONTHLY_PRICE_ID ?? "";
const PRO_ANNUAL_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRO_ANNUAL_PRICE_ID ?? "";
const PROPLUS_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PROPLUS_MONTHLY_PRICE_ID ?? "";
const PROPLUS_ANNUAL_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PROPLUS_ANNUAL_PRICE_ID ?? "";

// Pilot comparison charts use a fixed 10-color palette (fx_get_palette_10 in
// ParametricsApp/R/Functions.R) that recycles past 10 pilots, so no tier can
// promise more than 10 without a backend palette change first.
const MAX_PILOTS_PER_REPORT = 10;

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "For pilots getting started",
    cta: "Get started free",
    ctaHref: "/signup",
    limits: [
      "3 reports / month",
      "2 pilots per comparison",
      "14-day report history",
    ],
    features: [
      "Upload and process IGC flight files",
      "Full flight summary (duration, altitude, thermals, wind, landing finals)",
      "Altitude timeline and flight phase breakdown",
      "Interactive flight map",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For pilots who want to improve",
    recommended: true,
    cta: "Try Pro free for 60 days",
    startsTrial: true,
    monthlyPriceId: PRO_MONTHLY_PRICE_ID,
    annualPriceId: PRO_ANNUAL_PRICE_ID,
    limits: [
      "20 reports / month",
      `${MAX_PILOTS_PER_REPORT} pilots per comparison`,
      "Permanent report archive",
    ],
    includesFrom: "Everything in Free, plus",
    features: [
      "Performance Analyst on every analysis page",
      "Missed thermal opportunities — map showing exact locations, strength, and altitude",
      "3D landing approach visualization (interactive, rotatable)",
      "Glide performance map",
      "Benchmark pilot comparison (compare against any named pilot)",
      `Multi-pilot comparison (up to ${MAX_PILOTS_PER_REPORT} pilots per report)`,
      "Wind analysis map",
      "In-Depth and Full Analytics modes",
    ],
  },
  {
    id: "proplus",
    name: "Pro+",
    tagline: "For competition pilots, instructors & clubs",
    cta: "Start with Pro+",
    monthlyPriceId: PROPLUS_MONTHLY_PRICE_ID,
    annualPriceId: PROPLUS_ANNUAL_PRICE_ID,
    limits: [
      "Unlimited reports",
      `${MAX_PILOTS_PER_REPORT} pilots per comparison`,
      "Permanent report archive",
    ],
    includesFrom: "Everything in Pro, plus",
    features: [
      "Unlimited monthly reports",
      "Bulk upload — process a whole class or competition field at once",
      "Shareable competition & race reports",
      "Priority support",
      "Early access to new features",
    ],
  },
];
