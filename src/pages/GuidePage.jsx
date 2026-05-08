import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";
import FeatureCard from "../components/FeatureCard";
import ResourceCard from "../components/ResourceCard";
import CallToActionBanner from "../components/CallToActionBanner";
import PlaceholderImage from "../components/PlaceholderImage";
import PagePersonalityBlock from "../components/PagePersonalityBlock";
import TrustNotice from "../components/TrustNotice";
import IdentityDivider from "../components/IdentityDivider";
import VisualGallery from "../components/VisualGallery";
import { pagePersonalityBlocks, trustNotice } from "../data/placeholderData";

export default function GuidePage({ page }) {
  return (
    <>
      <PageHero
        hero={{
          label: page.label,
          title: page.title,
          subtitle: page.subtitle,
          purpose: page.purpose,
          heroIcon: page.heroIcon,
          placeholder: page.placeholder,
          image: page.image,
        }}
      />
      <IdentityDivider variant="bridge" subtle />
      {page.showTrustNotice && <TrustNotice notice={trustNotice} />}
      <section className="py-12">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              label="What this page will help with"
              title="Clear guidance without overwhelming the family"
              intro={page.purpose}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.helpWith.map((item) => (
                <div key={item} className="rounded-lg border border-charcoal/10 bg-white/78 p-4 text-sm font-bold text-ink/72 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-cream/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <PlaceholderImage
            icon={page.heroIcon}
            label={page.placeholder}
            caption="A visual anchor for this part of the guide."
            image={page.sectionImage || page.image}
          />
        </div>
      </section>
      <VisualGallery gallery={page.gallery} />
      <PagePersonalityBlock
        block={pagePersonalityBlocks[page.personality]}
        icon={page.heroIcon}
        image={page.sectionImage || page.image}
      />
      <IdentityDivider variant={page.personality === "culture" ? "syria" : "germany"} subtle />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeader
            label={page.label}
            title={`${page.title} placeholders`}
            intro="The cards below use realistic dummy content and are ready for your team to replace with verified research."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((card) => (
              <InfoCard key={card.title} item={card} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="section-shell">
          <FeatureCard feature={page.feature} />
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell">
          <SectionHeader
            label="Future resources to add"
            title="Research links can be dropped in here later"
            intro="Keep this area as a clean source shelf for official links, local support organizations, and project research notes."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      <CallToActionBanner cta={page.cta} />
    </>
  );
}
