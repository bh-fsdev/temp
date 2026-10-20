import type {
  PhotoPrompt,
  PromptCategory,
  PromptCollection,
  PromptQueryOptions,
  PaginatedResult,
} from "@/types";

// ─── Repository Interfaces ──────────────────────────────────────────────────
// These interfaces define the contract for data access.
// The current implementation uses static local data.
// Future integration: create an ApiPromptRepository implementing these interfaces
// that fetches from a REST/GraphQL API — no UI components need to change.

export interface PromptRepository {
  getAll(options?: PromptQueryOptions): Promise<PaginatedResult<PhotoPrompt>>;
  getBySlug(slug: string): Promise<PhotoPrompt | null>;
  getFeatured(limit?: number): Promise<PhotoPrompt[]>;
  getByCategory(categorySlug: string, options?: PromptQueryOptions): Promise<PaginatedResult<PhotoPrompt>>;
  search(query: string, options?: PromptQueryOptions): Promise<PaginatedResult<PhotoPrompt>>;
  getRelated(promptId: string, limit?: number): Promise<PhotoPrompt[]>;
  getTrending(limit?: number): Promise<PhotoPrompt[]>;
}

export interface CategoryRepository {
  getAll(): Promise<PromptCategory[]>;
  getBySlug(slug: string): Promise<PromptCategory | null>;
}

export interface CollectionRepository {
  getAll(): Promise<PromptCollection[]>;
  getBySlug(slug: string): Promise<PromptCollection | null>;
  getFeatured(limit?: number): Promise<PromptCollection[]>;
}
