import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { PathDisplay } from "./path-display";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto flex min-h-18 max-w-304 items-center justify-between gap-4 px-5 py-3 max-[35rem]:px-4">
        <div className="min-w-0">
          <PathDisplay />
        </div>

        <div className="flex shrink-0 items-center gap-4 max-[35rem]:gap-1">
          <nav className="max-[35rem]:hidden" aria-label="Primary navigation">
            <ul className="m-0 flex list-none items-center gap-1 p-0">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="grid min-h-11 place-items-center px-3 text-sm text-muted no-underline transition-colors duration-150 hover:text-foreground motion-reduce:transition-none max-[35rem]:px-2"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileMenu items={navigation} />
        </div>
      </div>
    </header>
  );
}
