import { challenges, familyPlanData, guidePages } from "../data/placeholderData.js";

export function buildFamilyPlan(form) {
  const caseScores = scoreCases(form);
  const caseProfile = familyPlanData.caseProfiles.find((profile) => profile.id === caseScores[0].id);
  const hasChildren = Number(form.childrenCount) > 0;
  const categoryGuidance = buildCategoryGuidance(form, caseProfile);

  return {
    generatedAt: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    profile: [
      ["Current location", form.location],
      ["Destination", form.destination],
      ["Travel stage", form.travelStage],
      ["Visa type", form.visaType],
      ["Document status", form.documentStatus],
      ["Family size", form.familySize || "Not specified"],
      ["Children", hasChildren ? `${form.childrenCount} child/children, ages ${form.childAgeRange}` : "No children selected"],
      ["Main priority", form.mainConcern],
    ],
    caseProfile,
    caseScores,
    timeline: buildTimeline(form, caseProfile),
    categoryGuidance,
    recommendedPages: categoryGuidance.slice(0, 4).map((category) => ({
      title: category.title,
      path: category.path,
      reason: category.reason,
    })),
    sourceLinks: collectSourceLinks(categoryGuidance).slice(0, 6),
    emotionalSupport: familyPlanData.reportLabels.emotionalSupport,
    educationalNotice: familyPlanData.reportLabels.educationalNotice,
  };
}

function scoreCases(form) {
  const hasChildren = Number(form.childrenCount) > 0;
  const parentBeginner = form.fatherGermanLevel === "Beginner" || form.motherGermanLevel === "Beginner";
  const childrenBeginner = hasChildren && form.childrenGermanLevel === "Beginner";
  const regulatedProfession = isRegulatedProfession(form.fatherProfession) || form.qualificationRecognition !== "No";
  const scores = {
    preArrivalVisa: 0,
    cairoTravel: 0,
    childrenSchool: 0,
    housingBudget: 0,
    integrationBelonging: 0,
  };

  if (["Still researching", "Preparing documents", "Visa appointment booked"].includes(form.travelStage)) scores.preArrivalVisa += 4;
  if (["Not sure yet", "Family reunification", "Protection-related case"].includes(form.visaType)) scores.preArrivalVisa += 2;
  if (["Not started", "Collecting documents", "Need translations/legalization"].includes(form.documentStatus)) scores.preArrivalVisa += 3;
  if (form.mainConcern === "Visa") scores.preArrivalVisa += 4;
  if (form.location === "Egypt") scores.cairoTravel += 2;
  if (["Visa approved", "Already arrived"].includes(form.travelStage)) scores.cairoTravel += 5;
  if (form.mainConcern === "Visa" && form.travelStage === "Visa approved") scores.cairoTravel += 2;
  if (form.housingStatus === "Temporary housing") scores.cairoTravel += 1;
  if (hasChildren) scores.childrenSchool += 3;
  if (form.schoolConcernLevel === "High") scores.childrenSchool += 4;
  if (childrenBeginner) scores.childrenSchool += 3;
  if (form.mainConcern === "School") scores.childrenSchool += 4;
  if (form.budgetRange === "Low / needs careful support") scores.housingBudget += 4;
  if (form.housingConcernLevel === "High") scores.housingBudget += 4;
  if (["No housing yet", "Searching for apartment"].includes(form.housingStatus)) scores.housingBudget += 3;
  if (form.furnitureNeed !== "No") scores.housingBudget += 1;
  if (["Housing", "Finance"].includes(form.mainConcern)) scores.housingBudget += 4;
  if (parentBeginner) scores.integrationBelonging += 2;
  if (regulatedProfession) scores.integrationBelonging += 2;
  if (form.healthcareConcernLevel === "High" || form.mentalHealthStress === "High") scores.integrationBelonging += 2;
  if (form.culturalNeeds.length > 0) scores.integrationBelonging += 2;
  if (["Work", "Language", "Healthcare", "Discrimination", "Community", "Mental Health"].includes(form.mainConcern)) scores.integrationBelonging += 4;

  return familyPlanData.caseProfiles
    .map((profile) => ({ ...profile, score: scores[profile.id] }))
    .sort((a, b) => b.score - a.score);
}

