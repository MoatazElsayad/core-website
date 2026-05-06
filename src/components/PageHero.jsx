import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import PlaceholderImage from "./PlaceholderImage";

export default function PageHero({ hero, compact = false }) {
  return (
    <section className={`relative overflow-hidden dark:bg-charcoal ${compact ? "py-14" : "py-20 sm:py-24"}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute right-0 top-10 hidden h-64 w-44 rotate-12 border border-gold/20 bg-gold/8 dark:border-gold/10 lg:block" />
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          {hero.label && (
            <p className="mb-4 inline-flex rounded-full border border-emeraldDeep/20 bg-emeraldDeep/8 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-emeraldDeep dark:border-gold/25 dark:bg-gold/10 dark:text-gold">
              {hero.label}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight text-charcoal dark:text-linen sm:text-6xl">
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p className="mt-5 max-w-2xl text-xl font-bold leading-8 text-ink/82 dark:text-cream/88">
              {hero.subtitle}
            </p>
          )}
          {(hero.description || hero.purpose) && (
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/66 dark:text-cream/68">
              {hero.description || hero.purpose}
            </p>
          )}
          {(hero.primaryCta || hero.secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {hero.primaryCta && <HeroButton cta={hero.primaryCta} primary />}
              {hero.secondaryCta && <HeroButton cta={hero.secondaryCta} />}
            </div>
          )}
        </div>
        <PlaceholderImage
          icon={hero.heroIcon}
          label={hero.imageLabel || hero.placeholder}
          caption={hero.imageCaption || "Placeholder visual for future project media"}
        />
      </div>
    </section>
  );
}

function HeroButton({ cta, primary = false }) {
  return (
    <Link
      to={cta.path}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold/25 ${
        primary
          ? "bg-charcoal text-linen shadow-consultant hover:bg-ink dark:bg-gold dark:text-charcoal"
          : "border border-charcoal/15 bg-white/72 text-charcoal hover:bg-white dark:border-white/12 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
      }`}
    >
      {cta.label}
      {primary ? <ArrowRight className="h-4 w-4" /> : <Icon name="Route" className="h-4 w-4" />}
    </Link>
  );
}
