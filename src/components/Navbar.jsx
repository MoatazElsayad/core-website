import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { navItems, siteMeta } from "../data/placeholderData";

const navIcons = {
  "/": "Home",
  "/visa-travel": "Plane",
  "/accommodation": "BedDouble",
  "/food-faith-culture": "Utensils",
  "/family-integration": "UsersRound",
  "/education-language": "GraduationCap",
  "/health-safety": "Hospital",
  "/community-entertainment": "MessagesSquare",
  "/challenges-solutions": "ShieldAlert",
  "/family-plan": "ClipboardCheck",
  "/family-journey": "Route",
  "/sources": "Library",
};

export default function Navbar({ theme, onToggleTheme, collapsed = false, onToggleCollapse }) {
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";

  return (
    <>
      <aside
        className={`sidebar-scroll fixed inset-y-0 left-0 z-50 hidden overflow-y-auto border-r border-charcoal/10 bg-linen/92 py-5 shadow-consultant backdrop-blur-xl transition-[width,padding] duration-300 dark:border-white/10 dark:bg-charcoal/94 lg:flex lg:flex-col ${
          collapsed ? "w-20 px-3" : "w-72 px-4"
        }`}
      >
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between gap-3"}`}>
          <Link
            to="/"
            className={`flex min-w-0 items-center gap-3 ${collapsed ? "justify-center" : ""}`}
            onClick={() => setOpen(false)}
            title={collapsed ? siteMeta.name : undefined}
            aria-label={collapsed ? siteMeta.name : undefined}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-charcoal text-base font-bold text-gold shadow-soft ring-1 ring-gold/25 dark:bg-linen dark:text-charcoal">
              MB
            </span>
            {!collapsed && (
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-charcoal dark:text-linen">
                  {siteMeta.name}
                </span>
                <span className="block text-xs font-medium text-ink/60 dark:text-cream/62">
                  Family relocation consultant hub
                </span>
              </span>
            )}
          </Link>
          {!collapsed && (
            <CollapseButton collapsed={collapsed} onToggleCollapse={onToggleCollapse} />
          )}
        </div>

        {collapsed && (
          <div className="mt-4 flex justify-center">
            <CollapseButton collapsed={collapsed} onToggleCollapse={onToggleCollapse} />
          </div>
        )}

        <div className="mt-6 rounded-lg border border-charcoal/10 bg-white/72 p-3 shadow-soft dark:border-white/10 dark:bg-white/7">
          <p className={`px-3 pb-3 text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep dark:text-gold ${collapsed ? "sr-only" : ""}`}>
            Guide pages
          </p>
          <div className="grid gap-1.5">
            {navItems.map((item) => (
              <SidebarLink key={item.path} item={item} onClick={() => setOpen(false)} collapsed={collapsed} />
            ))}
          </div>
        </div>

        {!collapsed && (
          <div className="mt-4 rounded-lg border border-gold/25 bg-gold/10 p-4 dark:border-gold/18 dark:bg-gold/8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-redwood dark:text-gold">
              Educational notice
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink/68 dark:text-cream/70">
              Verify visa, legal, and healthcare details through official sources.
            </p>
          </div>
        )}

        <div className={`mt-4 ${collapsed ? "flex justify-center" : ""}`}>
          {collapsed ? (
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-lg border border-charcoal/15 bg-white/82 text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/12 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? <Sun className="h-4 w-4 text-gold" /> : <Moon className="h-4 w-4 text-emeraldDeep" />}
            </button>
          ) : (
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          )}
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-linen/92 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-charcoal/94 lg:hidden">
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

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-charcoal/15 bg-white/82 text-charcoal shadow-sm transition hover:bg-white dark:border-white/12 dark:bg-white/8 dark:text-linen"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-charcoal/10 bg-linen/96 px-4 py-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-charcoal/96">
            <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <SidebarLink key={item.path} item={item} onClick={() => setOpen(false)} compact />
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function CollapseButton({ collapsed, onToggleCollapse }) {
  return (
    <button
      type="button"
      onClick={onToggleCollapse}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-charcoal/15 bg-white/82 text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/12 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
    </button>
  );
}

function SidebarLink({ item, onClick, compact = false, collapsed = false }) {
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      aria-label={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        `group flex items-center rounded-lg border text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-gold/25 ${
          collapsed ? "justify-center px-0" : "gap-3 px-3"
        } ${
          compact ? "min-h-12 py-2.5" : "min-h-11 py-2"
        } ${
          isActive
            ? "border-charcoal bg-charcoal text-linen shadow-soft dark:border-gold dark:bg-gold dark:text-charcoal"
            : "border-transparent bg-transparent text-ink/72 hover:border-charcoal/10 hover:bg-white hover:text-charcoal dark:text-cream/72 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-linen"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition ${
              isActive
                ? "bg-gold text-charcoal dark:bg-charcoal dark:text-gold"
                : "bg-emeraldDeep/9 text-emeraldDeep group-hover:bg-emeraldDeep group-hover:text-linen dark:bg-white/8 dark:text-gold dark:group-hover:bg-white/12"
            }`}
          >
            <Icon name={navIcons[item.path]} className="h-4 w-4" />
          </span>
          {!collapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}
        </>
      )}
    </NavLink>
  );
}
