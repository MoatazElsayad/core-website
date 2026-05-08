import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.foodFaithCulture;

const sections = [
  {
    eyebrow: "Culture",
    title: "Your Syrian identity can grow in Munich.",
    intro:
      "Munich provides an environment where Syrian identity can thrive while families continue balancing German daily life with cultural roots, traditions, and language.",
    image: mediaImages.eidMunichCityHall,
    points: [
      "The Best of Both Worlds: Families benefit from the stability of a strong German economy while being supported by a large, established Arab community.",
      "Strength in Numbers: Groups like Munich Syrians Meetup can help families make friends, find practical advice on local systems, and celebrate cultural holidays together.",
      "Your Future: In Munich, identity does not disappear. It evolves while families keep traditions close and use the city's professional and educational opportunities.",
    ],
    links: [],
    variant: "syria",
  },
  {
    eyebrow: "Food",
    title: "Familiar flavors make a new city feel softer.",
    intro:
      "Accessing the flavors of home is a source of comfort and familiarity as families settle into a new life.",
    image: mediaImages.arabeskDining,
    points: [
      "The Global Pantry: High demand for international products means Syrian staples like labneh, halloumi, and high-quality olive oils are easy to find.",
      "Halal Groceries: Specialty stores like Al Aksa Market and Orient Markt provide fresh, halal-certified meats and authentic spices.",
      "Syrian Restaurants: Culinary culture is flourishing in areas like Maxvorstadt, and places like Damascus Falafel offer familiar language and homeland hospitality.",
    ],
    links: [
      {
        label: "Middle Eastern restaurants in Munich",
        url: "https://www.tripadvisor.com/Restaurants-g187309-c30-Munich_Upper_Bavaria_Bavaria.html",
      },
    ],
    variant: "germany",
  },
  {
    eyebrow: "Faith",
    title: "Faith can remain visible, protected, and shared.",
    intro:
      "Munich is a city where faith is supported and respected.",
    images: [mediaImages.faithMosque],
    points: [
      "The Benefit of Diversity: Munich's multiculturalism lets families practice faith openly in a city that values religious freedom and protects worship traditions.",
      "Islamic Practices: Munich has a strong and visible Muslim community, with mosques in districts like Pasing and Sendling serving as anchors for support, religious education, and belonging.",
      "A Diversity of Syrian Faiths: Munich celebrates the Syrian mosaic, including Syrian Christian communities and other traditions with churches and dedicated heritage groups.",
      "Multicultural Acceptance: Muslims, Christians, and people of all faiths live side by side, helping families integrate without feeling they must lose who they are.",
    ],
    links: [
      {
        label: "Islamic Center Munich",
        url: "https://www.islamisches-zentrum-muenchen.de/",
      },
    ],
    variant: "bridge",
  },
];

export default function FoodFaithCulture() {
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
        backgroundImage: `linear-gradient(110deg, rgba(23, 22, 21, 0.76), rgba(23, 22, 21, 0.42)), url(${page.image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,_rgba(200,157,60,0.26),_transparent_30%),radial-gradient(circle_at_84%_76%,_rgba(17,97,73,0.28),_transparent_28%)]" />
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
  const images = section.images || [section.image];

  return (
    <section className="flex min-h-[100svh] items-center border-b border-charcoal/10 bg-[linear-gradient(180deg,_rgba(255,250,241,0.96)_0%,_rgba(241,234,223,0.94)_100%)] py-16 dark:border-white/10 dark:bg-[linear-gradient(180deg,_#171615_0%,_#100f0e_100%)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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

        <div className="grid gap-4">
          {images.map((image) => (
            <figure
              key={`${section.eyebrow}-${image.src}`}
              className="overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-3 shadow-consultant dark:border-white/10 dark:bg-white/8"
            >
              <div className="relative min-h-[20rem] overflow-hidden rounded-lg bg-charcoal">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full min-h-[20rem] w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-charcoal/12 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
                    {image.label}
                  </p>
                  <p className="mt-2 max-w-lg text-sm font-semibold leading-7 text-linen/82">
                    {image.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
