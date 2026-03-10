"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Mini dashboard mockups ───────────────────────────────────────────────────

function ThermalMockup() {
  return (
    <svg width="100%" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <rect width="360" height="200" rx="8" fill="#0b1929" />
      {/* Header bar */}
      <rect x="0" y="0" width="360" height="32" rx="8" fill="#0f2235" />
      <circle cx="16" cy="16" r="4" fill="#03a9f4" opacity="0.9" />
      <rect x="28" y="11" width="80" height="10" rx="3" fill="rgba(226,232,240,0.15)" />
      <rect x="300" y="10" width="44" height="12" rx="3" fill="rgba(3,169,244,0.2)" />
      {/* Metric chips */}
      {([
        { x: 12, label: "Avg Climb", value: "2.4 m/s", color: "#03a9f4" },
        { x: 130, label: "Best Core", value: "4.1 m/s", color: "#10b981" },
        { x: 248, label: "Thermals", value: "9", color: "#a855f7" },
      ] as { x: number; label: string; value: string; color: string }[]).map((m) => (
        <g key={m.label}>
          <rect x={m.x} y="42" width="108" height="44" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x={m.x + 8} y="57" fill="rgba(226,232,240,0.45)" fontSize="7.5" fontFamily="monospace">{m.label}</text>
          <text x={m.x + 8} y="74" fill={m.color} fontSize="13" fontFamily="monospace" fontWeight="bold">{m.value}</text>
        </g>
      ))}
      {/* Bar chart — thermal climb rates */}
      <text x="12" y="108" fill="rgba(226,232,240,0.4)" fontSize="7" fontFamily="monospace">CLIMB RATE BY THERMAL</text>
      {[52, 80, 95, 68, 110, 78, 60, 88, 42].map((h, i) => (
        <g key={i}>
          <rect
            x={12 + i * 36}
            y={160 - h}
            width="26"
            height={h}
            rx="3"
            fill={i === 4 ? "rgba(16,185,129,0.35)" : `rgba(3,169,244,${0.25 + (h / 110) * 0.6})`}
            stroke={i === 4 ? "#10b981" : "rgba(3,169,244,0.3)"}
            strokeWidth="0.5"
          />
          <text x={12 + i * 36 + 13} y="175" fill="rgba(226,232,240,0.3)" fontSize="6" fontFamily="monospace" textAnchor="middle">T{i + 1}</text>
          {i === 4 && (
            <text x={12 + i * 36 + 13} y={160 - 110 - 5} fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">★</text>
          )}
        </g>
      ))}
      <line x1="12" y1="161" x2="336" y2="161" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <rect x="12" y="182" width="116" height="12" rx="3" fill="rgba(3,169,244,0.08)" />
      <text x="18" y="191" fill="rgba(3,169,244,0.7)" fontSize="7" fontFamily="monospace">Thermal Analysis</text>
    </svg>
  );
}

function PilotBenchmarkMockup() {
  const rows = [
    { label: "Thermal Centering", you: 62, them: 91, color: "#03a9f4" },
    { label: "Climb Rate", you: 70, them: 88, color: "#10b981" },
    { label: "Glide Efficiency", you: 55, them: 84, color: "#f59e0b" },
    { label: "Thermal Selection", you: 48, them: 79, color: "#ef4444" },
    { label: "Speed Control", you: 73, them: 85, color: "#a855f7" },
  ];
  return (
    <svg width="100%" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <rect width="360" height="200" rx="8" fill="#0b1929" />
      <rect x="0" y="0" width="360" height="32" rx="8" fill="#0f2235" />
      <circle cx="16" cy="16" r="4" fill="#a855f7" opacity="0.9" />
      <rect x="28" y="11" width="90" height="10" rx="3" fill="rgba(226,232,240,0.15)" />
      <rect x="264" y="10" width="80" height="12" rx="3" fill="rgba(168,85,247,0.2)" />
      {/* Legend */}
      <circle cx="20" cy="48" r="4" fill="#03a9f4" />
      <text x="28" y="52" fill="rgba(226,232,240,0.6)" fontSize="8" fontFamily="monospace">You</text>
      <circle cx="64" cy="48" r="4" fill="#a855f7" />
      <text x="72" y="52" fill="rgba(226,232,240,0.6)" fontSize="8" fontFamily="monospace">World Champion</text>
      {/* Comparison bars */}
      {rows.map((row, i) => (
        <g key={row.label}>
          <text x="12" y={70 + i * 26} fill="rgba(226,232,240,0.45)" fontSize="7" fontFamily="monospace">{row.label}</text>
          <rect x="128" y={60 + i * 26} width={row.them * 2.0} height="10" rx="2" fill="rgba(168,85,247,0.15)" />
          <rect x="128" y={60 + i * 26} width={row.you * 2.0} height="10" rx="2" fill={`${row.color}88`} />
          <text x={128 + row.you * 2.0 + 4} y={69 + i * 26} fill={row.color} fontSize="7" fontFamily="monospace">{row.you}%</text>
          <text x={128 + row.them * 2.0 + 4} y={69 + i * 26} fill="rgba(168,85,247,0.6)" fontSize="7" fontFamily="monospace">{row.them}%</text>
        </g>
      ))}
      <rect x="12" y="182" width="200" height="12" rx="3" fill="rgba(168,85,247,0.08)" />
      <text x="18" y="191" fill="rgba(168,85,247,0.7)" fontSize="7" fontFamily="monospace">Pilot Benchmark — vs World Champion</text>
    </svg>
  );
}

