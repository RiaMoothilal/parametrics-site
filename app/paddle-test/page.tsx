import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaddleCheckoutButton from "@/components/PaddleCheckoutButton";

export const metadata: Metadata = {
  title: "Pricing (USD test)",
  robots: { index: false, follow: false },
};

const MONTHLY_PRICE_ID = "pri_01ks8162hv9jfqsa2vsbx0eftk"; // simple test price
const ANNUAL_PRICE_ID = "pri_01ks7rc00dqzh4yrhb82s2re83";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$5",
    period: "/ month",
    trialNote: "60-day free trial, then $5/month",
    priceId: MONTHLY_PRICE_ID,
    highlighted: false,
  },
  {
    id: "annual",
    name: "Annual",
    price: "$48",
    period: "/ year",
    trialNote: "60-day free trial, then $48/year",
    priceId: ANNUAL_PRICE_ID,
    highlighted: true,
    badge: "Best Value",
  },
];

export default function PaddleTestPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        {/* Dev banner */}
        <div
          style={{
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.3)",
            textAlign: "center",
            padding: "0.5rem 1rem",
            fontSize: "0.8rem",
            color: "rgba(245,158,11,0.9)",
            letterSpacing: "0.03em",
          }}
        >
          SANDBOX TEST — no real charges · Paddle test environment · Built {new Date().toISOString().replace("T", " ").slice(0, 16)} UTC
        </div>

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
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Full Pro access from day one. No credit card required to start.
          </p>
        </div>

        {/* Pricing cards */}
        <section
          style={{
            padding: "4rem 1.5rem",
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

                <PaddleCheckoutButton
                  priceId={plan.priceId}
                  highlighted={plan.highlighted}
                />
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
            Cancel anytime · No long-term contracts · Charged in USD
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