function buildCategoryGuidance(form, caseProfile) {
  return familyPlanData.categoryTemplates
    .map((category) => {
      const score = category.defaultPriority + scoreCategory(category.key, form, caseProfile);
      return {
        ...category,
        score,
        urgency: score >= 13 ? "Urgent" : score >= 9 ? "Important" : "Helpful",
        summary: customizeSummary(category, form),
        reason: buildCategoryReason(category.key, form),
        actions: customizeActions(category, form),
      };
    })
    .sort((a, b) => b.score - a.score);
}

function scoreCategory(key, form, caseProfile) {
  const hasChildren = Number(form.childrenCount) > 0;
  const concernMap = {
    Visa: "visaTravel",
    Housing: "accommodation",
    Finance: "accommodation",
    School: "educationLanguage",
    Work: "familyIntegration",
    Language: "educationLanguage",
    Healthcare: "healthSafety",
    "Mental Health": "healthSafety",
    Discrimination: "challengesSolutions",
    Community: "communityEntertainment",
  };
  let score = caseProfile.focus.includes(familyPlanData.categoryTemplates.find((item) => item.key === key)?.title) ? 4 : 0;
  if (concernMap[form.mainConcern] === key) score += 5;
  if (key === "visaTravel" && ["Still researching", "Preparing documents", "Visa appointment booked", "Visa approved"].includes(form.travelStage)) score += 3;
  if (key === "accommodation" && (form.housingConcernLevel === "High" || form.budgetRange === "Low / needs careful support")) score += 5;
  if (key === "educationLanguage" && (hasChildren || form.fatherGermanLevel === "Beginner" || form.motherGermanLevel === "Beginner")) score += 4;
  if (key === "healthSafety" && (form.healthcareConcernLevel === "High" || form.mentalHealthStress === "High")) score += 5;
  if (key === "foodFaithCulture" && form.culturalNeeds.length > 0) score += 4;
  if (key === "familyIntegration" && (form.qualificationRecognition !== "No" || form.mainConcern === "Work")) score += 4;
  if (key === "communityEntertainment" && form.culturalNeeds.includes("Arabic-speaking community")) score += 3;
  if (key === "challengesSolutions" && ["Discrimination", "Mental Health", "Finance"].includes(form.mainConcern)) score += 4;
  if (key === "familyJourney") score += 2;
  return score;
}

function buildCategoryReason(key, form) {
  const reasons = {
    visaTravel: `${form.location} + ${form.travelStage}: confirm mission, visa type, documents, and travel order.`,
    accommodation: `${form.housingStatus} + ${form.budgetRange}: housing and first-month costs need a clear tracker.`,
    foodFaithCulture: form.culturalNeeds.length ? `Selected needs: ${form.culturalNeeds.join(", ")}.` : "Culture routines can support stability even when not urgent.",
    familyIntegration: "Work, language, and certificates connect to parents' long-term independence.",
    educationLanguage: Number(form.childrenCount) > 0 ? "Children and German level make school/language planning important." : "Parent German learning still supports daily life.",
    healthSafety: `${form.healthcareConcernLevel} healthcare concern and ${form.mentalHealthStress} stress level.`,
    communityEntertainment: "Low-cost routines and community spaces help Munich feel familiar.",
    challengesSolutions: `Main priority: ${form.mainConcern}. The challenge guide connects problems with support channels.`,
    familyJourney: "The timeline keeps the family focused on the next stage instead of everything at once.",
  };
  return reasons[key];
}

