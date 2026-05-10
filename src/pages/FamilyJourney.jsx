import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import TimelineCard from "../components/TimelineCard";
import PlaceholderImage from "../components/PlaceholderImage";
import CallToActionBanner from "../components/CallToActionBanner";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { familyJourney } from "../data/placeholderData";

export default function FamilyJourney() {
  return (
    <>
      <PageHero hero={familyJourney.hero} />
      <IdentityDivider variant="bridge" subtle />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeader label="Roadmap" title="A timeline families can actually follow" intro="The Family Journey gives the big picture, while the Family Plan turns a family's answers into a personal checklist." align="center" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {familyJourney.overviewCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold/16 text-charcoal dark:text-gold">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-black text-charcoal dark:text-linen">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/66 dark:text-cream/68">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <PlaceholderImage {...familyJourney.mapPlaceholder} />
          </div>
          <div className="relative mt-12 grid gap-6 md:grid-cols-2">
            <span className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emeraldDeep via-gold to-redwood md:block" />
            {familyJourney.stages.map((stage, index) => (
              <TimelineCard key={stage.title} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>
      <IdentityDivider variant="syria" subtle />
      <CallToActionBanner cta={familyJourney.cta} />
    </>
  );
}
