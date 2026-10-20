"use client";

import { Search, X } from "lucide-react";
import { useRef } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search prompts…",
  className = "",
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`relative ${className}`}>
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        aria-hidden="true"
      />
      <input
        ref={inputRef}
        id="prompt-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search prompts"
        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
      />
      {value && (
        <button
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
