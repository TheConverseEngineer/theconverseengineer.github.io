import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { PathDisplay } from "./path-display";
import { StickyHeaderShell } from "./sticky-header-shell";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <StickyHeaderShell>
      <div className="relative z-10 mx-auto flex min-h-18 max-w-304 items-center justify-between gap-4 px-5 py-3 max-[35rem]:px-4">
        <div className="min-w-0">
          <PathDisplay />
        </div>

        <div className="flex shrink-0 items-center gap-4 max-[35rem]:gap-1">
          <nav className="max-[35rem]:hidden" aria-label="Primary navigation">
            <ul className="m-0 flex list-none items-center gap-1 p-0">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="group grid min-h-11 place-items-center px-3 text-base text-muted no-underline transition-[color,transform] duration-150 hover:-translate-y-px hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none max-[35rem]:px-2"
                    href={item.href}
                  >
                    <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileMenu items={navigation} />
        </div>
      </div>
    </StickyHeaderShell>
  );
}
