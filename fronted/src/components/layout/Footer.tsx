"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const footerLinks = {
  Explore: [
    { href: "/prompts", label: "Browse All Prompts" },
    { href: "/category/portrait", label: "Portrait Prompts" },
    { href: "/category/cinematic", label: "Cinematic Prompts" },
    { href: "/category/fashion", label: "Fashion Prompts" },
    { href: "/collections/golden-hour-magic", label: "Collections" },
  ],
  Resources: [
    { href: "/about", label: "About Promptora" },
    { href: "/contact", label: "Contact" },
    { href: "/favorites", label: "Saved Prompts" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Promptora home">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl"
                style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  background: "linear-gradient(135deg, #d946ef, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Promptora
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Discover and share curated AI photo prompts for stunning imagery. From cinematic
              portraits to fantasy landscapes — find your perfect prompt.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com"
                aria-label="Promptora on Twitter"
                className="text-gray-600 hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Promptora on Instagram"
                className="text-gray-600 hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                aria-label="Promptora on GitHub"
                className="text-gray-600 hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Promptora. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for AI photography enthusiasts worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
