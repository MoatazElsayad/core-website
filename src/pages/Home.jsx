import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TrustNotice from "../components/TrustNotice";
import Icon from "../components/Icon";
import { home, trustNotice } from "../data/placeholderData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WhyMunichSection />
      <GuideSectionsBand />
      <JourneySection />
      <IdentitySection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-charcoal/10 bg-[radial-gradient(circle_at_top_left,_rgba(17,97,73,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(200,157,60,0.2),_transparent_34%),linear-gradient(135deg,_#f6efe2_0%,_#fffaf1_48%,_#efe5d7_100%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(200,157,60,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(159,47,47,0.16),_transparent_34%),linear-gradient(135deg,_#171615_0%,_#1d1b19_48%,_#120f0d_100%)]">
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute left-[8%] top-[14%] h-36 w-36 rotate-12 border border-gold/25" />
        <div className="absolute bottom-[18%] left-[14%] h-56 w-56 rounded-full border border-emeraldDeep/15" />
        <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full border border-redwood/15" />
        <div className="absolute bottom-[12%] right-[14%] h-32 w-80 -rotate-12 border border-charcoal/10 dark:border-white/10" />
      </div>

      <div className="section-shell relative z-10 grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-emeraldDeep/20 bg-linen/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emeraldDeep shadow-soft dark:border-gold/20 dark:bg-white/6 dark:text-gold">
            {home.hero.label}
          </p>
          <h1 className="mt-8 font-display text-6xl font-bold leading-none text-charcoal dark:text-linen sm:text-7xl lg:text-[7rem]">
            {home.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-10 text-ink/88 dark:text-cream/88 sm:text-3xl sm:leading-[3.2rem]">
            {home.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <HeroButton cta={home.hero.primaryCta} primary />
            <HeroButton cta={home.hero.secondaryCta} />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-charcoal/10 bg-white/72 p-6 shadow-consultant backdrop-blur dark:border-white/10 dark:bg-white/8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-redwood dark:text-gold">
              Consultant-style guide
            </p>
            <p className="mt-4 text-base leading-8 text-ink/72 dark:text-cream/76">
              {home.hero.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {home.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-charcoal/10 bg-linen/84 p-4 shadow-soft dark:border-white/10 dark:bg-white/8"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                  <Icon name={stat.icon} className="h-5 w-5" />
                </span>
                <p className="mt-5 text-2xl font-black text-charcoal dark:text-linen">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-ink/62 dark:text-cream/68">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-linen/40 py-16 dark:border-white/10 dark:bg-[#191715]">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emeraldDeep dark:text-gold">
            About the page
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold text-charcoal dark:text-linen sm:text-5xl">
            A welcoming first stop before the journey gets practical.
          </h2>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-charcoal/10 bg-white/84 p-8 shadow-consultant dark:border-white/10 dark:bg-white/8">
            <p className="text-lg leading-9 text-ink/72 dark:text-cream/78">{home.hero.description}</p>
          </div>
          <TrustNotice notice={trustNotice} />
        </div>
      </div>
    </section>
  );
}

function WhyMunichSection() {
  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-[linear-gradient(180deg,_rgba(255,250,241,0.96)_0%,_rgba(247,241,230,0.98)_100%)] py-16 dark:border-white/10 dark:bg-[linear-gradient(180deg,_#171615_0%,_#11100f_100%)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-redwood dark:text-gold">
            {home.whyMunich.label}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold text-charcoal dark:text-linen sm:text-5xl">
            {home.whyMunich.title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-ink/72 dark:text-cream/78">
            {home.whyMunich.intro}
          </p>
          <p className="mt-8 rounded-lg border border-gold/25 bg-gold/10 p-5 text-sm font-bold leading-8 text-ink/72 dark:border-gold/20 dark:bg-gold/8 dark:text-cream/74">
            {home.whyMunich.closing}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {home.whyMunich.reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-lg border border-charcoal/10 bg-white/84 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-emeraldDeep/10 text-emeraldDeep dark:bg-gold/12 dark:text-gold">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-black text-charcoal dark:text-linen">{reason.title}</h3>
              <p className="mt-3 text-sm leading-8 text-ink/68 dark:text-cream/70">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuideSectionsBand() {
  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-charcoal py-16 text-linen dark:bg-[#0f0e0d]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">
            {home.websiteHelpsWith.label}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            {home.websiteHelpsWith.title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-cream/78">{home.websiteHelpsWith.intro}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {home.websiteHelpsWith.items.map((item) => (
            <Link
              key={`${item.title}-${item.path}`}
              to={item.path}
              className="group flex min-h-48 flex-col justify-between rounded-lg border border-white/10 bg-white/6 p-6 transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-consultant focus:outline-none focus:ring-4 focus:ring-gold/25"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold text-charcoal">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-gold">
                  {item.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black leading-8 text-linen">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/70">Simple orientation for one major part of the move.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-[linear-gradient(180deg,_rgba(255,250,241,0.96)_0%,_rgba(240,234,223,0.96)_100%)] py-16 dark:border-white/10 dark:bg-[linear-gradient(180deg,_#151412_0%,_#100f0e_100%)]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emeraldDeep dark:text-gold">
            {home.journeyOverview.label}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold text-charcoal dark:text-linen sm:text-5xl">
            {home.journeyOverview.title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-ink/72 dark:text-cream/76">
            {home.journeyOverview.intro}
          </p>
        </div>
        <div className="mt-14 grid gap-4 xl:grid-cols-5">
          {home.journeyOverview.stages.map((stage, index) => (
            <article
              key={stage.title}
              className="relative rounded-lg border border-charcoal/10 bg-white/84 p-6 shadow-soft dark:border-white/10 dark:bg-white/8"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-redwood dark:text-gold">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <span className="mt-5 grid h-12 w-12 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name={stage.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-black text-charcoal dark:text-linen">{stage.title}</h3>
              <p className="mt-3 text-sm leading-8 text-ink/68 dark:text-cream/70">{stage.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to={home.journeyOverview.cta.path}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-charcoal px-6 py-4 text-sm font-black text-linen transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-gold/25 dark:bg-gold dark:text-charcoal"
          >
            {home.journeyOverview.cta.label}
            <Icon name="Route" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IdentitySection() {
  return (
    <section className="flex min-h-[100svh] items-center bg-[radial-gradient(circle_at_bottom_left,_rgba(17,97,73,0.18),_transparent_26%),linear-gradient(135deg,_#171615_0%,_#11100f_60%,_#1b1612_100%)] py-16 text-linen">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{home.culturalIdentity.label}</p>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">{home.culturalIdentity.title}</h2>
          <p className="mt-6 text-lg leading-9 text-cream/78">{home.culturalIdentity.message}</p>
        </div>
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {home.culturalIdentity.highlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-white/10 bg-white/8 p-5 text-sm font-black uppercase tracking-[0.14em] text-cream">
                {highlight}
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-gold/20 bg-white/6 p-6">
            <h3 className="text-2xl font-black text-linen">{home.cta.title}</h3>
            <p className="mt-4 text-sm leading-8 text-cream/72">{home.cta.text}</p>
            <Link
              to={home.cta.path}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51] focus:outline-none focus:ring-4 focus:ring-gold/25"
            >
              {home.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroButton({ cta, primary = false }) {
  return (
    <Link
      to={cta.path}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-gold/25 ${
        primary
          ? "bg-charcoal text-linen shadow-consultant hover:-translate-y-0.5 hover:bg-ink dark:bg-gold dark:text-charcoal"
          : "border border-charcoal/15 bg-white/78 text-charcoal shadow-soft hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/8 dark:text-linen dark:hover:bg-white/12"
      }`}
    >
      {cta.label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
