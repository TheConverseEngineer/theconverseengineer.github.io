export const projectTagTones = {
  "Machine Learning": "coral",
  "High-Performance Systems": "gold",
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
  "High-Performance Systems",
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
    slug: "picochat",
    title: "PicoChat",
    summary: "Training an optimized 1B language model from scratch to complete in small language model benchmarks.",
    details: placeholderDetails,
    githubUrl: "https://github.com/TheConverseEngineer/picochat",
    tags: ["Python", "Machine Learning", "C++"],
  },
  {
    slug: "alphapaint",
    title: "AlphaPaint",
    summary: "A custom reinforcement learning-based game AI built to compete in the 2026 Bytefight competition at Georgia Tech.",
    details: placeholderDetails,
    githubUrl: "https://github.com/TheConverseEngineer/alphapaint",
    tags: [
      "Rust",
      "Machine Learning",
      "Game AI",
      "High-Performance Systems"
    ],
  },
  {
    slug: "gnc-tvc",
    title: "Thrust Vector Controls",
    summary: "Actively stabilizing a G-class using a gimbaled motor and thrust vector control",
    details: placeholderDetails,
    githubUrl: "https://github.com/Georgia-Tech-GNC/flight-software",
    tags: ["C++", "Robotics", "Embedded Systems", "High-Performance Systems"],
  },
  {
    slug: "rl-simplified",
    title: "RL Simplified",
    summary: "A collection of custom pedagogical implementations for many traditional and landmark reinforcement learning algorithms.",
    details: placeholderDetails,
    githubUrl: "https://github.com/Georgia-Tech-GNC/flight-software",
    tags: ["Python", "Machine Learning"],
  },
  {
    slug: "alphasnake",
    title: "AlphaSnake",
    summary: "A working implementation of the AlphaZero and UBFM algorithms, build for the 2025 Bytefight competition at Georgia Tech.",
    details: placeholderDetails,
    githubUrl: "https://github.com/TheConverseEngineer/alphasnake",
    tags: [
      "Rust",
      "Machine Learning",
      "Game AI",
      "High-Performance Systems"
    ],
  },
  {
    slug: "twinbotics",
    title: "TwinBotics",
    summary: "Manipulating blocks using dual coordinated robotics arms, built for the 2026 RoboTech hackathon at Georgia Tech",
    details: placeholderDetails,
    githubUrl: "https://github.com/TheConverseEngineer/alphasnake",
    tags: [
      "Python",
      "C++",
      "Embedded Systems",
      "Robotics"
    ],
  },
  {
    slug: "deltapy",
    title: "DeltaPy",
    summary: "A from-scratch minimal backpropagation and machine learning library",
    details: placeholderDetails,
    githubUrl: "https://github.com/TheConverseEngineer/deltapy",
    tags: [
      "Python",
      "Machine Learning",
    ],
  },
  
] as const satisfies readonly Project[];
