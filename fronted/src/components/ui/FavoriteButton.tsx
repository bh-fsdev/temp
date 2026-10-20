"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";

interface FavoriteButtonProps {
  promptId: string;
  className?: string;
}

export function FavoriteButton({ promptId, className = "" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isHydrated } = useFavorites();
  const active = isHydrated && isFavorite(promptId);

  return (
    <button
      id={`favorite-btn-${promptId}`}
      onClick={() => toggleFavorite(promptId)}
      className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 active:scale-90 ${
        active
          ? "bg-pink-50 border-pink-300 text-pink-500"
          : "bg-white border-gray-200 text-gray-400 hover:text-pink-400 hover:border-pink-200"
      } ${className}`}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={active}
    >
      <Heart className={`w-4 h-4 ${active ? "fill-current" : ""}`} />
    </button>
  );
}
