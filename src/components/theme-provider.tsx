"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Theme provider wrapper.
 * Dark-first: `defaultTheme="dark"`, but users can toggle to light.
 * System preference is respected only if the user hasn't chosen explicitly.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
