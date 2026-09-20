"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

/**
 * Site header — sticky top, blurred backdrop.
 *
 * Desktop: inline anchor nav + theme toggle.
 * Mobile: hamburger opens a right-side Sheet with the same nav.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-colors",
        scrolled && "border-border bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="#hero"
          className="group inline-flex items-center gap-2 text-sm font-medium"
          aria-label={`${SITE.name} — home`}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card font-mono text-xs"
            aria-hidden="true"
          >
            {SITE.name.charAt(0)}
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <ThemeToggle />

          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col gap-2 pt-6">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-auto border-t border-border pt-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


