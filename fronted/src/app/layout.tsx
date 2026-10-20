import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { buildWebSiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Promptora — AI Photo Prompts",
  description:
    "Discover thousands of AI photo prompts for portraits, fashion, cinematic scenes, travel, and more. Copy and use instantly with any AI image generator.",
  path: "",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildWebSiteJsonLd();
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
