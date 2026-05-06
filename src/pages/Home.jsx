import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import TrustNotice from "../components/TrustNotice";
import Icon from "../components/Icon";
import CallToActionBanner from "../components/CallToActionBanner";
import { home, trustNotice } from "../data/placeholderData";

export default function Home() {
  return (
    <>
      <PageHero hero={home.hero} />

      <section className="-mt-8 pb-12">
        <div className="section-shell grid gap-3 rounded-lg border border-charcoal/10 bg-white/86 p-3 shadow-consultant backdrop-blur dark:border-white/10 dark:bg-white/8 md:grid-cols-4">
          {home.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-lg bg-linen/75 p-4 dark:bg-white/6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name={stat.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-black text-charcoal dark:text-linen">{stat.value}</p>
                <p className="text-sm font-bold text-ink/60 dark:text-cream/62">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustNotice notice={trustNotice} />

      {/* Team content inserted here - update with final research if needed. */}
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              label={home.whyMunich.label}
              title={home.whyMunich.title}
              intro={home.whyMunich.intro}
            />
            <p className="mt-6 rounded-lg border border-gold/28 bg-gold/10 p-5 text-sm font-bold leading-7 text-ink/72 shadow-soft dark:border-gold/20 dark:bg-gold/8 dark:text-cream/72">
              {home.whyMunich.closing}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-consultant dark:border-white/10 dark:bg-white/8">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
            <div className="mb-5 rounded-lg border border-dashed border-charcoal/15 bg-linen/80 p-5 text-center dark:border-white/12 dark:bg-charcoal/60">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name="Route" className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-emeraldDeep dark:text-gold">
                {home.whyMunich.visualLabel}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {home.whyMunich.reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="group rounded-lg border border-charcoal/10 bg-linen/70 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-olive/10 text-emeraldDeep transition group-hover:bg-emeraldDeep group-hover:text-linen dark:bg-gold/12 dark:text-gold">
                    <Icon name={reason.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-black text-charcoal dark:text-linen">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink/68 dark:text-cream/68">
                    {reason.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <SectionHeader
            label={home.websiteHelpsWith.label}
            title={home.websiteHelpsWith.title}
            intro={home.websiteHelpsWith.intro}
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.websiteHelpsWith.items.map((item) => (
              <Link
                key={`${item.title}-${item.path}`}
                to={item.path}
                className="group flex min-h-32 flex-col justify-between rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/10 dark:bg-white/8"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-charcoal text-gold transition group-hover:bg-gold group-hover:text-charcoal dark:bg-gold dark:text-charcoal">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-gold/16 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink dark:text-cream">
                    {item.tag}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-black leading-7 text-charcoal dark:text-linen">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <SectionHeader
            label={home.journeyOverview.label}
            title={home.journeyOverview.title}
            intro={home.journeyOverview.intro}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {home.journeyOverview.stages.map((stage, index) => (
              <article
                key={stage.title}
                className="relative rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8"
              >
                {index < home.journeyOverview.stages.length - 1 && (
                  <span className="absolute left-10 top-full h-4 w-px bg-gold/50 lg:left-auto lg:right-[-1rem] lg:top-10 lg:h-px lg:w-4" />
                )}
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-emeraldDeep text-linen dark:bg-gold dark:text-charcoal">
                  <Icon name={stage.icon} className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-redwood dark:text-gold">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-black text-charcoal dark:text-linen">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-cream/68">
                  {stage.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to={home.journeyOverview.cta.path}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-charcoal/15 bg-white/82 px-5 py-3 text-sm font-black text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/12 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
            >
              {home.journeyOverview.cta.label}
              <Icon name="Route" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-linen dark:bg-[#10100f]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">{home.culturalIdentity.label}</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{home.culturalIdentity.title}</h2>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/8 p-6">
            <p className="text-base font-semibold leading-8 text-cream/84">{home.culturalIdentity.message}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {home.culturalIdentity.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-cream">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner cta={home.cta} />
    </>
  );
}
