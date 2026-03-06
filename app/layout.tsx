import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://parametrics.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Parametrics — Paragliding Flight Analysis & Coaching",
    template: "%s | Parametrics",
  },
  description:
    "Upload your IGC file and instantly analyze thermals, glide efficiency, missed climbs, and risk patterns. Coaching insights built for paraglider pilots.",
  keywords: [
    "paragliding",
    "flight analysis",
    "IGC",
    "thermal analysis",
    "paragliding coaching",
    "flight data",
    "glide efficiency",
    "XCTrack",
    "FlySkyHy",
  ],
  authors: [{ name: "Parametrics" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: "Parametrics",
    title: "Parametrics — Paragliding Flight Analysis & Coaching",
    description:
      "Upload your IGC file and instantly analyze thermals, glide efficiency, missed climbs, and risk patterns.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parametrics – Flight Analysis for Paragliders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parametrics — Paragliding Flight Analysis & Coaching",
    description:
      "Upload your IGC file and instantly analyze thermals, glide efficiency, missed climbs, and risk patterns.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
