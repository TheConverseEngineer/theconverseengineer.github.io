import Link from "next/link";

const bioLinkStyles =
  "text-accent underline decoration-current underline-offset-4 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none";
const profileLinkStyles =
  "group inline-flex min-h-11 items-center gap-2 font-mono text-sm text-muted no-underline transition-[color,transform] duration-150 hover:-translate-y-px hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none";

export function Introduction() {
  return (
    <section
      className="flex flex-col gap-7"
      aria-labelledby="introduction-heading"
    >
      <div>
        <p className="mb-4 font-mono text-sm text-accent">
          Hey there! I&apos;m
        </p>
        <h1
          id="introduction-heading"
          className="m-0 text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] font-[520] tracking-[-0.055em]"
        >
          Vraj Parikh
        </h1>
      </div>

      <p className="m-0 max-w-xl text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-muted">
        I&apos;m interested in the theory behind high performance systems and
        artificial intelligence. I&apos;ve helped build systems for{" "}
        <a className={bioLinkStyles} href="https://comma.ai/">self-driving cars</a>
        ,{" "}
        <a className={bioLinkStyles} href="https://www.ramblinrocketclub.org/gnc">guided rockets</a>
        , and some of the world&apos;s{" "}
        <a className={bioLinkStyles} href="https://www.taittowers.com/home">largest live entertainment productions</a>
        .
      </p>

      <dl className="m-0 grid gap-2 font-mono text-sm">
        <div className="grid grid-cols-[5.5rem_1fr] gap-3">
          <dt className="text-muted">Education</dt>
          <dd className="m-0 text-foreground">
            <span className="block">Georgia Institute of Technology</span>
            <span className="mt-1 block text-xs leading-relaxed text-muted">
              B.S. Computer Science
              <span className="text-accent"> · graduating</span>
            </span>
            <span className="block text-xs leading-relaxed text-muted">
              M.S. Computer Science
              <span className="text-accent"> · incoming</span>
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-[5.5rem_1fr] gap-3">
          <dt className="text-muted">Based in</dt>
          <dd className="m-0 text-foreground">Lancaster, PA</dd>
        </div>
      </dl>

      <div className="flex flex-col items-start gap-4">
        <Link
          className="group inline-flex min-h-11 items-center gap-3 border border-border px-4 font-mono text-sm text-foreground no-underline transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-accent hover:text-accent motion-reduce:transform-none motion-reduce:transition-none"
          href="/projects"
        >
          View my projects
          <svg
            className="relative top-px size-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>

        <nav aria-label="Profile links">
          <ul className="m-0 flex list-none flex-wrap items-center gap-x-3 p-0">
            <li>
              <a
                className={profileLinkStyles}
                href="https://github.com/TheConverseEngineer"
              >
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.7S18.1.3 15 2.1a13.4 13.4 0 0 0-7 0C4.9.3 3.7.7 3.7.7A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
                  <path d="M8 19c-3 .9-3-1.5-4-2" />
                </svg>
                <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
                  GitHub
                </span>
              </a>
            </li>
            <li className="text-border" aria-hidden="true">
              |
            </li>
            <li>
              <a
                className={profileLinkStyles}
                href="https://www.linkedin.com/in/vrajparikh2023/"
              >
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 11v6M7 8v.01M11 17v-6M11 14a3 3 0 0 1 6 0v3" />
                </svg>
                <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
                  LinkedIn
                </span>
              </a>
            </li>
            <li className="text-border" aria-hidden="true">
              |
            </li>
            <li>
              <a className={profileLinkStyles} href="#">
                <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
