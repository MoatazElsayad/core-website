import PageHero from "../components/PageHero";
import FamilyPlanForm from "../components/FamilyPlanForm";
import SectionHeader from "../components/SectionHeader";
import Icon from "../components/Icon";
import CallToActionBanner from "../components/CallToActionBanner";
import { familyPlanPage } from "../data/placeholderData";

export default function FamilyPlan() {
  return (
    <>
      <PageHero compact hero={familyPlanPage.hero} />
      <section className="py-10">
        <div className="section-shell">
          <SectionHeader
            label={familyPlanPage.reportPreview.label}
            title={familyPlanPage.reportPreview.title}
            intro={familyPlanPage.reportPreview.intro}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {familyPlanPage.reportPreview.cards.map((card) => (
              <div key={card.title} className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold/16 text-charcoal dark:text-gold">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-black text-charcoal dark:text-linen">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/66 dark:text-cream/68">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FamilyPlanForm />
      <CallToActionBanner cta={familyPlanPage.cta} />
    </>
  );
}
