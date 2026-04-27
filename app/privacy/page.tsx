import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Parametrics Privacy Policy. How we handle your flight data and personal information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.75rem",
          paddingTop: "0.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "rgba(226,232,240,0.7)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 1.5rem 6rem",
          }}
        >
          <div style={{ marginBottom: "3rem" }}>
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
              Legal
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.025em",
                marginBottom: "0.5rem",
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                color: "rgba(226,232,240,0.4)",
                fontSize: "0.85rem",
              }}
            >
              Last updated: January 2025
            </p>
          </div>

          <Section title="1. Introduction">
            <p>
              Parametrics ("we", "us", or "our") operates the Parametrics
              paragliding flight analysis service available at
              app.parametrics.app. This Privacy Policy describes how we
              collect, use, and protect your personal information when you use
              our service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              <strong style={{ color: "#e2e8f0" }}>Account Information:</strong>{" "}
              When you create an account, we collect your email address and
              any profile information you choose to provide.
            </p>
            <br />
            <p>
              <strong style={{ color: "#e2e8f0" }}>Flight Data:</strong> We
              collect IGC files and the flight data contained within them,
              including GPS track logs, altitude data, timestamps, and
              instrument metadata. This data is used solely to provide
              analysis and coaching insights.
            </p>
            <br />
            <p>
              <strong style={{ color: "#e2e8f0" }}>Usage Information:</strong>{" "}
              We may collect information about how you use the service,
              including pages visited, features used, and session duration.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Provide and improve our flight analysis service</li>
              <li>Generate coaching summaries and insights</li>
              <li>Communicate with you about your account</li>
              <li>Respond to support requests</li>
              <li>Ensure the security and integrity of our systems</li>
            </ul>
          </Section>

          <Section title="4. Data Storage and Security">
            <p>
              Your flight data is stored securely and is not shared with
              third parties. We implement industry-standard security measures
              to protect your information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <br />
            <p>
              Flight data is processed on secure servers and is not used for
              any purpose other than providing you with analysis results.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your account information and flight data for as long
              as your account is active. You may delete your data at any time
              from within the application. Upon account deletion, all
              associated flight data will be permanently removed within 30
              days.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              We may use third-party services for hosting, analytics, and
              payment processing. These services are bound by their own
              privacy policies and we require them to maintain appropriate
              data protection standards.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your flight data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </Section>

          <Section title="8. Cookies">
            <p>
              We use cookies and similar technologies to maintain session
              state and improve your experience. You can control cookie
              settings through your browser preferences.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes via email or a notice within
              the application.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              If you have questions about this Privacy Policy or how we handle
              your data, please contact us through the support channel within
              the application.
            </p>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
