import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { getPrompts, getCategories } from "@/services/prompt-service";
import { PromptsClient } from "@/features/prompts/PromptsClient";

interface PromptsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
    page?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: PromptsPageProps): Promise<Metadata> {
  const { search, category } = await searchParams;
  const title = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} AI Photo Prompts`
    : search
      ? `Search: "${search}" — AI Photo Prompts`
      : "Browse All AI Photo Prompts";

  return buildMetadata({
    title,
    description:
      "Search and filter hundreds of AI photo prompts across portrait, fashion, cinematic, travel, nature, and more categories.",
    path: "/prompts",
    noindex: !!(search || category),
  });
}

export default async function PromptsPage({ searchParams }: PromptsPageProps) {
  const { search = "", category = "", sort = "newest", page = "1" } = await searchParams;

  const [result, categories] = await Promise.all([
    getPrompts({
      search: search || undefined,
      categorySlug: category || undefined,
      sortBy: sort as "newest" | "featured" | "oldest",
      page: Number(page),
      perPage: 12,
    }),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen">
      <div className="container-page pt-8 pb-4">
        <h1
          className="text-3xl sm:text-4xl font-black text-gray-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI Photo Prompts
        </h1>
        <p className="text-gray-500 mt-2">
          Discover, copy, and create stunning AI-generated photography
        </p>
      </div>

      <Suspense fallback={<div className="container-page py-8 text-gray-500 text-sm">Loading…</div>}>
        <PromptsClient
          initialPrompts={result.items}
          initialPagination={result.pagination}
          categories={categories}
          initialSearch={search}
          initialCategory={category}
          initialSort={sort}
        />
      </Suspense>
    </div>
  );
}
