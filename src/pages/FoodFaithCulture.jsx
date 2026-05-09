import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.foodFaithCulture;

const sections = [
  {
    eyebrow: "Muslim community",
    title: "Faith and culture can stay visible in Munich.",
    intro:
      "Munich has a well-established Muslim community, including Arabs and Syrians. Halal food, Arabic-speaking grocery stores, and active mosques are readily accessible.",
    image: mediaImages.eidMunichCityHall,
    points: [
      "Integration in Germany does not mean losing faith or culture.",
      "Munich's Arab and Muslim communities can help families find familiar spaces, advice, and belonging.",
      "Marienplatz has been illuminated during Eid al-Fitr celebrations, reflecting the city's multicultural welcome.",
    ],
    links: [
      { label: "HalalTrip Munich guide", url: "https://www.halaltrip.com/city-guide-details/151/munich/" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Restaurants",
    title: "Syrian and Middle Eastern food is part of city life.",
    intro:
      "Munich has a solid selection of halal Arabic and Middle Eastern restaurants that can offer families familiar food, language, and hospitality.",
    image: mediaImages.arabeskDining,
    points: [
      "Bab Al Yemen serves traditional Yemeni and Middle Eastern dishes and is popular with the local Arab community.",
      "Beirutbeirut, Sababa Restaurant, Make Falafel Not War, Shandiz Persian Grill, and Arabesk give families several halal and Arabic food options.",
      "Make Falafel Not War on Kapuzinerstrasse is budget-friendly, while Arabesk is useful for dine-in and delivery nights.",
    ],
    links: [
      {
        label: "Top halal restaurants",
        url: "https://www.tripadvisor.com/Restaurants-g187309-zfz10751-Munich_Upper_Bavaria_Bavaria.html",
      },
      { label: "Wolt halal delivery", url: "https://wolt.com/en/deu/munich/category/halal" },
      {
        label: "25 halal restaurants",
        url: "https://en.ibnbattutatravel.com/europe/uncover-munich-germany-s-hidden-halal-restaurants-25-must-visit-places/",
      },
    ],
    variant: "germany",
  },
  {
    eyebrow: "Halal groceries",
    title: "Families can cook Syrian food at home.",
    intro:
      "Turkish and Arab grocery stores are common in Sendling, Giesing, and near central markets, making daily halal cooking easier.",
    image: mediaImages.foodCulture,
    points: [
      "Turkish supermarkets carry halal meat, Middle Eastern spices, Arabic cheeses, dates, tahini, freekeh, and other staples, often cheaper than German supermarkets.",
      "Ali Gemuese Doener at Landsberger Str. 104 is known for low-price halal food, shawarma, kunafa, and Arab grocery staples.",
      "Lidl, Aldi, Netto, REWE, and Edeka increasingly carry halal-certified products or dedicated halal sections in Muslim-majority neighborhoods.",
      "Grocera and Yababa offer Munich halal grocery delivery, including South Asian, Turkish, and Middle Eastern products.",
    ],
    links: [
      { label: "Munich halal stores map", url: "https://halalplaces.org/de/by/munich" },
      { label: "Online halal delivery guide", url: "https://liveingermany.de/online-halal-meat-in-germany/" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Mosques",
    title: "Munich has active mosques for Arab and Muslim families.",
    intro:
      "Friday prayer, Arabic classes, Quran programs, Ramadan iftars, and women's or youth activities are available across several Munich communities.",
    images: [mediaImages.faithMosque],
    points: [
      "Islamisches Zentrum Muenchen at Wallnerstrasse 1 is the main Islamic Center of Munich, established in 1973, with Friday prayers in Arabic and German and weekend Arabic school.",
      "Mosque Al-Ummah offers German and Arabic services, Quran and Arabic classes, and Friday sermons in both languages.",
      "Alahibba Mosque offers children's Quran programs, Arabic lessons, women's groups, mothers' cafes, and youth activities.",
      "DITIB Mehmet Akif Moschee, Masjid Al-Salam, and Muenchner Forum fuer Islam also provide family-friendly Muslim community spaces.",
    ],
    links: [
      {
        label: "Islamic Center Munich",
        url: "https://www.islamisches-zentrum-muenchen.de/",
      },
      { label: "Mosque Al-Ummah", url: "https://moschee-al-ummah.de/en/home-en/" },
      { label: "Alahibba Mosque", url: "https://www.alahibba.de/en/home/" },
      { label: "JoinHalal mosque listing", url: "https://joinhalal.com/en/mosques/Islamic-Center-Munich-6500/" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Community and identity",
    title: "You will not arrive alone.",
    intro:
      "Germany is home to over 1.28 million Syrians, the largest Syrian diaspora outside the Middle East, and Munich has active Arab and Muslim support networks.",
    image: mediaImages.eidMunichCityHall,
    points: [
      "Search Arabic Facebook groups such as Syrians in Munich for housing tips, job offers, and local meetups.",
      "Caritas Muenchen, AWO, the Munich Refugee Council, and the Integreat Munich App can support housing, schooling, paperwork, and social services.",
      "Arabic weekend schools, Arabic TV and streaming, Syrian cooking, mosque events, international festivals, and St. Mary's Syriac Orthodox Church can help preserve identity.",
      "The goal is integration without assimilation: learn German and participate in society while keeping Arabic, faith, and Syrian traditions alive for children.",
    ],
    links: [
      { label: "Caritas Muenchen", url: "https://www.caritas-muenchen.de" },
      { label: "Munich Refugee Council", url: "https://muenchner-fluechtlingsrat.de" },
      { label: "Integreat Munich", url: "https://integreat.app/muenchen/en/" },
      { label: "St. Mary's Syriac Orthodox Church", url: "https://syriacorthodoxchurchmunich.de" },
    ],
    variant: "syria",
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
