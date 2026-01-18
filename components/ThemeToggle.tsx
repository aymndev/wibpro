"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
<<<<<<< HEAD
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const saved = (() => {
      try {
        return localStorage.getItem("theme");
      } catch {
        return null;
      }
    })();
    const prefersLight = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", initial);
    requestAnimationFrame(() => setTheme(initial));
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button aria-label="Toggle theme" onClick={toggle} className="theme-toggle" title="Toggle dark / light mode">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
=======
    const [theme, setTheme] = useState<string | null>(null);

    // initialize theme on client
    useEffect(() => {
        // Initialize theme on first client render
        const saved = (() => {
            try {
                return localStorage.getItem("theme");
            } catch {
                return null;
            }
        })();
        const prefersLight = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
        const initial = saved || (prefersLight ? "light" : "dark");
        // set DOM attribute synchronously so initial paint uses correct colors
        document.documentElement.setAttribute("data-theme", initial);
        // update React state on next tick to avoid double renders
        requestAnimationFrame(() => setTheme(initial));
    }, []);

    useEffect(() => {
        if (!theme) return;
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch {
            // ignore
        }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="theme-toggle"
            title="Toggle dark / light mode"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
>>>>>>> 373630c5c5d439f8d8896fbed7b397f926e02ed0
}
