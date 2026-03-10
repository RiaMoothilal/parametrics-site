import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Parametrics Terms of Service. The rules governing use of our paragliding flight analysis platform.",
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

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p
              style={{
                color: "rgba(226,232,240,0.4)",
                fontSize: "0.85rem",
              }}
            >
              Last updated: January 2025 · This is a draft document.
            </p>
          </div>

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using Parametrics ("the Service"), you agree
              to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use the Service.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Parametrics is a web-based flight analysis and coaching tool
              for paragliding pilots. The Service allows users to upload IGC
              flight log files and receive automated analysis including
              thermal performance metrics, glide efficiency data, missed
              thermal detection, risk assessments, and coaching summaries.
            </p>
          </Section>

          <Section title="3. User Accounts">
            <p>
              You are responsible for maintaining the security of your
              account credentials. You must notify us immediately of any
              unauthorized use of your account. We are not liable for losses
              resulting from unauthorized use of your credentials.
            </p>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree not to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Upload flight data that you do not own or have rights to</li>
              <li>Attempt to reverse engineer or misuse the analysis algorithms</li>
              <li>Use the Service in violation of any applicable laws</li>
              <li>Share account credentials with third parties</li>
              <li>Attempt to gain unauthorized access to other users' data</li>
              <li>Interfere with the operation of the Service</li>
            </ul>
          </Section>

          <Section title="5. Flight Data and Intellectual Property">
            <p>
              You retain ownership of the flight data (IGC files) you upload
              to the Service. By uploading data, you grant Parametrics a
              limited license to process your data solely for the purpose of
              providing the analysis service.
            </p>
            <br />
            <p>
              The analysis algorithms, reports, user interface, and all other
              aspects of the Parametrics platform are the intellectual
              property of Parametrics and may not be copied or reproduced
              without permission.
            </p>
          </Section>

          <Section title="6. Safety Disclaimer">
            <p>
              <strong style={{ color: "#f59e0b" }}>Important:</strong>{" "}
              Parametrics provides data analysis and coaching insights for
              educational purposes only. The analysis does not constitute
              professional flight instruction or safety advice.
            </p>
            <br />
            <p>
              Paragliding is an inherently risky activity. You are solely
              responsible for your flying decisions. Always fly within your
              training, current conditions, and equipment limitations.
              Consult a qualified instructor for flight instruction and
              safety guidance.
            </p>
          </Section>

          <Section title="7. Subscription and Payment">
            <p>
              Paid plans are billed on a monthly or annual basis as selected.
              During the beta period, access is provided free of charge.
              When paid plans launch, a free tier or trial may be offered as
              described on the pricing page. Subscriptions auto-renew unless
              cancelled before the renewal date.
            </p>
          </Section>

          <Section title="8. Cancellation and Refunds">
            <p>
              You may cancel your subscription at any time from your account
              settings. Cancellation takes effect at the end of the current
              billing period. We do not offer partial refunds for unused
              subscription time, except where required by law.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Parametrics shall not
              be liable for any indirect, incidental, special, or
              consequential damages arising from your use of the Service.
              Our total liability shall not exceed the amount you paid for
              the Service in the preceding 12 months.
            </p>
          </Section>

          <Section title="10. Modifications">
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of material changes via email or notice within the
              application. Continued use of the Service after changes
              constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance
              with applicable laws. Any disputes arising from these Terms
              shall be subject to the exclusive jurisdiction of the competent
              courts.
            </p>
          </Section>

          <div
            style={{
              background: "rgba(3,169,244,0.06)",
              border: "1px solid rgba(3,169,244,0.15)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                color: "rgba(226,232,240,0.6)",
                fontSize: "0.82rem",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#03a9f4" }}>Note:</strong> This is a
              draft Terms of Service. Before launching, this document should
              be reviewed by a qualified legal professional.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
