import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentCancelPage() {
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
            background: "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
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
          {/* Icon */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(245,158,11,0.1)",
              border: "2px solid rgba(245,158,11,0.3)",
              marginBottom: "1.5rem",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 8v10M16 22v2"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M14 3L2 26h28L16 3z"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
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
            Payment Cancelled
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1rem",
              lineHeight: 1.65,
              margin: "0 0 2.25rem",
            }}
          >
            No charge was made. You can try again whenever you&rsquo;re ready, or
            use the free plan instead.
          </p>

          {/* Options */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "#03a9f4",
                color: "#fff",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.6rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(3,169,244,0.3)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
            >
              Try Again
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="/beta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(226,232,240,0.8)",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.6rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s ease",
              }}
            >
              Use the Free Plan Instead
            </Link>
          </div>

          <p style={{ color: "rgba(226,232,240,0.35)", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "rgba(226,232,240,0.45)", textDecoration: "none" }}>
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
