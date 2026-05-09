import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.communityEntertainment;

const sections = [
  {
    eyebrow: "Football and sports",
    title: "Sports can make Munich feel familiar fast.",
    intro:
      "Football is a universal language and one of Munich's biggest sources of entertainment for children, teenagers, and parents.",
    image: mediaImages.communityClub,
    points: [
      "Allianz Arena and the FC Bayern Museum are home to Germany's most successful club and a famous city landmark that glows red at night.",
      "Families can take a Kids Tour or visit Germany's largest club museum to see the trophies.",
      "TSV 1860 Munich plays at Gruenwalder Stadion and offers a more traditional, neighborhood football atmosphere.",
      "BMW Park is home to FC Bayern Basketball and works well as an indoor winter activity.",
    ],
    links: [
      { label: "Allianz Arena tours", url: "https://allianz-arena.com/en/tours-museum" },
      { label: "FC Bayern Basketball", url: "https://fcbayern.com/basketball/en" },
    ],
    variant: "germany",
  },
  {
    eyebrow: "Parks",
    title: "Low-cost outings help families breathe.",
    intro:
      "Munich's parks give families space to walk, rest, play, and build weekly routines without spending much money.",
    image: mediaImages.whyMunich,
    points: [
      "The English Garden is larger than Central Park in New York, and families can watch river surfers or let children run in the meadows.",
      "Olympic Park was built for the 1972 Olympics and offers open space, activities, and the Olympic Tower view over the city.",
      "Parks are especially useful for first months when families need low-cost routines and children need movement.",
    ],
    links: [
      { label: "English Garden map", url: "https://maps.app.goo.gl/8WvK5x2z6D7B4M9v9" },
      { label: "Olympic Park map", url: "https://maps.app.goo.gl/XvJ8wQkP7p5X6L7z9" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Libraries and culture",
    title: "Study spaces and museums support the whole family.",
    intro:
      "Libraries and museums give children and parents affordable ways to learn, explore, and spend time together.",
    image: mediaImages.educationLanguage,
    points: [
      "Munich Public Library at Gasteig HP8 is a modern hub with books in many languages and free study spaces.",
      "Gasteig HP8 can help students and parents looking for Arabic literature or a quiet place to study.",
      "The Deutsches Museum is the world's largest science and technology museum, and the Kids' Kingdom section is useful for younger children.",
    ],
    links: [
      { label: "Gasteig HP8 map", url: "https://maps.app.goo.gl/Yw8S9D6Z7B2C5M1v9" },
      { label: "Deutsches Museum map", url: "https://maps.app.goo.gl/4BvL8K2M7C3D5X1v9" },
      { label: "Deutsches Museum", url: "https://www.deutsches-museum.de/museumsinsel/besuch" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Arab and Syrian meetups",
    title: "Community starts with places where Arabic is heard.",
    intro:
      "For Syrian families, community spaces can make the city less lonely and help parents ask practical questions.",
    image: mediaImages.eidMunichCityHall,
    points: [
      "Goethestrasse near the main station is described as an Arab Quarter, with Syrian restaurants and grocery stores.",
      "Families can use meetup calendars to find Arabic Language and Culture or Syrian Community gatherings in Munich.",
      "Community meetups can help families build a social circle beyond school, work, and appointments.",
    ],
    links: [
      { label: "Goethestrasse map", url: "https://maps.app.goo.gl/vX9Y6Z3B2C5M8L1v9" },
      { label: "Arabic meetups in Munich", url: "https://www.meetup.com/topics/arabic/de/muenchen/" },
    ],
    variant: "syria",
  },
];

export default function CommunityEntertainment() {
  return (
    <>
      <HeroSection />
      {sections.map((section) => (
        <div key={section.eyebrow}>
          <IdentityDivider variant={section.variant} subtle />
          <TopicSection section={section} />
        </div>
      ))}
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-charcoal/10 dark:border-white/10"
      style={{
        backgroundImage: `linear-gradient(110deg, rgba(23, 22, 21, 0.78), rgba(23, 22, 21, 0.5)), url("${page.image.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(200,157,60,0.24),_transparent_28%),radial-gradient(circle_at_86%_78%,_rgba(17,97,73,0.28),_transparent_30%)]" />
      <div className="section-shell relative z-10 py-16">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-gold/30 bg-charcoal/48 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-gold backdrop-blur">
            {page.label}
          </p>
          <h1 className="mt-8 font-display text-6xl font-bold leading-none text-linen sm:text-7xl lg:text-[7rem]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-10 text-cream/88 sm:text-3xl sm:leading-[3.2rem]">
            {page.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function TopicSection({ section }) {
  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-[linear-gradient(180deg,_rgba(255,250,241,0.96)_0%,_rgba(241,234,223,0.94)_100%)] py-16 dark:border-white/10 dark:bg-[linear-gradient(180deg,_#171615_0%,_#100f0e_100%)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-redwood dark:text-gold">
            {section.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-5xl font-bold leading-tight text-charcoal dark:text-linen sm:text-6xl">
            {section.title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-ink/72 dark:text-cream/76">
            {section.intro}
          </p>
          <div className="mt-8 grid gap-4">
            {section.points.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-lg border border-charcoal/10 bg-white/82 p-4 shadow-soft dark:border-white/10 dark:bg-white/8"
              >
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emeraldDeep/10 text-emeraldDeep dark:bg-gold/12 dark:text-gold">
                  <Icon name="CheckCircle2" className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold leading-7 text-ink/70 dark:text-cream/72">
                  {point}
                </p>
              </div>
            ))}
          </div>
          {section.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {section.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-charcoal px-5 py-3 text-sm font-black text-linen transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-gold/25 dark:bg-gold dark:text-charcoal"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <figure className="overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-3 shadow-consultant dark:border-white/10 dark:bg-white/8">
          <div className="relative min-h-[30rem] overflow-hidden rounded-lg bg-charcoal">
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="h-full min-h-[30rem] w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-charcoal/12 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
                {section.image.label}
              </p>
              <p className="mt-2 max-w-lg text-sm font-semibold leading-7 text-linen/82">
                {section.image.caption}
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
