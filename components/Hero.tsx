"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const APP_URL = "https://beta.parametrics.app";

// ─── Animation variants ───────────────────────────────────────────────────────

const copyContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ─── Metric card ─────────────────────────────────────────────────────────────

function MetricCard({
  label,
  value,
  color,
  sub,
}: {
  label: string;
  value: string;
  color: string;
  sub?: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "6px",
        padding: "0.55rem 0.65rem",
      }}
    >
      <div
        style={{
          fontSize: "0.58rem",
          color: "rgba(226,232,240,0.38)",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          marginBottom: "0.28rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color,
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{
            fontSize: "0.58rem",
            color: "rgba(226,232,240,0.3)",
            marginTop: "0.18rem",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

// ─── Flight map SVG ──────────────────────────────────────────────────────────

function FlightMapSVG() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 158"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <defs>
        {/* Flight path gradient */}
        <linearGradient id="flightGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0369a1" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#03a9f4" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
        </linearGradient>
        {/* Glide path glow filter */}
        <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Thermal glow filter */}
        <filter id="thermalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Clip path for map */}
        <clipPath id="mapClip">
          <rect x="0" y="0" width="280" height="158" rx="0" />
        </clipPath>
      </defs>

      <g clipPath="url(#mapClip)">
        {/* Dark map background */}
        <rect x="0" y="0" width="280" height="158" fill="rgba(5,12,28,0.6)" />

        {/* Very subtle terrain grid */}
        <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
        <line x1="0" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
        <line x1="0" y1="120" x2="280" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
        <line x1="70" y1="0" x2="70" y2="158" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
        <line x1="140" y1="0" x2="140" y2="158" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
        <line x1="210" y1="0" x2="210" y2="158" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />

        {/* Terrain contour lines — suggest mountain ridges */}
        <path
          d="M 0,155 Q 35,140 70,148 Q 110,155 150,138 Q 195,120 235,132 Q 260,140 280,128"
          fill="none"
          stroke="rgba(255,255,255,0.055)"
          strokeWidth="0.8"
        />
        <path
          d="M 0,142 Q 40,126 85,132 Q 125,137 165,118 Q 205,100 245,112 Q 265,118 280,110"
          fill="none"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="0.8"
        />
        <path
          d="M 15,128 Q 55,110 95,116 Q 138,122 175,100 Q 212,82 250,95"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.8"
        />
        <path
          d="M 40,112 Q 78,92 115,98 Q 152,104 188,82 Q 218,64 252,74"
          fill="none"
          stroke="rgba(255,255,255,0.035)"
          strokeWidth="0.8"
        />

        {/* Launch site marker */}
        <circle cx="16" cy="145" r="3" fill="#10b981" opacity="0.9" />
        <circle cx="16" cy="145" r="5.5" fill="none" stroke="#10b981" strokeWidth="0.8" opacity="0.45" />
        <text x="21" y="142" fontSize="5" fill="rgba(16,185,129,0.7)" fontFamily="system-ui">Launch</text>

        {/* Flight path — glide → T1 spiral → glide → missed → T2 spiral → final glide */}
        {/* Segment 1: Launch → into T1 */}
        <path
          d="M 16,145 C 32,136 52,122 72,110 C 80,104 88,96 84,84 C 80,73 75,70 78,77 C 81,83 86,82 83,76 C 80,70 76,68 79,74"
          fill="none"
          stroke="url(#flightGrad)"
          strokeWidth="1.6"
          filter="url(#pathGlow)"
          strokeLinecap="round"
        />
        {/* Segment 2: T1 exit → toward missed thermal */}
        <path
          d="M 79,74 C 92,68 115,70 140,76 C 152,79 158,78 163,76"
          fill="none"
          stroke="url(#flightGrad)"
          strokeWidth="1.6"
          filter="url(#pathGlow)"
          strokeLinecap="round"
        />
        {/* Segment 3: Past missed → into T2 */}
        <path
          d="M 163,76 C 175,73 188,68 196,60 C 200,55 200,48 196,52 C 192,57 194,60 198,55 C 200,50 198,46 200,52"
          fill="none"
          stroke="url(#flightGrad)"
          strokeWidth="1.6"
          filter="url(#pathGlow)"
          strokeLinecap="round"
        />
        {/* Segment 4: T2 exit → final glide to landing */}
        <path
          d="M 200,52 C 218,48 240,60 258,82 C 264,92 268,104 265,120"
          fill="none"
          stroke="url(#flightGrad)"
          strokeWidth="1.6"
          filter="url(#pathGlow)"
          strokeLinecap="round"
        />

        {/* ── Thermal 1 — good (green) ── */}
        <circle cx="80" cy="76" r="14" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth="0.9" strokeDasharray="2.5,2" opacity="0.8" />
        <circle cx="80" cy="76" r="8" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="0.9" opacity="0.9" />
        <circle cx="80" cy="76" r="3.5" fill="#10b981" opacity="0.95" />
        <text x="88" y="72" fontSize="5" fill="rgba(16,185,129,0.9)" fontFamily="system-ui" fontWeight="600">T1</text>
        <text x="88" y="78" fontSize="4.5" fill="rgba(16,185,129,0.6)" fontFamily="system-ui">+4.2 m/s</text>

        {/* ── Missed thermal — amber ── */}
        <circle cx="153" cy="74" r="12" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" strokeWidth="0.9" strokeDasharray="2,2.5" opacity="0.7" />
        <circle cx="153" cy="74" r="5" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="0.9" opacity="0.8" />
        <circle cx="153" cy="74" r="2" fill="#f59e0b" opacity="0.7" />
        <text x="161" y="70" fontSize="5" fill="rgba(245,158,11,0.85)" fontFamily="system-ui" fontWeight="600">Missed</text>
        <text x="161" y="76" fontSize="4.5" fill="rgba(245,158,11,0.55)" fontFamily="system-ui">+2.1 m/s</text>

        {/* ── Thermal 2 — excellent (green) ── */}
        <circle cx="198" cy="52" r="14" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth="0.9" strokeDasharray="2.5,2" opacity="0.8" />
        <circle cx="198" cy="52" r="8" fill="rgba(16,185,129,0.13)" stroke="#10b981" strokeWidth="0.9" opacity="0.9" />
        <circle cx="198" cy="52" r="3.5" fill="#10b981" opacity="0.95" />
        <text x="207" y="48" fontSize="5" fill="rgba(16,185,129,0.9)" fontFamily="system-ui" fontWeight="600">T2</text>
        <text x="207" y="54" fontSize="4.5" fill="rgba(16,185,129,0.6)" fontFamily="system-ui">+5.8 m/s</text>

        {/* Landing marker */}
        <circle cx="265" cy="120" r="3" fill="#94a3b8" opacity="0.7" />
        <circle cx="265" cy="120" r="5.5" fill="none" stroke="#94a3b8" strokeWidth="0.8" opacity="0.35" />

        {/* Map label */}
        <text x="6" y="10" fontSize="5.5" fill="rgba(226,232,240,0.28)" fontFamily="system-ui" style={{ textTransform: "uppercase", letterSpacing: "0.5px" }}>
          FLIGHT TRACK · ALPINE XC
        </text>

        {/* Scale indicator */}
        <line x1="228" y1="150" x2="268" y2="150" stroke="rgba(226,232,240,0.2)" strokeWidth="0.8" />
        <text x="238" y="156" fontSize="4.5" fill="rgba(226,232,240,0.2)" fontFamily="system-ui">5 km</text>
      </g>
    </svg>
  );
}

