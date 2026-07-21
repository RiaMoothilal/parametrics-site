import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free, Pro, and Pro+ plans for paragliding flight analysis. Performance Analyst on every page, missed thermal maps, glide performance, and more. No credit card required to start.",
};

const APP_URL = "https://app.parametrics.app";

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
            Simple, honest pricing
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
            Free forever for pilots getting started. Upgrade to Pro or Pro+ for Performance Analyst coaching, missed thermal maps, benchmarking, and more.
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
          <PricingTiers />

          <p
            style={{
              textAlign: "center",
              color: "rgba(226,232,240,0.4)",
              fontSize: "0.82rem",
              marginTop: "1.5rem",
            }}
          >
            Cancel anytime · No long-term contracts
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
                  title: "Create your free account",
                  desc: "Enter your email on the sign-up page. Free tier access is created immediately — upgrade to Pro or Pro+ any time.",
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
                  title: "Performance Analyst",
                  desc: "Data interpretation for every analysis page",
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
