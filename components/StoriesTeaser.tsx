import Link from "next/link";
import { getAllStories } from "@/lib/stories";

const TYPE_COLORS: Record<string, string> = {
  "Case Study": "#10b981",
  "Explainer": "#03a9f4",
  "Research": "#a855f7",
};

export default function StoriesTeaser() {
  const stories = getAllStories().slice(0, 3);
  if (stories.length === 0) return null;

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#03a9f4",
                fontSize: "0.82rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.4rem",
              }}
            >
              Stories
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              Case Studies & Insights
            </h2>
          </div>
          <Link
            href="/stories"
            style={{
              color: "#03a9f4",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            All stories →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
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
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.75rem",
                    padding: "1.5rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: accentColor,
                    }}
                  >
                    {story.type}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {story.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(226,232,240,0.5)",
                      fontSize: "0.83rem",
                      lineHeight: 1.55,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {story.description}
                  </p>
                  <span
                    style={{
                      color: accentColor,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      marginTop: "0.25rem",
                    }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
