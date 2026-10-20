import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationInfo } from "@/types";

interface PaginationProps {
  pagination: PaginationInfo;
  basePath: string;
  searchParams?: Record<string, string>;
}

export function Pagination({ pagination, basePath, searchParams = {} }: PaginationProps) {
  const { page, totalPages, hasNextPage, hasPreviousPage } = pagination;

  function buildUrl(p: number) {
    const params = new URLSearchParams({ ...searchParams, page: String(p) });
    return `${basePath}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  // Show at most 5 page links centered around current
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2
  );

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-10">
      <Link
        href={hasPreviousPage ? buildUrl(page - 1) : "#"}
        aria-label="Previous page"
        aria-disabled={!hasPreviousPage}
        className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm transition-colors ${
          hasPreviousPage
            ? "border-gray-200 text-gray-600 hover:bg-gray-50"
            : "border-gray-100 text-gray-300 pointer-events-none"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </Link>

      {visiblePages.map((p, index) => {
        const prev = visiblePages[index - 1];
        const showEllipsis = prev && p - prev > 1;
        return (
          <span key={p} className="flex items-center gap-2">
            {showEllipsis && (
              <span className="text-gray-400 text-sm px-1">…</span>
            )}
            <Link
              href={buildUrl(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={`flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                p === page
                  ? "text-white"
                  : "border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
              style={
                p === page
                  ? { background: "linear-gradient(135deg, #d946ef, #f97316)" }
                  : {}
              }
            >
              {p}
            </Link>
          </span>
        );
      })}

      <Link
        href={hasNextPage ? buildUrl(page + 1) : "#"}
        aria-label="Next page"
        aria-disabled={!hasNextPage}
        className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm transition-colors ${
          hasNextPage
            ? "border-gray-200 text-gray-600 hover:bg-gray-50"
            : "border-gray-100 text-gray-300 pointer-events-none"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
