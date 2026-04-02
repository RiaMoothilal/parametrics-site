import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "60 days of Pro access, free. Full AI coaching, missed thermal maps, glide performance, and more. No credit card required.",
};

const APP_URL = "https://app.parametrics.app";

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

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#03a9f4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "R60",
    period: "/ month",
    trialNote: "60-day free trial, then R60/month",
    highlighted: false,
  },
  {
    id: "annual",
    name: "Annual",
    price: "R600",
    period: "/ year",
    trialNote: "60-day free trial, then R600/year",
    highlighted: true,
    badge: "Best Value",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>

        {/* Header */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 1.5rem 1rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#03a9f4",
              fontSize: "0.82rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            Pricing
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Try Pro Free for 60 Days
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto 0.75rem",
              lineHeight: 1.6,
            }}
          >
            Full Pro access from day one — AI coaching, missed thermal maps, glide performance, and more. No credit card required to start.
          </p>
          <p
            style={{
              color: "rgba(226,232,240,0.4)",
              fontSize: "0.85rem",
              margin: "0 auto",
            }}
          >
            Access is immediate — no manual approval, no waiting list.
          </p>
        </div>

        {/* Pricing cards */}
        <section
          style={{
            padding: "4rem 1.5rem",
            background: "rgba(255,255,255,0.01)",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
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

                {/* Plan name */}
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

                {/* Price */}
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

                {/* Features */}
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
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/signup"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.85rem",
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
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "rgba(226,232,240,0.4)",
              fontSize: "0.82rem",
              marginTop: "1.5rem",
            }}
          >
            Cancel anytime · No long-term contracts · Charged in ZAR
          </p>
        </section>

        {/* How access works */}
        <section style={{ padding: "4rem 1.5rem 2rem" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              How Access Works
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(226,232,240,0.5)",
                fontSize: "0.9rem",
                marginBottom: "2rem",
              }}
            >
              A simple two-step process after you sign up.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  step: "1",
                  title: "Start your free trial",
                  desc: "Enter your email on the sign-up page. Your 60-day Pro access is created immediately.",
                  color: "#03a9f4",
                },
                {
                  step: "2",
                  title: "Sign in with Google",
                  desc: (
                    <>
                      Go to{" "}
                      <a
                        href={APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#03a9f4", textDecoration: "none" }}
                      >
                        app.parametrics.app
                      </a>{" "}
                      and sign in with the <strong>same email</strong> you registered with.
                    </>
                  ),
                  color: "#10b981",
                },
                {
                  step: "3",
                  title: "Upload & analyse",
                  desc: "Upload any IGC file from XCTrack, Oudie, FlySkyHy, or any instrument. Your analysis is ready in seconds.",
                  color: "#a855f7",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.75rem",
                    padding: "1.35rem",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: item.color,
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(226,232,240,0.5)",
                      fontSize: "0.83rem",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature comparison */}
        <section style={{ padding: "2rem 1.5rem 6rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              What&rsquo;s included
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  icon: "🌀",
                  title: "Thermal Analysis",
                  desc: "Centering quality, climb rate, and time-in-core breakdown",
                },
                {
                  icon: "📐",
                  title: "Glide Efficiency",
                  desc: "Between-thermal speed and height-loss performance",
                },
                {
                  icon: "👁️",
                  title: "Missed Thermals",
                  desc: "Lift detected along your track that you flew past",
                },
                {
                  icon: "⚠️",
                  title: "Risk Metrics",
                  desc: "Low-save and decision-making analysis",
                },
                {
                  icon: "✍️",
                  title: "Coaching Summary",
                  desc: "Automated improvement insights for each flight",
                },
                {
                  icon: "🏆",
                  title: "Pilot Benchmark",
                  desc: "Benchmark against any pilot in the world",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(226,232,240,0.5)",
                      fontSize: "0.82rem",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection preview />
      </main>
      <Footer />
    </>
  );
}
