"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const screens = [
  {
    label: "Thermal Analysis",
    sub: "Climb rate, centering quality, and time-in-core across every thermal in your flight.",
    src: "/screenshots/thermal-analysis.png",
    accent: "#03a9f4",
  },
  {
    label: "Gliding Line Choice",
    sub: "Every glide leg rated and mapped — compare your transitions to your group.",
    src: "/screenshots/glide-efficiency.png",
    accent: "#a855f7",
  },
  {
    label: "Coaching Summary",
    sub: "Automated, readable insights on exactly where your biggest gains are hiding.",
    src: "/screenshots/coaching-summary.png",
    accent: "#10b981",
  },
];

export default function ScreenshotGallery() {
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
          Inside the App
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
            marginBottom: "0.75rem",
          }}
        >
          Data That Actually Explains Your Flying
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.55)",
            fontSize: "0.95rem",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          From your first thermal to your final glide — every decision, quantified and explained.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {screens.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              {/* Screenshot panel */}
              <div
                style={{
                  background: "#080f1a",
                  borderBottom: `1px solid ${s.accent}22`,
                  position: "relative",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Caption */}
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <p
                  style={{
                    color: s.accent,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 0.3rem",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    color: "rgba(226,232,240,0.55)",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {s.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
