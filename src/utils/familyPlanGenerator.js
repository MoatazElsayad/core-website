const SUPPORT_REMINDER =
  "Costs and support eligibility vary by legal status, city rules, income, and family situation. Always confirm financial support through official sources such as Jobcenter Munich, Familienkasse, and the German Embassy.";

const COST_CONTEXT =
  "Munich is expensive. HousingAnywhere estimates family living costs around EUR 3,702/month excluding rent, and around EUR 6,507/month with a 3-bedroom city-centre apartment.";

const PLAN_TEMPLATES = {
  stabilityFirst: {
    id: "stabilityFirst",
    title: "Stability First Plan",
    icon: "Home",
    mainPriority:
      "This family should focus first on temporary housing, financial support, school enrollment, healthcare access, and German learning.",
    costBreakdown: [
      ["Rent / temporary housing", "EUR 900-1,500+"],
      ["Groceries", "EUR 600-800"],
      ["Transport", "EUR 150-250"],
      ["Phone/internet", "EUR 40-80"],
      ["Children/school needs", "EUR 100-200"],
      ["Emergency expenses", "EUR 150+"],
    ],
    estimatedTotal: "EUR 1,900-2,800+ per month depending on rent.",
    affordability: [
      "Check eligibility for Buergergeld through Jobcenter Munich.",
      "Apply for Kindergeld if eligible: EUR 259/month per child from January 2026.",
      "Ask about rent/heating support if eligible.",
      "Use second-hand furniture and community donations.",
      "Avoid central Munich housing at first.",
      "Start with temporary accommodation if available.",
      "Father should register for job support as soon as possible.",
      "Mother can start German integration courses when childcare is arranged.",
    ],
    firstSteps: [
      "Confirm visa and documents.",
      "Prepare children's birth certificates, school records, and vaccination records.",
      "Arrange temporary accommodation.",
      "Register address after arrival.",
      "Contact Jobcenter or social support office if eligible.",
      "Enroll children in school/kindergarten.",
      "Register parents for German courses.",
      "Use nearby parks, libraries, halal shops, and Arabic-speaking community spaces for low-cost family routines.",
    ],
    recommendedPages: [
      ["Visa & Travel", "/visa-travel", "Check route, documents, embassy steps, and travel order."],
      ["Accommodation and Living Costs", "/accommodation", "Use the housing and budget guidance before choosing an area."],
      ["Education and Language", "/education-language", "Prepare school records and German support for children."],
      ["Health and Safety", "/health-safety", "Save emergency numbers, clinics, and healthcare contacts."],
      ["Family Journey", "/family-journey", "Follow the staged relocation timeline."],
    ],
    matchNote:
      "Chosen because the answers point to children, beginner German, and pressure around housing, school, money, or language.",
  },
  workSchoolIntegration: {
    id: "workSchoolIntegration",
    title: "Work and School Integration Plan",
    icon: "BriefcaseBusiness",
    mainPriority:
      "This family should focus on the correct visa route, qualification recognition, German language, school enrollment, and realistic housing.",
    costBreakdown: [
      ["Rent", "EUR 1,400-2,200+"],
      ["Groceries", "EUR 800-1,100"],
      ["Transport", "EUR 250-350"],
      ["Phone/internet", "EUR 60-100"],
      ["Children/school needs", "EUR 200-350"],
      ["Emergency expenses", "EUR 200+"],
    ],
    estimatedTotal: "EUR 2,900-4,100+ per month.",
    affordability: [
      "Prepare translated work certificates before arrival.",
      "Check whether the skilled profession needs recognition.",
      "Apply for jobs before travel if possible.",
      "Use Munich Onboarding Hub, Jobcenter, or AMIGA after arrival.",
      "Apply for Kindergeld if eligible: EUR 259/month per child from January 2026.",
      "Choose outer Munich districts or nearby towns to reduce rent.",
      "Mother can start German courses first and later apply for part-time work.",
      "Use public schools instead of private/international schools.",
    ],
    firstSteps: [
      "Check where the family should apply because Damascus is not accepting normal visa applications.",
      "Prepare passports, certificates, translations, and legalized documents.",
      "Prepare parents' CV and qualification documents.",
      "Prepare school records for all children.",
      "Search for temporary housing before arrival.",
      "After arrival, register address and apply for school placement.",
      "Contact recognition and job-support services.",
      "Register parents for integration courses.",
      "Build one weekly community routine through school, mosque, sports, library, or Syrian/Arab groups.",
    ],
    recommendedPages: [
      ["Visa & Travel", "/visa-travel", "Confirm the responsible German mission and document route."],
      ["Family Integration", "/family-integration", "Use work, certificate recognition, and parent-support guidance."],
      ["Education and Language", "/education-language", "Plan school placement and German learning."],
      ["Accommodation and Living Costs", "/accommodation", "Compare housing expectations against Munich costs."],
      ["Challenges and Solutions", "/challenges-solutions", "Find support for language, housing, work, and rights problems."],
    ],
    matchNote:
      "Chosen because the answers point to Syria or a skilled parent, children, medium budget, and visa/job/school/housing pressure.",
  },
  smoothArrival: {
    id: "smoothArrival",
    title: "Smooth Arrival and Fast Integration Plan",
    icon: "Route",
    mainPriority:
      "This family should focus on stable temporary housing, quick registration, school enrollment, German improvement, and community connection.",
    costBreakdown: [
      ["Rent / furnished housing", "EUR 1,800-2,600+"],
      ["Groceries", "EUR 500-700"],
      ["Transport", "EUR 150-250"],
      ["Phone/internet", "EUR 60-100"],
      ["Child/school needs", "EUR 150-250"],
      ["Leisure/community activities", "EUR 150-300"],
      ["Emergency savings", "EUR 300+"],
    ],
    estimatedTotal: "EUR 3,100-4,200+ per month.",
    affordability: [
      "Use savings or stable income for the first 3-6 months.",
      "Rent furnished temporary housing first before signing a long-term contract.",
      "Apply for Kindergeld if eligible: EUR 259/month per child from January 2026.",
      "Use public schools instead of expensive private schools.",
      "Use public parks, libraries, museums, and community events for low-cost integration.",
      "Mother can join German courses or career-support programs.",
      "Keep emergency savings for deposits, winter clothes, healthcare paperwork, and transport.",
    ],
    firstSteps: [
      "Prepare visa documents and travel plan.",
      "Book flexible flights after visa approval.",
      "Arrange temporary furnished housing for 1-3 months.",
      "Register address quickly after arrival.",
      "Enroll the child in school.",
      "Join German courses.",
      "Visit nearby halal groceries, mosques, parks, and community groups.",
      "Build a long-term housing and work plan.",
    ],
    recommendedPages: [
      ["Visa & Travel", "/visa-travel", "Coordinate visa approval, travel timing, and CAI to MUC arrival."],
      ["Community and Entertainment", "/community-entertainment", "Use parks, libraries, museums, sports, and Arab community spaces."],
      ["Food, Faith, and Culture", "/food-faith-culture", "Find halal food, mosques, and familiar cultural routines."],
      ["Education and Language", "/education-language", "Improve German and prepare school entry."],
      ["Family Journey", "/family-journey", "Use the big-picture timeline after arrival."],
    ],
    matchNote:
      "Chosen because the answers point to a higher budget, Egypt route, smaller family size, and faster arrival/integration goals.",
  },
};

