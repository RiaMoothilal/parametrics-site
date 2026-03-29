import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "You're all set — Parametrics",
  description: "Payment successful. Sign in to start analysing your flights.",
};

const APP_URL = "https://app.parametrics.app";

export default function WelcomePage() {
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
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(3,169,244,0.1) 0%, transparent 70%)",
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
              "linear-gradient(rgba(3,169,244,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(3,169,244,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "480px",
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
              background: "rgba(3,169,244,0.12)",
              border: "2px solid rgba(3,169,244,0.35)",
              marginBottom: "1.5rem",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M7 16l6 6 12-12"
                stroke="#03a9f4"
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
            Payment Successful
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.65)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              margin: "0 0 2.5rem",
            }}
          >
            You&rsquo;re all set. Sign in with Google to start analysing your flights.
          </p>

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
            }}
          >
            Sign in to Parametrics →
          </a>

          <p
            style={{
              marginTop: "1rem",
              color: "rgba(226,232,240,0.4)",
              fontSize: "0.82rem",
            }}
          >
            Use the same Google account you paid with.
          </p>

          <p style={{ marginTop: "1.5rem" }}>
            <Link
              href="/"
              style={{
                color: "rgba(226,232,240,0.4)",
                textDecoration: "none",
                fontSize: "0.82rem",
              }}
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
