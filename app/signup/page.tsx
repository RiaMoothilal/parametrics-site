"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_URL = "https://app.parametrics.app";
const SIGNUP_API = "https://app.parametrics.app/signup";
const MAGIC_REQUEST_API = "https://app.parametrics.app/auth/magic/request";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading-google" | "loading-magic" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const loading = status === "loading-google" || status === "loading-magic";

  const grantTrial = async (cleanEmail: string) => {
    const res = await fetch(SIGNUP_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cleanEmail }),
    });
    if (!res.ok) {
      let msg = "Something went wrong. Please try again.";
      try {
        const data = await res.json();
        if (data?.message || data?.error) msg = data.message || data.error;
      } catch {}
      throw new Error(msg);
    }
  };

  const handleGoogle = async () => {
    if (!email.trim()) return;
    const cleanEmail = email.trim().toLowerCase();
    setStatus("loading-google");
    setErrorMsg("");
    try {
      await grantTrial(cleanEmail);
      window.location.href = `${APP_URL}/oauth2/start?login_hint=${encodeURIComponent(cleanEmail)}&rd=%2F`;
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  const handleMagicLink = async () => {
    if (!email.trim()) return;
    const cleanEmail = email.trim().toLowerCase();
    setStatus("loading-magic");
    setErrorMsg("");
    try {
      await grantTrial(cleanEmail);
      await fetch(MAGIC_REQUEST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });
      router.push(`/signup/success?email=${encodeURIComponent(cleanEmail)}&method=magic`);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Network error — please check your connection and try again.");
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
          {/* Status badge */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                background: "rgba(16,185,129,0.09)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "999px",
                padding: "0.3rem 0.85rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10b981",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#10b981",
                  fontSize: "0.76rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Open now · No waitlist
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
            60 Days of Pro, Free
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
            Full Pro access, no credit card. After 60 days, stay on Free or upgrade to Pro or Pro+ any time.
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
            <label
              htmlFor="signup-email"
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
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={loading}
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
                opacity: loading ? 0.6 : 1,
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
              type="button"
              onClick={handleGoogle}
              disabled={loading || !email.trim()}
              style={{
                width: "100%",
                padding: "0.875rem",
                background: status === "loading-google" ? "rgba(3,169,244,0.6)" : "#03a9f4",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: loading || !email.trim() ? "not-allowed" : "pointer",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.15s",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 0 24px rgba(3,169,244,0.3)",
                marginBottom: "0.75rem",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#0288d1";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(3,169,244,0.45)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = status === "loading-google" ? "rgba(3,169,244,0.6)" : "#03a9f4";
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(3,169,244,0.3)";
              }}
            >
              {status === "loading-google" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  Redirecting…
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" opacity="0.9"/>
                    <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleMagicLink}
              disabled={loading || !email.trim()}
              style={{
                width: "100%",
                padding: "0.875rem",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: loading || !email.trim() ? "not-allowed" : "pointer",
                transition: "background 0.2s, border-color 0.2s",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                opacity: loading && status !== "loading-magic" ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              {status === "loading-magic" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  Sending link…
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="#fff" strokeWidth="1.3" />
                    <path d="M2 4l6 5 6-5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Email me a sign-in link
                </>
              )}
            </button>

            <p
              style={{
                color: "rgba(226,232,240,0.4)",
                fontSize: "0.78rem",
                textAlign: "center",
                margin: "1rem 0 0",
              }}
            >
              No password, no account elsewhere — just a one-time link.
            </p>
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
              Your first 60 days includes
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.6rem",
              }}
            >
              {[
                "Up to 10 pilots per report",
                "20 reports per month",
                "Flight Story Video",
                "Multi-pilot comparison",
                "Performance Analyst — all pages",
                "Permanent report archive",
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
                    <circle cx="8" cy="8" r="6.5" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
              href="/signin"
              style={{ color: "#03a9f4", textDecoration: "none", fontWeight: 600 }}
            >
              Sign in →
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
