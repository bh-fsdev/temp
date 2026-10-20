import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Promptora",
  description:
    "Learn about Promptora — the AI photo prompts discovery platform built for photographers and AI art enthusiasts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page py-16 max-w-3xl">
      <h1
        className="text-4xl font-black text-gray-900 mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        About Promptora
      </h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p className="text-lg">
          Promptora is a curated AI photo prompts discovery platform built for photographers,
          digital artists, and AI image enthusiasts.
        </p>
        <p>
          We believe the best AI-generated images start with the best prompts. Our mission is to
          make it effortless to discover, copy, and use expertly crafted prompts across every
          photography style — from dramatic cinematic portraits to ethereal nature scenes.
        </p>
        <h2
          className="text-2xl font-bold text-gray-900 mt-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What We Offer
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>30+ professionally crafted AI photo prompts across 14 categories</li>
          <li>One-click copy for instant use with any AI image generator</li>
          <li>Curated collections for specific photography styles</li>
          <li>Save favorites for quick access later</li>
          <li>New prompts added regularly</li>
        </ul>
        <h2
          className="text-2xl font-bold text-gray-900 mt-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Compatible AI Tools
        </h2>
        <p>
          Our prompts work with all major AI image generators including Midjourney, DALL·E 3,
          Stable Diffusion, Adobe Firefly, Leonardo AI, and more.
        </p>
      </div>
    </div>
  );
}
