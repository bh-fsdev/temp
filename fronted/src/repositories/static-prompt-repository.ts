import type {
  PhotoPrompt,
  PromptCategory,
  PromptCollection,
  PromptQueryOptions,
  PaginatedResult,
} from "@/types";
import type {
  PromptRepository,
  CategoryRepository,
  CollectionRepository,
} from "./prompt-repository";
import { prompts as allPrompts } from "@/data/prompts";
import { categories as allCategories } from "@/data/categories";
import { collections as allCollections } from "@/data/collections";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function paginate<T>(items: T[], page = 1, perPage = 12): PaginatedResult<T> {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const end = start + perPage;
  return {
    items: items.slice(start, end),
    pagination: {
      page: safePage,
      perPage,
      total,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPreviousPage: safePage > 1,
    },
  };
}

function sortPrompts(
  items: PhotoPrompt[],
  sortBy: PromptQueryOptions["sortBy"] = "newest"
): PhotoPrompt[] {
  const copy = [...items];
  switch (sortBy) {
    case "newest":
      return copy.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "oldest":
      return copy.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case "featured":
      return copy.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    default:
      return copy;
  }
}

function filterPublished(items: PhotoPrompt[]): PhotoPrompt[] {
  return items.filter((p) => p.published);
}

function searchPrompts(items: PhotoPrompt[], query: string): PhotoPrompt[] {
  const q = query.toLowerCase().trim();
  if (!q) return items;
  return items.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q) ||
      p.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

// ─── Static Prompt Repository ─────────────────────────────────────────────────

export class StaticPromptRepository implements PromptRepository {
  async getAll(options: PromptQueryOptions = {}): Promise<PaginatedResult<PhotoPrompt>> {
    const { page = 1, perPage = 12, categorySlug, search, sortBy = "newest", featuredOnly } = options;

    let items = filterPublished(allPrompts);

    if (featuredOnly) {
      items = items.filter((p) => p.featured);
    }

    if (categorySlug) {
      const category = allCategories.find((c) => c.slug === categorySlug);
      if (category) {
        items = items.filter((p) => p.categoryId === category.id);
      } else {
        items = [];
      }
    }

    if (search) {
      items = searchPrompts(items, search);
    }

    items = sortPrompts(items, sortBy);

    return paginate(items, page, perPage);
  }

  async getBySlug(slug: string): Promise<PhotoPrompt | null> {
    return filterPublished(allPrompts).find((p) => p.slug === slug) ?? null;
  }

  async getFeatured(limit = 6): Promise<PhotoPrompt[]> {
    return filterPublished(allPrompts)
      .filter((p) => p.featured)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }

  async getByCategory(
    categorySlug: string,
    options: PromptQueryOptions = {}
  ): Promise<PaginatedResult<PhotoPrompt>> {
    return this.getAll({ ...options, categorySlug });
  }

  async search(query: string, options: PromptQueryOptions = {}): Promise<PaginatedResult<PhotoPrompt>> {
    return this.getAll({ ...options, search: query });
  }

  async getRelated(promptId: string, limit = 4): Promise<PhotoPrompt[]> {
    const prompt = allPrompts.find((p) => p.id === promptId);
    if (!prompt) return [];

    return filterPublished(allPrompts)
      .filter((p) => p.id !== promptId && p.categoryId === prompt.categoryId)
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  }

  async getTrending(limit = 8): Promise<PhotoPrompt[]> {
    // In a real app, this would query view counts / engagement metrics.
    // With static data, we use featured + newest as a proxy.
    return filterPublished(allPrompts)
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      })
      .slice(0, limit);
  }
}

// ─── Static Category Repository ───────────────────────────────────────────────

export class StaticCategoryRepository implements CategoryRepository {
  async getAll(): Promise<PromptCategory[]> {
    return [...allCategories];
  }

  async getBySlug(slug: string): Promise<PromptCategory | null> {
    return allCategories.find((c) => c.slug === slug) ?? null;
  }
}

// ─── Static Collection Repository ────────────────────────────────────────────

export class StaticCollectionRepository implements CollectionRepository {
  async getAll(): Promise<PromptCollection[]> {
    return [...allCollections];
  }

  async getBySlug(slug: string): Promise<PromptCollection | null> {
    return allCollections.find((c) => c.slug === slug) ?? null;
  }

  async getFeatured(limit = 3): Promise<PromptCollection[]> {
    return allCollections.filter((c) => c.featured).slice(0, limit);
  }
}
