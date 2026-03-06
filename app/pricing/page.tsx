import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Join the Parametrics beta for free, or subscribe to unlock the full feature set. Instant access via Google sign-in.",
};

const APP_URL = "https://beta.parametrics.app";

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
            Start Free, Upgrade Anytime
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1.05rem",
              maxWidth: "560px",
              margin: "0 auto 0.75rem",
              lineHeight: 1.6,
            }}
          >
            Join the beta at no cost and get full flight analysis right now.
            Paid plans unlock batch comparison, export, and more.
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

        <PricingSection />

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
              A simple two-step process after you sign up or subscribe.
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
                  title: "Register or subscribe",
                  desc: "Join the free beta by email, or subscribe via Paystack. Your access is created automatically.",
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
                        beta.parametrics.app
                      </a>{" "}
                      and sign in with the <strong>same email</strong> you used to register or pay.
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

            {/* Email match callout */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.1rem",
                background: "rgba(3,169,244,0.06)",
                border: "1px solid rgba(3,169,244,0.2)",
                borderRadius: "0.75rem",
                display: "flex",
                gap: "0.7rem",
                alignItems: "flex-start",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0, marginTop: "1px" }}
              >
                <circle cx="8" cy="8" r="6.5" stroke="#03a9f4" strokeWidth="1.3" />
                <path d="M8 5v4M8 11v1" stroke="#03a9f4" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <p
                style={{
                  color: "rgba(226,232,240,0.65)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                <strong style={{ color: "rgba(226,232,240,0.9)" }}>🔐 Google sign-in required.</strong>{" "}
                Sign in at{" "}
                <a
                  href="https://beta.parametrics.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#03a9f4", textDecoration: "none" }}
                >
                  beta.parametrics.app
                </a>{" "}
                using the Google account that matches the email you registered or paid with.
                No password login — Google only.
              </p>
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
              What&rsquo;s included in every plan
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
                  icon: "📊",
                  title: "Batch Comparison",
                  desc: "Compare multiple pilots — available on paid plans",
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
