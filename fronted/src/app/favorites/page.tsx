"use client";

import { useFavorites } from "@/hooks/use-favorites";
import { prompts as allPrompts } from "@/data/prompts";
import { PromptCard } from "@/components/prompts/PromptCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const { favoriteIds, clearFavorites, isHydrated } = useFavorites();

  const favoritePrompts = allPrompts.filter((p) => favoriteIds.includes(p.id) && p.published);

  if (!isHydrated) {
    return (
      <div className="container-page py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-72 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container-page py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl sm:text-4xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Saved Prompts
            </h1>
            <p className="text-gray-500 mt-1">
              {favoritePrompts.length} saved prompt{favoritePrompts.length !== 1 ? "s" : ""}
            </p>
          </div>
          {favoritePrompts.length > 0 && (
            <button
              onClick={clearFavorites}
              className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
              aria-label="Clear all favorites"
            >
              Clear all
            </button>
          )}
        </div>

        {favoritePrompts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {favoritePrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Heart}
            title="No saved prompts yet"
            description="Click the heart icon on any prompt card to save it here for quick access."
            action={
              <Link
                href="/prompts"
                className="px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
              >
                Browse Prompts
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
}
