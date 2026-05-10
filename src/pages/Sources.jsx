import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ResourceCard from "../components/ResourceCard";
import CallToActionBanner from "../components/CallToActionBanner";
import IdentityDivider from "../components/IdentityDivider";
import Icon from "../components/Icon";
import { sourceLibrary, sourcesPage } from "../data/placeholderData";

export default function Sources() {
  const courseInfo = sourcesPage.courseInfo;
  const team = sourcesPage.team;
  const sources = sourceLibrary;

  const categorizedSources = sources.reduce((acc, source) => {
    const category = source.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(source);
    return acc;
  }, {});

  return (
    <>
      <PageHero hero={sourcesPage.hero} />
      <IdentityDivider variant="bridge" subtle />

      {/* Course Information Section */}
      <section className="border-b border-charcoal/10 bg-linen/40 py-16 dark:border-white/10 dark:bg-[#191715]">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-redwood dark:text-gold">
              Academic context
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold text-charcoal dark:text-linen sm:text-5xl">
              Project Information
            </h2>
            <div className="mt-10 space-y-4 rounded-lg border border-charcoal/10 bg-white/84 p-8 shadow-soft dark:border-white/10 dark:bg-white/8">
              <div>
                <p className="text-sm font-bold text-emeraldDeep dark:text-gold">Department</p>
                <p className="mt-1 text-lg text-ink/78 dark:text-cream/78">{courseInfo.department}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-emeraldDeep dark:text-gold">University</p>
                <p className="mt-1 text-lg text-ink/78 dark:text-cream/78">{courseInfo.university}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-emeraldDeep dark:text-gold">Course</p>
                <p className="mt-1 text-lg text-ink/78 dark:text-cream/78">{courseInfo.course}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-emeraldDeep dark:text-gold">Instructor</p>
                <p className="mt-1 text-lg text-ink/78 dark:text-cream/78">{courseInfo.instructor}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-emeraldDeep dark:text-gold">Date</p>
                <p className="mt-1 text-lg text-ink/78 dark:text-cream/78">{courseInfo.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IdentityDivider variant="syria" subtle />

      {/* Team Section */}
      <section className="border-b border-charcoal/10 py-16 dark:border-white/10">
        <div className="section-shell">
          <SectionHeader
            label={sourcesPage.teamSection.label}
            title={sourcesPage.teamSection.title}
            intro={sourcesPage.teamSection.intro}
            align="left"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-charcoal/10 bg-white/84 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emeraldDeep/10 text-emeraldDeep dark:bg-gold/12 dark:text-gold">
                  <Icon name="Users" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-charcoal dark:text-linen">{member.name}</h3>
                <p className="mt-2 text-sm font-bold text-emeraldDeep dark:text-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IdentityDivider variant="germany" subtle />

      {/* Sources Section */}
      <section className="bg-linen/40 py-16 dark:bg-[#191715]">
        <div className="section-shell">
          <SectionHeader
            label={sourcesPage.sourcesSection.label}
            title={sourcesPage.sourcesSection.title}
            intro={sourcesPage.sourcesSection.intro}
            align="left"
          />

          {/* Sources by Category */}
          <div className="mt-12 space-y-12">
            {Object.entries(categorizedSources).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-6 text-2xl font-black text-charcoal dark:text-linen">{category}</h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((source) => (
                    <ResourceCard key={source.title} resource={source} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IdentityDivider variant="bridge" />
      <CallToActionBanner cta={sourcesPage.cta} />
    </>
  );
}
