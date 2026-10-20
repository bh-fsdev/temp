"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "promptora_favorites";

/**
 * Isolated favorites storage — uses localStorage.
 * Replace the read/write functions below with API calls when backend is ready.
 * See docs/FUTURE_BACKEND.md for the migration plan.
 */

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    console.warn("Could not persist favorites to localStorage");
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setFavoriteIds(readStorage());
    setIsHydrated(true);
  }, []);

  const toggleFavorite = useCallback((promptId: string) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(promptId)
        ? prev.filter((id) => id !== promptId)
        : [...prev, promptId];
      writeStorage(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (promptId: string) => favoriteIds.includes(promptId),
    [favoriteIds]
  );

  const clearFavorites = useCallback(() => {
    setFavoriteIds([]);
    writeStorage([]);
  }, []);

  return { favoriteIds, isFavorite, toggleFavorite, clearFavorites, isHydrated };
}
