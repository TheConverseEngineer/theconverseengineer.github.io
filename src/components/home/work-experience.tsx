import { ExperienceItem } from "./experience-item";

const descriptionLinkStyles =
  "group inline-flex text-muted no-underline transition-[color,transform] duration-150 hover:-translate-y-px hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none";

const experience = [
  {
    company: "Comma",
    href: "https://comma.ai/",
    dates: "Summer 2026",
    role: "Autonomy Intern",
    context: "Self-driving vehicles",
    description:
      "Developed novel sleep detection monitoring software deployed to over 20,000 users and built infrastructure for training up to 4B-parameter world models based on user driving footage.",
  },
  {
    company: "Extreme Dynamics Lab",
    href: "https://sarhadi.eas.gatech.edu/",
    dates: "Summer 2025 - Fall 2026",
    role: "Research Assistant",
    context: "Coastal flooding dynamics",
    description:
      "Researched new mesh refinement approaches for shallow water dynamics using fine-mesh graph neural operators.",
  },
  {
    company: "AI Guru",
    href: "https://aiguru.one/",
    dates: "Summer 2025",
    role: "Software Engineering Intern ",
    context: "Self-driving vehicles",
    description: (
      <>
        Build document retrieval and chatbot backend for client site{" "}
        <a className={descriptionLinkStyles} href="https://millmind.ai">
          <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
            millmind.ai
          </span>
        </a>
        .
      </>
    ),
  },
  {
    company: "TAIT Global",
    href: "https://www.taittowers.com/home",
    dates: "Summer 2024",
    role: "Automation Software Intern",
    context: "Live entertainment automation",
    description:
      "Wrote and configured live automation software in use during multiple productions, including at the Justin Timberlake world tour and Madison Square Gardens.",
  },
] as const;

export function WorkExperience() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="mb-8 border-b border-border pb-4">
        <h2
          id="experience-heading"
          className="m-0 text-sm font-medium tracking-[0.12em] text-foreground uppercase"
        >
          Work experience
        </h2>
      </div>

      <ol className="m-0 list-none p-0">
        {experience.map((item, index) => (
          <ExperienceItem
            key={item.company}
            company={item.company}
            href={item.href}
            dates={item.dates}
            role={item.role}
            context={item.context}
            description={item.description}
            isLast={index === experience.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
