import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buildPromptMetadata, buildBreadcrumbJsonLd, buildPromptJsonLd } from "@/lib/seo";
import { getPromptBySlug, getRelatedPrompts, getCategoryBySlug } from "@/services/prompt-service";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CopyButton } from "@/components/ui/CopyButton";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { prompts } from "@/data/prompts";
import { Tag, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { siteUrl } from "@/lib/env";

interface PromptDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return prompts
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: PromptDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prompt = await getPromptBySlug(slug);
  if (!prompt) return { title: "Prompt Not Found" };
  return buildPromptMetadata(prompt);
}

export default async function PromptDetailPage({ params }: PromptDetailPageProps) {
  const { slug } = await params;
  const prompt = await getPromptBySlug(slug);
  if (!prompt) notFound();

  const [category, related] = await Promise.all([
    getCategoryBySlug(
      prompt.categoryId.replace("cat-", "") // derive category slug from ID... use service instead
    ).catch(() => null),
    getRelatedPrompts(prompt.id, 4),
  ]);

  // Better: look up category by iterating
  const { categories } = await import("@/data/categories");
  const cat = categories.find((c) => c.id === prompt.categoryId) ?? null;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: siteUrl },
    { name: "Prompts", url: `${siteUrl}/prompts` },
    ...(cat ? [{ name: cat.name, url: `${siteUrl}/category/${cat.slug}` }] : []),
    { name: prompt.title, url: `${siteUrl}/prompts/${prompt.slug}` },
  ]);

  const promptJsonLd = buildPromptJsonLd(prompt);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(promptJsonLd) }}
      />

      <div className="container-page py-8">
        {/* Back link + breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Prompts", href: "/prompts" },
              ...(cat ? [{ label: cat.name, href: `/category/${cat.slug}` }] : []),
              { label: prompt.title },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Image */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={prompt.imageUrl}
                alt={prompt.altText}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Category + favorite */}
            <div className="flex items-center justify-between">
              {cat && (
                <Link
                  href={`/category/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  {cat.name}
                </Link>
              )}
              <FavoriteButton promptId={prompt.id} />
            </div>

            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {prompt.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{prompt.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Date */}
            <p className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              Added {formatDate(prompt.createdAt)}
            </p>

            {/* Prompt text box */}
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  AI Prompt
                </span>
                <CopyButton text={prompt.prompt} variant="primary" />
              </div>
              <p className="prose-prompt text-gray-700">{prompt.prompt}</p>
            </div>

            {/* Usage tips */}
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">💡 How to use this prompt</p>
              <ol className="list-decimal list-inside space-y-1 text-blue-700 text-xs leading-relaxed">
                <li>Click "Copy Prompt" to copy the full text</li>
                <li>Open your AI tool (Midjourney, DALL·E, Stable Diffusion, etc.)</li>
                <li>Paste the prompt and adjust parameters as needed</li>
                <li>Generate and iterate for best results</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Related prompts */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Related Prompts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <PromptCard key={p.id} prompt={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
