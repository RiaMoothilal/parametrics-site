"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "I immediately saw why I was climbing worse than others. The thermal centering analysis was eye-opening — I had no idea how much height I was wasting.",
    name: "Marcus R.",
    role: "XC Pilot, 300+ hours",
    initials: "MR",
    color: "#03a9f4",
  },
  {
    quote:
      "The coaching summary reads like advice from an experienced instructor. I shared it with my coach and he was impressed by how detailed the analysis was.",
    name: "Sophia L.",
    role: "Competition Pilot",
    initials: "SL",
    color: "#10b981",
  },
  {
    quote:
      "The Pilot Benchmark feature changed everything for me. Seeing exactly where the top pilots diverged from my track on the same day told me everything I needed to know.",
    name: "James T.",
    role: "Intermediate Pilot, Club Instructor",
    initials: "JT",
    color: "#a855f7",
  },
];

function StarRating() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#f59e0b"
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ padding: "6rem 1.5rem" }}
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
          Pilot Stories
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
            marginBottom: "3.5rem",
          }}
        >
          Pilots Who Fly Better With Data
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <StarRating />
              <blockquote
                style={{
                  margin: "0 0 1.5rem",
                  color: "rgba(226,232,240,0.8)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: t.color,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      color: "rgba(226,232,240,0.45)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credibility banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: "center",
            padding: "1.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "0.75rem",
          }}
        >
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "0.9rem",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            ✈️ &nbsp;
            <strong style={{ color: "rgba(226,232,240,0.8)" }}>
              Built by a competition pilot and instructor with thousands of flights.
            </strong>{" "}
            Parametrics was created from the inside — by a pilot who wanted better answers about their own flying.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
