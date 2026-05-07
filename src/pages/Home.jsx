import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TrustNotice from "../components/TrustNotice";
import Icon from "../components/Icon";
import IdentityDivider from "../components/IdentityDivider";
import { home, trustNotice } from "../data/placeholderData";
import homeBackground from "../../home.png";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdentityDivider variant="bridge" />
      <WelcomeSection />
      <IdentityDivider variant="syria" subtle />
      <WhyMunichSection />
      <IdentityDivider variant="germany" subtle />
      <GuideSectionsBand />
      <IdentityDivider variant="bridge" />
      <JourneySection />
      <IdentityDivider variant="syria" subtle />
      <IdentitySection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-charcoal/10 dark:border-white/10"
      style={{
        backgroundImage: `linear-gradient(115deg, rgba(255, 250, 241, 0.68), rgba(255, 250, 241, 0.54)), url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(17,97,73,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(200,157,60,0.14),_transparent_34%)] dark:bg-[linear-gradient(135deg,_rgba(23,22,21,0.68)_0%,_rgba(29,27,25,0.54)_48%,_rgba(18,15,13,0.72)_100%),radial-gradient(circle_at_top_left,_rgba(200,157,60,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(159,47,47,0.14),_transparent_34%)]" />

      <div className="absolute inset-0 opacity-30 dark:opacity-15">
        <div className="absolute left-[8%] top-[14%] h-36 w-36 rotate-12 border border-gold/25" />
        <div className="absolute bottom-[18%] left-[14%] h-56 w-56 rounded-full border border-emeraldDeep/15" />
        <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full border border-redwood/15" />
        <div className="absolute bottom-[12%] right-[14%] h-32 w-80 -rotate-12 border border-charcoal/10 dark:border-white/10" />
      </div>

      <div className="section-shell relative z-10 py-16">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-emeraldDeep/20 bg-linen/85 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emeraldDeep shadow-soft dark:border-gold/20 dark:bg-white/10 dark:text-gold">
            {home.hero.label}
          </p>
          <h1 className="mt-8 font-display text-6xl font-bold leading-none text-charcoal dark:text-linen sm:text-7xl lg:text-[7rem]">
            {home.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-10 text-ink/88 dark:text-cream/88 sm:text-3xl sm:leading-[3.2rem]">
            {home.hero.subtitle}
          </p>
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
          <PhotoPanel image={home.whyMunich.image} className="mt-6" />
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
          <PhotoPanel image={home.journeyOverview.image} />
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

function PhotoPanel({ image, className = "" }) {
  if (!image?.src) return null;

  return (
    <figure className={`overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-3 shadow-soft dark:border-white/10 dark:bg-white/8 ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-charcoal">
        <img
          src={image.src}
          alt={image.alt || ""}
          className="h-64 w-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/74 via-charcoal/10 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
            {image.label}
          </p>
          <p className="mt-2 text-sm font-semibold leading-7 text-linen/82">
            {image.caption}
          </p>
        </figcaption>
      </div>
    </figure>
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
