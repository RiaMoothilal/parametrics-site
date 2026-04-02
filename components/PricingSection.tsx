"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const FEATURES = [
  "Upload and process IGC flight files",
  "Full flight summary (duration, altitude, thermals, wind, landing finals)",
  "Altitude timeline and flight phase breakdown",
  "Interactive flight map",
  "Thermal performance overview (avg climb rate, centering score, commit delay)",
  "Safety overview (time below 100m AGL, low save count)",
  "Landing analysis (8 metrics, final turn altitude, Safe/Tight/Risky verdict)",
  "Landing approach map (2D satellite view)",
  "Glide performance overview (avg ratio, avg speed)",
  "AI coaching on every analysis page (Safety, Glide, Landing, Overview, Comparison)",
  "Missed thermal opportunities — map showing exact locations, strength, and altitude",
  "3D landing approach visualization (interactive, rotatable)",
  "Glide performance map",
  "Multi-pilot comparison (up to 10 pilots per report)",
  "In-Depth and Full Analytics modes",
  "Benchmark pilot comparison (compare against any named pilot)",
  "Wind analysis map",
  "20 reports per month",
  "180-day report history",
];

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "R60",
    period: "/ month",
    trialNote: "60-day free trial, then R60/month",
    highlighted: false,
    accent: "#03a9f4",
  },
  {
    id: "annual",
    name: "Annual",
    price: "R600",
    period: "/ year",
    trialNote: "60-day free trial, then R600/year",
    highlighted: true,
    accent: "#03a9f4",
    badge: "Best Value",
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
          Try Pro Free for 60 Days
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.6)",
            fontSize: "1rem",
            marginBottom: "3rem",
          }}
        >
          Full Pro access from day one. No credit card required.
        </motion.p>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            maxWidth: "700px",
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
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                padding: "2rem",
                position: "relative",
              }}
            >
              {"badge" in plan && plan.badge && (
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
                  {plan.badge}
                </div>
              )}

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "rgba(226,232,240,0.7)",
                  margin: "0 0 0.75rem",
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
                <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>
                  {plan.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(226,232,240,0.55)",
                  marginBottom: "1.75rem",
                }}
              >
                {plan.trialNote}
              </p>

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
                {FEATURES.map((f) => (
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
              </ul>

              <Link
                href="/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.8rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: plan.highlighted ? "#03a9f4" : "rgba(255,255,255,0.07)",
                  color: plan.highlighted ? "#fff" : "rgba(226,232,240,0.8)",
                  border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Start free trial
              </Link>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.78rem",
                  color: "rgba(226,232,240,0.35)",
                  margin: "0.6rem 0 0",
                }}
              >
                No credit card required
              </p>
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
          Cancel anytime · No long-term contracts · Charged in ZAR
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
