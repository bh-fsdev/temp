import { type ClassValue, clsx } from "clsx";

/** Merge Tailwind class names safely */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Convert a string to a URL-safe slug */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Truncate text to a given length, appending ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

/** Format a date string for display (e.g. "January 2025") */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

/** Escape HTML for safe JSON-LD embedding */
export function escapeForJsonLd(str: string): string {
  return str
    .replace(/&/g, "\\u0026")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}
