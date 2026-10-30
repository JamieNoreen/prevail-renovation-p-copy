import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const el = document.documentElement;
    if (el.classList.contains("light")) return "light";
  }
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    try {
      localStorage.setItem("prevail-theme", theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