// ─── Altitude profile strip ───────────────────────────────────────────────────

function AltitudeProfile() {
  // Points: (x, y) where y is inverted (lower y = higher altitude)
  // Mirrors the flight: launch low → climb T1 → glide→missed→T2→ final glide descent
  const points = [
    [0, 58],
    [18, 52],
    [35, 44],
    [48, 38],
    [58, 28],    // thermal 1 top
    [70, 32],
    [85, 34],
    [100, 36],   // missed thermal zone
    [112, 34],
    [125, 30],
    [138, 24],   // thermal 2 top
    [152, 28],
    [165, 34],
    [180, 42],
    [195, 52],
    [210, 58],   // landing
  ].map(([x, y]) => [(x / 210) * 100, y]);

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`)
    .join(" ");
  const areaD = `${pathD} L 100,62 L 0,62 Z`;

  return (
    <div
      style={{
        padding: "0.5rem 0.75rem 0.6rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          fontSize: "0.58rem",
          color: "rgba(226,232,240,0.3)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "0.35rem",
        }}
      >
        Altitude Profile
      </div>
      <svg width="100%" height="54" viewBox="0 0 100 62" preserveAspectRatio="none">
        <defs>
          <linearGradient id="altGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#03a9f4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#03a9f4" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path d={areaD} fill="url(#altGrad)" />
        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#03a9f4"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* T1 annotation */}
        <line x1="27.6" y1="0" x2="27.6" y2="62" stroke="rgba(16,185,129,0.3)" strokeWidth="0.7" strokeDasharray="2,2" />
        {/* Missed annotation */}
        <line x1="47.6" y1="0" x2="47.6" y2="62" stroke="rgba(245,158,11,0.3)" strokeWidth="0.7" strokeDasharray="1.5,2.5" />
        {/* T2 annotation */}
        <line x1="65.7" y1="0" x2="65.7" y2="62" stroke="rgba(16,185,129,0.3)" strokeWidth="0.7" strokeDasharray="2,2" />
        {/* Axis */}
        <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

// ─── Thermal quality panel ────────────────────────────────────────────────────

function ThermalPanel() {
  const thermals = [
    { label: "T1 · South Face", pct: 88, color: "#10b981", tag: "Strong" },
    { label: "T2 · Summit", pct: 94, color: "#10b981", tag: "Excellent" },
    { label: "T3 · Ridge (missed)", pct: 41, color: "#f59e0b", tag: "Weak" },
    { label: "T4 · Bowl", pct: 67, color: "#03a9f4", tag: "Good" },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "6px",
        padding: "0.65rem 0.7rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.55rem",
      }}
    >
      <div
        style={{
          fontSize: "0.58rem",
          color: "rgba(226,232,240,0.35)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        Thermal Quality
      </div>
      {thermals.map((t) => (
        <div key={t.label}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.25rem",
            }}
          >
            <span
              style={{
                fontSize: "0.62rem",
                color: "rgba(226,232,240,0.52)",
              }}
            >
              {t.label}
            </span>
            <span
              style={{
                fontSize: "0.62rem",
                color: t.color,
                fontWeight: 600,
              }}
            >
              {t.pct}%
            </span>
          </div>
          <div
            style={{
              height: "3px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${t.pct}%`,
                background: t.color,
                borderRadius: "2px",
                opacity: 0.85,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Coaching insight strip ────────────────────────────────────────────────────

function CoachingInsight() {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.65rem",
        alignItems: "flex-start",
        padding: "0.6rem 0.85rem",
        borderTop: "1px solid rgba(3,169,244,0.1)",
        background: "rgba(3,169,244,0.04)",
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "5px",
          background: "rgba(3,169,244,0.15)",
          border: "1px solid rgba(3,169,244,0.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: "1px",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="#03a9f4" strokeWidth="1.2" />
          <path d="M8 5v4M8 11v1" stroke="#03a9f4" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#03a9f4",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "0.15rem",
          }}
        >
          Coaching Insight
        </div>
        <div
          style={{
            fontSize: "0.66rem",
            color: "rgba(226,232,240,0.58)",
            lineHeight: 1.5,
          }}
        >
          You left T3 (missed) early — only 41% of available climb used. Tighter core technique on weak thermals could add ~180m altitude.
        </div>
      </div>
    </div>
  );
}

