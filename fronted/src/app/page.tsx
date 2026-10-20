import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PromptCard } from "@/components/prompts/PromptCard";
import { buildMetadata, buildWebSiteJsonLd } from "@/lib/seo";
import {
  getFeaturedPrompts,
  getTrendingPrompts,
  getCategories,
  getFeaturedCollections,
} from "@/services/prompt-service";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Copy,
  Star,
  BookOpen,
  Camera,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Photo Prompts — Discover & Copy Instantly",
  description:
    "Explore thousands of curated AI photo prompts for portraits, fashion, cinematic scenes, travel, and more. Free to copy and use with any AI image generator.",
  path: "",
});

export default async function HomePage() {
  const [featured, trending, categories, collections] = await Promise.all([
    getFeaturedPrompts(6),
    getTrendingPrompts(8),
    getCategories(),
    getFeaturedCollections(3),
  ]);

  const jsonLd = buildWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fdf4ff 0%, #fce7f3 30%, #fff7ed 60%, #f0fdf4 100%)",
        }}
      >
        <div className="container-page py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-100 text-xs font-semibold text-purple-600 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            30+ Curated AI Photo Prompts
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Create Stunning Photos with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d946ef, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Perfect AI Prompts
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Discover, copy, and use professionally crafted prompts for Midjourney, DALL·E,
            Stable Diffusion, and more. From cinematic portraits to fantasy landscapes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
            >
              <Sparkles className="w-5 h-5" />
              Browse All Prompts
            </Link>
            <Link
              href="/collections/golden-hour-magic"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md"
            >
              <BookOpen className="w-5 h-5" />
              View Collections
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              { value: "30+", label: "Curated Prompts" },
              { value: "14", label: "Categories" },
              { value: "5", label: "Collections" },
              { value: "Free", label: "To Copy & Use" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "linear-gradient(135deg, #d946ef, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CATEGORIES ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Browse by Category
              </h2>
              <p className="text-gray-500 mt-1">Find prompts for every photography style</p>
            </div>
            <Link
              href="/prompts"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              All categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.slice(0, 10).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-square"
                aria-label={`${cat.name} prompts`}
              >
                <Image
                  src={cat.imageUrl}
                  alt={cat.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold">{cat.name}</p>
                  <p className="text-white/70 text-xs">{cat.promptCount} prompts</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROMPTS ───────────────────────────────────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                Editor's Picks
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured Prompts
              </h2>
            </div>
            <Link
              href="/prompts?sort=featured"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((prompt, i) => (
              <PromptCard key={prompt.id} prompt={prompt} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRENDING PROMPTS ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 mb-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Trending Now
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Popular Prompts
              </h2>
            </div>
            <Link
              href="/prompts"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Explore all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((prompt, i) => (
              <PromptCard key={prompt.id} prompt={prompt} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CURATED COLLECTIONS ───────────────────────────────────────────── */}
      <section className="section bg-gray-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Curated Collections
            </h2>
            <p className="text-gray-400 mt-2">
              Hand-picked sets of prompts for specific photography styles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-video"
                aria-label={`${col.title} collection`}
              >
                <Image
                  src={col.imageUrl}
                  alt={col.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 mb-3 transition-all group-hover:w-12" />
                  <h3 className="text-white font-bold text-lg leading-snug">{col.title}</h3>
                  <p className="text-white/60 text-sm mt-1 line-clamp-2">{col.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-purple-300 text-xs font-semibold group-hover:text-purple-200 transition-colors">
                    Explore collection <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO USE ────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How to Use AI Photo Prompts
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Get stunning AI-generated photos in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                step: "01",
                title: "Browse & Discover",
                description:
                  "Explore hundreds of professionally crafted prompts across 14 photography categories. Use search and filters to find exactly what you need.",
              },
              {
                icon: Copy,
                step: "02",
                title: "Copy the Prompt",
                description:
                  "Click the copy button on any prompt card. The complete, detailed prompt text is instantly copied to your clipboard — ready to paste.",
              },
              {
                icon: Sparkles,
                step: "03",
                title: "Generate Your Image",
                description:
                  "Paste the prompt into Midjourney, DALL·E, Stable Diffusion, or any AI image generator. Get stunning results immediately.",
              },
            ].map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
                  />
                  <Icon
                    className="w-7 h-7 relative"
                    style={{ color: "#d946ef" }}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{
                    background: "linear-gradient(135deg, #d946ef, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  STEP {step}
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
            >
              <Sparkles className="w-5 h-5" />
              Start Exploring Prompts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
