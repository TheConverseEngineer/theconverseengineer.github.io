type ExperienceItemProps = {
  company: string;
  href: string;
  dates: string;
  role: string;
  context: string;
  description: string;
  isLast: boolean;
};

const companyLinkStyles =
  "group inline-flex items-center gap-1 text-foreground no-underline transition-transform duration-150 hover:-translate-y-px motion-reduce:transform-none motion-reduce:transition-none";

export function ExperienceItem({
  company,
  href,
  dates,
  role,
  context,
  description,
  isLast,
}: ExperienceItemProps) {
  return (
    <li className="grid grid-cols-[1rem_1fr] gap-x-5">
      <div className="relative flex justify-center" aria-hidden="true">
        <span className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-accent bg-background" />
        {!isLast && (
          <span className="absolute top-5 -bottom-0.5 left-1/2 w-px -translate-x-1/2 bg-border" />
        )}
      </div>

      <article className={isLast ? undefined : "pb-4"}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="m-0 text-xl font-medium tracking-[-0.02em]">
            <a className={companyLinkStyles} href={href}>
              <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
                {company}
              </span>
              <span className="inline-flex w-0 -translate-x-1 overflow-hidden opacity-0 transition-[width,opacity,transform] duration-150 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:transition-none">
                <svg
                  className="size-4 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </a>
          </h3>
          <time className="shrink-0 font-mono text-xs text-muted">
            {dates}
          </time>
        </div>
        <p className="m-0 leading-relaxed text-muted">
          <span className="text-foreground">{role}</span>
          <span> · </span>
          {context}
        </p>
        <p 
          className="mt-2 mb-0 text-sm leading-relaxed text-muted" 
          dangerouslySetInnerHTML={{__html: description}}
        >
        </p>
      </article>
    </li>
  );
}
