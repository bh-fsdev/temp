"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles, Heart } from "lucide-react";

const navLinks = [
  { href: "/prompts", label: "Browse Prompts" },
  { href: "/category/portrait", label: "Categories" },
  { href: "/collections/golden-hour-magic", label: "Collections" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      style={{ boxShadow: "0 1px 20px rgb(0 0 0 / 0.05)" }}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-800 text-xl"
            aria-label="Promptora home"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #d946ef, #f97316)",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                background: "linear-gradient(135deg, #d946ef, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Promptora
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/favorites"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors"
              aria-label="View favorites"
            >
              <Heart className="w-4 h-4" />
              Saved
            </Link>
            <Link
              href="/prompts"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #d946ef, #f97316)",
              }}
            >
              Explore Prompts
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="md:hidden pb-4 border-t border-gray-100 mt-1 animate-fade-in"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-3">
                <Link
                  href="/prompts"
                  className="block text-center w-full px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Explore All Prompts
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
