"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export const allFAQs = [
  {
    q: "What file formats are supported?",
    a: "Parametrics supports IGC files — the standard format exported by XCTrack, FlySkyHy, Oudie, Flymaster, Compass, and virtually all modern flight instruments. If your instrument can export IGC, Parametrics can analyze it.",
  },
  {
    q: "Is my flight data private?",
    a: "Yes. Uploaded files are used only for analysis and are not shared with third parties. You can delete your data at any time from within the app.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. The Parametrics app is fully responsive and works on phones and tablets. You can upload and review your analysis from anywhere.",
  },
  {
    q: "Do I need to be a competition pilot to benefit?",
    a: "Not at all. Parametrics is built for intermediate pilots who want to improve through self-coaching. Whether you're flying XC, doing soaring days, or preparing for a competition, the analysis is useful at every level.",
  },
  {
    q: "How does Pilot Benchmark work?",
    a: "Upload multiple IGC files alongside your own and Parametrics compares thermal selection, glide efficiency, and climb rates across all pilots. You can benchmark against anyone — pilots from your group flight, regional champions, world record holders, or anyone who shares their IGC. The gap analysis shows you exactly where the difference is made.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime from your account settings. You'll retain access until the end of your billing period.",
  },
  {
    q: "Is it free to use right now?",
    a: "Yes — Parametrics is completely free during the beta period. No credit card, no trial timer. Sign up, upload your IGC, and start analyzing immediately. Paid plans will unlock advanced features like Pilot Benchmark and PDF export when they launch.",
  },
  {
    q: "How long does analysis take?",
    a: "Analysis is near-instant. Most flights are fully processed within a few seconds of uploading your IGC file.",
  },
];

function FAQItem({
  q,
  a,
  delay = 0,
  inView,
}: {
  q: string;
  a: string;
  delay?: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "0.75rem",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open
            ? "rgba(3,169,244,0.06)"
            : "rgba(255,255,255,0.03)",
          border: "none",
          padding: "1.1rem 1.4rem",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            color: "#e2e8f0",
            fontSize: "0.95rem",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#03a9f4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
          }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              style={{
                padding: "0 1.4rem 1.1rem",
                color: "rgba(226,232,240,0.65)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                background: "rgba(3,169,244,0.03)",
              }}
            >
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection({
  preview = false,
}: {
  preview?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = preview ? allFAQs.slice(0, 4) : allFAQs;

  return (
    <section ref={ref} style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          FAQ
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
            marginBottom: "3rem",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
        >
          {items.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              delay={0.08 * i + 0.2}
              inView={inView}
            />
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <Link
              href="/faq"
              style={{
                color: "#03a9f4",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              View all FAQs →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
