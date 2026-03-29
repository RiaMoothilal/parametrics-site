"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// ─── PayFast hidden fields ────────────────────────────────────────────────────

const PAYFAST_MONTHLY_FIELDS = [
  { name: "merchant_id", value: "24168664" },
  { name: "merchant_key", value: "h39r3bcx016jr" },
  { name: "return_url", value: "https://parametrics.app/welcome" },
  { name: "cancel_url", value: "https://parametrics.app/pricing" },
  { name: "notify_url", value: "https://beta.parametrics.app/webhook/payfast" },
  { name: "m_payment_id", value: "parametrics_monthly" },
  { name: "amount", value: "170.00" },
  { name: "item_name", value: "Parametrics Pilot - Monthly" },
  { name: "subscription_type", value: "1" },
  { name: "recurring_amount", value: "170.00" },
  { name: "frequency", value: "3" },
  { name: "cycles", value: "0" },
  { name: "custom_str1", value: "monthly" },
];

const PAYFAST_ANNUAL_FIELDS = [
  { name: "merchant_id", value: "24168664" },
  { name: "merchant_key", value: "h39r3bcx016jr" },
  { name: "return_url", value: "https://parametrics.app/welcome" },
  { name: "cancel_url", value: "https://parametrics.app/pricing" },
  { name: "notify_url", value: "https://beta.parametrics.app/webhook/payfast" },
  { name: "m_payment_id", value: "parametrics_annual" },
  { name: "amount", value: "1550.00" },
  { name: "item_name", value: "Parametrics Pilot - Annual" },
  { name: "subscription_type", value: "1" },
  { name: "recurring_amount", value: "1550.00" },
  { name: "frequency", value: "6" },
  { name: "cycles", value: "0" },
  { name: "custom_str1", value: "annual" },
];

// ─── Plans ───────────────────────────────────────────────────────────────────

const FREE_LOCKED_FEATURES = [
  "AI coaching: Safety, Glide, Landing, Overview, Comparison pages",
  "Missed thermal opportunities (map and detail table)",
  "3D landing approach visualization",
  "Glide performance map",
  "Multi-pilot comparison beyond 2 pilots",
  "In-Depth and Full Analytics modes",
];

const plans = [
  {
    id: "beta",
    name: "Free",
    price: "Free",
    period: "",
    note: "First 60 days at Pro level — free",
    features: [
      "Upload and process IGC flight files",
      "Full flight summary (duration, altitude, thermals, wind, landing finals)",
      "Altitude timeline and flight phase breakdown",
      "Interactive flight map",
      "Thermal performance overview (avg climb rate, centering score, commit delay)",
      "Safety overview (time below 100m AGL, low save count)",
      "Landing analysis (8 metrics, final turn altitude, Safe/Tight/Risky verdict)",
      "Landing approach map (2D satellite view)",
      "Glide performance overview (avg ratio, avg speed)",
      "AI thermal coaching (full, on every report)",
      "3 reports per month",
      "Up to 2 pilots per report",
      "14-day report history",
    ],
    lockedFeatures: FREE_LOCKED_FEATURES,
    cta: "Get Free Access",
    href: "/signup",
    payfastFields: null as { name: string; value: string }[] | null,
    highlighted: false,
    accent: "#10b981",
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "R170",
    period: "/ month",
    note: "~$9 USD / month",
    features: [
      "Everything in Free, plus:",
      "AI coaching on every analysis page (Safety, Glide, Landing, Overview, Comparison)",
      "Missed thermal opportunities — map showing exact locations, strength, and altitude",
      "3D landing approach visualization (interactive, rotatable)",
      "Glide performance map",
      "Multi-pilot comparison (up to 10 pilots per report)",
      "In-Depth and Full Analytics modes",
      "Benchmark pilot comparison (compare against a named pilot, not just group average)",
      "Wind analysis map",
      "20 reports per month",
      "180-day report history",
    ],
    lockedFeatures: [] as string[],
    cta: "Subscribe Monthly",
    href: null as string | null,
    payfastFields: PAYFAST_MONTHLY_FIELDS,
    highlighted: false,
    accent: "#03a9f4",
  },
  {
    id: "annual",
    name: "Annual",
    price: "R1,550",
    period: "/ year",
    note: "~$84 USD / year — 2 months free",
    features: [
      "Everything in Free, plus:",
      "AI coaching on every analysis page (Safety, Glide, Landing, Overview, Comparison)",
      "Missed thermal opportunities — map showing exact locations, strength, and altitude",
      "3D landing approach visualization (interactive, rotatable)",
      "Glide performance map",
      "Multi-pilot comparison (up to 10 pilots per report)",
      "In-Depth and Full Analytics modes",
      "Benchmark pilot comparison (compare against a named pilot, not just group average)",
      "Wind analysis map",
      "20 reports per month",
      "180-day report history",
    ],
    lockedFeatures: [] as string[],
    cta: "Subscribe Annually",
    href: null as string | null,
    payfastFields: PAYFAST_ANNUAL_FIELDS,
    highlighted: true,
    accent: "#03a9f4",
  },
];

