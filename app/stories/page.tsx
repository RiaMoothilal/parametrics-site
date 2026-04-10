import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories — Parametrics",
  description:
    "Case studies, flight analytics breakdowns, and research from Parametrics.",
};

const TYPE_COLORS: Record<string, string> = {
  "Case Study": "#10b981",
  "Explainer": "#03a9f4",
  "Research": "#a855f7",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 1.5rem 6rem",
          }}
        >
          {/* Header */}
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
            Stories
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Case Studies & Insights
          </h1>
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "520px",
              marginBottom: "3rem",
            }}
          >
            Real flight data, analytics breakdowns, and research on what the numbers actually reveal.
          </p>

          {/* Story list */}
          {stories.length === 0 ? (
            <p style={{ color: "rgba(226,232,240,0.4)", fontSize: "0.9rem" }}>
              No stories yet — check back soon.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {stories.map((story) => {
                const accentColor = TYPE_COLORS[story.type] ?? "#03a9f4";
                return (
                  <Link
                    key={story.slug}
                    href={`/stories/${story.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        padding: "1.5rem 0",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "1rem",
                        alignItems: "start",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            marginBottom: "0.4rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: accentColor,
                            }}
                          >
                            {story.type}
                          </span>
                          <span
                            style={{
                              color: "rgba(226,232,240,0.3)",
                              fontSize: "0.75rem",
                            }}
                          >
                            {formatDate(story.date)}
                          </span>
                        </div>
                        <h2
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#fff",
                            margin: "0 0 0.35rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {story.title}
                        </h2>
                        <p
                          style={{
                            color: "rgba(226,232,240,0.5)",
                            fontSize: "0.875rem",
                            lineHeight: 1.55,
                            margin: 0,
                          }}
                        >
                          {story.description}
                        </p>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ flexShrink: 0, marginTop: "4px", opacity: 0.4 }}
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
