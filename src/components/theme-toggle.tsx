import { useTheme } from "../hooks/use-theme";

/**
 * Compact, elegant theme toggle. Renders a pill with two halves (D / L);
 * the accent-highlighted half indicates the active mode.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className={`group inline-flex items-center gap-1 rounded-full border border-border bg-panel p-0.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${className}`}
    >
      <span
        className={`rounded-full px-2.5 py-1 leading-none transition-colors ${
          theme === "dark" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
        }`}
      >
        Dark
      </span>
      <span
        className={`rounded-full px-2.5 py-1 leading-none transition-colors ${
          theme === "light" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
        }`}
      >
        Light
      </span>
    </button>
  );
}
