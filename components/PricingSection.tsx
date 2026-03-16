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
  { name: "signature", value: "27dc36d39ca19b5cb576f6c5359b1227" },
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
  { name: "signature", value: "e4edb8267801a3b75b5c4621e9b11e21" },
];

// ─── Plans ───────────────────────────────────────────────────────────────────

const plans = [
  {
    id: "beta",
    name: "Beta",
    price: "Free",
    period: "",
    note: "During beta period",
    features: [
      "Thermal analysis",
      "Glide efficiency",
      "Missed thermal detection",
      "Risk metrics",
      "Coaching summary",
      "IGC file upload",
    ],
    cta: "Join Beta — Free",
    href: "/beta",
    payfastFields: null as { name: string; value: string }[] | null,
    highlighted: false,
    accent: "#10b981",
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$9",
    period: "/ month",
    note: "billed as R170/month",
    features: [
      "Everything in Beta",
      "Benefit X",
      "Benefit X",
      "Benefit X",
      "Benefit X",
    ],
    cta: "Subscribe Monthly",
    href: null as string | null,
    payfastFields: PAYFAST_MONTHLY_FIELDS,
    highlighted: false,
    accent: "#03a9f4",
  },
  {
    id: "annual",
    name: "Annual",
    price: "$7",
    period: "/ month",
    note: "billed as $84/year (R1,550) — 2 months free",
    features: [
      "Everything in Monthly",
      "Benefit X",
      "Benefit X",
      "Benefit X",
      "Benefit X",
      "Benefit X",
    ],
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
            marginBottom: "3.5rem",
          }}
        >
          Join the free beta, or subscribe for the full feature set.
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
                    color: plan.id === "beta" ? "#10b981" : "rgba(226,232,240,0.4)",
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
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "rgba(226,232,240,0.75)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <Check color={plan.accent} />
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
              )}
            </motion.div>
          ))}
        </div>

        {/* Email match notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            maxWidth: "640px",
            margin: "2.25rem auto 0",
            padding: "0.9rem 1.1rem",
            background: "rgba(3,169,244,0.06)",
            border: "1px solid rgba(3,169,244,0.18)",
            borderRadius: "0.75rem",
            display: "flex",
            gap: "0.7rem",
            alignItems: "flex-start",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ flexShrink: 0, marginTop: "1px" }}
          >
            <circle cx="8" cy="8" r="6.5" stroke="#03a9f4" strokeWidth="1.3" />
            <path d="M8 5v4M8 11v1" stroke="#03a9f4" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <p
            style={{
              color: "rgba(226,232,240,0.65)",
              fontSize: "0.84rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong style={{ color: "rgba(226,232,240,0.9)" }}>Getting started:</strong> After joining beta or subscribing, head to{" "}
            <a
              href="https://beta.parametrics.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#03a9f4", textDecoration: "none" }}
            >
              beta.parametrics.app
            </a>{" "}
            and sign in with Google using the same email you registered with. That&rsquo;s it.
          </p>
        </motion.div>

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
