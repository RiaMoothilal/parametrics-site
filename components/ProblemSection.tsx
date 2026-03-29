"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const APP_URL = "https://beta.parametrics.app";

const questions = [
  { q: "Was that thermal actually good?", icon: "🌀", highlight: false },
  { q: "Did I leave climbs too early?", icon: "⬆️", highlight: false },
  { q: "Was my glide efficient?", icon: "📐", highlight: false },
  { q: "Did I miss thermals along track?", icon: "👁️", highlight: false },
  { q: "Why did other pilots climb better than me?", icon: "📊", highlight: true },
  { q: "Was my landing approach risky?", icon: "⚠️", highlight: false },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            color: "#03a9f4",
            fontSize: "0.82rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        >
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            marginBottom: "1rem",
            maxWidth: "700px",
            margin: "0 auto 1rem",
          }}
        >
          After Every Flight, You Have Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.6)",
            fontSize: "1.05rem",
            maxWidth: "560px",
            margin: "0 auto 3.5rem",
            lineHeight: 1.6,
          }}
        >
          Most pilots land not knowing what went right and what went wrong.
          Without data, improvement is guesswork.
        </motion.p>

        {/* Question cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0.9rem",
            marginBottom: "4rem",
          }}
        >
          {questions.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
              style={{
                background: item.highlight
                  ? "rgba(168,85,247,0.07)"
                  : "rgba(255,255,255,0.03)",
                border: item.highlight
                  ? "1px solid rgba(168,85,247,0.3)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "1.1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
              <p
                style={{
                  color: item.highlight
                    ? "rgba(226,232,240,0.92)"
                    : "rgba(226,232,240,0.75)",
                  fontSize: item.highlight ? "1rem" : "0.95rem",
                  fontWeight: item.highlight ? 600 : 400,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "{item.q}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            background: "linear-gradient(135deg, rgba(3,169,244,0.12) 0%, rgba(2,136,209,0.08) 100%)",
            border: "1px solid rgba(3,169,244,0.2)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            🪂
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Parametrics Gives You the Answers
          </h3>
          <p
            style={{
              color: "rgba(226,232,240,0.65)",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto 1.5rem",
              lineHeight: 1.6,
            }}
          >
            Upload your group's flights — yours and anyone who flew the same day.
            See who climbed better, where they gained the altitude, and exactly what to do differently.
          </p>
          <a
            href="/signup"
            style={{
              display: "inline-block",
              background: "#03a9f4",
              color: "#fff",
              padding: "0.75rem 1.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Compare Your Group Flight →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
