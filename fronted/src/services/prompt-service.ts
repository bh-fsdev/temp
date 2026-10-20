/**
 * Service functions for prompts — typed, testable wrappers over the repository.
 * Pages import from here, not directly from repositories.
 */
import { promptRepository, categoryRepository, collectionRepository } from "@/repositories";
import type { PromptQueryOptions } from "@/types";

export const getPrompts = (options?: PromptQueryOptions) =>
  promptRepository.getAll(options);

export const getPromptBySlug = (slug: string) =>
  promptRepository.getBySlug(slug);

export const getFeaturedPrompts = (limit?: number) =>
  promptRepository.getFeatured(limit);

export const getTrendingPrompts = (limit?: number) =>
  promptRepository.getTrending(limit);

export const getPromptsByCategory = (categorySlug: string, options?: PromptQueryOptions) =>
  promptRepository.getByCategory(categorySlug, options);

export const searchPrompts = (query: string, options?: PromptQueryOptions) =>
  promptRepository.search(query, options);

export const getRelatedPrompts = (promptId: string, limit?: number) =>
  promptRepository.getRelated(promptId, limit);

export const getCategories = () => categoryRepository.getAll();

export const getCategoryBySlug = (slug: string) =>
  categoryRepository.getBySlug(slug);

export const getCollections = () => collectionRepository.getAll();

export const getCollectionBySlug = (slug: string) =>
  collectionRepository.getBySlug(slug);

export const getFeaturedCollections = (limit?: number) =>
  collectionRepository.getFeatured(limit);
