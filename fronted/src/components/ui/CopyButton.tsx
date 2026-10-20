"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function CopyButton({ text, className = "", variant = "primary" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyles =
    variant === "primary"
      ? "text-white hover:opacity-90 active:scale-95"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95";

  return (
    <button
      id="copy-prompt-button"
      onClick={handleCopy}
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={
        variant === "primary"
          ? { background: "linear-gradient(135deg, #d946ef, #f97316)" }
          : {}
      }
      aria-label={copied ? "Prompt copied!" : "Copy prompt to clipboard"}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy Prompt
        </>
      )}
    </button>
  );
}
