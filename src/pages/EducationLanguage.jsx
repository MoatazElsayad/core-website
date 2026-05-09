import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.educationLanguage;

const sections = [
  {
    eyebrow: "School enrollment",
    title: "Starting school begins with a clear document path.",
    intro:
      "Starting school in a new country involves administrative steps designed to help each child find the right place.",
    image: mediaImages.diverseSchoolChildren,
    points: [
      "The Enrollment Process: Families typically need a registration certificate, or Meldebescheinigung, proof of identity such as passport or ID, and previous Syrian school records.",
      "Health and Safety: A mandatory health examination, called Schuleingangsuntersuchung, and proof of measles vaccination are required before a child can start classes.",
      "Placement Assistance: Schools may use brief language assessments to decide the right level of German support for children who do not yet speak German.",
      "Early Social Learning: For younger children, the Kita-Finder platform is the central tool for finding local daycare and preschool centers.",
    ],
    links: [
      {
        label: "School enrollment information",
        url: "https://stadt.muenchen.de/dam/Home/Stadtverwaltung/Referat-fuer-Bildung-und-Sport/schule/schuleinschreibung/grundschulen_infoblaetter_sprache/infoblatt_anmeldung_gs_englisch.pdf",
      },
      { label: "Munich Kita-Finder", url: "https://kitafinder.muenchen.de/elternportal/en/" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Youth and adults",
    title: "Learning can continue at any age.",
    intro:
      "Munich offers several pathways for young people and adults who want to continue education or enter the workforce.",
    image: mediaImages.munichUniversityStudents,
    points: [
      "Vocational Training, or Ausbildung: Germany's dual system lets students learn a trade in a company while attending school part-time.",
      "Ausbildung can be a practical way to earn a salary while gaining a professional qualification.",
      "Second-Chance Education: Adults can obtain school-leaving certificates such as the Realschulabschluss or Abitur through evening classes or specialized colleges, regardless of age.",
      "University Support: The LMU Preparatory Program and TUM provide specialized counseling and German courses for students with a refugee background.",
      "Scholarships: Beyond state support such as BAfoG, the DAAD and foundations offer scholarships for international students to help cover living costs.",
    ],
    links: [],
    variant: "germany",
  },
  {
    eyebrow: "Parents learning German",
    title: "Parents need flexible, low-cost ways to build German confidence.",
    intro:
      "Beyond formal classroom settings, Munich offers flexible and low-cost options for parents to improve German skills.",
    image: mediaImages.bellevueLanguageCafe,
    points: [
      "Volkshochschule, or vhs: Munich's adult education center offers affordable language courses at different times, including evenings and weekends.",
      "Language Cafes, or Sprachcafes: Community centers such as Bellevue di Monaco host informal meetups where parents can practice German with locals in a relaxed social setting.",
      "Mothers' Groups: Programs like Mama lernt Deutsch offer free German courses specifically for women, often including childcare so mothers can focus on learning.",
      "Academic Support: ArrivalAid and SDI Munich offer targeted intensive courses for study preparation.",
    ],
    links: [
      {
        label: "Free and low-cost German courses",
        url: "https://integreat.app/lkmuenchen/en/learn-german/free-german-courses",
      },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "School counseling",
    title: "Families do not have to understand the school system alone.",
    intro:
      "Many schools in Munich have dedicated social workers and international counseling services to help families understand documents, expectations, and next steps.",
    image: mediaImages.educationLanguage,
    points: [
      "School social workers, or Schulsozialarbeiter, can help families communicate with schools and understand support options.",
      "International counseling services can help parents understand complex school documents and expectations.",
      "This support can make the transition less confusing for both children and parents.",
    ],
    links: [
      {
        label: "International school counseling",
        url: "https://stadt.muenchen.de/service/en-GB/info/padagogisches-institut-bildungsberatung-international/10428203/",
      },
    ],
    variant: "syria",
  },
];

export default function EducationLanguage() {
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
        backgroundImage: `linear-gradient(110deg, rgba(23, 22, 21, 0.78), rgba(23, 22, 21, 0.5)), url(${page.image.src})`,
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
