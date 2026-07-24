"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });

  return () => window.removeEventListener("scroll", onStoreChange);
}

function isPageScrolled() {
  return window.scrollY > 0;
}

function getServerScrollSnapshot() {
  return false;
}

export function StickyHeaderShell({ children }: { children: ReactNode }) {
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    isPageScrolled,
    getServerScrollSnapshot,
  );

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-0 transition-[background-color,backdrop-filter] duration-200 motion-reduce:transition-none ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md"
            : "bg-background"
        }`}
        aria-hidden="true"
      />
      {children}
    </header>
  );
}
