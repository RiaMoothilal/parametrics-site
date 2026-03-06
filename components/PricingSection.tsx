"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const APP_URL = "https://app.parametrics.app";

const plans = [
  {
    name: "Monthly",
    price: "$12",
    period: "/ month",
    annualNote: null,
    features: [
      "Unlimited IGC uploads",
      "Thermal analysis",
      "Glide efficiency reports",
      "Missed thermal detection",
      "Risk metrics",
      "Coaching summaries",
      "7-day free trial",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Annual",
    price: "$8",
    period: "/ month",
    annualNote: "Billed annually — save 33%",
    features: [
      "Everything in Monthly",
      "Batch pilot comparison",
      "Priority support",
      "Early access to new features",
      "Flight history archive",
      "Export reports as PDF",
      "7-day free trial",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#03a9f4"
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
          Try Parametrics free for 7 days. No credit card required.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i + 0.2 }}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, rgba(3,169,244,0.1) 0%, rgba(2,136,209,0.06) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlighted
                  ? "1px solid rgba(3,169,244,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
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
                  Most Popular
                </div>
              )}

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "rgba(226,232,240,0.7)",
                  marginBottom: "0.75rem",
                }}
              >
                {plan.name}
              </h3>

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
                    fontSize: "2.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}
                >
                  {plan.period}
                </span>
              </div>

              {plan.annualNote && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#10b981",
                    marginBottom: "1.5rem",
                  }}
                >
                  {plan.annualNote}
                </p>
              )}
              {!plan.annualNote && (
                <div style={{ marginBottom: "1.5rem" }} />
              )}

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
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.8rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: plan.highlighted
                    ? "#03a9f4"
                    : "rgba(255,255,255,0.07)",
                  color: plan.highlighted ? "#fff" : "rgba(226,232,240,0.8)",
                  border: plan.highlighted
                    ? "none"
                    : "1px solid rgba(255,255,255,0.12)",
                  transition: "background 0.2s",
                }}
              >
                {plan.cta}
              </a>
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
            marginTop: "2rem",
          }}
        >
          Cancel anytime · No contracts · 7-day free trial
        </motion.p>

        {preview && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a
              href="/pricing"
              style={{
                color: "#03a9f4",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              See full pricing details →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
