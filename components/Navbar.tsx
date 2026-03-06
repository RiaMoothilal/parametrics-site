"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const APP_URL = "https://app.parametrics.app";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolled
          ? "rgba(8, 12, 20, 0.92)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
                fontSize: "1.2rem",
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Parametrics
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {[
            { href: "/pricing", label: "Pricing" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "rgba(226,232,240,0.75)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(226,232,240,0.75)")
              }
            >
              {item.label}
            </Link>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#03a9f4",
              color: "#fff",
              padding: "0.45rem 1.1rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0288d1";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 20px rgba(3,169,244,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#03a9f4";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Launch App
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "22px",
              height: "2px",
              background: "#fff",
              marginBottom: "5px",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "2px",
              background: "#fff",
              marginBottom: "5px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "2px",
              background: "#fff",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(8, 12, 20, 0.98)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "1rem 1.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/faq", label: "FAQ" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(226,232,240,0.8)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#03a9f4",
                color: "#fff",
                padding: "0.65rem 1.2rem",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Launch App
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: block !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
