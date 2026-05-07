import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Icon from "../components/Icon";
import IdentityDivider from "../components/IdentityDivider";
import { challenges, challengesPage } from "../data/placeholderData";

export default function ChallengesSolutions() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleChallenges =
    activeCategory === "All"
      ? challenges
      : challenges.filter((challenge) => challenge.category === activeCategory);

  return (
    <>
      <ChallengesHero />
      <IdentityDivider variant="bridge" />
      <ChallengeNavigator
        activeCategory={activeCategory}
        onChangeCategory={setActiveCategory}
      />
      <IdentityDivider variant="syria" subtle />
      {visibleChallenges.map((challenge, index) => (
        <ChallengeSection key={challenge.title} challenge={challenge} index={index} />
      ))}
      <IdentityDivider variant="germany" subtle />
      <ClosingSection />
    </>
  );
}

function ChallengesHero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-charcoal/10 py-16 dark:border-white/10"
      style={{
        backgroundImage: challengesPage.hero.image?.src
          ? `linear-gradient(115deg, rgba(255, 250, 241, 0.88), rgba(255, 250, 241, 0.66)), url(${challengesPage.hero.image.src})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(159,47,47,0.15),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(17,97,73,0.18),_transparent_26%)] dark:bg-[linear-gradient(135deg,_rgba(23,22,21,0.82)_0%,_rgba(18,15,13,0.68)_60%,_rgba(29,23,19,0.82)_100%),radial-gradient(circle_at_top_right,_rgba(200,157,60,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(159,47,47,0.16),_transparent_26%)]" />
      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-redwood/20 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-redwood shadow-soft dark:border-gold/20 dark:bg-white/6 dark:text-gold">
            {challengesPage.hero.label}
          </p>
          <h1 className="mt-8 font-display text-5xl font-bold leading-none text-charcoal dark:text-linen sm:text-6xl lg:text-[6.5rem]">
            {challengesPage.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-10 text-ink/88 dark:text-cream/88 sm:text-3xl sm:leading-[3.2rem]">
            {challengesPage.hero.subtitle}
          </p>
        </div>

        <div className="rounded-lg border border-charcoal/10 bg-white/78 p-8 shadow-consultant backdrop-blur dark:border-white/10 dark:bg-white/8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep dark:text-gold">
            {challengesPage.supportBanner.label}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-charcoal dark:text-linen">
            {challengesPage.supportBanner.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/72 dark:text-cream/76">
            {challengesPage.supportBanner.text}
          </p>
          <p className="mt-5 rounded-lg border border-gold/22 bg-gold/10 p-4 text-sm font-semibold leading-7 text-ink/72 dark:border-gold/18 dark:bg-gold/8 dark:text-cream/72">
            {challengesPage.hero.purpose}
          </p>
        </div>
      </div>
    </section>
  );
}

function ChallengeNavigator({ activeCategory, onChangeCategory }) {
  return (
    <section className="border-b border-charcoal/10 bg-charcoal py-10 text-linen dark:border-white/10 dark:bg-[#0f0e0d]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">
            {challengesPage.header.label}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            {challengesPage.header.title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-cream/78">{challengesPage.header.intro}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {challengesPage.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onChangeCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-gold/25 ${
                activeCategory === category
                  ? "border-gold bg-gold text-charcoal"
                  : "border-white/10 bg-white/8 text-cream/74 hover:-translate-y-0.5 hover:bg-white/12"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeSection({ challenge, index }) {
  const even = index % 2 === 0;

  return (
    <section
      className={`flex min-h-[100svh] items-center border-b border-charcoal/10 py-16 dark:border-white/10 ${
        even
          ? "bg-[linear-gradient(180deg,_rgba(255,250,241,0.96)_0%,_rgba(241,234,223,0.94)_100%)] dark:bg-[linear-gradient(180deg,_#171615_0%,_#100f0e_100%)]"
          : "bg-[linear-gradient(180deg,_rgba(245,239,229,0.92)_0%,_rgba(255,250,241,0.96)_100%)] dark:bg-[linear-gradient(180deg,_#120f0d_0%,_#181412_100%)]"
      }`}
    >
      <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-charcoal/10 bg-white/84 p-7 shadow-consultant dark:border-white/10 dark:bg-white/8">
            {challenge.image?.src && (
              <div className="mb-6 overflow-hidden rounded-lg bg-charcoal">
                <img
                  src={challenge.image.src}
                  alt={challenge.image.alt || challenge.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name={challenge.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-redwood dark:text-gold">
                  {challenge.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-charcoal dark:text-linen">
                  {challenge.title}
                </h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-ink/72 dark:text-cream/76">
              {challenge.challenge}
            </p>
            {challenge.helpfulNote && (
              <p className="mt-6 rounded-lg border border-gold/25 bg-gold/10 p-4 text-sm font-semibold leading-7 text-ink/72 dark:border-gold/18 dark:bg-gold/8 dark:text-cream/72">
                {challenge.helpfulNote}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5">
          {challenge.solutionGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-charcoal/10 bg-white/84 p-6 shadow-soft dark:border-white/10 dark:bg-white/8"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep dark:text-gold">
                Solution path
              </p>
              <h3 className="mt-3 text-2xl font-black text-charcoal dark:text-linen">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-8 text-ink/72 dark:text-cream/74">
                    <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-emeraldDeep dark:bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-charcoal/10 bg-linen/86 p-6 shadow-soft dark:border-white/10 dark:bg-white/6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-charcoal dark:text-gold">
                Useful links
              </p>
              <div className="mt-5 grid gap-3">
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

            <div className="rounded-lg border border-charcoal/10 bg-white/84 p-6 shadow-soft dark:border-white/10 dark:bg-white/8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-redwood dark:text-gold">
                Related pages
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/68 dark:text-cream/70">
                Move from this challenge into the guide section that helps with it most directly.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="flex min-h-[70svh] items-center bg-charcoal py-16 text-linen dark:bg-[#0f0e0d]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">
            {challengesPage.cta.title}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            A first-step plan can make the hard parts feel smaller.
          </h2>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/8 p-6">
          <p className="text-base leading-8 text-cream/76">{challengesPage.cta.text}</p>
          <Link
            to={challengesPage.cta.path}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51] focus:outline-none focus:ring-4 focus:ring-gold/25"
          >
            {challengesPage.cta.label}
            <Icon name="ClipboardCheck" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
