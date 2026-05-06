import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import CallToActionBanner from "../components/CallToActionBanner";
import { challenges, challengesPage } from "../data/placeholderData";
import Icon from "../components/Icon";

export default function ChallengesSolutions() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openTitle, setOpenTitle] = useState(challenges[0]?.title);

  const visibleChallenges =
    activeCategory === "All"
      ? challenges
      : challenges.filter((challenge) => challenge.category === activeCategory);

  return (
    <>
      <PageHero hero={challengesPage.hero} />

      {/* Team content inserted here - update with final research if needed. */}
      <section className="py-10">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-lg border border-gold/28 bg-gold/10 p-6 shadow-soft dark:border-gold/20 dark:bg-gold/8">
            <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emeraldDeep via-gold to-redwood" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name="HeartHandshake" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-emeraldDeep dark:text-gold">
                  {challengesPage.supportBanner.label}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-charcoal dark:text-linen">
                  {challengesPage.supportBanner.title}
                </h2>
                <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
                  {challengesPage.supportBanner.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <SectionHeader {...challengesPage.header} />

          <div className="mt-8 flex flex-wrap gap-2">
            {challengesPage.categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  const nextChallenge =
                    category === "All"
                      ? challenges[0]
                      : challenges.find((challenge) => challenge.category === category);
                  setOpenTitle(nextChallenge?.title);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-gold/25 ${
                  activeCategory === category
                    ? "border-charcoal bg-charcoal text-linen dark:border-gold dark:bg-gold dark:text-charcoal"
                    : "border-charcoal/12 bg-white/82 text-ink/72 hover:-translate-y-0.5 hover:bg-white dark:border-white/12 dark:bg-white/8 dark:text-cream/72 dark:hover:bg-white/12"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-5">
            {visibleChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.title}
                challenge={challenge}
                open={openTitle === challenge.title}
                onToggle={() =>
                  setOpenTitle((current) => (current === challenge.title ? "" : challenge.title))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner cta={challengesPage.cta} />
    </>
  );
}

function ChallengeCard({ challenge, open, onToggle }) {
  return (
    <article className="overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 shadow-soft transition hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-4 p-5 text-left focus:outline-none focus:ring-4 focus:ring-gold/25 sm:flex-row sm:items-start"
        aria-expanded={open}
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-redwood/10 text-redwood dark:text-[#e58d82]">
          <Icon name={challenge.icon} className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="inline-flex rounded-full bg-gold/16 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink dark:text-cream">
            {challenge.category}
          </span>
          <span className="mt-3 block text-2xl font-black text-charcoal dark:text-linen">
            {challenge.title}
          </span>
          <span className="mt-3 block text-sm font-semibold leading-7 text-ink/68 dark:text-cream/68">
            {challenge.challenge}
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink/68 transition dark:text-cream/68 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="border-t border-charcoal/10 p-5 dark:border-white/10">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <BlockLabel label="Challenge" tone="red" />
              <p className="rounded-lg bg-linen p-4 text-sm font-semibold leading-7 text-ink/72 dark:bg-white/6 dark:text-cream/72">
                {challenge.challenge}
              </p>

              <BlockLabel label="Solutions" tone="green" />
              <div className="grid gap-4">
                {challenge.solutionGroups.map((group) => (
                  <div key={group.title} className="rounded-lg border border-emeraldDeep/16 bg-emeraldDeep/8 p-4 dark:border-gold/16 dark:bg-white/6">
                    <h3 className="text-sm font-black uppercase tracking-[0.14em] text-emeraldDeep dark:text-gold">
                      {group.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emeraldDeep dark:bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {challenge.helpfulNote && (
                <div className="rounded-lg border border-gold/28 bg-gold/10 p-4 text-sm font-bold leading-7 text-ink/72 dark:border-gold/20 dark:bg-gold/8 dark:text-cream/72">
                  <BlockLabel label="Helpful note" tone="gold" />
                  <p className="mt-2">{challenge.helpfulNote}</p>
                </div>
              )}
            </div>

            <aside className="space-y-5">
              <div className="rounded-lg border border-charcoal/10 bg-linen/72 p-5 dark:border-white/10 dark:bg-white/6">
                <BlockLabel label="Useful links" tone="gold" />
                <div className="mt-4 grid gap-3">
                  {challenge.usefulLinks.map((link) => (
                    <a
                      key={`${challenge.title}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-gold hover:shadow-soft dark:border-white/10 dark:bg-charcoal/60 dark:text-cream"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-emeraldDeep transition group-hover:text-redwood dark:text-gold" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-charcoal/10 bg-white/84 p-5 dark:border-white/10 dark:bg-white/6">
                <BlockLabel label="Related page" tone="green" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {challenge.relatedPages.map((page) => (
                    <Link
                      key={`${challenge.title}-${page.path}-${page.label}`}
                      to={page.path}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-charcoal px-4 py-3 text-sm font-black text-linen transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-gold/25 dark:bg-gold dark:text-charcoal"
                    >
                      {page.label}
                      <Icon name="Route" className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </article>
  );
}

function BlockLabel({ label, tone }) {
  const colors = {
    red: "text-redwood dark:text-[#e58d82]",
    green: "text-emeraldDeep dark:text-gold",
    gold: "text-ink dark:text-gold",
  };

  return (
    <p className={`text-xs font-black uppercase tracking-[0.16em] ${colors[tone]}`}>
      {label}
    </p>
  );
}
