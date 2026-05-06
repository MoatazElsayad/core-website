import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CallToActionBanner({ cta }) {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg bg-charcoal p-6 text-linen shadow-consultant dark:bg-[#10100f] sm:p-8">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Next step</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{cta.title}</h2>
              {cta.text && (
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-cream/72">
                  {cta.text}
                </p>
              )}
            </div>
            <Link
              to={cta.path}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51] focus:outline-none focus:ring-4 focus:ring-gold/30"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
