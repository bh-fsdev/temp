// ─── SEO & Metadata ────────────────────────────────────────────────────────

export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  openGraphImage?: string;
}

// ─── Pagination ─────────────────────────────────────────────────────────────

export interface PaginationInfo {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  pagination: PaginationInfo;
}

// ─── Category ───────────────────────────────────────────────────────────────

export interface PromptCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  altText: string;
  promptCount: number;
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Collection ─────────────────────────────────────────────────────────────

export interface PromptCollection {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  promptIds: string[];
  featured: boolean;
  publishedAt: string; // ISO 8601
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Photo Prompt ────────────────────────────────────────────────────────────

export interface PhotoPrompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  prompt: string;
  imageUrl: string;
  altText: string;
  categoryId: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  indexable: boolean;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Query Options ───────────────────────────────────────────────────────────

export interface PromptQueryOptions {
  page?: number;
  perPage?: number;
  categorySlug?: string;
  search?: string;
  sortBy?: "newest" | "featured" | "oldest";
  tags?: string[];
  featuredOnly?: boolean;
}
