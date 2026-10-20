import type { PromptCollection } from "@/types";

export const collections: PromptCollection[] = [
  {
    id: "col-01",
    slug: "wedding-photography-essentials",
    title: "Wedding Photography Essentials",
    description:
      "A curated collection of the most beautiful AI photo prompts for capturing wedding day magic — from intimate portraits to grand ceremonies.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    altText: "Collection of elegant wedding photography AI prompts",
    promptIds: ["p-012", "p-013", "p-010"],
    featured: true,
    publishedAt: "2025-01-01T00:00:00Z",
    seoTitle: "Wedding Photography AI Prompts Collection",
    seoDescription:
      "Explore our curated collection of wedding photography AI prompts — from intimate bridal portraits to cinematic ceremony scenes.",
  },
  {
    id: "col-02",
    slug: "cinematic-masterclass",
    title: "Cinematic Masterclass",
    description:
      "Epic, film-quality AI photo prompts that bring the drama and storytelling of Hollywood to your AI-generated imagery.",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=85",
    altText: "Collection of cinematic and dramatic AI photo prompts",
    promptIds: ["p-016", "p-017", "p-018", "p-002"],
    featured: true,
    publishedAt: "2025-01-15T00:00:00Z",
    seoTitle: "Cinematic AI Photo Prompts Collection",
    seoDescription:
      "Master cinematic AI photography with our collection of dramatic, film-quality prompts inspired by Hollywood aesthetics.",
  },
  {
    id: "col-03",
    slug: "golden-hour-magic",
    title: "Golden Hour Magic",
    description:
      "Warm, glowing AI prompts that harness the magic of golden-hour light across portraits, landscapes, and travel photography.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85",
    altText: "Collection of golden hour photography AI prompts",
    promptIds: ["p-001", "p-005", "p-010", "p-018", "p-019"],
    featured: true,
    publishedAt: "2025-02-01T00:00:00Z",
    seoTitle: "Golden Hour AI Photo Prompts Collection",
    seoDescription:
      "Discover our golden hour AI photo prompts collection — warm light portraits, landscapes, and travel photography.",
  },
  {
    id: "col-04",
    slug: "urban-street-energy",
    title: "Urban Street Energy",
    description:
      "Raw, authentic street photography AI prompts capturing the pulse of city life — neon nights, busy streets, and urban characters.",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=85",
    altText: "Collection of urban street photography AI prompts",
    promptIds: ["p-006", "p-008", "p-016"],
    featured: false,
    publishedAt: "2025-02-15T00:00:00Z",
  },
  {
    id: "col-05",
    slug: "nature-and-wilderness",
    title: "Nature & Wilderness",
    description:
      "Breathtaking AI prompts for nature lovers — misty forests, raging oceans, soaring mountains, and quiet moments in the wild.",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=85",
    altText: "Collection of nature and wilderness AI photo prompts",
    promptIds: ["p-023", "p-024", "p-009", "p-019"],
    featured: true,
    publishedAt: "2025-03-01T00:00:00Z",
    seoTitle: "Nature & Wilderness AI Photo Prompts Collection",
    seoDescription:
      "Explore breathtaking nature AI photo prompts for forests, oceans, mountains, and wilderness photography.",
  },
];
