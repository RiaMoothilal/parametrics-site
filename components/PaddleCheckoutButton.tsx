"use client";

import { useEffect, useRef } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";

let paddlePromise: Promise<Paddle | undefined> | null = null;

export default function PaddleCheckoutButton({
  priceId,
  highlighted,
}: {
  priceId: string;
  highlighted: boolean;
}) {
  const paddleRef = useRef<Paddle | undefined>();

  useEffect(() => {
    if (!paddlePromise) {
      paddlePromise = initializePaddle({
        environment: "sandbox",
        token: "test_d9f7824de2ef439b8ffda1eab86",
      });
    }
    paddlePromise.then((p) => {
      paddleRef.current = p;
      console.log("[Paddle] initialized:", p);
    });
  }, []);

  function handleClick() {
    console.log("[Paddle] opening checkout for priceId:", priceId);
    console.log("[Paddle] instance:", paddleRef.current);
    paddleRef.current?.Checkout.open({
      items: [{ priceId, quantity: 1 }],
    });
  }

  return (
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
  );
}
