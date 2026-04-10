import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllStories, getStory } from "@/lib/stories";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { meta } = getStory(params.slug);
    return {
      title: `${meta.title} — Parametrics`,
      description: meta.description,
    };
  } catch {
    return {};
  }
}

const TYPE_COLORS: Record<string, string> = {
  "Case Study": "#10b981",
  "Explainer": "#03a9f4",
  "Research": "#a855f7",
};

export default function StoryPage({ params }: Props) {
  let story;
  try {
    story = getStory(params.slug);
  } catch {
    notFound();
  }

  const { meta, content } = story;
  const accentColor = TYPE_COLORS[meta.type] ?? "#03a9f4";

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "3.5rem 1.5rem 6rem",
          }}
        >
          {/* Back link */}
          <Link
            href="/stories"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "rgba(226,232,240,0.4)",
              textDecoration: "none",
              fontSize: "0.85rem",
              marginBottom: "2.5rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All stories
          </Link>

          {/* Meta */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: accentColor,
              }}
            >
              {meta.type}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            {meta.title}
          </h1>

          {/* Description */}
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              marginBottom: "3rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              paddingBottom: "2rem",
            }}
          >
            {meta.description}
          </p>

          {/* MDX content */}
          <div className="story-body">
            <MDXRemote source={content} />
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: "4rem",
              padding: "1.75rem",
              background: "rgba(3,169,244,0.05)",
              border: "1px solid rgba(3,169,244,0.15)",
              borderRadius: "0.75rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "0.4rem",
              }}
            >
              See this analysis on your own flights
            </p>
            <p
              style={{
                color: "rgba(226,232,240,0.5)",
                fontSize: "0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              Upload any IGC file and get a full breakdown in seconds.
            </p>
            <Link
              href="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#03a9f4",
                color: "#fff",
                padding: "0.7rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Start free trial →
            </Link>
          </div>
        </div>
      </main>

      <style>{`
        .story-body {
          color: rgba(226,232,240,0.8);
          font-size: 1rem;
          line-height: 1.75;
        }
        .story-body h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 2.5rem 0 0.75rem;
        }
        .story-body h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 2rem 0 0.6rem;
        }
        .story-body p {
          margin: 0 0 1.25rem;
        }
        .story-body strong {
          color: #fff;
          font-weight: 600;
        }
        .story-body ul, .story-body ol {
          padding-left: 1.5rem;
          margin: 0 0 1.25rem;
        }
        .story-body li {
          margin-bottom: 0.4rem;
        }
        .story-body a {
          color: #03a9f4;
          text-decoration: none;
        }
        .story-body a:hover {
          text-decoration: underline;
        }
        .story-body hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 2.5rem 0;
        }
        .story-body blockquote {
          border-left: 3px solid rgba(3,169,244,0.5);
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: rgba(226,232,240,0.6);
          font-style: italic;
        }
        .story-body code {
          background: rgba(255,255,255,0.07);
          border-radius: 0.25rem;
          padding: 0.15em 0.4em;
          font-size: 0.875em;
          color: #03a9f4;
        }
      `}</style>

      <Footer />
    </>
  );
}
