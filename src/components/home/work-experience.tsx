import { ExperienceItem } from "./experience-item";

const experience = [
  {
    company: "Comma",
    href: "https://comma.ai/",
    dates: "Dates forthcoming",
    role: "Autonomy Intern",
    context: "Self-driving vehicles",
    description:
      "Details about my contributions and the technical challenges involved are forthcoming.",
  },
  {
    company: "Other A",
    href: "#",
    dates: "Dates forthcoming",
    role: "Autonomy Intern",
    context: "Self-driving vehicles",
    description:
      "Details about my contributions and the technical challenges involved are forthcoming.",
  },
  {
    company: "Other B",
    href: "#",
    dates: "Dates forthcoming",
    role: "Autonomy Intern",
    context: "Self-driving vehicles",
    description:
      "Details about my contributions and the technical challenges involved are forthcoming.",
  },
  {
    company: "TAIT",
    href: "https://www.taittowers.com/home",
    dates: "Dates forthcoming",
    role: "Software Intern",
    context: "Live entertainment automation",
    description:
      "Details about my contributions and the technical challenges involved are forthcoming.",
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
