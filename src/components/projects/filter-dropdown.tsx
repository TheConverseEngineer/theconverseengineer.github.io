"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import type { ProjectTag } from "@/data/projects";

type FilterDropdownProps = {
  label: string;
  allLabel: string;
  options: readonly ProjectTag[];
  value: ProjectTag | "";
  onChange: (value: ProjectTag | "") => void;
};

export function FilterDropdown({
  label,
  allLabel,
  options,
  value,
  onChange,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const labelId = useId();
  const valueId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsidePress(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [isOpen]);

  function closeAndFocusTrigger() {
    triggerRef.current?.focus({ preventScroll: true });
    setIsOpen(false);
  }

  function focusEdgeOption(edge: "first" | "last") {
    requestAnimationFrame(() => {
      const items =
        containerRef.current?.querySelectorAll<HTMLButtonElement>(
          '[role="menuitemradio"]',
        );
      const index = edge === "first" ? 0 : (items?.length ?? 1) - 1;

      items?.[index]?.focus();
    });
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeAndFocusTrigger();
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return;
    }

    event.preventDefault();
    const items = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>(
        '[role="menuitemradio"]',
      ),
    );
    const currentIndex = items.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : items.length - 1
        : (currentIndex + direction + items.length) % items.length;

    items[nextIndex]?.focus();
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-2"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setIsOpen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setIsOpen(false);
        }
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <span
        id={labelId}
        className="font-mono text-base font-medium tracking-[0.08em] text-muted uppercase"
      >
        {label}
      </span>

      <div className="relative">
        <button
          ref={triggerRef}
          className="group/trigger inline-flex min-h-11 w-48 items-center justify-start gap-1.5 px-1 font-mono text-base text-muted transition-colors duration-150 hover:text-foreground motion-reduce:transition-none min-[48rem]:w-72"
          type="button"
          aria-labelledby={`${labelId} ${valueId}`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            } else if (
              event.key === "ArrowDown" ||
              event.key === "ArrowUp"
            ) {
              event.preventDefault();
              setIsOpen(true);
              focusEdgeOption(
                event.key === "ArrowDown" ? "first" : "last",
              );
            }
          }}
        >
          <span
            id={valueId}
            className="min-w-0 flex-1 whitespace-normal text-left leading-snug min-[48rem]:whitespace-nowrap"
          >
            {value || allLabel}
          </span>
          <svg
            className={`size-4 shrink-0 transition-transform duration-150 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m7 10 5 5 5-5" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 z-20 w-48 pt-1 min-[48rem]:w-72"
            role="menu"
            aria-label={`${label} filters`}
            onKeyDown={handleMenuKeyDown}
          >
            <div className="rounded-md border border-border bg-surface p-1">
              {(["", ...options] as const).map((option) => {
                const isSelected = option === value;

                return (
                  <button
                    key={option || "all"}
                    className={`flex min-h-10 w-full items-center rounded-sm px-2.5 py-2 text-left font-mono text-base leading-snug whitespace-normal transition-colors duration-150 hover:bg-background hover:text-foreground motion-reduce:transition-none ${
                      isSelected ? "text-accent" : "text-muted"
                    }`}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    onClick={() => {
                      onChange(option);
                      closeAndFocusTrigger();
                    }}
                  >
                    {option || allLabel}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