// ─── Product mockup ───────────────────────────────────────────────────────────

function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36, scale: 0.975 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {/* Glow behind mockup */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-15%",
          background:
            "radial-gradient(ellipse at 55% 45%, rgba(3,169,244,0.13) 0%, transparent 68%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Slow float animation wrapper */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Main window */}
        <div
          style={{
            background: "rgba(8, 13, 26, 0.97)",
            border: "1px solid rgba(3,169,244,0.2)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow:
              "0 40px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.035) inset, 0 1px 0 rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "0.55rem 0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.32rem" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: c,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.055)",
                borderRadius: "4px",
                height: "20px",
                marginLeft: "0.6rem",
                display: "flex",
                alignItems: "center",
                padding: "0 0.65rem",
                gap: "0.35rem",
              }}
            >
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="6" cy="6" r="5" stroke="#e2e8f0" strokeWidth="1.2" />
                <path d="M6 1v5l3 2" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(226,232,240,0.32)",
                }}
              >
                beta.parametrics.app
              </span>
            </div>
          </div>

          {/* App top bar */}
          <div
            style={{
              padding: "0.5rem 1rem",
              borderBottom: "1px solid rgba(255,255,255,0.045)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.68rem",
                color: "rgba(226,232,240,0.4)",
              }}
            >
              <span>Flights</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ color: "#e2e8f0", fontWeight: 500 }}>
                Alpine XC · 14 Mar 2026
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.28rem",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.22)",
                  borderRadius: "4px",
                  padding: "0.18rem 0.5rem",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#10b981",
                    animation: "heroPulse 2.5s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "#10b981",
                    fontWeight: 600,
                  }}
                >
                  Analysed
                </span>
              </div>
            </div>
          </div>

          {/* Metric cards row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.5rem",
              padding: "0.65rem 0.85rem",
            }}
          >
            <MetricCard
              label="Thermal Efficiency"
              value="78%"
              color="#03a9f4"
              sub="↑ 6% vs avg"
            />
            <MetricCard
              label="Avg Glide Ratio"
              value="9.2:1"
              color="#10b981"
              sub="Best segment"
            />
            <MetricCard
              label="Missed Thermals"
              value="3"
              color="#f59e0b"
              sub="41% potential"
            />
            <MetricCard
              label="Risk Score"
              value="Low"
              color="#10b981"
              sub="No flags raised"
            />
          </div>

          {/* Flight map + thermal panel */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.55fr 1fr",
              gap: "0.5rem",
              padding: "0 0.85rem 0.65rem",
            }}
          >
            {/* Map panel */}
            <div
              style={{
                background: "rgba(5,10,22,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
                overflow: "hidden",
                minHeight: "158px",
              }}
            >
              <FlightMapSVG />
            </div>

            {/* Thermal quality */}
            <ThermalPanel />
          </div>

          {/* Altitude profile */}
          <AltitudeProfile />

          {/* Coaching insight */}
          <CoachingInsight />
        </div>
      </motion.div>

      {/* Floating score badge (offset top-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        style={{
          position: "absolute",
          top: "-16px",
          right: "-16px",
          background: "rgba(10,18,36,0.95)",
          border: "1px solid rgba(3,169,244,0.28)",
          borderRadius: "8px",
          padding: "0.5rem 0.75rem",
          zIndex: 2,
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          gap: "0.55rem",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: "linear-gradient(135deg, #03a9f4, #0288d1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5L8 1z" fill="#fff" fillOpacity="0.95" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "0.62rem", color: "rgba(226,232,240,0.42)", marginBottom: "0.1rem" }}>
            Flight Score
          </div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#03a9f4",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1,
            }}
          >
            82 / 100
          </div>
        </div>
      </motion.div>

      {/* Floating IGC upload badge (bottom-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          position: "absolute",
          bottom: "-16px",
          left: "-16px",
          background: "rgba(10,18,36,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "0.45rem 0.7rem",
          zIndex: 2,
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "5px",
            background: "rgba(16,185,129,0.15)",
            border: "1px solid rgba(16,185,129,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v9M4 7l4 4 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 13h12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "0.6rem", color: "rgba(226,232,240,0.38)" }}>
            Group flight loaded
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#10b981",
            }}
          >
            3 pilots compared ✓
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Benefit chip ─────────────────────────────────────────────────────────────

function BenefitChip({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.38rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "5px",
        padding: "0.3rem 0.65rem",
        fontSize: "0.78rem",
        color: "rgba(226,232,240,0.65)",
        whiteSpace: "nowrap" as const,
      }}
    >
      <span style={{ color: "#03a9f4", lineHeight: 1 }}>{icon}</span>
      {label}
    </span>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* ── Background ── */}
      {/* Subtle grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(3,169,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(3,169,244,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          zIndex: 0,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      {/* Left glow (behind copy) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          left: "-5%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(3,169,244,0.07) 0%, transparent 65%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Right glow (behind mockup) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          right: "-8%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(ellipse at 65% 40%, rgba(3,169,244,0.09) 0%, transparent 65%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "4rem 1.75rem 5rem",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="hero-grid">
          {/* ── LEFT: Copy ── */}
          <motion.div
            className="hero-copy"
            variants={copyContainer}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: "1.4rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  background: "rgba(3,169,244,0.09)",
                  border: "1px solid rgba(3,169,244,0.26)",
                  borderRadius: "999px",
                  padding: "0.3rem 0.85rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#03a9f4",
                    display: "inline-block",
                    animation: "heroPulse 2.2s ease-in-out infinite",
                    boxShadow: "0 0 6px rgba(3,169,244,0.7)",
                  }}
                />
                <span
                  style={{
                    color: "#03a9f4",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Flight Analysis for Paraglider Pilots
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#fff",
                margin: "0 0 1.1rem",
              }}
            >
              See Exactly What the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #03a9f4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Best Pilots Do Differently
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "rgba(226,232,240,0.62)",
                lineHeight: 1.7,
                margin: "0 0 2rem",
                maxWidth: "480px",
              }}
            >
              Compare your thermals, glide decisions, and climb strategy against your group or any
              pilot in the world — and see precisely where the gap is made.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <a
                href="/signup"
                className="cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#03a9f4",
                  color: "#fff",
                  padding: "0.8rem 1.75rem",
                  borderRadius: "7px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 0 28px rgba(3,169,244,0.38), 0 2px 8px rgba(0,0,0,0.25)",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  letterSpacing: "-0.01em",
                }}
              >
                Get Free Access
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ marginLeft: "0.1rem" }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/pricing"
                className="cta-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "rgba(255,255,255,0.055)",
                  color: "rgba(226,232,240,0.88)",
                  padding: "0.8rem 1.6rem",
                  borderRadius: "7px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.11)",
                  transition: "background 0.15s ease, border-color 0.15s ease",
                  letterSpacing: "-0.01em",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3h12v10H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                View Pricing
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "0.8rem",
                color: "rgba(226,232,240,0.38)",
                margin: "0 0 1.6rem",
                lineHeight: 1.55,
              }}
            >
              60-day Pro trial · No credit card required · Instant access
            </motion.p>

            {/* Benefit chips */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.5rem",
              }}
            >
              <BenefitChip
                icon={
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path d="M2 4h4M2 7h4M2 10h4M8 4h4M8 7h4M8 10h4" stroke="#03a9f4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                label="Pilot Benchmark"
              />
              <BenefitChip
                icon={
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path d="M7 12V2M3 6l4-4 4 4" stroke="#03a9f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Thermal Analysis"
              />
              <BenefitChip
                icon={
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#03a9f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Glide Efficiency"
              />
              <BenefitChip
                icon={
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="#03a9f4" strokeWidth="1.3" />
                    <path d="M5 7l1.5 1.5L9 5" stroke="#03a9f4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Coaching Insights"
              />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Product Mockup ── */}
          <div className="hero-visual">
            <ProductMockup />
          </div>
        </div>
      </div>

      {/* ── Global styles + responsive ── */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-copy {
          max-width: 520px;
        }

        .hero-visual {
          padding: 1.5rem 0;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 42px rgba(3,169,244,0.52), 0 4px 16px rgba(0,0,0,0.3) !important;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-copy {
            max-width: 100% !important;
            text-align: center;
          }
          .hero-copy > div:last-child {
            justify-content: center;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .hero-grid {
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
