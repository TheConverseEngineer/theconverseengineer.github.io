export const projectTagTones = {
  "Machine Learning": "coral",
  "Limited compute": "gold",
  "From scratch": "cyan",
  Autonomy: "blue",
  Guidance: "violet",
  Rocketry: "rose",
  "Artificial intelligence": "orange",
  "Game AI": "teal",
  "Award-winning": "magenta",
  "C++": "red",
  Python: "yellow",
  Rust: "umber",
  "Embedded Systems": "indigo",
  Robotics: "mint",
} as const;

export type ProjectTag = keyof typeof projectTagTones;

export const projectLanguages = ["C++", "Python", "Rust"] as const satisfies
  readonly ProjectTag[];

export const projectCategories = [
  "Machine Learning",
  "Embedded Systems",
  "Robotics",
] as const satisfies readonly ProjectTag[];

const placeholderDetails = [
  "Detailed project narrative forthcoming. This placeholder will be replaced with a complete account of the problem, its motivation, and the specific constraints that shaped the work.",
  "The finished case study will document the architecture, important engineering decisions, and the most difficult implementation details. It will also distinguish individual contributions from the work of the broader team where applicable.",
  "Verified results, measurements, lessons learned, and supporting media will be added once the final project material is ready.",
] as const;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  details: readonly string[];
  githubUrl: string;
  tags: readonly ProjectTag[];
  image?: {
    src: string;
    alt: string;
  };
};

export type ProjectCardData = Pick<
  Project,
  "slug" | "title" | "summary" | "tags" | "image"
>;

export const projects = [
  {
    slug: "language-model-training",
    title: "Language model training",
    summary: "Training a language model from scratch with limited compute.",
    details: placeholderDetails,
    githubUrl: "https://github.com",
    tags: ["Python", "Machine Learning", "Limited compute", "From scratch"],
  },
  {
    slug: "self-guided-rocket",
    title: "Self-guided rocket",
    summary: "An active self-guided rocket.",
    details: placeholderDetails,
    githubUrl: "https://github.com",
    tags: ["C++", "Robotics", "Autonomy", "Guidance", "Rocketry"],
  },
  {
    slug: "splatoon-ai-agent",
    title: "Splatoon AI agent",
    summary: "An award-winning AI agent for Splatoon.",
    details: placeholderDetails,
    githubUrl: "https://github.com",
    tags: [
      "Rust",
      "Machine Learning",
      "Artificial intelligence",
      "Game AI",
      "Award-winning",
    ],
  },
] as const satisfies readonly Project[];
