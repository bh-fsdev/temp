import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the Promptora team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-page py-16 max-w-2xl">
      <h1
        className="text-4xl font-black text-gray-900 mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Contact Us
      </h1>
      <p className="text-gray-600 mb-10">
        Have a question, suggestion, or want to contribute prompts? We&apos;d love to hear from you.
      </p>

      <form className="space-y-5" aria-label="Contact form">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #d946ef, #f97316)" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
