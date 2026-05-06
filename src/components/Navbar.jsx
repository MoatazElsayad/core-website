import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navItems, siteMeta } from "../data/placeholderData";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-linen/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-charcoal/92">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-charcoal text-sm font-bold text-gold shadow-soft ring-1 ring-gold/25 dark:bg-linen dark:text-charcoal">
            MB
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase tracking-[0.18em] text-charcoal dark:text-linen">
              {siteMeta.name}
            </span>
            <span className="hidden text-xs font-medium text-ink/60 dark:text-cream/62 sm:block">
              Family relocation consultant hub
            </span>
          </span>
        </Link>

        <div className="hidden max-w-[980px] flex-wrap items-center justify-end gap-1 rounded-full border border-charcoal/10 bg-white/58 px-2 py-1 shadow-sm dark:border-white/10 dark:bg-white/6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-charcoal text-linen dark:bg-gold dark:text-charcoal"
                    : "text-ink/72 hover:bg-charcoal hover:text-linen dark:text-cream/72 dark:hover:bg-white/10 dark:hover:text-linen"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-charcoal/15 bg-white/82 text-charcoal shadow-sm transition hover:bg-white dark:border-white/12 dark:bg-white/8 dark:text-linen lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-linen/96 px-4 py-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-charcoal/96 lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-charcoal bg-charcoal text-linen dark:border-gold dark:bg-gold dark:text-charcoal"
                      : "border-charcoal/8 bg-white/76 text-ink/75 hover:bg-charcoal hover:text-linen dark:border-white/10 dark:bg-white/8 dark:text-cream/76"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
