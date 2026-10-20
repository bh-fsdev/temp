import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { buildCollectionMetadata, buildCollectionPageJsonLd } from "@/lib/seo";
import { getCollectionBySlug, getPromptBySlug } from "@/services/prompt-service";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatDate } from "@/lib/utils";
import { collections } from "@/data/collections";
import { BookOpen } from "lucide-react";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return collections.map((col) => ({
    slug: col.slug,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) return { title: "Collection Not Found" };
  return buildCollectionMetadata(collection);
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) notFound();

  const promptResults = await Promise.all(
    collection.promptIds.map((id) => getPromptBySlug(
      // Find slug by id — we'll query the data directly for efficiency
      id
    ))
  );

  // The above uses IDs not slugs — fix by importing data directly for collection lookups
  const { prompts: allPrompts } = await import("@/data/prompts");
  const collectionPrompts = collection.promptIds
    .map((id) => allPrompts.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p != null && p.published);

  const jsonLd = buildCollectionPageJsonLd(collection, collectionPrompts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <Image
            src={collection.imageUrl}
            alt={collection.altText}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 container-page flex flex-col justify-end pb-8">
            <Breadcrumb
              items={[
                { label: "Collections", href: "/" },
                { label: collection.title },
              ]}
            />
            <div className="flex items-center gap-2 mt-3 mb-2">
              <BookOpen className="w-4 h-4 text-purple-300" />
              <span className="text-purple-300 text-xs font-semibold uppercase tracking-widest">
                Collection · {formatDate(collection.publishedAt)}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {collection.title}
            </h1>
            <p className="text-white/70 mt-2 max-w-xl text-sm">{collection.description}</p>
          </div>
        </div>

        <div className="container-page py-10">
          <p className="text-sm text-gray-500 mb-6">
            {collectionPrompts.length} curated prompt{collectionPrompts.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionPrompts.map((prompt, i) => (
              <PromptCard key={prompt.id} prompt={prompt} priority={i < 3} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
