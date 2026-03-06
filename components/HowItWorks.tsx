"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Upload Your IGC File",
    description:
      "Export your flight log from XCTrack, FlySkyHy, Oudie, or any other instrument and upload the IGC file directly to Parametrics.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03a9f4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Automatic Flight Analysis",
    description:
      "Parametrics processes your flight data instantly — detecting thermals, computing glide ratios, identifying missed lift, and scoring your decisions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03a9f4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Improve With Actionable Insights",
    description:
      "Receive a coaching summary with specific, concrete advice. Apply the insights to your next flight and track your improvement over time.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03a9f4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
          How It Works
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
          Three Steps to Better Flying
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
              style={{
                position: "relative",
                textAlign: "center",
                padding: "2rem 1.5rem",
              }}
            >
              {/* Connector line (not last item) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "3.5rem",
                    right: "-10%",
                    width: "20%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(3,169,244,0.4), rgba(3,169,244,0.1))",
                    display: "none", // hidden on mobile
                  }}
                />
              )}

              {/* Step number */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "rgba(3,169,244,0.07)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              {/* Icon circle */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(3,169,244,0.08)",
                  border: "1px solid rgba(3,169,244,0.25)",
                  marginBottom: "1.25rem",
                  position: "relative",
                }}
              >
                {step.icon}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "-2px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#03a9f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: "#000",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.6rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "rgba(226,232,240,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "320px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
