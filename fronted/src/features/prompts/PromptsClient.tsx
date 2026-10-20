"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PromptCard } from "@/components/prompts/PromptCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import type { PhotoPrompt, PromptCategory, PaginationInfo } from "@/types";
import { Search, SlidersHorizontal } from "lucide-react";

interface PromptsClientProps {
  initialPrompts: PhotoPrompt[];
  initialPagination: PaginationInfo;
  categories: PromptCategory[];
  initialSearch: string;
  initialCategory: string;
  initialSort: string;
}

const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "featured", label: "Featured First" },
  { value: "oldest", label: "Oldest First" },
];

export function PromptsClient({
  initialPrompts,
  initialPagination,
  categories,
  initialSearch,
  initialCategory,
  initialSort,
}: PromptsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState(initialSort);

  const updateUrl = useCallback(
    (newSearch: string, newCategory: string, newSort: string) => {
      const params = new URLSearchParams();
      if (newSearch) params.set("search", newSearch);
      if (newCategory) params.set("category", newCategory);
      if (newSort && newSort !== "newest") params.set("sort", newSort);
      startTransition(() => {
        router.push(`/prompts?${params.toString()}`);
      });
    },
    [router]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== initialSearch) {
        updateUrl(search, category, sort);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [search, category, sort, initialSearch, updateUrl]);

  function handleCategoryChange(slug: string) {
    setCategory(slug);
    updateUrl(search, slug, sort);
  }

  function handleSortChange(value: string) {
    setSort(value);
    updateUrl(search, category, value);
  }

  const currentPage = Number(searchParams.get("page") ?? "1");

  return (
    <div>
      {/* Search + filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 py-4">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row gap-3">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search prompts by title, style, or tag…"
              className="flex-1"
            />
            <div className="flex gap-2 items-center">
              <SlidersHorizontal className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                aria-label="Sort prompts"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category chips */}
          <div className="flex gap-2 mt-3 flex-wrap">
            <button
              onClick={() => handleCategoryChange("")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !category
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={
                !category
                  ? { background: "linear-gradient(135deg, #d946ef, #f97316)" }
                  : {}
              }
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  category === cat.slug
                    ? "text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={
                  category === cat.slug
                    ? { background: "linear-gradient(135deg, #d946ef, #f97316)" }
                    : {}
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page py-8">
        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {initialPagination.total} prompt{initialPagination.total !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        {initialPrompts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {initialPrompts.map((prompt, i) => (
                <PromptCard key={prompt.id} prompt={prompt} priority={i < 4} />
              ))}
            </div>
            <Pagination
              pagination={initialPagination}
              basePath="/prompts"
              searchParams={{
                ...(search ? { search } : {}),
                ...(category ? { category } : {}),
                ...(sort !== "newest" ? { sort } : {}),
              }}
            />
          </>
        ) : (
          <EmptyState
            icon={Search}
            title="No prompts found"
            description={
              search || category
                ? "Try a different search term or category filter."
                : "No prompts available yet."
            }
            action={
              (search || category) && (
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("");
                    updateUrl("", "", sort);
                  }}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
                >
                  Clear filters
                </button>
              )
            }
          />
        )}
      </div>
    </div>
  );
}
