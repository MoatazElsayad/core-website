import { Link } from "react-router-dom";
import { navItems, siteMeta } from "../data/placeholderData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal py-12 text-linen dark:bg-[#10100f]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">
            {siteMeta.name}
          </p>
          <p className="mt-3 font-display text-2xl font-bold">{siteMeta.course}</p>
          <p className="mt-4 text-sm leading-7 text-cream/72">{siteMeta.mission}</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm font-semibold text-cream/72 transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm leading-7 text-cream/72">
            <p>This website is for educational purposes only.</p>
            <p className="font-bold text-cream">
              Always verify visa, legal, and healthcare information from official sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
