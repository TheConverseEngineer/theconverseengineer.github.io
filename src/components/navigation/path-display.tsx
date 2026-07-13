"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function decodePathSegment(segment: string) {
  try {
    return decodeURIComponent(segment);
  } catch {
    // Keep malformed URL encoding from breaking the entire breadcrumb.
    return segment;
  }
}

export function PathDisplay() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="block overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-foreground"
      aria-label="Breadcrumb"
    >
      <Link
        className="text-accent no-underline transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
        href="/"
        aria-current={segments.length === 0 ? "page" : undefined}
      >
        ~
      </Link>
      <span aria-hidden="true">/</span>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const label = decodePathSegment(segment);

        return (
          <span key={href}>
            <Link
              className="text-muted no-underline transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
              href={href}
              aria-current={index === segments.length - 1 ? "page" : undefined}
            >
              {label}
            </Link>
            {index < segments.length - 1 && (
              <span aria-hidden="true">/</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