const SKILLED_KEYWORDS = [
  "architect",
  "developer",
  "doctor",
  "engineer",
  "it",
  "lawyer",
  "mechanic",
  "nurse",
  "pharmacist",
  "programmer",
  "teacher",
  "technician",
];

export function buildFamilyPlan(form) {
  const selectedPlan = choosePlan(form);
  const template = PLAN_TEMPLATES[selectedPlan.id];
  const hasChildren = Number(form.childrenCount) > 0;

  return {
    generatedAt: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    plan: {
      ...template,
      matchNote: selectedPlan.exact ? template.matchNote : "This is a starting plan. Adjust it after checking your visa status, income, and family needs.",
      recommendedPages: template.recommendedPages.map(([title, path, reason]) => ({ title, path, reason })),
    },
    profile: [
      ["Current location", form.location],
      ["Destination", form.destination],
      ["Family size", form.familySize || "Not specified"],
      ["Children", hasChildren ? `${form.childrenCount} child/children, ages ${form.childAgeRange}` : "No children selected"],
      ["Parents' German", `${form.fatherGermanLevel} / ${form.motherGermanLevel}`],
      ["Budget", form.budgetRange],
      ["Housing status", form.housingStatus],
      ["Main concern", form.mainConcern],
    ],
    familySnapshot: buildSnapshot(form),
    costContext: COST_CONTEXT,
    supportReminder: SUPPORT_REMINDER,
    estimateNotice:
      "All numbers are estimates for planning only. Actual rent, deposits, benefits, school costs, and eligibility can change based on legal status, income, family size, district rules, and available housing.",
    sourceNotes: [
      "HousingAnywhere: Munich family cost estimate around EUR 3,702/month excluding rent and EUR 6,507/month with a 3-bedroom city-centre apartment.",
      "Familienkasse/Bundesagentur fuer Arbeit: Kindergeld is EUR 259 per child per month from January 2026.",
      "Bundesagentur fuer Arbeit and Jobcenter guidance: Buergergeld may support eligible people with basic needs; rent/heating support depends on Jobcenter rules and eligibility.",
    ],
  };
}