function CoachingSummaryMockup() {
  const insights = [
    { text: "✅  Thermal centering excellent on T4 and T7", color: "#10b981" },
    { text: "⚡  Missed strong lift at 14:23 — 0.8 m/s detected", color: "#f59e0b" },
    { text: "📐  Glide on leg 3 could improve with +8 km/h", color: "#03a9f4" },
    { text: "⚠️   Low save at 312m AGL — manage risk earlier", color: "#ef4444" },
  ];
  return (
    <svg width="100%" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <rect width="360" height="200" rx="8" fill="#0b1929" />
      <rect x="0" y="0" width="360" height="32" rx="8" fill="#0f2235" />
      <circle cx="16" cy="16" r="4" fill="#10b981" opacity="0.9" />
      <rect x="28" y="11" width="90" height="10" rx="3" fill="rgba(226,232,240,0.15)" />
      {/* Score ring */}
      <circle cx="52" cy="112" r="32" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
      <path d="M52 80 A32 32 0 1 1 24 130" stroke="#10b981" strokeWidth="7" strokeLinecap="round" fill="none" />
      <text x="52" y="109" fill="#10b981" fontSize="15" fontFamily="monospace" textAnchor="middle" fontWeight="bold">78</text>
      <text x="52" y="121" fill="rgba(226,232,240,0.4)" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Flight Score</text>
      {/* Insight cards */}
      {insights.map((item, i) => (
        <g key={i}>
          <rect x="100" y={44 + i * 35} width="252" height="27" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <rect x="100" y={44 + i * 35} width="3" height="27" rx="1.5" fill={item.color} />
          <text x="112" y={62 + i * 35} fill="rgba(226,232,240,0.65)" fontSize="7.5" fontFamily="monospace">{item.text}</text>
        </g>
      ))}
      <rect x="12" y="182" width="120" height="12" rx="3" fill="rgba(16,185,129,0.08)" />
      <text x="18" y="191" fill="rgba(16,185,129,0.7)" fontSize="7" fontFamily="monospace">Coaching Summary</text>
    </svg>
  );
}

const screens = [
  {
    label: "Thermal Analysis",
    sub: "Climb rate, centering quality, and time-in-core across every thermal in your flight.",
    mockup: <ThermalMockup />,
    accent: "#03a9f4",
  },
  {
    label: "Pilot Benchmark",
    sub: "Compare your metrics against group flights, world champions, or record holders — anyone with an IGC.",
    mockup: <PilotBenchmarkMockup />,
    accent: "#a855f7",
  },
  {
    label: "Coaching Summary",
    sub: "Automated, readable insights on exactly where your biggest gains are hiding.",
    mockup: <CoachingSummaryMockup />,
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
              {/* Mockup panel */}
              <div
                style={{
                  background: "#080f1a",
                  borderBottom: `1px solid ${s.accent}22`,
                  padding: "1rem",
                }}
              >
                {s.mockup}
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
