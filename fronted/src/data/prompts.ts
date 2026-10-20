import type { PhotoPrompt } from "@/types";

export const prompts: PhotoPrompt[] = [
  // ─── PORTRAIT ────────────────────────────────────────────────────────────
  {
    id: "p-001",
    slug: "cinematic-golden-hour-portrait",
    title: "Cinematic Golden Hour Portrait",
    description:
      "A dramatic portrait bathed in warm golden-hour light, perfect for creating emotionally rich character studies.",
    prompt:
      "Portrait of a woman, 35mm film photography, golden hour sunlight streaming from the left, bokeh background of blurred autumn trees, warm amber tones, shallow depth of field, f/1.8 aperture, natural freckles, windswept hair, pensive expression, ultra-detailed skin texture, Fujifilm Superia 400",
    imageUrl: "/prakash-track.jpeg",
    altText: "Woman photographed in warm golden-hour light with blurred autumn background",
    categoryId: "cat-01",
    tags: ["portrait", "golden hour", "cinematic", "film", "bokeh"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-15T09:00:00Z",
    updatedAt: "2025-01-15T09:00:00Z",
    seoTitle: "Cinematic Golden Hour Portrait AI Prompt",
    seoDescription:
      "Generate a stunning cinematic golden-hour portrait with warm amber tones and film bokeh using this detailed AI photo prompt.",
  },
  {
    id: "p-002",
    slug: "dramatic-studio-portrait-noir",
    title: "Dramatic Studio Portrait Noir",
    description:
      "High-contrast black-and-white studio portrait with film noir aesthetics and bold shadow play.",
    prompt:
      "Black and white studio portrait, high contrast film noir lighting, single key light from above left, deep shadows, man with strong jawline, sharp cheekbones, contemplative gaze, tailored suit collar visible, medium format photography, grain texture, Hasselblad camera style, extreme detail",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=85",
    altText: "Black and white dramatic studio portrait with film noir lighting",
    categoryId: "cat-01",
    tags: ["portrait", "noir", "black and white", "studio", "dramatic"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-20T10:00:00Z",
    updatedAt: "2025-01-20T10:00:00Z",
    seoTitle: "Dramatic Film Noir Studio Portrait AI Prompt",
    seoDescription:
      "Create a powerful black-and-white film noir portrait with high contrast lighting using this AI photo prompt.",
  },
  {
    id: "p-003",
    slug: "ethereal-soft-light-portrait",
    title: "Ethereal Soft Light Portrait",
    description:
      "Dreamy, soft-lit portrait with pastel tones perfect for beauty and editorial photography.",
    prompt:
      "Ethereal portrait of a young woman, soft diffused window light, pastel color palette, white linen background, minimal makeup, dewy skin, loose flowing hair, dreamy haze effect, overexposed highlights, soft shadows, editorial beauty photography, Vogue magazine aesthetic, 85mm lens",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85",
    altText: "Dreamy soft-light portrait with pastel tones and editorial aesthetic",
    categoryId: "cat-01",
    tags: ["portrait", "soft light", "ethereal", "editorial", "beauty"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-01T08:00:00Z",
    updatedAt: "2025-02-01T08:00:00Z",
  },
  {
    id: "p-004",
    slug: "moody-rain-portrait",
    title: "Moody Rain-Soaked Portrait",
    description:
      "Atmospheric portrait with rain-drenched aesthetics and moody blue-grey tones.",
    prompt:
      "Portrait of a person standing in the rain at night, moody blue-grey color grading, neon reflections on wet pavement, rain droplets visible, shallow depth of field, cinematic lens flare, desaturated tones with blue shadows, mysterious expression, urban background blurred, 50mm f/1.4",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=85",
    altText: "Moody rain-soaked portrait with neon reflections and blue-grey tones",
    categoryId: "cat-01",
    tags: ["portrait", "rain", "moody", "neon", "cinematic"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-10T11:00:00Z",
    updatedAt: "2025-02-10T11:00:00Z",
  },
  // ─── GIRLS ───────────────────────────────────────────────────────────────
  {
    id: "p-005",
    slug: "boho-sunset-silhouette",
    title: "Boho Sunset Silhouette",
    description:
      "Free-spirited boho silhouette portrait against a fiery sunset sky.",
    prompt:
      "Silhouette of a woman in a flowy boho dress, arms outstretched, standing on a hill at sunset, vibrant orange and magenta sky, golden rim light on hair, wild flowers in foreground, film grain, warm earth tones, joyful expression implied by posture, wide angle lens, Canon 5D",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=85",
    altText: "Woman silhouette in boho dress against vibrant sunset sky",
    categoryId: "cat-02",
    tags: ["girls", "sunset", "silhouette", "boho", "outdoor"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-25T12:00:00Z",
    updatedAt: "2025-01-25T12:00:00Z",
    seoTitle: "Boho Sunset Silhouette AI Photo Prompt",
    seoDescription:
      "Generate a free-spirited boho sunset silhouette portrait with vibrant golden tones using this AI photo prompt.",
  },
  {
    id: "p-006",
    slug: "neon-city-night-girl",
    title: "Neon City Night Portrait",
    description:
      "Vibrant neon-lit nighttime portrait in an urban cityscape with striking color contrast.",
    prompt:
      "Young woman in a leather jacket standing on a city street at night, neon signs in pink and blue reflecting on her face, rain-slicked pavement, bokeh city lights background, high contrast, cinematic look, sharp eyes, confident pose, Cyberpunk aesthetic, 35mm, f/1.8, ISO 800",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85",
    altText: "Young woman in leather jacket with neon city lights at night",
    categoryId: "cat-02",
    tags: ["girls", "neon", "city", "night", "cyberpunk"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-02-05T14:00:00Z",
    updatedAt: "2025-02-05T14:00:00Z",
  },
  {
    id: "p-007",
    slug: "cottagecore-floral-portrait",
    title: "Cottagecore Floral Portrait",
    description:
      "Romantic cottagecore portrait surrounded by wildflowers and soft natural light.",
    prompt:
      "Woman sitting in a wildflower meadow, cottagecore aesthetic, pastel floral dress, flower crown, soft dappled sunlight, shallow depth of field, green grass and colorful blooms in foreground, wistful expression, warm golden tones, nostalgic film look, medium format, Kodak Portra 400",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85",
    altText: "Woman in floral dress sitting in a wildflower meadow with soft golden light",
    categoryId: "cat-02",
    tags: ["girls", "cottagecore", "floral", "meadow", "soft light"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-01T09:00:00Z",
    updatedAt: "2025-03-01T09:00:00Z",
  },
  // ─── BOYS ────────────────────────────────────────────────────────────────
  {
    id: "p-008",
    slug: "urban-explorer-portrait",
    title: "Urban Explorer Portrait",
    description:
      "Confident urban portrait of a man in a cityscape with an edgy, street-photography feel.",
    prompt:
      "Portrait of a young man in a city street, graffiti wall background, confident posture, hands in jacket pockets, street light casting dramatic shadows, editorial style, desaturated tones with selective orange accent, 35mm film look, slight lens distortion, urban grit texture",
    imageUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=85",
    altText: "Confident young man in front of a graffiti wall with dramatic street lighting",
    categoryId: "cat-03",
    tags: ["boys", "urban", "street", "editorial", "portrait"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-02-15T10:00:00Z",
    updatedAt: "2025-02-15T10:00:00Z",
  },
  {
    id: "p-009",
    slug: "mountain-adventure-portrait",
    title: "Mountain Adventure Portrait",
    description:
      "Epic outdoor portrait of an adventurer against majestic mountain scenery.",
    prompt:
      "Portrait of a man in hiking gear standing on a mountain ridge, vast mountain range behind him, dramatic cloudy sky, warm sunrise light, windswept hair, determined expression, rugged texture on clothing, environmental portrait, wide angle 24mm, golden and blue color palette, sharp foreground and background",
    imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=85",
    altText: "Man in hiking gear on a mountain ridge at sunrise with dramatic sky",
    categoryId: "cat-03",
    tags: ["boys", "mountain", "adventure", "outdoor", "sunrise"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-10T08:00:00Z",
    updatedAt: "2025-03-10T08:00:00Z",
  },
  // ─── COUPLE ──────────────────────────────────────────────────────────────
  {
    id: "p-010",
    slug: "beach-sunset-couple",
    title: "Beach Sunset Couple",
    description:
      "Romantic couple silhouetted against a golden ocean sunset, full of warmth and emotion.",
    prompt:
      "Romantic couple silhouette on a beach at sunset, holding hands, waves in background, warm golden orange sky, reflections on wet sand, soft lens flare, side profile, emotional and intimate mood, 85mm f/2, slightly underexposed foreground, rich warm color grade",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    altText: "Romantic couple silhouette on the beach at golden sunset",
    categoryId: "cat-04",
    tags: ["couple", "beach", "sunset", "romantic", "silhouette"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-30T15:00:00Z",
    updatedAt: "2025-01-30T15:00:00Z",
    seoTitle: "Beach Sunset Couple AI Photo Prompt",
    seoDescription:
      "Create a romantic beach sunset couple portrait with warm golden tones using this beautiful AI photo prompt.",
  },
  {
    id: "p-011",
    slug: "cafe-couple-moment",
    title: "Intimate Café Couple Moment",
    description:
      "Candid, warm café moment between a couple sharing laughter and connection.",
    prompt:
      "Couple sitting at a cozy café table, natural window light, laughing together, steaming coffee cups, warm ambient tones, candid photography style, blurred café background with bokeh lights, intimate and authentic mood, Kodak Portra 800 film simulation, 50mm lens",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=85",
    altText: "Couple laughing together at a cozy café with warm natural lighting",
    categoryId: "cat-04",
    tags: ["couple", "cafe", "candid", "intimate", "lifestyle"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-14T11:00:00Z",
    updatedAt: "2025-02-14T11:00:00Z",
  },
  // ─── WEDDING ─────────────────────────────────────────────────────────────
  {
    id: "p-012",
    slug: "garden-wedding-bride",
    title: "Garden Wedding Bride",
    description:
      "Elegant portrait of a bride in a sunlit garden, capturing the magic of wedding day emotion.",
    prompt:
      "Portrait of a bride in a flowing white wedding gown, sunlit botanical garden, soft backlight creating a halo effect, white flowers and green foliage, serene expression, soft pastel color palette, fine art photography style, shallow depth of field, 85mm f/1.4, Fuji Film Pro 400H simulation",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    altText: "Bride in white gown in a sunlit botanical garden with soft floral bokeh",
    categoryId: "cat-05",
    tags: ["wedding", "bride", "garden", "elegant", "fine art"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-03-05T10:00:00Z",
    updatedAt: "2025-03-05T10:00:00Z",
    seoTitle: "Garden Wedding Bride AI Photo Prompt",
    seoDescription:
      "Generate an elegant fine art wedding portrait in a sunlit garden with this detailed AI photo prompt.",
  },
  {
    id: "p-013",
    slug: "first-dance-wedding",
    title: "First Dance Wedding",
    description:
      "Cinematic first dance moment with dramatic ballroom lighting and emotional depth.",
    prompt:
      "Bride and groom sharing their first dance in a grand ballroom, cinematic lighting with warm spotlights, dramatic shadows, motion blur on flowing dress, emotional expressions, wide angle capturing the venue grandeur, bokeh chandelier lights, warm golden tones, editorial wedding photography",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
    altText: "Bride and groom dancing in a grand ballroom with warm cinematic lighting",
    categoryId: "cat-05",
    tags: ["wedding", "dance", "ballroom", "cinematic", "couple"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-20T09:00:00Z",
    updatedAt: "2025-03-20T09:00:00Z",
  },
  // ─── FASHION ─────────────────────────────────────────────────────────────
  {
    id: "p-014",
    slug: "avant-garde-editorial-fashion",
    title: "Avant-Garde Editorial Fashion",
    description:
      "Bold avant-garde fashion editorial with dramatic silhouettes and high-contrast aesthetics.",
    prompt:
      "High fashion editorial photograph, model in oversized geometric black coat, minimalist white studio background, dramatic overhead lighting, extreme shadows, angular pose, editorial Vogue style, sharp focus, medium format quality, color palette of black white and deep crimson accent, Avedon aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    altText: "Model in avant-garde geometric fashion on a minimalist white studio set",
    categoryId: "cat-06",
    tags: ["fashion", "editorial", "avant-garde", "studio", "minimalist"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-02-20T12:00:00Z",
    updatedAt: "2025-02-20T12:00:00Z",
    seoTitle: "Avant-Garde Fashion Editorial AI Prompt",
    seoDescription:
      "Create a bold avant-garde fashion editorial with dramatic shadows and high-contrast aesthetics using this AI photo prompt.",
  },
  {
    id: "p-015",
    slug: "rooftop-sunset-fashion",
    title: "Rooftop Sunset Fashion",
    description:
      "Vibrant rooftop fashion shoot with a colorful sunset cityscape backdrop.",
    prompt:
      "Fashion model on a city rooftop at sunset, vibrant maxi dress in warm coral and gold tones, city skyline bokeh background, golden hour light, wind blowing the dress, confident pose, editorial photography, Canon R5, 85mm, dynamic composition, saturated warm color grade",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85",
    altText: "Fashion model in colorful dress on a city rooftop at golden-hour sunset",
    categoryId: "cat-06",
    tags: ["fashion", "rooftop", "sunset", "editorial", "colorful"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-15T14:00:00Z",
    updatedAt: "2025-03-15T14:00:00Z",
  },
  // ─── CINEMATIC ───────────────────────────────────────────────────────────
  {
    id: "p-016",
    slug: "neo-noir-rainy-alley",
    title: "Neo-Noir Rainy Alley",
    description:
      "Atmospheric neo-noir scene with rain, neon lights, and moody cinematic storytelling.",
    prompt:
      "Cinematic neo-noir scene, rain-slicked alley at night, lone figure in a trenchcoat, neon signs reflecting in puddles, dense fog and steam from vents, deep blue and pink color palette, anamorphic lens flare, 2.39:1 aspect ratio crop, film grain, Blade Runner aesthetic, ultra-cinematic",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=85",
    altText: "Neo-noir rainy alley at night with neon reflections and a mysterious figure",
    categoryId: "cat-07",
    tags: ["cinematic", "noir", "neon", "rain", "atmospheric"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-10T16:00:00Z",
    updatedAt: "2025-01-10T16:00:00Z",
    seoTitle: "Neo-Noir Rainy Alley Cinematic AI Prompt",
    seoDescription:
      "Generate a stunning neo-noir cinematic scene with rain, neon lights, and Blade Runner aesthetics using this AI photo prompt.",
  },
  {
    id: "p-017",
    slug: "epic-fantasy-landscape",
    title: "Epic Fantasy Landscape",
    description:
      "Sweeping cinematic fantasy landscape with dramatic skies, ancient ruins, and ethereal light.",
    prompt:
      "Epic fantasy landscape, ancient stone ruins on a clifftop, dramatic stormy sky with golden light breaking through clouds, misty valleys below, volumetric light rays, cinematic composition, ultra-wide 16mm, vibrant warm and cool contrast, inspired by Lord of the Rings, photorealistic, 8K quality",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    altText: "Epic fantasy landscape with ancient ruins, dramatic stormy sky and golden light",
    categoryId: "cat-07",
    tags: ["cinematic", "fantasy", "landscape", "epic", "dramatic"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-25T09:00:00Z",
    updatedAt: "2025-02-25T09:00:00Z",
  },
  {
    id: "p-018",
    slug: "golden-hour-desert-road",
    title: "Golden Hour Desert Road",
    description:
      "Cinematic American West road scene with endless desert highway and a blazing sunset.",
    prompt:
      "Cinematic shot of an empty desert highway stretching to the horizon, golden hour light, long shadows, warm amber and orange sky, dust haze in the distance, vintage car silhouette, wide anamorphic lens, film grain, Wim Wenders road movie aesthetic, saturated warm tones",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=85",
    altText: "Cinematic desert highway at golden hour with amber sky and long shadows",
    categoryId: "cat-07",
    tags: ["cinematic", "desert", "road", "golden hour", "american west"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-01T10:00:00Z",
  },
  // ─── TRAVEL ──────────────────────────────────────────────────────────────
  {
    id: "p-019",
    slug: "himalayan-dawn-traveler",
    title: "Himalayan Dawn Traveler",
    description:
      "Stunning high-altitude travel portrait at dawn in the majestic Himalayas.",
    prompt:
      "Traveler standing on a high mountain pass in the Himalayas at dawn, prayer flags in the foreground, towering snow peaks behind, golden sunrise light, crisp thin air feel, worn hiking boots and layered clothing, wide environmental portrait, expansive sky, spiritual and adventurous mood, ultra-sharp",
    imageUrl: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=85",
    altText: "Traveler at dawn on a Himalayan mountain pass with prayer flags and snow peaks",
    categoryId: "cat-08",
    tags: ["travel", "himalaya", "mountain", "dawn", "adventure"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-20T07:00:00Z",
    updatedAt: "2025-01-20T07:00:00Z",
    seoTitle: "Himalayan Dawn Traveler AI Photo Prompt",
    seoDescription:
      "Generate a stunning high-altitude Himalayan dawn travel portrait with prayer flags and snow peaks using this AI prompt.",
  },
  {
    id: "p-020",
    slug: "venice-canal-gondola-dusk",
    title: "Venice Canal Gondola Dusk",
    description:
      "Romantic dusk scene of a gondola gliding through Venice canals with warm amber light.",
    prompt:
      "Venice canal at dusk, gondola with gondolier, ancient ochre-colored buildings reflected in calm water, warm amber street lights beginning to glow, soft purple sky, romantic and timeless mood, travel photography, 35mm, slight motion blur on water, rich warm tones, cinematic color grade",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=85",
    altText: "Gondola on a Venice canal at dusk with warm amber reflections in the water",
    categoryId: "cat-08",
    tags: ["travel", "venice", "gondola", "dusk", "romantic"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-28T17:00:00Z",
    updatedAt: "2025-02-28T17:00:00Z",
  },
  // ─── FESTIVAL ────────────────────────────────────────────────────────────
  {
    id: "p-021",
    slug: "holi-colors-celebration",
    title: "Holi Colors Celebration",
    description:
      "Explosive color and joy in a vibrant Holi festival photography scene.",
    prompt:
      "Person celebrating Holi festival, explosion of colorful powder — pink, orange, blue, and yellow — mid-action throw, joyful expression with eyes closed, bokeh background of celebrating crowd, warm sunlight, ultra-saturated colors, motion blur on powder, festival energy, Canon R5, 1/1000s shutter",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=85",
    altText: "Person throwing colorful powder during Holi festival celebration with explosive color",
    categoryId: "cat-09",
    tags: ["festival", "holi", "colors", "celebration", "vibrant"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-03-10T12:00:00Z",
    updatedAt: "2025-03-10T12:00:00Z",
  },
  {
    id: "p-022",
    slug: "lantern-festival-night",
    title: "Lantern Festival Night",
    description:
      "Magical night scene of hundreds of sky lanterns floating into a dark sky.",
    prompt:
      "Thousands of glowing sky lanterns floating into a dark night sky during a lantern festival, warm orange glow reflected on faces below, star-filled sky visible between lanterns, bokeh and depth, magical and meditative atmosphere, long exposure photography look, 24mm wide angle, rich blue and gold tones",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=85",
    altText: "Hundreds of glowing sky lanterns floating into a dark festival night sky",
    categoryId: "cat-09",
    tags: ["festival", "lanterns", "night", "magical", "long exposure"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-25T20:00:00Z",
    updatedAt: "2025-03-25T20:00:00Z",
  },
  // ─── NATURE ──────────────────────────────────────────────────────────────
  {
    id: "p-023",
    slug: "misty-forest-morning",
    title: "Misty Forest Morning",
    description:
      "Serene and mystical morning forest scene with volumetric light and ethereal mist.",
    prompt:
      "Ancient pine forest at dawn, thick morning mist rolling between trees, golden volumetric light rays piercing through the canopy, mossy forest floor, ferns in the foreground, serene and mystical mood, ultra-wide 16mm lens, desaturated greens with warm golden accents, long exposure, fine art nature photography",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=85",
    altText: "Ancient pine forest at dawn with golden volumetric light rays and morning mist",
    categoryId: "cat-10",
    tags: ["nature", "forest", "mist", "morning", "volumetric light"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-05T06:00:00Z",
    updatedAt: "2025-01-05T06:00:00Z",
    seoTitle: "Misty Forest Morning AI Photo Prompt",
    seoDescription:
      "Generate a serene misty forest morning with golden volumetric light rays using this detailed AI nature photography prompt.",
  },
  {
    id: "p-024",
    slug: "ocean-storm-waves",
    title: "Ocean Storm Waves",
    description:
      "Powerful seascape with dramatic storm waves and moody dark skies.",
    prompt:
      "Dramatic ocean storm, massive dark waves crashing against rocky cliffs, stormy grey-blue sky, sea spray and foam, long exposure blur on water motion, moody and powerful atmosphere, wide angle 14mm, high contrast, muted color palette with deep blues, fine art seascape photography",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=85",
    altText: "Dramatic storm waves crashing against rocky cliffs under a dark stormy sky",
    categoryId: "cat-10",
    tags: ["nature", "ocean", "storm", "waves", "dramatic"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-18T08:00:00Z",
    updatedAt: "2025-02-18T08:00:00Z",
  },
  // ─── LIFESTYLE ───────────────────────────────────────────────────────────
  {
    id: "p-025",
    slug: "morning-coffee-ritual",
    title: "Morning Coffee Ritual",
    description:
      "Cozy and inviting morning coffee scene with warm tones and lifestyle authenticity.",
    prompt:
      "Person holding a ceramic mug of steaming coffee in the morning, cozy home setting, warm sunlight from a window, hands in focus with the cup, soft bokeh background of houseplants and a book, warm amber and cream tones, lifestyle photography, intimate and calm mood, 50mm f/2, Lightroom warm preset",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85",
    altText: "Person holding a steaming ceramic coffee mug in a warm sunlit home setting",
    categoryId: "cat-11",
    tags: ["lifestyle", "coffee", "morning", "cozy", "home"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-08T07:30:00Z",
    updatedAt: "2025-02-08T07:30:00Z",
  },
  {
    id: "p-026",
    slug: "yoga-sunrise-outdoor",
    title: "Yoga at Sunrise Outdoors",
    description:
      "Peaceful sunrise yoga session in nature with serene golden light.",
    prompt:
      "Woman doing yoga on a wooden deck at sunrise, surrounded by mist-covered mountains, warrior pose silhouette, soft golden backlight, peaceful and meditative atmosphere, nature sounds implied, wide angle, warm color palette, wellness lifestyle photography, Canon R5, minimal editing style",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
    altText: "Woman in yoga warrior pose on a wooden deck at sunrise with misty mountains",
    categoryId: "cat-11",
    tags: ["lifestyle", "yoga", "sunrise", "wellness", "nature"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-03-18T06:00:00Z",
    updatedAt: "2025-03-18T06:00:00Z",
  },
  // ─── RETRO ───────────────────────────────────────────────────────────────
  {
    id: "p-027",
    slug: "vintage-70s-polaroid-portrait",
    title: "Vintage 70s Polaroid Portrait",
    description:
      "Nostalgic 1970s polaroid-style portrait with warm faded tones and retro fashion.",
    prompt:
      "Vintage 1970s style portrait, woman with feathered hair and earth-toned outfit, warm faded color palette, polaroid photo border, slight overexposure, vintage grain and light leak on left edge, warm orange and brown tones, nostalgic and dreamy, studio portrait aesthetic, Polaroid SX-70 simulation",
    imageUrl: "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?w=800&q=85",
    altText: "Vintage 1970s style polaroid portrait with faded warm tones and retro fashion",
    categoryId: "cat-12",
    tags: ["retro", "vintage", "polaroid", "70s", "nostalgia"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-28T11:00:00Z",
    updatedAt: "2025-01-28T11:00:00Z",
  },
  {
    id: "p-028",
    slug: "retro-diner-americana",
    title: "Retro Diner Americana",
    description:
      "Classic American 1950s diner scene with neon signs, chrome, and nostalgic warmth.",
    prompt:
      "1950s American diner interior, red vinyl booths, chrome counter stools, neon jukebox, checkerboard floor, warm tungsten lighting, woman in a poodle skirt eating a burger, vintage color grade, film grain, nostalgic and joyful atmosphere, wide angle 28mm, Kodachrome simulation",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85",
    altText: "1950s American diner with red vinyl booths, chrome details, and warm tungsten lighting",
    categoryId: "cat-12",
    tags: ["retro", "diner", "americana", "1950s", "nostalgia"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-22T13:00:00Z",
    updatedAt: "2025-02-22T13:00:00Z",
  },
  // ─── ANIME ───────────────────────────────────────────────────────────────
  {
    id: "p-029",
    slug: "anime-warrior-fantasy",
    title: "Anime Warrior Fantasy",
    description:
      "Dramatic anime-style warrior portrait with dynamic energy and fantasy world-building.",
    prompt:
      "Anime style warrior character, female, silver hair with blue highlights, ornate magical armor, dramatic battle pose, glowing energy aura in purple and gold, epic fantasy background of floating islands and stormy skies, high detail digital art, Studio Ghibli meets Fate/Stay Night aesthetic, vibrant colors",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=85",
    altText: "Anime warrior character with silver hair and glowing magical armor in a fantasy world",
    categoryId: "cat-13",
    tags: ["anime", "warrior", "fantasy", "magic", "digital art"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-02-12T15:00:00Z",
    updatedAt: "2025-02-12T15:00:00Z",
  },
  {
    id: "p-030",
    slug: "anime-cherry-blossom-scene",
    title: "Anime Cherry Blossom Scene",
    description:
      "Peaceful anime scene with cherry blossom petals and a contemplative character moment.",
    prompt:
      "Anime scene, young woman in a sailor uniform sitting under a cherry blossom tree, petals falling around her, peaceful and melancholic expression, soft spring light, detailed watercolor-style background, Japanese school setting implied, subtle lens flare, Makoto Shinkai aesthetic, beautiful pastel sky",
    imageUrl: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=800&q=85",
    altText: "Anime girl in sailor uniform under cherry blossom tree with falling petals",
    categoryId: "cat-13",
    tags: ["anime", "cherry blossom", "spring", "peaceful", "japanese"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-03-22T14:00:00Z",
    updatedAt: "2025-03-22T14:00:00Z",
  },
  // ─── PRODUCT PHOTOGRAPHY ─────────────────────────────────────────────────
  {
    id: "p-031",
    slug: "luxury-watch-studio-shot",
    title: "Luxury Watch Studio Shot",
    description:
      "Premium luxury watch product photography with dramatic studio lighting on marble.",
    prompt:
      "Luxury Swiss watch product photography, placed on polished white marble surface, dramatic single-source studio lighting from top-right, reflection of watch in marble, shallow depth of field, ultra-sharp watch face detail, black background gradient, premium commercial quality, 100mm macro lens, f/8",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85",
    altText: "Luxury watch on marble surface with dramatic studio lighting and reflection",
    categoryId: "cat-14",
    tags: ["product", "watch", "luxury", "studio", "marble"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-01-12T10:00:00Z",
    updatedAt: "2025-01-12T10:00:00Z",
    seoTitle: "Luxury Watch Product Photography AI Prompt",
    seoDescription:
      "Generate premium luxury watch product photography with dramatic marble staging using this professional AI photo prompt.",
  },
  {
    id: "p-032",
    slug: "skincare-product-flat-lay",
    title: "Skincare Product Flat Lay",
    description:
      "Clean, minimal skincare product flat lay with botanical elements and soft pastel tones.",
    prompt:
      "Skincare product flat lay photography, glass serum bottles and cream jars arranged on a soft pink surface, scattered rose petals and green leaves, natural diffused window light, pastel color palette of cream and blush pink, white space around products, minimal and elegant composition, top-down view, 50mm lens",
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=85",
    altText: "Skincare products arranged in a flat lay with rose petals on a soft pink surface",
    categoryId: "cat-14",
    tags: ["product", "skincare", "flat lay", "minimal", "pastel"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-02-28T09:00:00Z",
    updatedAt: "2025-02-28T09:00:00Z",
  },
  // Extra portrait entries to hit 30+
  {
    id: "p-033",
    slug: "underwater-fashion-portrait",
    title: "Underwater Fashion Portrait",
    description:
      "Surreal and dreamlike underwater fashion portrait with floating fabric and ethereal light.",
    prompt:
      "Underwater fashion portrait, model submerged in clear turquoise water, flowing silk dress billowing around her, long hair floating upward, shafts of sunlight from above penetrating the water, ultra-clear water quality, dramatic backlight, ethereal and surreal mood, wide-angle underwater housing, teal and gold palette",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
    altText: "Fashion model underwater with flowing silk dress and turquoise light rays",
    categoryId: "cat-01",
    tags: ["portrait", "underwater", "fashion", "surreal", "ethereal"],
    featured: false,
    published: true,
    indexable: true,
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-01T10:00:00Z",
  },
  // ─── PRAKASH SERIES ───────────────────────────────────────────────────────
  {
    id: "p-034",
    slug: "cyberpunk-noir-anime-portrait",
    title: "Cyberpunk Noir Anime Portrait",
    description:
      "A dramatic monochrome anime-style character portrait with glowing neon cyan eyes and dark aura effects.",
    prompt:
      "Anime illustration of a handsome man with swept-back dark hair and beard, wearing a stylish suit with open collar, piercing glowing neon cyan eyes, dark monochromatic ink wash aesthetic, floating black paper shards and energy aura, full moon in background, dramatic chiaroscuro lighting, Solo Leveling and Jujutsu Kaisen art style, ultra-detailed line art, 8k resolution",
    imageUrl: "/prakash-anime.jpeg",
    altText: "Monochrome anime portrait of a man in a white suit with glowing blue eyes and dark energy aura",
    categoryId: "cat-13",
    tags: ["anime", "manga", "cyberpunk", "portrait", "glowing eyes", "noir"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-04-10T10:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    seoTitle: "Cyberpunk Noir Anime AI Photo Prompt",
    seoDescription:
      "Create a dramatic anime portrait with glowing cyan eyes, monochrome ink shading, and dark energy effects using this AI prompt.",
  },
  {
    id: "p-035",
    slug: "urban-smart-casual-evening-portrait",
    title: "Urban Smart-Casual Evening Portrait",
    description:
      "A sharp, modern smart-casual menswear portrait with night ambiance and subtle lens flare.",
    prompt:
      "Medium shot portrait of a sharp stylish young man with well-groomed beard and mustache, leaning against a white pillar on an outdoor court at twilight, wearing a crisp light blazer, white open-collar shirt, and tailored brown trousers, wristwatch, relaxed confident pose, shallow depth of field, subtle rainbow lens flare, natural skin texture, editorial street style photography, 85mm f/1.4 lens",
    imageUrl: "/prakash-stand.jpeg",
    altText: "Young man in a white blazer and brown trousers leaning against a white pillar at dusk",
    categoryId: "cat-03",
    tags: ["portrait", "menswear", "smart casual", "fashion", "boys", "lifestyle"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-04-12T11:00:00Z",
    updatedAt: "2025-04-12T11:00:00Z",
    seoTitle: "Urban Smart-Casual Menswear Portrait AI Prompt",
    seoDescription:
      "Generate a modern smart-casual male portrait in a white blazer and tailored trousers with evening bokeh lighting.",
  },
  {
    id: "p-036",
    slug: "mountain-hiker-river-valley-overlook",
    title: "Mountain Hiker River Valley Overlook",
    description:
      "An epic adventure photograph of a trekker standing atop a rugged mountain overlook above a roaring glacial river.",
    prompt:
      "Full shot of an adventurous male hiker with man-bun and backpack standing on a rugged rocky ridge, looking back over a dramatic steep mountain valley with a rushing white water river below, lush green slopes, mist clinging to jagged peaks, overcast dramatic sky, authentic adventure travel photography, National Geographic style, wide angle 24mm lens, rich earthy tones",
    imageUrl: "/prakash-track.jpeg",
    altText: "Backpacker standing on a rocky cliff overlooking a vast mountain valley with a rushing river and misty peaks",
    categoryId: "cat-08",
    tags: ["travel", "hiking", "mountains", "adventure", "nature", "wanderlust"],
    featured: true,
    published: true,
    indexable: true,
    createdAt: "2025-04-15T12:00:00Z",
    updatedAt: "2025-04-15T12:00:00Z",
    seoTitle: "Mountain Hiker River Valley Travel AI Photo Prompt",
    seoDescription:
      "Craft an epic mountain adventure scene featuring a backpacker on a cliff edge overlooking a misty river gorge.",
  },
];
