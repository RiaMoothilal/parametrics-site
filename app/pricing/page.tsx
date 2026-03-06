import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Parametrics. Try free for 7 days. Monthly and annual plans available.",
};

const APP_URL = "https://app.parametrics.app";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
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
            Fly Better, Starting Free
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            7 days free, then choose the plan that fits your flying schedule.
            Cancel anytime.
          </p>
        </div>

        <PricingSection />

        {/* Feature comparison */}
        <section style={{ padding: "3rem 1.5rem 6rem" }}>
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
              What's included in every plan
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
                  desc: "Full centering & climb rate breakdown",
                },
                {
                  icon: "📐",
                  title: "Glide Efficiency",
                  desc: "Between-thermal performance metrics",
                },
                {
                  icon: "👁️",
                  title: "Missed Thermals",
                  desc: "Lift detection along your track",
                },
                {
                  icon: "⚠️",
                  title: "Risk Metrics",
                  desc: "Low save & decision analysis",
                },
                {
                  icon: "✍️",
                  title: "Coaching Summary",
                  desc: "Automated improvement insights",
                },
                {
                  icon: "📱",
                  title: "Mobile Ready",
                  desc: "Works on all devices",
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