function choosePlan(form) {
  const hasChildren = Number(form.childrenCount) > 0;
  const familySize = Number(form.familySize) || 0;
  const concern = form.mainConcern;
  const lowBudget = form.budgetRange === "Low / needs careful support";
  const mediumBudget = ["Planning carefully", "Moderate savings"].includes(form.budgetRange);
  const highBudget = form.budgetRange === "Flexible budget";
  const beginnerGerman = [form.fatherGermanLevel, form.motherGermanLevel, form.childrenGermanLevel].includes("Beginner");
  const a1OrHigher = [form.fatherGermanLevel, form.motherGermanLevel].some((level) => level !== "Beginner");
  const skilledProfession = hasSkilledProfession(form.fatherProfession) || hasSkilledProfession(form.motherProfession);

  if ((lowBudget || (["Finance", "Housing"].includes(concern) && hasChildren)) && hasChildren) {
    return { id: "stabilityFirst", exact: true };
  }

  if ((form.location === "Syria" || skilledProfession) && mediumBudget) {
    return { id: "workSchoolIntegration", exact: true };
  }

  if ((highBudget || a1OrHigher) && familySize >= 2 && familySize <= 4) {
    return { id: "smoothArrival", exact: true };
  }

  const scores = {
    stabilityFirst: 0,
    workSchoolIntegration: 0,
    smoothArrival: 0,
  };

  if (lowBudget) scores.stabilityFirst += 4;
  if (hasChildren) scores.stabilityFirst += 3;
  if (beginnerGerman) scores.stabilityFirst += 2;
  if (["Housing", "School", "Finance", "Language"].includes(concern)) scores.stabilityFirst += 3;

  if (form.location === "Syria") scores.workSchoolIntegration += 4;
  if (mediumBudget) scores.workSchoolIntegration += 3;
  if (skilledProfession || form.qualificationRecognition !== "No") scores.workSchoolIntegration += 3;
  if (hasChildren) scores.workSchoolIntegration += 2;
  if (["Visa", "Work", "School", "Housing"].includes(concern)) scores.workSchoolIntegration += 2;

  if (highBudget) scores.smoothArrival += 4;
  if (form.location === "Egypt") scores.smoothArrival += 2;
  if (a1OrHigher) scores.smoothArrival += 2;
  if (familySize >= 2 && familySize <= 4) scores.smoothArrival += 2;
  if (["School", "Community", "Housing"].includes(concern)) scores.smoothArrival += 2;

  const id = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return { id, exact: false };
}

function buildSnapshot(form) {
  const father = form.fatherProfession?.trim() || "work/job search";
  const mother = form.motherProfession?.trim() || form.motherPriority.toLowerCase();
  return [
    `Route: ${form.location} to ${form.destination}; travel stage is ${form.travelStage.toLowerCase()}.`,
    `Parent focus: father - ${father}; mother - ${mother}.`,
    `Housing: ${form.housingStatus.toLowerCase()} with ${form.budgetRange.toLowerCase()} budget.`,
    `Language: father ${form.fatherGermanLevel.toLowerCase()}, mother ${form.motherGermanLevel.toLowerCase()}, children ${form.childrenGermanLevel.toLowerCase()}.`,
  ];
}

function hasSkilledProfession(value) {
  const normalized = value.trim().toLowerCase();
  return SKILLED_KEYWORDS.some((keyword) => normalized.includes(keyword));
}
