import Link from "next/link";

type ProjectBackLinkContentProps = {
  href: "/" | "/projects";
  label: string;
};

export function ProjectBackLinkContent({
  href,
  label,
}: ProjectBackLinkContentProps) {
  return (
    <Link
      className="group inline-flex min-h-11 w-52 shrink-0 items-center justify-start gap-2 whitespace-nowrap font-mono text-sm text-muted no-underline transition-[color,transform] duration-150 hover:-translate-y-px hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none min-[40rem]:justify-end"
      href={href}
    >
      <svg
        className="size-4 transition-transform duration-150 group-hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
        {label}
      </span>
    </Link>
  );
}
