import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.accommodation;

const monthlyCosts = [
  ["Rent, 3-bed city center", "EUR 2,800-3,500", "Cold rent, utilities not included"],
  ["Rent, 3-bed outer districts", "EUR 2,000-2,800", "Better value, well connected by transit"],
  ["Utilities", "EUR 400-500", "Heating, water, electricity"],
  ["Food and groceries", "EUR 700-1,000", "Higher for a 5-person household"],
  ["Public transport", "EUR 200-320", "MVV monthly passes; children ride free"],
  ["Internet and phones", "EUR 80-120", "Broadband plus two adult lines"],
  ["School supplies", "EUR 80-200", "Public school is free"],
  ["Clothing and personal care", "EUR 150-300", "Estimate for the full family"],
];

const rentRanges = [
  ["2-bedroom, 60-75 m2", "EUR 2,000-2,500", "EUR 1,500-2,000"],
  ["3-bedroom, 80-100 m2", "EUR 2,800-3,500", "EUR 2,000-2,800"],
  ["4-bedroom, 100-120 m2", "EUR 3,500-4,500", "EUR 2,500-3,500"],
];

const neighborhoods = [
  ["Neuhausen-Nymphenburg", "Nymphenburg Palace park, excellent schools, quiet streets, expat community, mid-range rent."],
  ["Giesing / Berg am Laim", "Working-class areas with Arab and Turkish communities, halal shops nearby, and strong value for larger families."],
  ["Sendling / Westpark", "Family-friendly, large Westpark, international festivals, DITIB mosque, and lower rents than the center."],
  ["Bogenhausen", "Upscale and calm, strong schools, green parks, higher rent, spacious apartments."],
  ["Trudering-Riem", "Outer eastern district with some of Munich's cheapest rents, Arab community, and S-Bahn links."],
  ["Schwabing", "Green neighborhood with parks, schools, international families, and mid-to-high rent."],
];

