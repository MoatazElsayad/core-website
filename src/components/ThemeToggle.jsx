import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-charcoal/15 bg-white/82 px-3 text-sm font-black text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/12 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      {dark ? <Sun className="h-4 w-4 text-gold" /> : <Moon className="h-4 w-4 text-emeraldDeep" />}
      <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
