"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BETA_API = "https://beta.parametrics.app/beta/signup";
const APP_URL = "https://beta.parametrics.app";

export default function BetaPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(BETA_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (res.ok) {
        router.push(`/beta/success?email=${encodeURIComponent(email.trim().toLowerCase())}`);
      } else {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.message || data?.error) msg = data.message || data.error;
        } catch {}
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(3,169,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(3,169,244,0.03) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse at 50% 50%, rgba(3,169,244,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "500px",
            padding: "2rem 1.5rem 4rem",
          }}
        >
          {/* Badge */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
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
                }}
              />
              <span
                style={{
                  color: "#03a9f4",
                  fontSize: "0.76rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Free Access
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              textAlign: "center",
              margin: "0 0 0.75rem",
              lineHeight: 1.15,
            }}
          >
            Start for Free
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1rem",
              textAlign: "center",
              lineHeight: 1.65,
              margin: "0 0 2.25rem",
            }}
          >
            Get free access to Parametrics. Upload your IGC files and receive
            structured flight analysis — thermals, glide, risk, and coaching
            insights.
          </p>

          {/* Form card */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="beta-email"
                style={{
                  display: "block",
                  color: "rgba(226,232,240,0.75)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                Your email address
              </label>
              <input
                id="beta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "0.8rem 1rem",
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${status === "error" ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
                  borderRadius: "0.5rem",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none",
                  boxSizing: "border-box",
                  marginBottom: "1rem",
                  transition: "border-color 0.2s",
                  opacity: status === "loading" ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (status !== "error") e.target.style.borderColor = "rgba(3,169,244,0.5)";
                }}
                onBlur={(e) => {
                  if (status !== "error") e.target.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              />

              {status === "error" && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.82rem",
                    margin: "-0.5rem 0 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="#ef4444" strokeWidth="1.3" />
                    <path d="M8 5v4M8 11v1" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !email.trim()}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  background: status === "loading" ? "rgba(3,169,244,0.6)" : "#03a9f4",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "background 0.2s, transform 0.15s, box-shadow 0.15s",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 0 24px rgba(3,169,244,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    (e.currentTarget as HTMLButtonElement).style.background = "#0288d1";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(3,169,244,0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = status === "loading" ? "rgba(3,169,244,0.6)" : "#03a9f4";
                  (e.currentTarget as HTMLButtonElement).style.transform = "none";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(3,169,244,0.3)";
                }}
              >
                {status === "loading" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Joining…
                  </>
                ) : (
                  <>
                    Get Free Access
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Email match warning */}
            <div
              style={{
                marginTop: "1.25rem",
                padding: "0.75rem 1rem",
                background: "rgba(3,169,244,0.06)",
                border: "1px solid rgba(3,169,244,0.18)",
                borderRadius: "0.5rem",
                display: "flex",
                gap: "0.65rem",
                alignItems: "flex-start",
              }}
            >
              <svg
                width="15"
                height="15"
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
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                <strong style={{ color: "rgba(226,232,240,0.88)" }}>🔐 Google sign-in required.</strong> You must sign in to the app using the{" "}
                <strong style={{ color: "#03a9f4" }}>same Google account</strong> as the email you enter above. No password — Google only.
              </p>
            </div>
          </div>

          {/* What's included */}
          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                textAlign: "center",
                color: "rgba(226,232,240,0.4)",
                fontSize: "0.78rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Free access includes
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.6rem",
              }}
            >
              {[
                "Thermal analysis",
                "Glide efficiency",
                "Missed thermals",
                "Risk metrics",
                "Coaching summary",
                "IGC file upload",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "rgba(226,232,240,0.65)",
                    fontSize: "0.83rem",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" fill="rgba(3,169,244,0.12)" stroke="rgba(3,169,244,0.3)" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="#03a9f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Already have access? */}
          <p
            style={{
              textAlign: "center",
              color: "rgba(226,232,240,0.4)",
              fontSize: "0.82rem",
              marginTop: "2rem",
            }}
          >
            Already have access?{" "}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#03a9f4", textDecoration: "none", fontWeight: 600 }}
            >
              Sign in with Google →
            </a>
          </p>

          {/* Prefer to pay? */}
          <p
            style={{
              textAlign: "center",
              color: "rgba(226,232,240,0.35)",
              fontSize: "0.82rem",
              marginTop: "0.5rem",
            }}
          >
            Want a paid plan?{" "}
            <a
              href="/pricing"
              style={{ color: "rgba(226,232,240,0.55)", textDecoration: "none", fontWeight: 600 }}
            >
              View pricing →
            </a>
          </p>
        </div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