const sections = [
  {
    eyebrow: "Monthly budget",
    title: "Munich is expensive, so families need realistic numbers.",
    intro:
      "Munich is Germany's most expensive city. A family of 4-5 should usually plan for EUR 6,500-8,000 per month including rent.",
    image: mediaImages.challengeFinance,
    points: [
      "Buergergeld, Kindergeld, and housing allowances can cover a significant portion for eligible families.",
      "Kindergeld is EUR 255 per child per month in 2026.",
      "Always separate cold rent from warm rent when estimating monthly costs.",
    ],
    table: { headers: ["Expense", "Monthly cost", "Notes"], rows: monthlyCosts },
    links: [
      { label: "Numbeo Munich costs", url: "https://www.numbeo.com/cost-of-living/in/Munich" },
      { label: "Relocate.me Munich", url: "https://relocate.me/cost-of-living/germany/munich" },
      {
        label: "TUM living costs",
        url: "https://www.gs.tum.de/en/gs/welcome-office/living-in-the-munich-metropolitan-region/cost-of-living/",
      },
    ],
    variant: "germany",
  },
  {
    eyebrow: "Rent ranges",
    title: "Most family apartments are empty and expensive.",
    intro:
      "A family of 4-5 usually needs at least a 3-bedroom, 80-100 m2 apartment. Budget EUR 2,000-4,000 separately for furniture and appliances on arrival.",
    image: mediaImages.accommodation,
    points: [
      "Most German apartments are rented without a kitchen, fridge, washing machine, or built-in wardrobes.",
      "Cold rent, or Kaltmiete, does not include heating and utilities.",
      "Always ask for warm rent, or Warmmiete, before comparing apartments.",
    ],
    table: { headers: ["Apartment type", "City center / inner", "Outer districts / suburbs"], rows: rentRanges },
    links: [{ label: "Mr. Lodge price guide", url: "https://www.mrlodge.com/real-estate-prices-munich" }],
    variant: "syria",
  },
  {
    eyebrow: "Apartment search",
    title: "Search broadly and prioritize transport over the center.",
    intro:
      "Families should compare major rental platforms, furnished options for the first months, and outer districts with reliable public transport.",
    image: mediaImages.challengeHousing,
    points: [
      "ImmobilienScout24 is Germany's most popular rental platform.",
      "Immowelt has a large database with family-size filters.",
      "eBay Kleinanzeigen can have private landlord listings that are sometimes cheaper.",
      "Mr. Lodge and HousingAnywhere are useful for furnished and expat-friendly first-month options.",
    ],
    links: [
      { label: "ImmobilienScout24 Munich", url: "https://www.immobilienscout24.de/Suche/de/bayern/muenchen/wohnung-mieten" },
      { label: "Immowelt Munich", url: "https://www.immowelt.de/suche/muenchen/wohnungen/mieten" },
      { label: "Kleinanzeigen Munich", url: "https://www.kleinanzeigen.de/s-muenchen/wohnung-mieten/k0l6411" },
      { label: "Mr. Lodge", url: "https://www.mrlodge.com" },
      { label: "HousingAnywhere", url: "https://housinganywhere.com/Munich--Germany" },
      { label: "WG-Gesucht", url: "https://www.wg-gesucht.de" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Neighborhoods",
    title: "Outer districts can be the smartest family choice.",
    intro:
      "For families on Buergergeld, Berg am Laim, Giesing, Trudering, and Sendling are practical because they combine stronger affordability, public transport, and Arab or Muslim community access.",
    image: mediaImages.whyMunich,
    points: neighborhoods.map(([name, text]) => `${name}: ${text}`),
    links: [],
    variant: "germany",
  },
  {
    eyebrow: "First arrival",
    title: "Temporary housing depends on the arrival pathway.",
    intro:
      "Families arriving through asylum or protection follow a different process from families arriving through visas or family reunification.",
    image: mediaImages.journey,
    points: [
      "Asylum pathway: Arrival Centre at Maria-Probst-Str. 14, then Initial Reception Centre at Garmischer Strasse 2-12.",
      "Families may move into collective accommodation while cases are processed, and later into private apartments after protection status.",
      "Visa or family reunification arrivals can use furnished apartments through Mr. Lodge, Wunderflats, or HousingAnywhere.",
      "Airbnb or short-stay housing may cost EUR 80-150 per night for a family-sized unit, useful only for the first 1-2 weeks.",
    ],
    links: [
      { label: "Munich asylum arrival guide", url: "https://stadt.muenchen.de/service/en-GB/info/erstaufnahmeeinrichtung/10428406/" },
      { label: "Munich Refugee Council", url: "https://muenchner-fluechtlingsrat.de" },
      { label: "Integreat Munich", url: "https://integreat.app/muenchen/en/" },
      { label: "Wunderflats Munich", url: "https://www.wunderflats.com/en/furnished-apartments/munich" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Furniture",
    title: "Plan for an empty apartment.",
    intro:
      "Second-hand options can dramatically reduce the EUR 2,000-4,000 setup cost for kitchens, appliances, beds, wardrobes, and household basics.",
    image: mediaImages.accommodation,
    points: [
      "IKEA Munich has Eching and Brunnthal locations and is useful for affordable new flat-pack furniture.",
      "Poco Domaene is one of Germany's cheapest furniture chains for basic items.",
      "Caritas and Diakonie charity shops may offer cheap or free furniture for refugee families with a referral.",
      "eBay Kleinanzeigen is especially useful for free items marked 'zu verschenken'. Facebook Marketplace can also help Arabic-speaking families find local sellers.",
    ],
    links: [
      { label: "Kleinanzeigen furniture", url: "https://www.kleinanzeigen.de/s-muenchen/moebel/k0l6411" },
      { label: "IKEA Munich Eching", url: "https://www.ikea.com/de/de/stores/munchen-eching/" },
      { label: "Poco Munich", url: "https://www.poco.de/stores/muenchen" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Financial support",
    title: "Know Buergergeld, Kindergeld, Kinderzuschlag, and Wohngeld.",
    intro:
      "Financial support can be essential in Munich, especially for families with children and high housing costs.",
    image: mediaImages.challengeFinance,
    points: [
      "Buergergeld can cover monthly cash allowance, reasonable rent and utilities, health insurance, and school-related costs for eligible families.",
      "Germany is reforming Buergergeld with stricter rules, so families should attend all Jobcenter meetings or call ahead if they cannot attend.",
      "Kindergeld is not means-tested and pays EUR 255 per child per month in 2026.",
      "Kinderzuschlag can add up to EUR 292 per child per month for low-income families, and Wohngeld can help with housing costs.",
    ],
    links: [
      { label: "Buergergeld", url: "https://www.arbeitsagentur.de/en/unemployment-benefits-ii-buergergeld" },
      { label: "BMAS basic income", url: "https://www.bmas.de/EN/Social-Security/Basic-Income-Support/basic-income-support.html" },
      { label: "Kindergeld application", url: "https://www.arbeitsagentur.de/en/child-benefit" },
      { label: "Family portal Kindergeld", url: "https://familienportal.de/familienportal/rechte-finanzen/kindergeld" },
      { label: "Munich Wohngeld", url: "https://www.muenchen.de/rathaus/Stadtverwaltung/Sozialreferat/Wohnungsamt/Wohngeld.html" },
    ],
    variant: "germany",
  },
];

export default function Accommodation() {
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
          {section.table && <DataTable table={section.table} />}
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

function DataTable({ table }) {
  return (
    <div className="mt-7 overflow-hidden rounded-lg border border-charcoal/10 bg-white/88 shadow-soft dark:border-white/10 dark:bg-white/8">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-charcoal/10 bg-linen px-4 py-3 font-black text-charcoal dark:border-white/10 dark:bg-white/8 dark:text-linen"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("-")} className="transition hover:bg-linen/70 dark:hover:bg-white/6">
                {row.map((cell) => (
                  <td
                    key={cell}
                    className="border-b border-charcoal/8 px-4 py-3 font-semibold text-ink/68 dark:border-white/8 dark:text-cream/68"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