function customizeSummary(category, form) {
  if (category.key === "visaTravel" && form.location === "Egypt") {
    return "Go through the German Embassy Cairo route first: 2 Sharia Berlin, off Sharia Hassan Sabri, Zamalek, Cairo 11211. Visa phone: +20 2 27 28 21 78.";
  }
  if (category.key === "visaTravel" && form.location === "Syria") {
    return "Do not plan around Damascus. The site notes that Damascus is closed to the general public; check Amman, Beirut, Riyadh, Cairo, Kuwait, Erbil, or Istanbul.";
  }
  if (category.key === "visaTravel" && form.travelStage === "Visa approved") {
    return "For travel after approval, CAI to MUC has direct EgyptAir/Lufthansa flights of about 4h 5m. Do not book non-refundable tickets before the visa is issued.";
  }
  if (category.key === "accommodation" && form.budgetRange === "Low / needs careful support") {
    return "Prioritize support and cheaper districts: a family of 4-5 may need EUR 6,500-8,000/month in Munich, and 3-bedroom outer districts are about EUR 2,000-2,800 cold rent.";
  }
  if (category.key === "accommodation" && form.housingStatus === "No housing yet") {
    return "Start with temporary housing and apartment documents. For visa/family arrivals, the site suggests Mr. Lodge, Wunderflats, and HousingAnywhere for furnished first-month options.";
  }
  if (category.key === "educationLanguage" && Number(form.childrenCount) > 0) {
    return "Prepare school enrollment now: identity documents, address proof, previous school records, translations, and vaccination notes.";
  }
  if (category.key === "healthSafety" && form.healthcareConcernLevel === "High") {
    return "Save health contacts immediately: 112 emergency, 110 police, 116117 on-call doctor, Refudocs +49 89 233-96833.";
  }
  if (category.key === "foodFaithCulture" && form.culturalNeeds.includes("Mosque")) {
    return "For faith support, Islamisches Zentrum Muenchen is at Wallnerstrasse 1 with Friday prayers in Arabic/German and weekend Arabic school.";
  }
  return category.summary;
}

function customizeActions(category, form) {
  const actions = [...category.actions];
  if (category.key === "visaTravel" && form.location === "Syria") actions.unshift("Do not assume Damascus is the correct application location; verify the responsible German mission.");
  if (category.key === "visaTravel" && form.location === "Egypt") actions.unshift("Use the Cairo Embassy visa page and confirm the exact appointment category.");
  if (category.key === "educationLanguage" && Number(form.childrenCount) === 0) return actions.filter((item) => !item.toLowerCase().includes("school"));
  if (category.key === "familyIntegration" && isRegulatedProfession(form.fatherProfession)) actions.unshift("Because the father's field may be regulated, prepare certificate recognition questions early.");
  if (category.key === "healthSafety" && form.mentalHealthStress === "High") actions.unshift("Add trauma-aware counseling or psychosocial support to the safety plan.");
  return actions.slice(0, 3);
}

function buildTimeline(form, caseProfile) {
  return familyPlanData.timelineTemplates.map((stage) => {
    const items = [...stage.items];
    if (stage.key === "beforeArrival" && caseProfile.id === "preArrivalVisa") items.unshift("Prioritize embassy route, visa type, and translation/legalization questions.");
    if (stage.key === "firstWeek" && caseProfile.id === "cairoTravel") items.unshift("Prepare CAI to MUC travel documents, Munich address, medication, and children's records.");
    if (stage.key === "firstMonth" && caseProfile.id === "childrenSchool") items.unshift("Contact school support and ask which enrollment documents are needed.");
    if (stage.key === "firstWeek" && caseProfile.id === "housingBudget") items.unshift("Secure temporary accommodation before adding non-urgent appointments.");
    if (stage.key === "firstThreeMonths" && caseProfile.id === "integrationBelonging") items.unshift("Build weekly routines for work, German, community, and family wellbeing.");
    if (stage.key === "longTerm" && form.culturalNeeds.length) items.unshift("Keep Syrian identity visible through language, food, faith, and community.");
    return { ...stage, items: items.slice(0, 2) };
  });
}

function collectSourceLinks(categories) {
  const challengeLinks = challenges.flatMap((challenge) => challenge.usefulLinks || []);
  const visaLinks = [
    ...(guidePages.visaTravel.visaGuide?.noticeLinks || []),
    ...(guidePages.visaTravel.visaGuide?.knowLinks || []),
    ...(guidePages.visaTravel.visaGuide?.documentLinks || []),
    ...(guidePages.visaTravel.visaGuide?.travel?.links || []),
  ];
  const namedLinks = [...challengeLinks, ...visaLinks];
  const labels = new Set(categories.slice(0, 6).flatMap((category) => category.resources));
  const matched = namedLinks.filter((link) => labels.has(link.label));
  const fallback = [{ label: "Challenges and Solutions", url: "/challenges-solutions" }];
  return dedupeLinks([...matched, ...fallback]).slice(0, 10);
}

function dedupeLinks(links) {
  const seen = new Set();
  return links.filter((link) => {
    const key = `${link.label}-${link.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isRegulatedProfession(profession) {
  const normalized = profession.trim().toLowerCase();
  return familyPlanData.regulatedProfessionKeywords.some((keyword) => normalized.includes(keyword));
}
