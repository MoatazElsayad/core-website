import { ExternalLink } from "lucide-react";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { guidePages, mediaImages } from "../data/placeholderData";

const page = guidePages.familyIntegration;

const sections = [
  {
    eyebrow: "Family journey",
    title: "Every family member adapts at a different pace.",
    intro:
      "Building a stable life in Munich is a journey that happens one step at a time.",
    image: mediaImages.familyCounselingSupport,
    points: [
      "Settling in includes everything from finding work and learning the language to children's schooling.",
      "Every family member adapts differently, so the family does not have to manage everything at once.",
      "Support is available throughout the process, and step-by-step routines can make the transition feel more stable.",
    ],
    links: [],
    variant: "bridge",
  },
  {
    eyebrow: "Work and career",
    title: "Previous experience from Syria is still valuable.",
    intro:
      "Families can rebuild careers in Munich with support, planning, and recognition of existing skills.",
    image: mediaImages.challengeWork,
    points: [
      "Work and Career Support: The Jobcenter in Munich can help with job searches and financial assistance.",
      "Previous work experience from Syria is a valuable asset in the German market.",
      "The International Job Market: Munich is an international hub where many companies are eager to hire people with diverse backgrounds.",
      "Networking is important. Career fairs for internationals and professional groups can help families find opportunities that are not always listed online.",
      "Munich's economy is strong, with high demand for skilled professionals in healthcare, education, and technology.",
    ],
    links: [{ label: "Jobcenter Munich", url: "https://jobcenter-muenchen.de/" }],
    variant: "germany",
  },
  {
    eyebrow: "Qualifications",
    title: "You do not have to start from zero.",
    intro:
      "Syrian education and professional certificates can be officially reviewed to match skills with suitable jobs.",
    image: mediaImages.qualificationRecognition,
    points: [
      "Recognition of Qualifications: Previous education and professional certificates from Syria can be reviewed in Germany.",
      "This process helps match existing skills to suitable jobs instead of forcing families to start again from nothing.",
      "Families should keep certificates, translations, CV notes, and professional records organized for this pathway.",
    ],
    links: [
      {
        label: "Recognition in Germany",
        url: "https://www.anerkennung-in-deutschland.de/",
      },
    ],
    variant: "syria",
  },
  {
    eyebrow: "Language and community",
    title: "German opens daily life, while community keeps support close.",
    intro:
      "Learning German is the best way to navigate daily life with confidence.",
    image: mediaImages.familyIntegration,
    points: [
      "Families can join official integration courses or study at the Goethe-Institut.",
      "German helps with appointments, school communication, housing, transport, and work.",
      "While learning, local Syrian and Arab communities can help families feel supported.",
    ],
    links: [
      {
        label: "BAMF integration courses",
        url: "https://www.bamf.de/EN/Themen/Integration/integration-node.html",
      },
      { label: "Goethe-Institut", url: "https://www.goethe.de/" },
    ],
    variant: "bridge",
  },
  {
    eyebrow: "Rights and inclusion",
    title: "Your identity is protected by law.",
    intro:
      "In Germany, identity is protected by law.",
    image: mediaImages.challengeDiscrimination,
    points: [
      "Workplace Inclusion: Families have the right to practice religion and express themselves freely.",
      "Religious expression and cultural identity should not be treated as barriers to belonging.",
      "If anyone faces discrimination, professional support is available to protect their rights.",
    ],
    links: [
      {
        label: "Anti-Discrimination Office",
        url: "https://www.antidiskriminierungsstelle.de/EN",
      },
    ],
    variant: "germany",
  },
  {
    eyebrow: "Children and education",
    title: "School can become a bridge into belonging.",
    intro:
      "Education in Munich is designed to be inclusive.",
    image: mediaImages.diverseSchoolChildren,
    points: [
      "Children can attend free public schools in Munich.",
      "If children are new to German, they may be placed in transition classes, or Ubergangsklassen, for intensive German support.",
      "Beyond academics, schools encourage social integration through sports and after-school clubs, known as AGs.",
      "These activities help children make local friends while remaining proud of their Syrian roots.",
    ],
    links: [
      { label: "Munich school system", url: "https://www.muenchen.de/en/living/schools" },
    ],
    variant: "syria",
  },
  {
    eyebrow: "University and higher education",
    title: "Higher education can become a gateway to the future.",
    intro:
      "Munich is home to world-class universities like LMU and TUM.",
    image: mediaImages.munichUniversityStudents,
    points: [
      "For Syrian students, there are specific advisors and programs that can help with the transition into the German university system.",
      "Scholarship opportunities and language preparation can support this path.",
      "Higher education in Munich can become a powerful gateway to a successful professional future.",
    ],
    links: [
      { label: "LMU Munich", url: "https://www.uni-muenchen.de/en/" },
    ],
    variant: "bridge",
  },
];

export default function FamilyIntegration() {
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
