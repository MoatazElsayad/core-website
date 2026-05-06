import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import TimelineCard from "../components/TimelineCard";
import PlaceholderImage from "../components/PlaceholderImage";
import CallToActionBanner from "../components/CallToActionBanner";
import { familyJourney } from "../data/placeholderData";

export default function FamilyJourney() {
  return (
    <>
      <PageHero hero={familyJourney.hero} />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeader label="Roadmap" title="A timeline families can actually follow" intro="Each stage includes a main goal, key tasks, emotional reminder, and related page link." align="center" />
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
      <CallToActionBanner cta={familyJourney.cta} />
    </>
  );
}
