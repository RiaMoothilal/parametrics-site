"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const screenshots = [
  {
    label: "Thermal Analysis Dashboard",
    file: "/screenshots/thermal-analysis.png",
  },
  {
    label: "Glide Efficiency Report",
    file: "/screenshots/glide-efficiency.png",
  },
  {
    label: "Coaching Summary",
    file: "/screenshots/coaching-summary.png",
  },
];

function PlaceholderScreen({ label }: { label: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "2px dashed rgba(3,169,244,0.2)",
        borderRadius: "0.75rem",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "1.5rem",
      }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(3,169,244,0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <p
        style={{
          color: "rgba(3,169,244,0.5)",
          fontSize: "0.8rem",
          textAlign: "center",
          margin: 0,
        }}
      >
        {label}
        <br />
        <span style={{ opacity: 0.6, fontSize: "0.72rem" }}>
          Replace with screenshot in /public/screenshots/
        </span>
      </p>
    </div>
  );
}

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
          Product Preview
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
          See Your Flight Like Never Before
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.55)",
            fontSize: "0.95rem",
            maxWidth: "500px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          Beautiful, data-rich dashboards designed for pilots who think
          analytically about their flying.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {screenshots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
            >
              <PlaceholderScreen label={s.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