function Check({ color }: { color: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Lock() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(226,232,240,0.3)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function PricingSection({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{
            textAlign: "center",
            color: "#03a9f4",
            fontSize: "0.82rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.75rem",
          }}
        >
          Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            letterSpacing: "-0.025em",
            marginBottom: "0.5rem",
          }}
        >
          Simple, Transparent Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.6)",
            fontSize: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          Sign up free, or subscribe for the full feature set.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.35)",
            fontSize: "0.8rem",
            marginBottom: "3rem",
          }}
        >
          Charged in ZAR via PayFast. USD figures are approximate at current rates.
        </motion.p>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, rgba(3,169,244,0.1) 0%, rgba(2,136,209,0.06) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlighted
                  ? "1px solid rgba(3,169,244,0.35)"
                  : `1px solid rgba(255,255,255,0.08)`,
                borderRadius: "1rem",
                padding: "2rem",
                position: "relative",
              }}
            >
              {plan.highlighted && (
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
                  Best Value
                </div>
              )}

              {/* Plan name + badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "rgba(226,232,240,0.7)",
                    margin: 0,
                  }}
                >
                  {plan.name}
                </h3>
                {plan.id === "beta" && (
                  <span
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      color: "#10b981",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.55rem",
                      borderRadius: "999px",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Open now
                  </span>
                )}
              </div>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.2rem",
                  marginBottom: "0.3rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: plan.id === "beta" ? "2.2rem" : "2.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.note ? (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: plan.id === "beta" ? "#10b981" : "rgba(226,232,240,0.55)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {plan.note}
                </p>
              ) : (
                <div style={{ marginBottom: "1.5rem" }} />
              )}

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      color: "rgba(226,232,240,0.75)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <span style={{ marginTop: "2px" }}><Check color={plan.accent} /></span>
                    {f}
                  </li>
                ))}
                {plan.lockedFeatures.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      color: "rgba(226,232,240,0.3)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <span style={{ marginTop: "2px" }}><Lock /></span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.payfastFields ? (
                <form
                  action="https://www.payfast.co.za/eng/process"
                  method="post"
                  style={{ margin: 0 }}
                >
                  {plan.payfastFields.map((field) => (
                    <input
                      key={field.name}
                      type="hidden"
                      name={field.name}
                      value={field.value}
                    />
                  ))}
                  <button
                    type="submit"
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      padding: "0.8rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      background: plan.highlighted ? "#03a9f4" : "rgba(255,255,255,0.07)",
                      color: plan.highlighted ? "#fff" : "rgba(226,232,240,0.8)",
                      border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.12)",
                      transition: "background 0.2s",
                    }}
                  >
                    {plan.cta}
                  </button>
                </form>
              ) : (
                <>
                  <Link
                    href={plan.href!}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.8rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: "rgba(16,185,129,0.15)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,0.3)",
                      transition: "background 0.2s",
                    }}
                  >
                    {plan.cta}
                  </Link>
                  {plan.id === "beta" && (
                    <div
                      style={{
                        marginTop: "0.85rem",
                        padding: "0.65rem 0.85rem",
                        background: "rgba(3,169,244,0.06)",
                        border: "1px solid rgba(3,169,244,0.18)",
                        borderRadius: "0.5rem",
                        display: "flex",
                        gap: "0.55rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                        <circle cx="8" cy="8" r="6.5" stroke="#03a9f4" strokeWidth="1.3" />
                        <path d="M8 5v4M8 11v1" stroke="#03a9f4" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                      <p style={{ color: "rgba(226,232,240,0.6)", fontSize: "0.78rem", lineHeight: 1.5, margin: 0 }}>
                        Sign in with Google using the same email you register with.
                      </p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.4)",
            fontSize: "0.82rem",
            marginTop: "1.5rem",
          }}
        >
          Paid plans · Cancel anytime · No long-term contracts
        </motion.p>

        {preview && (
          <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
            <Link
              href="/pricing"
              style={{
                color: "#03a9f4",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              See full pricing details →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
