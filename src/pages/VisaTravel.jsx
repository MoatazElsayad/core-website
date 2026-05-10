import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import PlaceholderImage from "../components/PlaceholderImage";
import ResourceCard from "../components/ResourceCard";
import CallToActionBanner from "../components/CallToActionBanner";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { ExternalLink } from "lucide-react";
import { guidePages } from "../data/placeholderData";

const page = guidePages.visaTravel;
const guide = page.visaGuide;

export default function VisaTravel() {
  return (
    <>
      <PageHero hero={page} />
      <IdentityDivider variant="bridge" subtle />
      <ImportantNotice text={guide.notice} links={guide.noticeLinks} />
      <OverviewSection />
      <ApplicationRoutes />
      <KnowBeforeApplying />
      <DocumentChecklist />
      <FiveStepProcess />
      <TravelSection />
      <SourcesSection />
      <CallToActionBanner cta={page.cta} />
    </>
  );
}

function ImportantNotice({ text, links }) {
  return (
    <section className="py-8">
      <div className="section-shell">
        <div className="rounded-lg border border-redwood/25 bg-redwood/8 p-5 shadow-soft dark:border-redwood/30 dark:bg-redwood/10">
          <div className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-redwood text-linen">
              <Icon name="ShieldAlert" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-redwood dark:text-[#e58d82]">
                Important notice
              </p>
              <p className="mt-2 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/76">
                {text}
              </p>
              <SectionLinks links={links} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="py-12">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeader
            label="Visa and travel"
            title="Start with the correct route"
            intro={page.purpose}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.helpWith.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-charcoal/10 bg-white/78 p-4 text-sm font-bold text-ink/72 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-cream/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <PlaceholderImage
          icon={page.heroIcon}
          label={page.placeholder}
          caption="Documents, appointments, and travel planning should stay organized from the first step."
          image={page.image}
        />
      </div>
    </section>
  );
}

function ApplicationRoutes() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <SectionHeader
          label="Where to apply"
          title="Where should families apply?"
          intro="The responsible German mission depends on the family's habitual residence, so families should confirm the correct route before making plans."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {guide.applicationRoutes.map((route) => (
            <article
              key={route.title}
              className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft dark:border-white/10 dark:bg-white/8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-emeraldDeep text-linen dark:bg-gold dark:text-charcoal">
                  <Icon name={route.icon} className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-gold/16 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink dark:text-cream">
                  {route.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black text-charcoal dark:text-linen">
                {route.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/70 dark:text-cream/72">
                {route.description}
              </p>
              <Checklist items={route.points} />
              <SectionLinks links={route.links} />
            </article>
          ))}
        </div>
        <EmbassyMap />
      </div>
    </section>
  );
}

function KnowBeforeApplying() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            label="Before applying"
            title="What families should know"
            intro="Before applying, families should know their correct visa type, their responsible German mission, and whether their case can be started online."
          />
          <div className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft dark:border-white/10 dark:bg-white/8">
            <Checklist items={guide.knowPoints} columns />
            <SectionLinks links={guide.knowLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentChecklist() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <SectionHeader
          label="Documents"
          title="Document preparation checklist"
          intro={guide.documentNote}
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {guide.documentGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft dark:border-white/10 dark:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold/16 text-charcoal dark:text-gold">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-black text-charcoal dark:text-linen">
                  {group.title}
                </h3>
              </div>
              <Checklist items={group.items} />
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Callout
            icon="Languages"
            title="Language requirement"
            text={guide.languageRequirement}
          />
          <Callout icon="ShieldAlert" title="Appointment warning" text={guide.warning} />
        </div>
        <SectionLinks links={guide.documentLinks} boxed />
      </div>
    </section>
  );
}

function FiveStepProcess() {
  const stepIcons = ["MapPin", "BadgeHelp", "Files", "ClipboardCheck", "CalendarHeart"];

  return (
    <section className="py-16">
      <div className="section-shell">
        <SectionHeader
          label="Process"
          title="Five-step visa process"
          intro="A simple roadmap can help the family move from research to appointment without mixing up the order."
          align="center"
        />
        <div className="relative mt-12 hidden min-h-[360px] overflow-hidden rounded-lg border border-charcoal/10 bg-white/72 px-8 py-10 shadow-soft dark:border-white/10 dark:bg-white/8 md:block">
          <svg
            className="absolute inset-x-10 top-1/2 h-52 -translate-y-1/2 text-gold/72"
            viewBox="0 0 1000 320"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 190 C150 80 260 80 360 178 C455 268 550 260 635 172 C735 72 850 88 960 184"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="12 16"
            />
          </svg>
          {guide.processSteps.map((step, index) => (
            <article
              key={step.title}
              title={step.text}
              className={`absolute -translate-x-1/2 -translate-y-1/2 text-center ${
                [
                  "left-[8%] top-[59%]",
                  "left-[29%] top-[35%]",
                  "left-[50%] top-[61%]",
                  "left-[71%] top-[35%]",
                  "left-[92%] top-[57%]",
                ][index]
              }`}
            >
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"}`}>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-charcoal text-base font-black text-gold ring-8 ring-linen shadow-consultant transition hover:scale-105 dark:bg-gold dark:text-charcoal dark:ring-charcoal">
                  {index + 1}
                </span>
                <div className="w-40 rounded-lg border border-charcoal/10 bg-linen/96 p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-charcoal/96">
                  <span className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-emeraldDeep/10 text-emeraldDeep dark:bg-white/10 dark:text-gold">
                    <Icon name={stepIcons[index]} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-2 text-xs font-black leading-5 text-charcoal dark:text-linen">
                    {step.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="relative mt-10 grid gap-5 md:hidden">
          <span className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-emeraldDeep via-gold to-redwood" />
          {guide.processSteps.map((step, index) => (
            <article
              key={step.title}
              title={step.text}
              className="relative ml-14 rounded-lg border border-charcoal/10 bg-white/84 p-4 shadow-soft dark:border-white/10 dark:bg-white/8"
            >
              <span className="absolute -left-[3.4rem] top-4 grid h-12 w-12 place-items-center rounded-full bg-charcoal text-sm font-black text-gold ring-4 ring-linen dark:bg-gold dark:text-charcoal dark:ring-charcoal">
                {index + 1}
              </span>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-emeraldDeep/10 text-emeraldDeep dark:bg-gold/12 dark:text-gold">
                  <Icon name={stepIcons[index]} className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-black leading-6 text-charcoal dark:text-linen">
                  {step.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <SectionLinks links={guide.processLinks} boxed />
      </div>
    </section>
  );
}

function TravelSection() {
  return (
    <section className="py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            label="Travel"
            title={guide.travel.title}
            intro={guide.travel.intro}
          />
          <div className="mt-8 rounded-lg border border-gold/28 bg-gold/10 p-5 shadow-soft dark:border-gold/20 dark:bg-gold/8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                <Icon name="Plane" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-black text-charcoal dark:text-linen">
                Travel advice for families
              </h3>
            </div>
            <Checklist items={guide.travel.advice} columns />
            <SectionLinks links={guide.travel.links} />
          </div>
        </div>
        <FlightRouteCard />
      </div>
    </section>
  );
}

function FlightRouteCard() {
  return (
    <a
      href="https://www.flightconnections.com/flights-from-cai-to-muc"
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant focus:outline-none focus:ring-4 focus:ring-gold/25 dark:border-white/10 dark:bg-white/8"
      aria-label="View FlightConnections route from Cairo to Munich"
    >
      <div className="relative min-h-[210px] overflow-hidden bg-[linear-gradient(135deg,_rgba(17,97,73,0.16),_rgba(200,157,60,0.16)),linear-gradient(90deg,_rgba(23,22,21,0.06)_1px,_transparent_1px),linear-gradient(0deg,_rgba(23,22,21,0.06)_1px,_transparent_1px)] bg-[size:auto,_34px_34px,_34px_34px] p-5 dark:bg-[linear-gradient(135deg,_rgba(200,157,60,0.18),_rgba(141,51,44,0.18)),linear-gradient(90deg,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.08)_1px,_transparent_1px)]">
        <span className="absolute left-8 top-10 rounded-full bg-linen px-3 py-1 text-xs font-black text-charcoal shadow-soft dark:bg-charcoal dark:text-linen">
          Cairo CAI
        </span>
        <span className="absolute bottom-10 right-8 rounded-full bg-linen px-3 py-1 text-xs font-black text-charcoal shadow-soft dark:bg-charcoal dark:text-linen">
          Munich MUC
        </span>
        <svg className="absolute inset-0 h-full w-full text-redwood dark:text-gold" viewBox="0 0 520 220" fill="none" aria-hidden="true">
          <path
            d="M92 86 C178 35 301 185 428 132"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 13"
          />
        </svg>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-charcoal text-gold shadow-consultant transition group-hover:scale-105 dark:bg-gold dark:text-charcoal">
          <Icon name="Plane" className="h-6 w-6" />
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-redwood dark:text-[#e58d82]">
          Flight info source: FlightConnections
        </p>
        <h3 className="mt-3 text-2xl font-black text-charcoal dark:text-linen">
          Non-stop flights from CAI to MUC
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <FlightStat label="Distance" value="1,629 mi / 2,622 km" />
          <FlightStat label="Flight time" value="Approx. 4h 5m" />
          <FlightStat label="Airlines" value="EgyptAir, Lufthansa" />
        </div>
        <span className="mt-6 inline-flex items-center gap-2 rounded-lg bg-charcoal px-5 py-3 text-sm font-black text-linen transition group-hover:bg-emeraldDeep dark:bg-gold dark:text-charcoal">
          View Flight Route
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

function FlightStat({ label, value }) {
  return (
    <div className="rounded-lg border border-charcoal/10 bg-linen p-3 dark:border-white/10 dark:bg-white/8">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-ink/52 dark:text-cream/52">
        {label}
      </p>
      <p className="mt-1 text-sm font-black leading-6 text-charcoal dark:text-linen">
        {value}
      </p>
    </div>
  );
}

function SourcesSection() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <SectionHeader
          label="Sources"
          title="Extra useful links"
          intro="Most sources are placed under the exact section they support. These extra cards remain here for broader reference."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guide.extraSources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmbassyMap() {
  const map = guide.embassyMap;

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
      <div className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft dark:border-white/10 dark:bg-white/8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold/16 text-charcoal dark:text-gold">
            <Icon name="MapPin" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-redwood dark:text-[#e58d82]">
              Embassy location
            </p>
            <h3 className="text-lg font-black text-charcoal dark:text-linen">
              {map.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
          {map.address}
        </p>
        <SectionLinks links={[{ label: "Open shared Google location", url: map.shareUrl }]} />
      </div>
      <iframe
        title={map.title}
        src={map.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[320px] w-full rounded-lg border border-charcoal/10 shadow-soft dark:border-white/10"
      />
    </div>
  );
}

function Callout({ icon, title, text }) {
  return (
    <aside className="rounded-lg border border-redwood/20 bg-redwood/8 p-5 shadow-soft dark:border-redwood/30 dark:bg-redwood/10">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-redwood text-linen">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-base font-black text-charcoal dark:text-linen">{title}</h3>
          <p className="mt-2 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
            {text}
          </p>
        </div>
      </div>
    </aside>
  );
}

function SectionLinks({ links = [], boxed = false }) {
  if (!links.length) return null;

  return (
    <div
      className={`mt-5 flex flex-wrap gap-2 ${
        boxed
          ? "rounded-lg border border-charcoal/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/8"
          : ""
      }`}
    >
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-charcoal/10 bg-linen px-3 py-2 text-xs font-black text-emeraldDeep transition hover:-translate-y-0.5 hover:text-redwood dark:border-white/10 dark:bg-white/10 dark:text-gold"
        >
          {link.label}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function Checklist({ items, columns = false }) {
  return (
    <ul className={`mt-5 grid gap-3 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
          <span className="mt-2 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emeraldDeep/12 text-emeraldDeep dark:bg-gold/12 dark:text-gold">
            <Icon name="CheckCircle2" className="h-3 w-3" strokeWidth={2.4} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
