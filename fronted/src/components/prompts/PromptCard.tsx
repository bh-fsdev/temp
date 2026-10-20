import Link from "next/link";
import Image from "next/image";
import type { PhotoPrompt } from "@/types";
import { CopyButton } from "@/components/ui/CopyButton";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { Tag } from "lucide-react";

interface PromptCardProps {
  prompt: PhotoPrompt;
  priority?: boolean;
}

export function PromptCard({ prompt, priority = false }: PromptCardProps) {
  return (
    <article
      className="card group flex flex-col h-full"
      aria-label={`AI photo prompt: ${prompt.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Link href={`/prompts/${prompt.slug}`} tabIndex={-1} aria-hidden="true">
          <Image
            src={prompt.imageUrl}
            alt={prompt.altText}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
        </Link>

        {/* Favorite button overlay */}
        <div className="absolute top-3 right-3">
          <FavoriteButton promptId={prompt.id} />
        </div>

        {/* Featured badge */}
        {prompt.featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <Link
            href={`/prompts/${prompt.slug}`}
            className="font-semibold text-gray-900 hover:text-purple-600 transition-colors line-clamp-2 text-sm leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {prompt.title}
          </Link>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{prompt.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {prompt.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-2">
          <CopyButton text={prompt.prompt} variant="secondary" className="w-full justify-center" />
        </div>
      </div>
    </article>
  );
}
