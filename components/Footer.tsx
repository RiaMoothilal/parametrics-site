"use client";

import Link from "next/link";

const APP_URL = "https://beta.parametrics.app";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#050810",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3L25 21H3L14 3Z"
                  fill="none"
                  stroke="#03a9f4"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8L21 19H7L14 8Z"
                  fill="rgba(3,169,244,0.2)"
                  stroke="#03a9f4"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                }}
              >
                Parametrics
              </span>
            </div>
            <p
              style={{
                color: "rgba(226,232,240,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                maxWidth: "220px",
              }}
            >
              Flight analysis and coaching for paraglider pilots who want to fly
              better.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/beta", label: "Get Access" },
                { href: "/pricing", label: "Pricing" },
                { href: "/faq", label: "FAQ" },
                {
                  href: APP_URL,
                  label: "Sign In to App",
                  external: true,
                },
              ].map((item) =>
                item.external ? (
                  <li key={item.label} style={{ marginBottom: "0.6rem" }}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "rgba(226,232,240,0.55)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#03a9f4")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(226,232,240,0.55)")
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label} style={{ marginBottom: "0.6rem" }}>
                    <Link
                      href={item.href}
                      style={{
                        color: "rgba(226,232,240,0.55)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: "0.6rem" }}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(226,232,240,0.55)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Start Flying Better
            </h4>
            <Link
              href="/beta"
              style={{
                display: "inline-block",
                background: "#03a9f4",
                color: "#fff",
                padding: "0.6rem 1.2rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get Free Access →
            </Link>
            <p style={{ margin: "0.6rem 0 0", fontSize: "0.8rem", color: "rgba(226,232,240,0.35)" }}>
              Already have access?{" "}
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(226,232,240,0.5)", textDecoration: "none" }}
              >
                Sign in →
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "rgba(226,232,240,0.35)",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            © {year} Parametrics. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(226,232,240,0.35)",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            Built by a competition pilot & instructor with thousands of flights.
          </p>
        </div>
      </div>
    </footer>
  );
}
