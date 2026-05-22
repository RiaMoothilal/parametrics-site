import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaddlePricingCard from "@/components/PaddlePricingCard";

export const metadata: Metadata = {
  title: "Pricing (USD test)",
  robots: { index: false, follow: false },
};

const ENVIRONMENT = "sandbox" as const;
const TOKEN = "test_d9f7824de2ef439b8ffda1eab86";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    period: "/ month",
    trialNote: "60-day free trial, then billed monthly",
    priceId: "pri_01ks7rfeddvmmxssyaq83k81vb",
    highlighted: false,
  },
  {
    id: "annual",
    name: "Annual",
    period: "/ year",
    trialNote: "60-day free trial, then billed annually",
    priceId: "pri_01ks7rc00dqzh4yrhb82s2re83",
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
          SANDBOX TEST — no real charges · Built {new Date().toISOString().replace("T", " ").slice(0, 16)} UTC
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
              <PaddlePricingCard
                key={plan.id}
                priceId={plan.priceId}
                name={plan.name}
                period={plan.period}
                trialNote={plan.trialNote}
                highlighted={plan.highlighted}
                badge={"badge" in plan ? plan.badge : undefined}
                environment={ENVIRONMENT}
                token={TOKEN}
              />
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
