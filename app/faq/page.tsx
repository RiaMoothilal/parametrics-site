import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Parametrics paragliding flight analysis. Learn about IGC files, privacy, pricing, and more.",
};

export default function FAQPage() {
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
            Help Centre
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
            Frequently Asked Questions
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "1.05rem",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Everything you need to know about Parametrics. Can't find an
            answer? Reach out via the app.
          </p>
        </div>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
