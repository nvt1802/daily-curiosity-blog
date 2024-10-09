import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Daily Curiosity",
  description:
    "Explore daily articles on general knowledge, science, and health care.",
  keywords: ["blog", "science", "health care", "knowledge"],
  authors: [
    { name: "Daily Curiosity", url: "https://dailycuriosityblog.com/" },
  ],
  openGraph: {
    type: "website",
    title: "Home Page - Daily Curiosity",
    description:
      "Explore daily articles on general knowledge, science, and health care.",
    siteName: "Daily Curiosity",
    url: "https://dailycuriosityblog.com/",
    images: [
      {
        url: "/images/home-og-image.png",
        width: 800,
        height: 600,
        alt: "Daily Curiosity Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Page - Daily Curiosity",
    description:
      "Explore daily articles on general knowledge, science, and health care.",
    images: ["/images/home-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dailycuriosityblog.com/",
  },
};