import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { buildCategoryMetadata } from "@/lib/seo";
import { getCategoryBySlug, getPromptsByCategory } from "@/services/prompt-service";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { categories } from "@/data/categories";
import { Camera } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return buildCategoryMetadata(category);
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page = "1" } = await searchParams;

  const [category, result] = await Promise.all([
    getCategoryBySlug(slug),
    getPromptsByCategory(slug, { page: Number(page), perPage: 12 }),
  ]);

  if (!category) notFound();

  return (
    <div className="min-h-screen">
      {/* Category hero */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <Image
          src={category.imageUrl}
          alt={category.altText}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 container-page flex flex-col justify-end pb-8">
          <Breadcrumb
            items={[
              { label: "Prompts", href: "/prompts" },
              { label: category.name },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl font-black text-white mt-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {category.name}
          </h1>
          <p className="text-white/70 mt-1 text-sm">{category.description}</p>
        </div>
      </div>

      <div className="container-page py-10">
        {result.items.length > 0 ? (
          <>
            <p className="text-sm text-gray-500 mb-6">
              Showing {result.items.length} of {result.pagination.total} prompts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {result.items.map((prompt, i) => (
                <PromptCard key={prompt.id} prompt={prompt} priority={i < 4} />
              ))}
            </div>
            <Pagination pagination={result.pagination} basePath={`/category/${slug}`} />
          </>
        ) : (
          <EmptyState
            icon={Camera}
            title="No prompts in this category yet"
            description="Check back soon for new prompts."
          />
        )}
      </div>
    </div>
  );
}
