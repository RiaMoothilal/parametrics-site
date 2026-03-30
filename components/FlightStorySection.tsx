"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const DEMO_STORY_URL =
  "https://app.parametrics.app/stories/c0ab4c59eebd0759724ec2dc1a6da2ee/story.html";

export default function FlightStorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #060e1a 0%, #071221 100%)",
        padding: "6rem 1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(3,169,244,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Badge + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#c084fc",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.3rem 0.85rem",
              borderRadius: "999px",
              marginBottom: "1.1rem",
            }}
          >
            Pro feature
          </span>

          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 1rem",
            }}
          >
            Your flight, told as a story
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            AI-generated commentary, automatic event detection, and animated GPS
            replay — shareable with one link.
          </p>
        </motion.div>

        {/* Live demo iframe */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 0 1px rgba(3,169,244,0.12), 0 24px 80px rgba(0,0,0,0.6)",
            background: "#060e1a",
            position: "relative",
          }}
        >
          {/* "Live demo" label */}
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              zIndex: 10,
              background: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "0.25rem 0.7rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "rgba(226,232,240,0.6)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              pointerEvents: "none",
            }}
          >
            Live demo
          </div>

          <iframe
            src={DEMO_STORY_URL}
            title="Parametrics Flight Story demo"
            className="flight-story-iframe"
            style={{
              width: "100%",
              height: "520px",
              border: "none",
              display: "block",
            }}
            allow="autoplay"
            loading="lazy"
          />
          <style>{`
            @media (max-width: 768px) {
              .flight-story-iframe { height: 320px !important; }
            }
          `}</style>
        </motion.div>

        {/* Caption + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <p
            style={{
              color: "rgba(226,232,240,0.38)",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            Real flight data. AI commentary via Claude. Voice narration via OpenAI.
          </p>

          <Link
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#03a9f4",
              color: "#fff",
              padding: "0.55rem 1.2rem",
              borderRadius: "0.5rem",
              fontSize: "0.88rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "background 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 0 20px rgba(3,169,244,0.3)",
            }}
          >
            Get Free Access
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
