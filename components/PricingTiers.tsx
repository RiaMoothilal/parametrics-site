"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import {
  PRICING_TIERS,
  PADDLE_ENVIRONMENT,
  PADDLE_CLIENT_TOKEN,
  type BillingPeriod,
  type PricingTier,
} from "@/lib/pricing";

let paddlePromise: Promise<Paddle | undefined> | null = null;
function getPaddle() {
  if (!paddlePromise) {
    paddlePromise = PADDLE_CLIENT_TOKEN
      ? initializePaddle({ environment: PADDLE_ENVIRONMENT, token: PADDLE_CLIENT_TOKEN })
      : Promise.resolve(undefined);
  }
  return paddlePromise;
}

interface PriceInfo {
  formatted: string;
  rawSubtotal: number;
}

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#03a9f4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingTiers({ preview = false }: { preview?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>("annual");
  const [prices, setPrices] = useState<Record<string, PriceInfo>>({});
  const paddleRef = useRef<Paddle | undefined>();

  useEffect(() => {
    const priceIds = PRICING_TIERS.flatMap((t) => [t.monthlyPriceId, t.annualPriceId]).filter(
      (id): id is string => Boolean(id)
    );
    if (priceIds.length === 0) return;

    getPaddle().then(async (p) => {
      if (!p) return;
      paddleRef.current = p;
      try {
        const result = await p.PricePreview({
          items: priceIds.map((priceId) => ({ priceId, quantity: 1 })),
        });
        const next: Record<string, PriceInfo> = {};
        result.data.details.lineItems.forEach((item) => {
          next[item.price.id] = {
            formatted: item.formattedTotals.total,
            rawSubtotal: Number(item.totals.subtotal),
          };
        });
        setPrices(next);
      } catch {
        // Preview failed (e.g. a price ID not valid in this environment) —
        // affected cards fall back to "Coming soon" below.
      }
    });
  }, []);

  function checkout(priceId?: string) {
    if (!priceId) return;
    paddleRef.current?.Checkout.open({ items: [{ priceId }] });
  }

  function annualSavingsLabel(tier: PricingTier): string | null {
    if (!tier.monthlyPriceId || !tier.annualPriceId) return null;
    const monthly = prices[tier.monthlyPriceId];
    const annual = prices[tier.annualPriceId];
    if (!monthly || !annual || monthly.rawSubtotal <= 0) return null;
    const pct = Math.round((1 - annual.rawSubtotal / 12 / monthly.rawSubtotal) * 100);
    return pct > 0 ? `Save ${pct}%` : null;
  }

  return (
    <div>
      {/* Monthly / Annual toggle */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "inline-flex",
            margin: "0 auto 2.5rem",
            padding: "0.25rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "999px",
            gap: "0.25rem",
          }}
        >
          {(["monthly", "annual"] as BillingPeriod[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "inherit",
                background: period === p ? "#03a9f4" : "transparent",
                color: period === p ? "#fff" : "rgba(226,232,240,0.6)",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {p === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
      </div>

      {/* Tier cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
        {PRICING_TIERS.map((tier) => {
          const isFree = tier.id === "free";
          const priceId = isFree
            ? undefined
            : period === "monthly"
              ? tier.monthlyPriceId
              : tier.annualPriceId;
          const priceInfo = priceId ? prices[priceId] : undefined;
          const priceLabel = isFree ? "Free" : !priceId ? "Coming soon" : priceInfo ? priceInfo.formatted : "…";
          const periodLabel = period === "monthly" ? "/ month" : "/ year";
          const savings = !isFree && period === "annual" ? annualSavingsLabel(tier) : null;
          const featureList = preview ? tier.features.slice(0, 4) : tier.features;

          return (
            <div
              key={tier.id}
              style={{
                background: tier.recommended
                  ? "linear-gradient(135deg, rgba(3,169,244,0.1) 0%, rgba(2,136,209,0.06) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: tier.recommended
                  ? "1px solid rgba(3,169,244,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                padding: "2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {tier.recommended && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#03a9f4",
                    color: "#000",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.85rem",
                    borderRadius: "0 0 0.5rem 0.5rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Recommended
                </div>
              )}

              <p style={{ fontSize: "0.78rem", color: "rgba(226,232,240,0.45)", margin: "0 0 0.35rem" }}>
                {tier.tagline}
              </p>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 1rem",
                }}
              >
                {tier.name}
              </h3>

              {tier.startsTrial && (
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#10b981",
                    fontWeight: 700,
                    margin: "0 0 0.35rem",
                  }}
                >
                  60 days free, then
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  marginBottom: "0.3rem",
                  minHeight: "3.4rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {priceLabel}
                </span>
                {!isFree && priceId && (
                  <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>{periodLabel}</span>
                )}
                {isFree && (
                  <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>forever</span>
                )}
              </div>

              <div style={{ marginBottom: "1rem", minHeight: "1.2rem" }}>
                {savings && (
                  <p style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: 600, margin: 0 }}>
                    {savings} vs monthly
                  </p>
                )}
              </div>

              {/* Usage limits */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1rem",
                }}
              >
                {tier.limits.map((l) => (
                  <li key={l} style={{ fontSize: "0.82rem", color: "rgba(226,232,240,0.65)", fontWeight: 600 }}>
                    {l}
                  </li>
                ))}
              </ul>

              {tier.includesFrom && (
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(226,232,240,0.4)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {tier.includesFrom}
                </p>
              )}

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  flex: 1,
                }}
              >
                {featureList.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      color: "rgba(226,232,240,0.75)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              {isFree || tier.startsTrial ? (
                <Link
                  href={tier.ctaHref ?? "/signup"}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.85rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: tier.recommended ? "none" : "1px solid rgba(255,255,255,0.12)",
                    background: tier.recommended ? "#03a9f4" : "rgba(255,255,255,0.07)",
                    color: tier.recommended ? "#fff" : "rgba(226,232,240,0.8)",
                  }}
                >
                  {tier.cta}
                </Link>
              ) : (
                <button
                  onClick={() => checkout(priceId)}
                  disabled={!priceId}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "0.85rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    fontFamily: "inherit",
                    cursor: priceId ? "pointer" : "not-allowed",
                    border: tier.recommended ? "none" : "1px solid rgba(255,255,255,0.12)",
                    background: !priceId
                      ? "rgba(255,255,255,0.05)"
                      : tier.recommended
                        ? "#03a9f4"
                        : "rgba(255,255,255,0.07)",
                    color: !priceId
                      ? "rgba(226,232,240,0.35)"
                      : tier.recommended
                        ? "#fff"
                        : "rgba(226,232,240,0.8)",
                    opacity: priceId ? 1 : 0.7,
                  }}
                >
                  {priceId ? tier.cta : "Coming soon"}
                </button>
              )}
              {tier.startsTrial && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.76rem",
                    color: "rgba(226,232,240,0.4)",
                    margin: "0.6rem 0 0",
                  }}
                >
                  No credit card required
                </p>
              )}
            </div>
          );
        })}
      </div>

      {preview && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/pricing" style={{ color: "#03a9f4", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>
            See full pricing details →
          </Link>
        </div>
      )}
    </div>
  );
}
