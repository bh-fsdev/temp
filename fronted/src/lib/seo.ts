import type { Metadata } from "next";
import { siteUrl } from "@/lib/env";
import type { PhotoPrompt, PromptCategory, PromptCollection } from "@/types";

const SITE_NAME = "Promptora";
const DEFAULT_DESCRIPTION =
  "Discover thousands of AI photo prompts for portraits, fashion, cinematic scenes, travel, and more. Copy and use instantly with any AI image generator.";
const DEFAULT_OG_IMAGE = `${siteUrl}/og-default.jpg`;

// ─── Generic page metadata ────────────────────────────────────────────────────

export interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const canonical = `${siteUrl}${input.path}`;
  const ogImage = input.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: `${input.title} | ${SITE_NAME}`,
    description: input.description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical },
    robots: input.noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${input.title} | ${SITE_NAME}`,
      description: input.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${input.title} | ${SITE_NAME}`,
      description: input.description,
      images: [ogImage],
    },
  };
}

// ─── Prompt-specific metadata ─────────────────────────────────────────────────

export function buildPromptMetadata(prompt: PhotoPrompt): Metadata {
  const title = prompt.seoTitle ?? prompt.title;
  const description = prompt.seoDescription ?? prompt.description;
  return buildMetadata({
    title,
    description,
    path: `/prompts/${prompt.slug}`,
    ogImage: prompt.imageUrl,
    noindex: !prompt.indexable,
  });
}

// ─── Category-specific metadata ───────────────────────────────────────────────

export function buildCategoryMetadata(category: PromptCategory): Metadata {
  const title = category.seoTitle ?? `${category.name} AI Photo Prompts`;
  const description =
    category.seoDescription ??
    `Browse ${category.promptCount}+ ${category.name.toLowerCase()} AI photo prompts. Discover creative ideas for your next AI image generation session.`;
  return buildMetadata({
    title,
    description,
    path: `/category/${category.slug}`,
    ogImage: category.imageUrl,
  });
}

// ─── Collection-specific metadata ────────────────────────────────────────────

export function buildCollectionMetadata(collection: PromptCollection): Metadata {
  const title = collection.seoTitle ?? collection.title;
  const description = collection.seoDescription ?? collection.description;
  return buildMetadata({
    title,
    description,
    path: `/collections/${collection.slug}`,
    ogImage: collection.imageUrl,
  });
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    description: DEFAULT_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/prompts?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildPromptJsonLd(prompt: PhotoPrompt) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: prompt.title,
    description: prompt.description,
    image: prompt.imageUrl,
    url: `${siteUrl}/prompts/${prompt.slug}`,
    dateCreated: prompt.createdAt,
    dateModified: prompt.updatedAt,
    keywords: prompt.tags.join(", "),
  };
}

export function buildCollectionPageJsonLd(
  collection: PromptCollection,
  prompts: PhotoPrompt[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.title,
    description: collection.description,
    url: `${siteUrl}/collections/${collection.slug}`,
    hasPart: prompts.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      url: `${siteUrl}/prompts/${p.slug}`,
    })),
  };
}

export { SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE };
