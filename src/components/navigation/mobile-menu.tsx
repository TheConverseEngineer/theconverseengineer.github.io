"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

export function MobileMenu({ items }: { items: readonly NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Dismiss from non-interactive space outside the menu.
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;
      if (buttonRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      if (target.closest("a, button")) return;

      setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        className="hidden min-h-11 min-w-11 cursor-pointer place-items-center border-0 bg-transparent p-0 text-muted transition-colors duration-150 hover:text-foreground motion-reduce:transition-none max-[35rem]:grid"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          className={`size-5 transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? "rotate-90 ease-out" : "rotate-0 ease-in"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {/* Keep the panel mounted so its closing transition can finish. */}
      <div
        className={`fixed inset-x-0 top-18 bottom-0 z-40 hidden overflow-hidden max-[35rem]:block ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-background/75 transition-opacity duration-200 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <aside
          ref={panelRef}
          className={`relative ml-auto h-full w-[min(18rem,85vw)] border-l border-border bg-background px-5 py-6 transition-transform duration-200 motion-reduce:transition-none ${
            isOpen
              ? "translate-x-0 ease-out"
              : "translate-x-full ease-in"
          }`}
          aria-label="Mobile navigation"
          inert={!isOpen}
        >
          <nav id="mobile-navigation">
            <ul className="m-0 flex list-none flex-col p-0">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    className="flex min-h-12 items-center border-b border-border py-3 font-mono text-sm text-muted no-underline transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
