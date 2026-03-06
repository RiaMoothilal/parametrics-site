"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_URL = "https://app.parametrics.app";

function PaymentSuccessContent() {
  const params = useSearchParams();
  const email = params.get("email") || "your email";

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
      {/* Background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.025) 1px, transparent 1px)",
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
          maxWidth: "520px",
          padding: "2rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        {/* Success icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(168,85,247,0.12)",
            border: "2px solid rgba(168,85,247,0.35)",
            marginBottom: "1.5rem",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M7 16l6 6 12-12"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.03em",
            margin: "0 0 0.75rem",
            lineHeight: 1.15,
          }}
        >
          Payment Confirmed
        </h1>
        <p
          style={{
            color: "rgba(226,232,240,0.65)",
            fontSize: "1rem",
            lineHeight: 1.65,
            margin: "0 0 2rem",
          }}
        >
          Your subscription is active. Access has been granted to{" "}
          <strong style={{ color: "#fff" }}>{email}</strong>.
        </p>

        {/* Steps card */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "1rem",
            padding: "1.75rem",
            textAlign: "left",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              color: "rgba(226,232,240,0.45)",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            Get started now
          </p>

          {[
            {
              step: "1",
              title: "Sign in with Google",
              body: (
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
                  and click <strong style={{ color: "rgba(226,232,240,0.85)" }}>Sign in with Google</strong>.
                </>
              ),
              color: "#03a9f4",
            },
            {
              step: "2",
              title: "Use your payment email",
              body: (
                <>
                  Select the Google account for{" "}
                  <strong style={{ color: "#a855f7" }}>{email}</strong>. This must
                  match your payment email exactly.
                </>
              ),
              color: "#a855f7",
            },
            {
              step: "3",
              title: "Upload your IGC file",
              body: "Upload any IGC flight file. Your full analysis will be ready in seconds.",
              color: "#10b981",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: i < 2 ? "1.25rem" : 0,
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: item.color,
                }}
              >
                {item.step}
              </div>
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    margin: "0 0 0.2rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "rgba(226,232,240,0.55)",
                    fontSize: "0.83rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Email match callout */}
        <div
          style={{
            padding: "0.85rem 1rem",
            background: "rgba(168,85,247,0.07)",
            border: "1px solid rgba(168,85,247,0.22)",
            borderRadius: "0.625rem",
            display: "flex",
            gap: "0.65rem",
            alignItems: "flex-start",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ flexShrink: 0, marginTop: "1px" }}
          >
            <circle cx="8" cy="8" r="6.5" stroke="#a855f7" strokeWidth="1.3" />
            <path d="M8 5v4M8 11v1" stroke="#a855f7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <p
            style={{
              color: "rgba(226,232,240,0.7)",
              fontSize: "0.83rem",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            <strong style={{ color: "#a855f7" }}>Important:</strong> Sign in with
            the Google account that matches{" "}
            <strong style={{ color: "rgba(226,232,240,0.9)" }}>{email}</strong>.
            Using a different address will deny access.
          </p>
        </div>

        {/* CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#03a9f4",
            color: "#fff",
            padding: "0.9rem 2rem",
            borderRadius: "0.6rem",
            fontSize: "1rem",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 28px rgba(3,169,244,0.35)",
            letterSpacing: "-0.01em",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 42px rgba(3,169,244,0.52)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 28px rgba(3,169,244,0.35)";
          }}
        >
          Open the App
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p style={{ marginTop: "1.25rem", color: "rgba(226,232,240,0.35)", fontSize: "0.8rem" }}>
          <Link href="/" style={{ color: "rgba(226,232,240,0.45)", textDecoration: "none" }}>
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <PaymentSuccessContent />
      </Suspense>
      <Footer />
    </>
  );
}
