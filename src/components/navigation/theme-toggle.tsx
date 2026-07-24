"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    // Re-sync on hydration if the inline initializer was blocked.
    try {
      if (window.localStorage.getItem("theme") === "light") {
        document.documentElement.dataset.theme = "light";
      }
    } catch {}
  }, []);

  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;

    try {
      if (nextTheme === "light") {
        window.localStorage.setItem("theme", "light");
      } else {
        window.localStorage.removeItem("theme");
      }
    } catch {}
  }

  return (
    <button
      className="grid min-h-11 min-w-11 cursor-pointer place-items-center border-0 bg-transparent p-0 text-muted transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg
        className="size-5 in-data-[theme=light]:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.25v2M12 19.75v2M2.25 12h2M19.75 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
      </svg>
      <svg
        className="hidden size-5 in-data-[theme=light]:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.4 15.2A8.7 8.7 0 0 1 8.8 3.6 8.7 8.7 0 1 0 20.4 15.2Z" />
      </svg>
    </button>
  );
}
