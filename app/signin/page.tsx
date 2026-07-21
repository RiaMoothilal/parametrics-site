"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_URL = "https://app.parametrics.app";
const MAGIC_REQUEST_API = "https://app.parametrics.app/auth/magic/request";

function SigninContent() {
  const params = useSearchParams();
  const expired = params.get("magic_error") === "expired";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await fetch(MAGIC_REQUEST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
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
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "440px",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.03em",
            textAlign: "center",
            margin: "0 0 0.75rem",
            lineHeight: 1.15,
          }}
        >
          Welcome back
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
          Sign in to continue to your flights.
        </p>

        {expired && (
          <div
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "0.5rem",
              padding: "0.85rem 1rem",
              marginBottom: "1.5rem",
              color: "#f87171",
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            That sign-in link expired or was already used. Request a new one below.
          </div>
        )}

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "1rem",
            padding: "2rem",
          }}
        >
          <a
            href={`${APP_URL}/oauth2/start`}
            style={{
              width: "100%",
              padding: "0.875rem",
              background: "#03a9f4",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              boxShadow: "0 0 24px rgba(3,169,244,0.3)",
              marginBottom: "1.25rem",
              boxSizing: "border-box",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" opacity="0.9"/>
              <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              margin: "1.25rem 0",
              color: "rgba(226,232,240,0.35)",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
            or
            <span style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
          </div>

          {status === "sent" ? (
            <div
              style={{
                textAlign: "center",
                color: "rgba(226,232,240,0.75)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                padding: "0.5rem 0",
              }}
            >
              Check <strong style={{ color: "#fff" }}>{email}</strong> for your sign-in link. It expires in 15 minutes.
            </div>
          ) : (
            <form onSubmit={handleMagicLink}>
              <input
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
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none",
                  boxSizing: "border-box",
                  marginBottom: "0.75rem",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading" || !email.trim()}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "0.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: status === "loading" || !email.trim() ? "not-allowed" : "pointer",
                  letterSpacing: "-0.01em",
                }}
              >
                {status === "loading" ? "Sending…" : "Email me a sign-in link"}
              </button>
              {status === "error" && (
                <p style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: "0.75rem", marginBottom: 0 }}>
                  Network error — please check your connection and try again.
                </p>
              )}
            </form>
          )}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "rgba(226,232,240,0.4)",
            fontSize: "0.82rem",
            marginTop: "2rem",
          }}
        >
          New here?{" "}
          <a href="/signup" style={{ color: "#03a9f4", textDecoration: "none", fontWeight: 600 }}>
            Get 60 days of Pro, free →
          </a>
        </p>
      </div>
    </main>
  );
}

export default function SigninPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <SigninContent />
      </Suspense>
      <Footer />
    </>
  );
}
