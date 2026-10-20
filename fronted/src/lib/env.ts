import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:3000")
    .transform((url) => url.replace(/\/$/, "")), // strip trailing slash
});

// This runs at module load time. Will throw if env is misconfigured.
const parsed = envSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.flatten());
  throw new Error("Invalid environment configuration. Check .env.example");
}

export const env = parsed.data;

/** The canonical origin (no trailing slash). e.g. https://www.promptora.com */
export const siteUrl = env.NEXT_PUBLIC_SITE_URL;
