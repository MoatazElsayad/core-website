import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  ClipboardCheck,
  FileText,
  Printer,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { familyPlanData } from "../data/placeholderData";
import { buildFamilyPlan } from "../utils/familyPlanGenerator";

const { initialForm } = familyPlanData;

export default function FamilyPlanForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [plan, setPlan] = useState(null);
  const reportRef = useRef(null);

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
    setPlan(buildFamilyPlan(form));
    setStep(familyPlanData.wizardSteps.length - 1);
  }

  function startOver() {
    setForm(initialForm);
    setPlan(null);
    setStep(0);
  }

  function printPlan() {
    window.print();
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
              A deeper intake that connects the family's answers to every major
              Munich Bridge guide section, then creates a printable report.
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
                      if (index < familyPlanData.wizardSteps.length - 1 || plan) setStep(index);
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-bold transition ${
                      index === step
                        ? "bg-linen text-charcoal"
                        : "bg-white/6 text-cream/72 hover:bg-white/10"
                    } ${index === familyPlanData.wizardSteps.length - 1 && !plan ? "cursor-not-allowed opacity-50" : ""}`}
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
            {step < familyPlanData.wizardSteps.length - 1 ? (
              <WizardForm
                step={step}
                form={form}
                hasChildren={hasChildren}
                onChange={updateField}
                onToggleNeed={toggleCulturalNeed}
              />
            ) : (
              <ReportCard
                plan={plan}
                form={form}
                reportRef={reportRef}
                onPrintPlan={printPlan}
                onStartOver={startOver}
              />
            )}

            {step < familyPlanData.wizardSteps.length - 1 && (
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
                {step === familyPlanData.wizardSteps.length - 2 ? (
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
      <StepPanel title="Route & Visa" eyebrow="Before arrival planning">
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField label="Current location" name="location" value={form.location} onChange={onChange} options={["Syria", "Egypt"]} />
          <Field label="Destination">
            <input name="destination" value={form.destination} readOnly className="field cursor-not-allowed opacity-90" />
          </Field>
          <SelectField label="Travel stage" name="travelStage" value={form.travelStage} onChange={onChange} options={familyPlanData.travelStages} />
          <SelectField label="Visa type" name="visaType" value={form.visaType} onChange={onChange} options={familyPlanData.visaTypes} />
          <SelectField label="Document status" name="documentStatus" value={form.documentStatus} onChange={onChange} options={familyPlanData.documentStatuses} />
          <SelectField label="Appointment status" name="appointmentStatus" value={form.appointmentStatus} onChange={onChange} options={familyPlanData.appointmentStatuses} />
        </div>
      </StepPanel>
    );
  }

  if (step === 1) {
    return (
      <StepPanel title="Family Profile" eyebrow="Children, school, and adaptation">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Family size">
            <input name="familySize" value={form.familySize} onChange={onChange} className="field" inputMode="numeric" />
          </Field>
          <Field label="Number of children">
            <input name="childrenCount" value={form.childrenCount} onChange={onChange} className="field" inputMode="numeric" />
          </Field>
          <SelectField label="Children age range" name="childAgeRange" value={form.childAgeRange} onChange={onChange} options={familyPlanData.childAgeRanges} disabled={!hasChildren} />
          <SelectField label="School concern level" name="schoolConcernLevel" value={form.schoolConcernLevel} onChange={onChange} options={familyPlanData.concernLevels} disabled={!hasChildren} />
          <SelectField label="Children's German level" name="childrenGermanLevel" value={form.childrenGermanLevel} onChange={onChange} options={familyPlanData.germanLevels} disabled={!hasChildren} />
        </div>
        {!hasChildren && (
          <p className="mt-5 rounded-lg border border-gold/25 bg-gold/10 p-4 text-sm leading-7 text-cream/80">
            No children are selected, so the report will emphasize parents, housing, work, language, health, and community setup.
          </p>
        )}
      </StepPanel>
    );
  }

  if (step === 2) {
    return (
      <StepPanel title="Housing & Budget" eyebrow="First safe home">
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField label="Budget range" name="budgetRange" value={form.budgetRange} onChange={onChange} options={familyPlanData.budgetRanges} />
          <SelectField label="Housing status" name="housingStatus" value={form.housingStatus} onChange={onChange} options={familyPlanData.housingStatuses} />
          <SelectField label="Housing concern level" name="housingConcernLevel" value={form.housingConcernLevel} onChange={onChange} options={familyPlanData.concernLevels} />
          <SelectField label="Need furniture/essentials?" name="furnitureNeed" value={form.furnitureNeed} onChange={onChange} options={["Yes", "No", "Not sure"]} />
        </div>
      </StepPanel>
    );
  }

  if (step === 3) {
    return (
      <StepPanel title="Work & Learning" eyebrow="Parents, jobs, and German">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Father's profession">
            <input name="fatherProfession" value={form.fatherProfession} onChange={onChange} placeholder="Example: engineer, driver, teacher" className="field" />
          </Field>
          <SelectField label="Father's German level" name="fatherGermanLevel" value={form.fatherGermanLevel} onChange={onChange} options={familyPlanData.germanLevels} />
          <Field label="Mother's profession or interests">
            <input name="motherProfession" value={form.motherProfession} onChange={onChange} placeholder="Example: teacher, sewing, childcare" className="field" />
          </Field>
          <SelectField label="Mother's German level" name="motherGermanLevel" value={form.motherGermanLevel} onChange={onChange} options={familyPlanData.germanLevels} />
          <SelectField label="Mother's preferred first step" name="motherPriority" value={form.motherPriority} onChange={onChange} options={familyPlanData.motherPriorities} />
          <SelectField label="Qualification recognition need" name="qualificationRecognition" value={form.qualificationRecognition} onChange={onChange} options={["Yes", "No", "Not sure"]} />
        </div>
      </StepPanel>
    );
  }

  return (
    <StepPanel title="Health & Community" eyebrow="Safety, culture, and belonging">
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Healthcare concern level" name="healthcareConcernLevel" value={form.healthcareConcernLevel} onChange={onChange} options={familyPlanData.concernLevels} />
        <SelectField label="Mental health stress" name="mentalHealthStress" value={form.mentalHealthStress} onChange={onChange} options={familyPlanData.concernLevels} />
        <Field label="Religious/cultural needs" wide>
          <div className="grid gap-3 sm:grid-cols-2">
            {familyPlanData.culturalNeeds.map((need) => (
              <label key={need} className="flex items-center gap-3 rounded-lg border border-white/12 bg-linen px-4 py-3 text-sm font-bold text-charcoal">
                <input type="checkbox" checked={form.culturalNeeds.includes(need)} onChange={() => onToggleNeed(need)} className="h-4 w-4 accent-emeraldDeep" />
                {need}
              </label>
            ))}
          </div>
        </Field>
        <SelectField label="Main priority" name="mainConcern" value={form.mainConcern} onChange={onChange} options={familyPlanData.mainConcerns} wide />
      </div>
    </StepPanel>
  );
}

function StepPanel({ eyebrow, title, children }) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
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

function SelectField({ label, name, value, onChange, options, disabled = false, wide = false }) {
  return (
    <Field label={label} wide={wide}>
      <select name={name} value={value} onChange={onChange} disabled={disabled} className="field">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}

function ReportCard({ plan, form, reportRef, onPrintPlan, onStartOver }) {
  if (!plan) {
    return (
      <div className="rounded-lg border border-gold/25 bg-gold/10 p-6 text-cream">
        <h3 className="text-xl font-black">No report generated yet</h3>
        <p className="mt-3 text-sm leading-7 text-cream/72">
          Complete the intake and choose Generate Plan to create the personalized family report.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="no-print mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <button type="button" onClick={onStartOver} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm font-black text-cream transition hover:bg-white/12">
          <RotateCcw className="h-4 w-4" />
          Start Over
        </button>
        <button type="button" onClick={onPrintPlan} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d6ad51]">
          <Printer className="h-4 w-4" />
          Print Plan
        </button>
      </div>

      <div ref={reportRef} className="family-plan-print rounded-lg bg-linen p-5 text-charcoal shadow-consultant sm:p-7">
        <ReportHeader plan={plan} form={form} />
        <ReportSection title="1. Family Profile Summary">
          <ProfileGrid items={plan.profile} />
          <ul className="mt-4 grid gap-3 text-sm font-semibold leading-7 text-ink/72 lg:grid-cols-2">
            {plan.familySnapshot.map((item) => (
              <li key={item} className="rounded-lg border border-charcoal/10 bg-white p-4">
                {item}
              </li>
            ))}
          </ul>
        </ReportSection>

        <ReportSection title="2. Recommended Plan Name">
          <div className="rounded-lg border border-emeraldDeep/20 bg-emeraldDeep/8 p-5">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-emeraldDeep text-linen">
                <Icon name={plan.plan.icon} className="h-6 w-6" />
              </span>
              <div>
                <h4 className="text-2xl font-black text-charcoal">{plan.plan.title}</h4>
                <p className="mt-2 text-sm leading-7 text-ink/72">{plan.plan.matchNote}</p>
              </div>
            </div>
          </div>
        </ReportSection>

        <ReportSection title="3. Main Priority">
          <div className="rounded-lg border border-charcoal/10 bg-white p-5">
            <p className="text-base font-bold leading-8 text-ink/76">{plan.plan.mainPriority}</p>
          </div>
        </ReportSection>

        <ReportSection title="4. Estimated Monthly Cost">
          <p className="mb-4 rounded-lg border border-gold/30 bg-gold/12 p-4 text-sm font-bold leading-7 text-ink/72">
            {plan.costContext}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plan.plan.costBreakdown.map(([label, amount]) => (
              <div key={label} className="rounded-lg border border-charcoal/10 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-redwood">{label}</p>
                <p className="mt-2 text-lg font-black text-charcoal">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-lg bg-charcoal p-4 text-base font-black text-linen">
            Estimated total: {plan.plan.estimatedTotal}
          </p>
          <p className="mt-3 text-xs font-semibold leading-6 text-ink/60">{plan.estimateNotice}</p>
        </ReportSection>

        <ReportSection title="5. How the Family Can Afford It">
          <AdviceList items={plan.plan.affordability} />
        </ReportSection>

        <ReportSection title="6. First Steps">
          <StepList items={plan.plan.firstSteps} />
        </ReportSection>

        <ReportSection title="7. Recommended Website Pages">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plan.plan.recommendedPages.map((page) => (
              <Link key={page.path} to={page.path} className="rounded-lg border border-charcoal/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
                <p className="text-sm font-black text-emeraldDeep">{page.title}</p>
                <p className="mt-2 text-xs leading-6 text-ink/64">{page.reason}</p>
              </Link>
            ))}
          </div>
        </ReportSection>

        <ReportSection title="8. Important Reminder">
          <div className="rounded-lg border border-redwood/30 bg-redwood/10 p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-redwood text-linen">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-redwood">Official verification required</p>
                <p className="mt-2 text-sm font-bold leading-7 text-ink/76">{plan.supportReminder}</p>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-xs font-semibold leading-6 text-ink/60">
            {plan.sourceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </ReportSection>
      </div>
    </div>
  );
}

function ReportHeader({ plan, form }) {
  return (
    <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-emeraldDeep text-linen">
          <ClipboardCheck className="h-6 w-6" />
        </span>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emeraldDeep">
            {familyPlanData.reportLabels.generatedLabel}
          </p>
          <h3 className="mt-1 font-display text-3xl font-bold">Munich Bridge Family Plan</h3>
          <p className="mt-2 text-sm leading-7 text-ink/64">
            Consultant-style guidance for a family traveling from {form.location} to {form.destination}. Generated {plan.generatedAt}.
          </p>
        </div>
      </div>
    </div>
  );
}

function ReportSection({ title, children }) {
  return (
    <section className="mt-6">
      <h4 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-charcoal">{title}</h4>
      {children}
    </section>
  );
}

function ProfileGrid({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-lg border border-charcoal/10 bg-white p-4">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-redwood">{label}</p>
          <p className="mt-2 text-sm font-bold text-ink/78">{value}</p>
        </div>
      ))}
    </div>
  );
}

function AdviceList({ items }) {
  return (
    <div className="rounded-lg border border-gold/35 bg-gold/12 p-5">
      <ul className="grid gap-3 text-sm font-bold leading-7 text-ink/76 lg:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-white/78 p-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepList({ items }) {
  return (
    <ol className="grid gap-3 lg:grid-cols-2">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 rounded-lg border border-charcoal/10 bg-white p-4 text-sm font-bold leading-7 text-ink/72">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emeraldDeep text-linen">
            <Icon name="CheckCircle2" className="h-4 w-4" />
          </span>
          <span>
            <span className="font-black text-charcoal">{index + 1}. </span>
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}
