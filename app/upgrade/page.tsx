import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Upgrade — Parametrics",
  description: "Upgrade your Parametrics account to a paid plan.",
};

const PAYFAST_MONTHLY_FIELDS = [
  { name: "merchant_id", value: "24168664" },
  { name: "merchant_key", value: "h39r3bcx016jr" },
  { name: "return_url", value: "https://parametrics.app/welcome" },
  { name: "cancel_url", value: "https://parametrics.app/upgrade" },
  { name: "notify_url", value: "https://app.parametrics.app/webhook/payfast" },
  { name: "m_payment_id", value: "parametrics_monthly" },
  { name: "amount", value: "60.00" },
  { name: "item_name", value: "Parametrics Pilot - Monthly" },
  { name: "subscription_type", value: "1" },
  { name: "recurring_amount", value: "60.00" },
  { name: "frequency", value: "3" },
  { name: "cycles", value: "0" },
  { name: "custom_str1", value: "monthly" },
];

const PAYFAST_ANNUAL_FIELDS = [
  { name: "merchant_id", value: "24168664" },
  { name: "merchant_key", value: "h39r3bcx016jr" },
  { name: "return_url", value: "https://parametrics.app/welcome" },
  { name: "cancel_url", value: "https://parametrics.app/upgrade" },
  { name: "notify_url", value: "https://app.parametrics.app/webhook/payfast" },
  { name: "m_payment_id", value: "parametrics_annual" },
  { name: "amount", value: "600.00" },
  { name: "item_name", value: "Parametrics Pilot - Annual" },
  { name: "subscription_type", value: "1" },
  { name: "recurring_amount", value: "600.00" },
  { name: "frequency", value: "6" },
  { name: "cycles", value: "0" },
  { name: "custom_str1", value: "annual" },
];

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "R60",
    period: "/ month",
    fields: PAYFAST_MONTHLY_FIELDS,
    highlighted: false,
  },
  {
    id: "annual",
    name: "Annual",
    price: "R600",
    period: "/ year",
    note: "2 months free",
    fields: PAYFAST_ANNUAL_FIELDS,
    highlighted: true,
  },
];

export default function UpgradePage() {
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
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            padding: "3rem 1.5rem 4rem",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.025em",
                margin: "0 0 0.5rem",
              }}
            >
              Upgrade your Parametrics account
            </h1>
            <p
              style={{
                color: "rgba(226,232,240,0.45)",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              You&rsquo;re upgrading from your free trial
            </p>
          </div>

          {/* Plan cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, rgba(3,169,244,0.1) 0%, rgba(2,136,209,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
                  border: plan.highlighted
                    ? "1px solid rgba(3,169,244,0.35)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  position: "relative",
                }}
              >
                {"note" in plan && plan.note && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#03a9f4",
                      color: "#000",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.85rem",
                      borderRadius: "0 0 0.5rem 0.5rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {plan.note}
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "rgba(226,232,240,0.65)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {plan.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.2rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>
                    {plan.period}
                  </span>
                </div>

                <form
                  action="https://www.payfast.co.za/eng/process"
                  method="post"
                  style={{ margin: 0 }}
                >
                  {plan.fields.map((field) => (
                    <input
                      key={field.name}
                      type="hidden"
                      name={field.name}
                      value={field.value}
                    />
                  ))}
                  <button
                    type="submit"
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      padding: "0.8rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      background: plan.highlighted ? "#03a9f4" : "rgba(255,255,255,0.07)",
                      color: plan.highlighted ? "#fff" : "rgba(226,232,240,0.8)",
                      border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    Subscribe {plan.name}
                  </button>
                </form>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "rgba(226,232,240,0.3)",
              fontSize: "0.8rem",
              marginTop: "1.5rem",
            }}
          >
            Charged in ZAR via PayFast · Cancel anytime
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
