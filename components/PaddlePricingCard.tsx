"use client";

import { useEffect, useRef, useState } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";

let paddlePromise: Promise<Paddle | undefined> | null = null;

function getPaddle(environment: "sandbox" | "production", token: string) {
  if (!paddlePromise) {
    paddlePromise = initializePaddle({ environment, token });
  }
  return paddlePromise;
}

interface Props {
  priceId: string;
  name: string;
  period: string;
  trialNote: string;
  highlighted: boolean;
  badge?: string;
  environment: "sandbox" | "production";
  token: string;
}

export default function PaddlePricingCard({
  priceId,
  name,
  period,
  trialNote,
  highlighted,
  badge,
  environment,
  token,
}: Props) {
  const paddleRef = useRef<Paddle | undefined>();
  const [displayPrice, setDisplayPrice] = useState<string>("...");

  useEffect(() => {
    getPaddle(environment, token).then(async (p) => {
      if (!p) return;
      paddleRef.current = p;

      try {
        const preview = await p.PricePreview({
          items: [{ priceId, quantity: 1 }],
        });
        const formatted =
          preview.data.details.lineItems[0]?.formattedTotals.subtotal;
        if (formatted) setDisplayPrice(formatted);
      } catch {
        setDisplayPrice("—");
      }
    });
  }, [priceId, environment, token]);

  function handleClick() {
    paddleRef.current?.Checkout.open({
      items: [{ priceId }],
    });
  }

  return (
    <div
      style={{
        background: highlighted
          ? "linear-gradient(135deg, rgba(3,169,244,0.1) 0%, rgba(2,136,209,0.06) 100%)"
          : "rgba(255,255,255,0.03)",
        border: highlighted
          ? "1px solid rgba(3,169,244,0.35)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1rem",
        padding: "2rem",
        position: "relative",
      }}
    >
      {badge && (
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
          {badge}
        </div>
      )}

      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "rgba(226,232,240,0.7)",
          margin: "0 0 0.75rem",
        }}
      >
        {name}
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.2rem",
          marginBottom: "0.3rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2.75rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.03em",
          }}
        >
          {displayPrice}
        </span>
        <span style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem" }}>
          {period}
        </span>
      </div>

      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(226,232,240,0.55)",
          marginBottom: "1.75rem",
        }}
      >
        {trialNote}
      </p>

      <button
        onClick={handleClick}
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "0.85rem",
          borderRadius: "0.5rem",
          fontSize: "0.95rem",
          fontWeight: 700,
          cursor: "pointer",
          border: highlighted ? "none" : "1px solid rgba(255,255,255,0.12)",
          background: highlighted ? "#03a9f4" : "rgba(255,255,255,0.07)",
          color: highlighted ? "#fff" : "rgba(226,232,240,0.8)",
        }}
      >
        Start free trial
      </button>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.78rem",
          color: "rgba(226,232,240,0.35)",
          margin: "0.6rem 0 0",
        }}
      >
        No credit card required
      </p>
    </div>
  );
}
