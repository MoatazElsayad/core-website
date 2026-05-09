import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.healthSafety;

const clinicRows = [
  ["Refudocs Munich", "Primary care for refugees", "+49 89 233-96833", "https://refudocs.org/"],
  ["Elisenhof Urgent Care", "After-hours and weekends", "+49 89 116 117", "https://www.bereitschaftspraxen.bayern/muenchen-elisenhof/"],
  ["LMU Hauner Children's", "Pediatric specialists", "+49 89 44005-2811", "https://www.lmu-klinikum.de/kinderklinik"],
  ["Klinik Schwabing", "General and children's ER", "+49 89 3068-0", "https://www.muenchen-klinik.de/krankenhaus/schwabing/"],
  ["Red Cross Clinic", "General health and surgery", "+49 89 1303-0", "https://rotkreuzklinikum-muenchen.de/"],
];

const mentalHealthRows = [
  ["Refugio Muenchen", "Counseling for refugees and survivors of conflict", "+49 89 9829000", "https://www.refugio-muenchen.de/en/"],
  ["ArrivalAid Munich", "Psychosocial First Aid and relocation stress support", "+49 89 55871688", "https://arrivalaid.org/crisis-counseling"],
  ["Ipso Care", "Arabic/English video-based counseling", "Online", "https://ipsocontext.org/online-counseling/"],
  ["Crisis Center Atriumhaus", "Immediate psychological crisis support", "+49 89 7678-0", "https://www.muenchen-klinik.de/krankenhaus/zentrum-fuer-psychiatrie-und-psychotherapie/"],
];

const sections = [
  {
    eyebrow: "Insurance card",
    title: "Your health card is your passport to care.",
    intro:
      "The insurance card, or a paper treatment certificate, gives families access to the German medical system.",
    image: mediaImages.healthSafety,
    points: [
      "New arrivals can visit the Amt fuer Wohnen und Migration at Werinherstrasse 89, 81541 Munich.",
      "Depending on status, families may receive a paper treatment certificate, called Behandlungsschein, or a plastic health card.",
      "Always carry the card and give it to the receptionist, or Empfang, when entering a clinic.",
      "Essential medical care is usually free at the point of service, so families do not normally pay the doctor directly.",
    ],
    links: [{ label: "Munich health benefits info", url: "https://integreat.app/muenchen/en/livelihood/health-care" }],
    variant: "bridge",
  },
  {
    eyebrow: "Clinics",
    title: "Know the clinics before you need them.",
    intro:
      "These Munich centers are useful for international families, refugee healthcare, urgent care, children, and general treatment.",
    image: mediaImages.challengeHealthcare,
    table: { headers: ["Clinic", "Specialization", "Phone", "Website"], rows: clinicRows },
    points: [
      "Refudocs Munich provides primary care for refugees and is close to Munich Central Station.",
      "Elisenhof urgent care is useful after hours and on weekends.",
      "Children can be supported through LMU Hauner Children's Hospital and Klinik Schwabing.",
    ],
    links: [],
    variant: "germany",
  },
  {
    eyebrow: "Emergency numbers",
    title: "Save these numbers immediately.",
    intro:
      "Emergency numbers are free to call and should be saved in every parent's phone.",
    image: mediaImages.challengeHealthcare,
    points: [
      "Medical emergency and fire: call 112 for life-threatening situations such as accidents, heart attacks, or severe breathing problems.",
      "Police: call 110 if you feel unsafe or need immediate police help.",
      "On-call doctor: call 116 117 when regular doctors are closed, but the situation is not life-threatening.",
    ],
    links: [
      { label: "Munich emergency numbers", url: "https://stadt.muenchen.de/infos/notruf.html" },
      { label: "116117 doctor search", url: "https://www.116117.de/de/index.php" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Mental health",
    title: "Emotional support is part of health.",
    intro:
      "Starting a new life is a major transition. Confidential trauma and counseling support is available in Munich and online.",
    image: mediaImages.challengeMentalHealth,
    table: { headers: ["Support", "Focus", "Phone", "Website"], rows: mentalHealthRows },
    points: [
      "Refugio Muenchen supports refugees and survivors of conflict.",
      "ArrivalAid helps families navigate emotional stress during relocation.",
      "Ipso Care offers Arabic and English online counseling.",
      "Atriumhaus is for immediate psychological crises in Munich.",
    ],
    links: [],
    variant: "bridge",
  },
  {
    eyebrow: "Arabic-speaking support",
    title: "Language can make healthcare less frightening.",
    intro:
      "Finding a doctor or support point that can communicate in Arabic can make appointments clearer and safer.",
    image: mediaImages.familyCounselingSupport,
    points: [
      "Arab Med Munich focuses on medical care for the Arabic-speaking community, including internal medicine and general health.",
      "Refudocs Munich often has translators or Arabic-speaking staff on-site.",
      "The KVB doctor search can help families look for private doctors, pediatricians, dentists, and other specialists who speak Arabic.",
    ],
    links: [
      { label: "Arab Med Munich", url: "https://arabmed.de/" },
      { label: "Refudocs Munich", url: "https://refudocs.org/" },
      { label: "KVB doctor search", url: "https://www.kvb.de/service/patienten/arztsuche/" },
    ],
    variant: "germany",
  },
];

export default function HealthSafety() {
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
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className="border-b border-charcoal/8 px-4 py-3 font-semibold text-ink/68 dark:border-white/8 dark:text-cream/68"
                  >
                    {index === row.length - 1 && String(cell).startsWith("http") ? (
                      <a href={cell} target="_blank" rel="noreferrer" className="font-black text-emeraldDeep hover:text-redwood dark:text-gold">
                        Open
                      </a>
                    ) : (
                      cell
                    )}
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
