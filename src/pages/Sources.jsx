import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ResourceCard from "../components/ResourceCard";
import CallToActionBanner from "../components/CallToActionBanner";
import { sourceLibrary, sourcesPage } from "../data/placeholderData";

export default function Sources() {
  return (
    <>
      <PageHero hero={sourcesPage.hero} />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeader {...sourcesPage.header} />
          <div className="mt-8 rounded-lg border border-charcoal/10 bg-linen/80 p-5 shadow-soft dark:border-white/10 dark:bg-white/8">
            <div className="grid gap-3 text-sm font-bold text-ink/68 dark:text-cream/68 sm:grid-cols-4">
              {sourcesPage.metadataColumns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sourceLibrary.map((source) => (
              <ResourceCard key={source.category} resource={source} />
            ))}
          </div>
        </div>
      </section>
      <CallToActionBanner cta={sourcesPage.cta} />
    </>
  );
}
