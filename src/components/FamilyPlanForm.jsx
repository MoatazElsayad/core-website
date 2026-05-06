import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { familyPlanData } from "../data/placeholderData";

const { initialForm } = familyPlanData;

export default function FamilyPlanForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [plan, setPlan] = useState(null);

  const hasChildren = Number(form.childrenCount) > 0;
  const progressPercent = ((step + 1) / familyPlanData.wizardSteps.length) * 100;
  const stepDescription = familyPlanData.stepDescriptions[step];

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function toggleCulturalNeed(need) {
    setForm((current) => {
      const exists = current.culturalNeeds.includes(need);
      return {
        ...current,
        culturalNeeds: exists
          ? current.culturalNeeds.filter((item) => item !== need)
          : [...current.culturalNeeds, need],
      };
    });
  }

  function goNext() {
    setStep((current) => Math.min(current + 1, familyPlanData.wizardSteps.length - 1));
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function generatePlan() {
    const generatedPlan = buildFamilyPlan(form);
    setPlan(generatedPlan);
    setStep(4);
  }

  function startOver() {
    setForm(initialForm);
    setPlan(null);
    setStep(0);
  }

  return (
    <section id="plan" className="section-offset bg-charcoal py-20 text-linen">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-gold">
              Interactive consultant tool
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Personalized Family Plan
            </h2>
            <p className="mt-4 text-base leading-8 text-cream/72">
              A multi-step planning wizard that turns placeholder answers into a
              warm, consultant-style relocation report. Everything runs in React
              state only.
            </p>

            <div className="mt-8 rounded-lg border border-white/12 bg-white/8 p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold text-charcoal">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">
                    Step {step + 1} of {familyPlanData.wizardSteps.length}
                  </p>
                  <p className="font-bold text-cream">{stepDescription}</p>
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emeraldDeep via-gold to-redwood transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="mt-5 grid gap-2">
                {familyPlanData.wizardSteps.map((label, index) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => {
                      if (index < 4 || plan) setStep(index);
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-bold transition ${
                      index === step
                        ? "bg-linen text-charcoal"
                        : "bg-white/6 text-cream/72 hover:bg-white/10"
                    } ${index === 4 && !plan ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs ${
                        index === step ? "bg-charcoal text-gold" : "bg-white/10 text-cream"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/8 p-5 shadow-consultant sm:p-6">
            {step < 4 ? (
              <WizardForm
                step={step}
                form={form}
                hasChildren={hasChildren}
                onChange={updateField}
                onToggleNeed={toggleCulturalNeed}
              />
            ) : (
              <ReportCard plan={plan} form={form} onStartOver={startOver} />
            )}

            {step < 4 && (
              <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/8 px-5 py-3 text-sm font-black text-cream transition hover:bg-white/12 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                {step === 3 ? (
                  <button
                    type="button"
                    onClick={generatePlan}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Generate Plan
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51]"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WizardForm({ step, form, hasChildren, onChange, onToggleNeed }) {
  if (step === 0) {
    return (
      <StepPanel title="Family Basics" eyebrow="Route and timing">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Current location">
            <select name="location" value={form.location} onChange={onChange} className="field">
              <option>Syria</option>
              <option>Egypt</option>
            </select>
          </Field>
          <Field label="Destination">
            <input name="destination" value={form.destination} readOnly className="field cursor-not-allowed opacity-90" />
          </Field>
          <Field label="Family size">
            <input name="familySize" value={form.familySize} onChange={onChange} className="field" inputMode="numeric" />
          </Field>
          <Field label="Expected travel stage">
            <select name="travelStage" value={form.travelStage} onChange={onChange} className="field">
              {familyPlanData.travelStages.map((stage) => (
                <option key={stage}>{stage}</option>
              ))}
            </select>
          </Field>
        </div>
      </StepPanel>
    );
  }

  if (step === 1) {
    return (
      <StepPanel title="Parents" eyebrow="Work, language, and daily confidence">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Father's profession">
            <input
              name="fatherProfession"
              value={form.fatherProfession}
              onChange={onChange}
              placeholder="Example: engineer, driver, teacher"
              className="field"
            />
          </Field>
          <Field label="Father's German level">
            <select name="fatherGermanLevel" value={form.fatherGermanLevel} onChange={onChange} className="field">
              {familyPlanData.germanLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </Field>
          <Field label="Mother's profession or interests">
            <input
              name="motherProfession"
              value={form.motherProfession}
              onChange={onChange}
              placeholder="Example: teacher, sewing, childcare"
              className="field"
            />
          </Field>
          <Field label="Mother's German level">
            <select name="motherGermanLevel" value={form.motherGermanLevel} onChange={onChange} className="field">
              {familyPlanData.germanLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </Field>
          <Field label="Mother's preferred first step" wide>
            <select name="motherPriority" value={form.motherPriority} onChange={onChange} className="field">
              {familyPlanData.motherPriorities.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>
      </StepPanel>
    );
  }

  if (step === 2) {
    return (
      <StepPanel title="Children" eyebrow="School and adaptation">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Number of children">
            <input name="childrenCount" value={form.childrenCount} onChange={onChange} className="field" inputMode="numeric" />
          </Field>
          <Field label="Age range">
            <select name="childAgeRange" value={form.childAgeRange} onChange={onChange} className="field" disabled={!hasChildren}>
              {familyPlanData.childAgeRanges.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </Field>
          <Field label="School concern level">
            <select name="schoolConcernLevel" value={form.schoolConcernLevel} onChange={onChange} className="field" disabled={!hasChildren}>
              {familyPlanData.concernLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </Field>
          <Field label="German level of children">
            <select name="childrenGermanLevel" value={form.childrenGermanLevel} onChange={onChange} className="field" disabled={!hasChildren}>
              {familyPlanData.germanLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </Field>
        </div>
        {!hasChildren && (
          <p className="mt-5 rounded-lg border border-gold/25 bg-gold/10 p-4 text-sm leading-7 text-cream/80">
            {familyPlanData.reportTemplates.noChildrenNote}
          </p>
        )}
      </StepPanel>
    );
  }

  return (
    <StepPanel title="Needs and Concerns" eyebrow="Priorities for the consultant report">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Budget range">
          <select name="budgetRange" value={form.budgetRange} onChange={onChange} className="field">
            {familyPlanData.budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
        <Field label="Housing concern level">
          <select name="housingConcernLevel" value={form.housingConcernLevel} onChange={onChange} className="field">
            {familyPlanData.concernLevels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </Field>
        <Field label="Religious/cultural needs" wide>
          <div className="grid gap-3 sm:grid-cols-2">
            {familyPlanData.culturalNeeds.map((need) => (
              <label
                key={need}
                className="flex items-center gap-3 rounded-lg border border-white/12 bg-linen px-4 py-3 text-sm font-bold text-charcoal"
              >
                <input
                  type="checkbox"
                  checked={form.culturalNeeds.includes(need)}
                  onChange={() => onToggleNeed(need)}
                  className="h-4 w-4 accent-emeraldDeep"
                />
                {need}
              </label>
            ))}
          </div>
        </Field>
        <Field label="Main concern" wide>
          <select name="mainConcern" value={form.mainConcern} onChange={onChange} className="field">
            {familyPlanData.mainConcerns.map((concern) => (
              <option key={concern}>{concern}</option>
            ))}
          </select>
        </Field>
      </div>
    </StepPanel>
  );
}

function StepPanel({ eyebrow, title, children }) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-3xl font-bold text-linen">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({ label, children, wide = false }) {
  return (
    <label className={`space-y-2 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-bold text-cream">{label}</span>
      {children}
    </label>
  );
}

function buildFamilyPlan(form) {
  const { reportTemplates } = familyPlanData;
  const { rules } = reportTemplates;
  const hasChildren = Number(form.childrenCount) > 0;
  const parentBeginner =
    form.fatherGermanLevel === "Beginner" || form.motherGermanLevel === "Beginner";
  const childrenBeginner = hasChildren && form.childrenGermanLevel === "Beginner";
  const lowBudget = form.budgetRange === "Low / needs careful support";
  const highHousingConcern = form.housingConcernLevel === "High";
  const hijabConcern = form.culturalNeeds.includes("Hijab-friendly workplace concern");
  const motherStudiesFirst = form.motherPriority === "Study German first";
  const regulatedProfession = isRegulatedProfession(form.fatherProfession);

  const urgent = [];
  const important = [];
  const helpful = [...reportTemplates.defaultPriorities.helpful];
  const beforeArrival = [...reportTemplates.checklists.beforeArrival];
  const firstWeek = [...reportTemplates.checklists.firstWeek];
  const firstMonth = [...reportTemplates.checklists.firstMonth];
  const recommendedSections = new Set(familyPlanData.concernPages[form.mainConcern] || []);

  if (form.location === "Syria") {
    urgent.push(rules.syriaLocation.urgent);
    beforeArrival.push(rules.syriaLocation.beforeArrival);
    recommendedSections.add(rules.syriaLocation.section);
  }

  if (form.location === "Egypt") {
    important.push(rules.egyptLocation.important);
    beforeArrival.push(rules.egyptLocation.beforeArrival);
    recommendedSections.add(rules.egyptLocation.section);
  }

  if (parentBeginner || childrenBeginner) {
    urgent.push(rules.beginnerGerman.urgent);
    firstMonth.push(rules.beginnerGerman.firstMonth);
    recommendedSections.add(rules.beginnerGerman.section);
  }

  if (hasChildren) {
    urgent.push(rules.children.urgent);
    firstWeek.push(rules.children.firstWeek);
    firstMonth.push(rules.children.firstMonth);
    rules.children.sections.forEach((section) => recommendedSections.add(section));
  }

  if (hijabConcern) {
    important.push(rules.hijabConcern.important);
    recommendedSections.add(rules.hijabConcern.section);
  }

  if (lowBudget) {
    urgent.push(rules.lowBudget.urgent);
    beforeArrival.push(rules.lowBudget.beforeArrival);
    recommendedSections.add(rules.lowBudget.section);
  }

  if (highHousingConcern) {
    urgent.push(rules.highHousingConcern.urgent);
    firstWeek.push(rules.highHousingConcern.firstWeek);
    recommendedSections.add(rules.highHousingConcern.section);
  }

  if (motherStudiesFirst) {
    important.push(rules.motherStudiesFirst.important);
    firstMonth.push(rules.motherStudiesFirst.firstMonth);
    recommendedSections.add(rules.motherStudiesFirst.section);
  }

  if (regulatedProfession) {
    important.push(rules.regulatedProfession.important);
    firstMonth.push(rules.regulatedProfession.firstMonth);
    recommendedSections.add(rules.regulatedProfession.section);
  }

  if (form.schoolConcernLevel === "High" && hasChildren) {
    urgent.push(rules.highSchoolConcern.urgent);
  }

  if (form.mainConcern === "Healthcare") {
    urgent.push(rules.healthcareConcern.urgent);
  }

  return {
    profile: [
      ["Current location", form.location],
      ["Destination", form.destination],
      ["Travel stage", form.travelStage],
      ["Family size", form.familySize || "Not specified"],
      ["Children", hasChildren ? `${form.childrenCount} child/children, ages ${form.childAgeRange}` : "No children selected"],
      ["Main concern", form.mainConcern],
    ],
    priorityCards: [
      { title: "Urgent", tone: "red", items: urgent.slice(0, 4) },
      { title: "Important", tone: "gold", items: important.slice(0, 4) },
      { title: "Helpful", tone: "green", items: helpful.slice(0, 4) },
    ],
    beforeArrival,
    firstWeek,
    firstMonth,
    recommendedSections: Array.from(recommendedSections),
    emotionalSupport: reportTemplates.emotionalSupport,
  };
}

function isRegulatedProfession(profession) {
  const normalized = profession.trim().toLowerCase();
  return familyPlanData.regulatedProfessionKeywords.some((keyword) => normalized.includes(keyword));
}

function ReportCard({ plan, form, onStartOver }) {
  if (!plan) {
    return (
      <div className="rounded-lg border border-gold/25 bg-gold/10 p-6 text-cream">
        <h3 className="text-xl font-black">No report generated yet</h3>
        <p className="mt-3 text-sm leading-7 text-cream/72">
          Complete the first four steps and choose Generate Plan to create the
          consultant report card.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-linen p-5 text-charcoal shadow-consultant sm:p-7">
      <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-emeraldDeep text-linen">
            <ClipboardCheck className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emeraldDeep">
              Generated placeholder report
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              Munich Bridge Family Plan
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink/64">
              Dummy consultant card for a family traveling from {form.location} to {form.destination}.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onStartOver}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm font-black text-charcoal transition hover:-translate-y-0.5"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </button>
      </div>

      <ReportSection title="1. Family Profile Summary">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plan.profile.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-charcoal/10 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-redwood">{label}</p>
              <p className="mt-2 text-sm font-bold text-ink/78">{value}</p>
            </div>
          ))}
        </div>
      </ReportSection>

      <ReportSection title="2. Priority Level Cards">
        <div className="grid gap-4 lg:grid-cols-3">
          {plan.priorityCards.map((card) => (
            <PriorityCard key={card.title} card={card} />
          ))}
        </div>
      </ReportSection>

      <div className="grid gap-4 lg:grid-cols-3">
        <ReportList title="3. Before Arrival Checklist" items={plan.beforeArrival} />
        <ReportList title="4. First Week in Munich Checklist" items={plan.firstWeek} />
        <ReportList title="5. First Month Checklist" items={plan.firstMonth} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <ReportList title="6. Recommended Website Sections" items={plan.recommendedSections} compact />
        <div className="rounded-lg border border-emeraldDeep/20 bg-emeraldDeep/8 p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emeraldDeep text-linen">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <h4 className="text-sm font-black uppercase tracking-[0.14em] text-emeraldDeep">
              7. Emotional Support Note
            </h4>
          </div>
          <p className="mt-4 text-sm leading-7 text-ink/72">{plan.emotionalSupport}</p>
        </div>
      </div>
    </div>
  );
}

function ReportSection({ title, children }) {
  return (
    <section className="mt-6">
      <h4 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-charcoal">
        {title}
      </h4>
      {children}
    </section>
  );
}

function PriorityCard({ card }) {
  const toneClass = {
    red: "border-redwood/25 bg-redwood/8 text-redwood",
    gold: "border-gold/35 bg-gold/12 text-ink",
    green: "border-emeraldDeep/25 bg-emeraldDeep/8 text-emeraldDeep",
  }[card.tone];

  return (
    <div className={`rounded-lg border p-5 ${toneClass}`}>
      <h5 className="text-lg font-black">{card.title}</h5>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
        {(card.items.length ? card.items : [familyPlanData.reportTemplates.emptyPriority]).map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReportList({ title, items, compact = false }) {
  return (
    <div className="rounded-lg border border-charcoal/10 bg-white p-5">
      <h4 className="text-sm font-black uppercase tracking-[0.14em] text-redwood">{title}</h4>
      <ul className={`mt-4 space-y-3 ${compact ? "text-sm" : "text-sm leading-7"} text-ink/72`}>
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
