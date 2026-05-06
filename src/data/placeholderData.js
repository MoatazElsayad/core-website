// Replace this dummy content with real research later.
// The website is intentionally data-driven so the team can update text, links, and images without redesigning pages.

export const siteMeta = {
  name: "Munich Bridge",
  course: "CORE: Freshmen Seminar - Imagining Exile",
  mission:
    "A consultant-style relocation and integration hub for Syrian families planning a move from Syria or Egypt to Munich.",
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Visa", path: "/visa-travel" },
  { label: "Housing", path: "/accommodation" },
  { label: "Culture", path: "/food-faith-culture" },
  { label: "Family", path: "/family-integration" },
  { label: "Education", path: "/education-language" },
  { label: "Health", path: "/health-safety" },
  { label: "Community", path: "/community-entertainment" },
  { label: "Challenges", path: "/challenges-solutions" },
  { label: "Plan", path: "/family-plan" },
  { label: "Journey", path: "/family-journey" },
  { label: "Sources", path: "/sources" },
];

export const trustNotice = {
  label: "Educational notice",
  text:
    "This educational website provides guidance and orientation. Visa, legal, and healthcare information should always be verified through official sources.",
};

// Team content inserted here - update with final research if needed.
export const home = {
  hero: {
    label: "Bridge between two homes",
    title: "Munich Bridge",
    subtitle: "A step-by-step guide for Syrian families moving from Syria or Egypt to Munich.",
    description:
      "Welcome. This website is created to support Syrian families who are planning to move to Munich in Germany. We understand that leaving your home is not easy. This platform is designed to guide you step by step - from preparing your documents to building a new life - so you don't feel lost or alone in the process.",
    primaryCta: { label: "Create Family Plan", path: "/family-plan" },
    secondaryCta: { label: "Explore the Guide", path: "/visa-travel" },
    heroIcon: "Route",
    imageLabel: "Journey placeholder: Syria / Egypt -> Munich",
    imageCaption: "Syria / Egypt -> Munich",
  },
  stats: [
    { value: "12+", label: "Guide Sections", icon: "LayoutList" },
    { value: "5-Step", label: "Family Plan", icon: "ClipboardCheck" },
    { value: "Culture +", label: "Practical Support", icon: "HeartHandshake" },
    { value: "Placeholder", label: "Research Ready", icon: "FileText" },
  ],
  whyMunich: {
    label: "Why Munich?",
    title: "Why Munich?",
    intro: "For many Syrian families, moving to Munich offers a chance to rebuild life in a safe and supportive environment.",
    closing:
      "Although the cost of living in Munich is high, the support systems and opportunities available make it a strong option for Syrian families looking for long-term stability and a better future.",
    visualLabel: "Placeholder visual: Munich skyline, family journey, and support systems",
    reasons: [
      { title: "Safety and stability", icon: "ShieldCheck", text: "Families can live without fear of war or conflict." },
      { title: "Support for refugees", icon: "HeartHandshake", text: "Families may access housing assistance, financial support, and integration programs depending on their legal status." },
      { title: "Education for children", icon: "School", text: "Schools provide support for non-German-speaking students, helping children adjust and continue their education." },
      { title: "Language learning opportunities", icon: "Languages", text: "Free or low-cost German courses can help families integrate faster." },
      { title: "Job opportunities", icon: "BriefcaseBusiness", text: "Many Syrians can search for work in skilled trades, services, and technical fields." },
      { title: "Healthcare access", icon: "Hospital", text: "Families can receive medical care and support when needed." },
      { title: "Syrian and Arab communities", icon: "MessagesSquare", text: "Existing communities, mosques, and halal stores can help families feel less isolated." },
      { title: "Respect for cultural identity", icon: "HeartHandshake", text: "Families can maintain their traditions, religion, and values while adapting to a new society." },
    ],
  },
  websiteHelpsWith: {
    label: "Guide Sections",
    title: "What This Website Helps With",
    intro: "Everything is explained in a simple and practical way.",
    items: [
      { title: "How to apply for visas and prepare for travel", path: "/visa-travel", icon: "Plane", tag: "Visa" },
      { title: "Finding housing and understanding living costs", path: "/accommodation", icon: "Home", tag: "Housing" },
      { title: "Enrolling children in school", path: "/education-language", icon: "School", tag: "School" },
      { title: "Learning German", path: "/education-language", icon: "Languages", tag: "German" },
      { title: "Accessing healthcare services", path: "/health-safety", icon: "Hospital", tag: "Health" },
      { title: "Finding jobs and building a career", path: "/family-integration", icon: "BriefcaseBusiness", tag: "Jobs" },
      { title: "Connecting with Syrian and Arab communities", path: "/community-entertainment", icon: "MessagesSquare", tag: "Community" },
    ],
  },
  journeyOverview: {
    label: "Family Journey Overview",
    title: "Family Journey Overview",
    intro:
      "Your journey will happen step by step. You are not expected to do everything at once - this is a gradual process.",
    cta: { label: "View Full Family Journey", path: "/family-journey" },
    stages: [
      { title: "Before arrival", icon: "Files", text: "Preparing documents and planning travel." },
      { title: "First week", icon: "Home", text: "Settling in temporary housing and completing basic registration." },
      { title: "First month", icon: "School", text: "Starting language courses and school enrollment." },
      { title: "First months", icon: "BriefcaseBusiness", text: "Finding stable housing and job opportunities." },
      { title: "Long term", icon: "ShieldCheck", text: "Building a stable and independent life." },
    ],
  },
  journeyPreview: [
    { title: "Before arrival", icon: "Files", description: "Preparing documents and planning travel." },
    { title: "First week", icon: "Home", description: "Settling in temporary housing and completing basic registration." },
    { title: "First month", icon: "School", description: "Starting language courses and school enrollment." },
    { title: "Long term", icon: "ShieldCheck", description: "Building a stable and independent life." },
  ],
  categories: [
    { title: "Visa and Travel", path: "/visa-travel", icon: "Plane", description: "Documents, appointments, flights, and arrival steps." },
    { title: "Accommodation", path: "/accommodation", icon: "Home", description: "Housing, rent, furniture, groceries, and support." },
    { title: "Family Integration", path: "/family-integration", icon: "UsersRound", description: "Father, mother, and children support pathways." },
    { title: "Education and Health", path: "/education-language", icon: "GraduationCap", description: "Schools, language, healthcare, and safety basics." },
  ],
  culturalIdentity: {
    label: "Family Support",
    title: "Integration does not mean losing identity.",
    message:
      "Families can build a future in Munich while preserving Syrian language, food, faith, and family values.",
    highlights: ["Arabic at home", "Halal and family food", "Faith and belonging", "Children's confidence"],
  },
  cta: {
    title: "Start with a plan made for your family.",
    text:
      "Answer a few simple questions about your family, budget, language level, and main concerns. The website will generate a first-step plan to help you know where to begin.",
    label: "Create My Family Plan",
    path: "/family-plan",
  },
};

const sharedFutureResources = [
  { title: "Official links", category: "Research", description: "Add verified official links and update dates here.", linkLabel: "To be updated" },
  { title: "Local support organizations", category: "Community", description: "Add organizations, eligibility notes, and contact details later.", linkLabel: "To be updated" },
  { title: "Student research notes", category: "Course", description: "Add final project sources, interviews, or academic references here.", linkLabel: "To be updated" },
];

export const guidePages = {
  visaTravel: {
    personality: "documents",
    showTrustNotice: true,
    path: "/visa-travel",
    label: "Before Arrival",
    title: "Visa and Travel",
    subtitle: "Prepare documents, appointments, and the journey to Munich.",
    purpose:
      "This page will help families organize visa preparation, document checklists, travel planning, and the first arrival steps.",
    heroIcon: "Passport",
    placeholder: "Image placeholder: passport, documents, and Munich arrival route",
    helpWith: ["Visa pathway planning", "Document organization", "Appointment preparation", "Flight and first-arrival checklist"],
    cards: [
      { title: "Visa pathway cards", tag: "Visa", icon: "BadgeHelp", description: "Placeholder overview for possible visa routes and family reunification planning." },
      { title: "Documents checklist", tag: "Documents", icon: "ClipboardList", description: "Dummy list area for passports, civil records, translations, photos, and copies." },
      { title: "Embassy/application notes", tag: "Appointments", icon: "Building2", description: "Placeholder space for application locations, appointment rules, and official updates." },
      { title: "Flight preparation", tag: "Travel", icon: "Plane", description: "Dummy flight checklist for baggage, airport timing, documents, and arrival contacts." },
      { title: "First arrival checklist", tag: "Landing", icon: "MapPinned", description: "Placeholder plan for transport, accommodation contact, phone access, and urgent supplies." },
    ],
    feature: {
      title: "Consultant checklist placeholder",
      icon: "CheckCircle2",
      items: ["Confirm official application route", "Prepare translated document folder", "Save arrival address offline", "Pack essentials for children"],
    },
    resources: sharedFutureResources,
    cta: { title: "Turn preparation into a family roadmap.", label: "Open Family Plan", path: "/family-plan" },
  },
  accommodation: {
    personality: "housingDashboard",
    path: "/accommodation",
    label: "First Month",
    title: "Accommodation and Living Costs",
    subtitle: "Understand housing, rent, furniture, groceries, and budgeting.",
    purpose:
      "This page will help families compare housing options, estimate monthly costs, and prepare for temporary and long-term living needs.",
    heroIcon: "Home",
    placeholder: "Image placeholder: Munich apartment and neighborhood map",
    helpWith: ["Rent range placeholders", "Monthly budget planning", "Temporary accommodation", "Furniture and essentials"],
    cards: [
      { title: "Rent range placeholders", tag: "Budget", icon: "Euro", description: "Replace later with verified ranges for different apartment sizes and districts." },
      { title: "Monthly budget table", tag: "Costs", icon: "Calculator", description: "Dummy calculator-style layout for rent, food, transport, school, and phone costs." },
      { title: "Family neighborhoods", tag: "Map", icon: "MapPin", description: "Placeholder criteria for transport, schools, parks, groceries, and community access." },
      { title: "Furniture and essentials", tag: "Setup", icon: "Armchair", description: "Dummy starter list for bedding, kitchen basics, winter clothing, and child needs." },
      { title: "Financial support", tag: "Support", icon: "HandCoins", description: "Placeholder area for eligibility notes, organizations, and official programs." },
    ],
    feature: {
      title: "Budget snapshot placeholder",
      icon: "WalletCards",
      items: ["Rent and deposit", "Groceries and halal food", "Transport passes", "Furniture and winter items"],
    },
    resources: sharedFutureResources,
    cta: { title: "Need a first-week plan after housing?", label: "View Family Journey", path: "/family-journey" },
  },
  foodFaithCulture: {
    personality: "culturalPattern",
    path: "/food-faith-culture",
    label: "Culture",
    title: "Food, Faith, and Culture",
    subtitle: "Preserve Syrian identity while building daily life in Munich.",
    purpose:
      "This page will help families find cultural comfort, faith spaces, food routines, and community support.",
    heroIcon: "Utensils",
    placeholder: "Image placeholder: Syrian food, halal groceries, and cultural pattern block",
    helpWith: ["Syrian restaurant placeholders", "Halal grocery planning", "Mosques and prayer spaces", "Cultural identity support"],
    cards: [
      { title: "Syrian restaurants", tag: "Food", icon: "Utensils", description: "Placeholder cards for familiar meals, family-friendly places, and comfort food." },
      { title: "Halal groceries", tag: "Groceries", icon: "ShoppingBasket", description: "Dummy grocery list for halal meat, spices, staples, and nearby markets." },
      { title: "Mosques and prayer spaces", tag: "Faith", icon: "Landmark", description: "Replace later with verified locations, Ramadan notes, and family events." },
      { title: "Cultural identity", tag: "Belonging", icon: "HeartHandshake", description: "Placeholder ideas for Arabic at home, food traditions, and storytelling." },
      { title: "Community support", tag: "Community", icon: "MessagesSquare", description: "Dummy notes for Arab and Syrian networks, parent groups, and events." },
    ],
    feature: {
      title: "Culture care notes",
      icon: "HeartHandshake",
      items: ["Keep Arabic visible at home", "Plan family meals around familiar foods", "Find faith and community spaces", "Make children proud of both cultures"],
    },
    resources: sharedFutureResources,
    cta: { title: "Culture connects closely with community.", label: "Explore Community", path: "/community-entertainment" },
  },
  familyIntegration: {
    personality: "familySupport",
    path: "/family-integration",
    label: "Family Support",
    title: "Family Integration",
    subtitle: "Guidance for father, mother, and children.",
    purpose:
      "This page will help families see each person's integration needs clearly, not only the paperwork.",
    heroIcon: "UsersRound",
    placeholder: "Image placeholder: family support illustration",
    helpWith: ["Father's work pathway", "Mother's language and community choices", "Children's school and friendships", "Family balance"],
    cards: [
      { title: "Father integration", tag: "Work", icon: "BriefcaseBusiness", description: "Placeholder for jobs, qualification recognition, CVs, and professional confidence." },
      { title: "Mother integration", tag: "Support", icon: "Flower2", description: "Dummy notes for work, language, community activities, volunteering, and confidence." },
      { title: "Children integration", tag: "Children", icon: "SmilePlus", description: "Placeholder guidance for school, friendships, sports, and emotional adaptation." },
      { title: "Family balance", tag: "Home", icon: "HeartHandshake", description: "Dummy advice for routines, communication, identity, rest, and shared decisions." },
      { title: "Rights and support", tag: "Safety", icon: "ShieldCheck", description: "Placeholder for workplace rights, family support, and anti-discrimination contacts." },
    ],
    feature: {
      title: "Three-person lens",
      icon: "UsersRound",
      items: ["Father: work and recognition", "Mother: language and support", "Children: school and belonging", "Whole family: stress and routine"],
    },
    resources: sharedFutureResources,
    cta: { title: "For school and language details, continue here.", label: "Open Education", path: "/education-language" },
  },
  educationLanguage: {
    personality: "learning",
    path: "/education-language",
    label: "Learning",
    title: "Education and Language",
    subtitle: "Schools, integration courses, and parent confidence.",
    purpose:
      "This page will help families organize school enrollment, language learning, and parent support.",
    heroIcon: "GraduationCap",
    placeholder: "Image placeholder: school, books, and language learning",
    helpWith: ["German public schools", "Enrollment documents", "Language support", "Parent integration courses"],
    cards: [
      { title: "German public schools", tag: "School", icon: "School", description: "Placeholder explanation for school access, grade placement, and routines." },
      { title: "Enrollment documents", tag: "Documents", icon: "ClipboardList", description: "Dummy list area for identity, address, previous records, and translations." },
      { title: "Children's language support", tag: "Children", icon: "Languages", description: "Placeholder support for beginner German and school adaptation." },
      { title: "Parent integration courses", tag: "Parents", icon: "BookOpenCheck", description: "Replace later with course options, eligibility, cost, and registration." },
      { title: "Free language resources", tag: "Practice", icon: "Library", description: "Dummy area for apps, libraries, meetups, and daily family practice." },
      { title: "Parent support", tag: "Support", icon: "CircleHelp", description: "Placeholder for school meetings, translation help, and parent confidence." },
    ],
    feature: {
      title: "Learning pathway",
      icon: "Route",
      items: ["Enroll children", "Start parent language learning", "Use libraries and free tools", "Ask schools for support early"],
    },
    resources: sharedFutureResources,
    cta: { title: "Health documents often connect to school.", label: "Open Health", path: "/health-safety" },
  },
  healthSafety: {
    personality: "medicalCalm",
    showTrustNotice: true,
    path: "/health-safety",
    label: "Safety",
    title: "Health and Safety",
    subtitle: "Healthcare, insurance, emergency contacts, and wellbeing.",
    purpose:
      "This page will help families understand health access, urgent contacts, insurance placeholders, and mental health support.",
    heroIcon: "Hospital",
    placeholder: "Image placeholder: healthcare card and emergency contacts",
    helpWith: ["Healthcare access", "Health insurance placeholders", "Emergency contacts", "Mental health and trauma support"],
    cards: [
      { title: "Healthcare access", tag: "Health", icon: "Hospital", description: "Dummy guide for clinics, appointments, language support, and documents." },
      { title: "Health insurance", tag: "Insurance", icon: "ShieldCheck", description: "Placeholder for insurance pathways, eligibility, and official verification." },
      { title: "Emergency numbers", tag: "Emergency", icon: "PhoneCall", description: "Replace later with official emergency numbers and use cases." },
      { title: "Mental health support", tag: "Wellbeing", icon: "HeartPulse", description: "Dummy notes for trauma-aware care, counseling, stress, and family support." },
      { title: "Children and pregnancy care", tag: "Family", icon: "Baby", description: "Placeholder for pediatric care, vaccination documents, and pregnancy support." },
      { title: "Syrian consular support", tag: "Documents", icon: "BadgeHelp", description: "Placeholder for consular contact details and document support." },
    ],
    feature: {
      title: "Calm safety plan",
      icon: "ShieldCheck",
      items: ["Keep emergency contacts visible", "Prepare medication notes", "Ask for interpretation support", "Treat mental health as part of safety"],
    },
    resources: sharedFutureResources,
    cta: { title: "Wellbeing also grows through community.", label: "Explore Community", path: "/community-entertainment" },
  },
  communityEntertainment: {
    personality: "cityGuide",
    path: "/community-entertainment",
    label: "Belonging",
    title: "Community and Entertainment",
    subtitle: "Build a social life, family routines, and local confidence.",
    purpose:
      "This page will help families discover parks, libraries, sports, museums, and community meetups.",
    heroIcon: "Trees",
    placeholder: "Image placeholder: Munich city activities and family outings",
    helpWith: ["Parks and low-cost outings", "Football and sports", "Museums and libraries", "Arab and Syrian meetups"],
    cards: [
      { title: "English Garden", tag: "Parks", icon: "Trees", description: "Placeholder for walking, children, low-cost leisure, and green space." },
      { title: "Olympic Park", tag: "Activities", icon: "LandPlot", description: "Dummy card for views, sports, events, and outdoor family time." },
      { title: "Allianz Arena", tag: "Football", icon: "Trophy", description: "Placeholder for football culture, tours, match-day planning, and transport." },
      { title: "Museums and libraries", tag: "Learning", icon: "Landmark", description: "Replace later with child-friendly programs and free-entry options." },
      { title: "Sports clubs", tag: "Youth", icon: "Activity", description: "Dummy area for youth activities, sports, and friendship-building." },
      { title: "Arab and Syrian meetups", tag: "Community", icon: "MessagesSquare", description: "Placeholder for community events, parent groups, and support networks." },
    ],
    feature: {
      title: "Belonging routine",
      icon: "CalendarHeart",
      items: ["One park or library visit weekly", "One community contact", "One family activity", "One child-friendly social space"],
    },
    resources: sharedFutureResources,
    cta: { title: "For hard moments, use the challenge guide.", label: "Open Challenges", path: "/challenges-solutions" },
  },
};

// Team content inserted here - update with final research if needed.
export const challenges = [
  {
    title: "Language Barrier",
    category: "Language",
    icon: "Languages",
    challenge:
      "Many Syrian families arrive without speaking German, making it difficult to work, study, communicate with schools, visit doctors, or handle daily tasks.",
    solutionGroups: [
      {
        title: "Language support",
        items: [
          "Enroll in government-funded integration courses through BAMF.",
          "These courses teach German from beginner levels and explain how to live in Germany.",
          "Courses are free or low-cost for eligible refugees and migrants.",
          "Families can search for nearby courses using official tools like BAMF-NAvI.",
          "Use additional free learning tools such as Goethe-Institut, Deutsche Welle, and Duolingo.",
        ],
      },
    ],
    helpfulNote: "This helps families become independent faster and improves job chances.",
    usefulLinks: [
      { label: "BAMF Integration Courses", url: "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" },
      { label: "Goethe-Institut", url: "https://www.goethe.de/en/spr/ueb.html" },
      { label: "Deutsche Welle German Courses", url: "https://learngerman.dw.com/en/learn-german/s-9528" },
      { label: "Duolingo German", url: "https://www.duolingo.com/course/de/en/Learn-German" },
    ],
    relatedPages: [{ label: "Education and Language", path: "/education-language" }],
  },
  {
    title: "Finding Housing",
    category: "Housing",
    icon: "Home",
    challenge:
      "Munich is one of the most expensive cities in Germany, and it can be difficult for refugee families to find affordable apartments quickly.",
    solutionGroups: [
      {
        title: "Temporary housing",
        items: [
          "The city of Munich provides temporary accommodation for refugees, including shared apartments and housing projects.",
          "This is where families may stay during their first weeks or months.",
        ],
      },
      {
        title: "Online rental platforms",
        items: [
          "HousingAnywhere can be used to search for apartments, shared rooms, and studios.",
          "Many listings are furnished or include utilities.",
          "Wunderflats can help families find temporary furnished apartments, especially for the first 1-6 months.",
        ],
      },
      {
        title: "Affordable or special housing options",
        items: [
          "Some housing projects and organizations provide cheaper or more accessible accommodation for migrants and refugees.",
          "AWO Munich housing can be included as a future source placeholder.",
        ],
      },
    ],
    usefulLinks: [
      { label: "Munich refugee accommodation support", url: "https://stadt.muenchen.de/service/en-GB/info/fachbereich-betreuung-integration-und-unterbringung-von-gefluchteten/10426658/" },
      { label: "HousingAnywhere Munich", url: "https://housinganywhere.com/s/Munich--Germany" },
      { label: "Wunderflats", url: "https://wunderflats.com/en" },
      { label: "Accommodation Munich PDF placeholder", url: "https://jugendinfo-muenchen.de/documents/389/Accommodation_Munich_10_2025d_PDF.pdf" },
    ],
    relatedPages: [{ label: "Accommodation and Living Costs", path: "/accommodation" }],
  },
  {
    title: "Finding a Job",
    category: "Work",
    icon: "BriefcaseBusiness",
    challenge:
      "Many Syrian refugees struggle to find jobs in Munich because of limited German, lack of local experience, limited professional networks, or difficulty accessing the German job market.",
    solutionGroups: [
      {
        title: "Jobcenter Munich",
        items: [
          "Provides job placement support.",
          "Gives access to job listings.",
          "Offers financial support while unemployed, such as Bürgergeld.",
          "Provides personal advisors.",
        ],
      },
      {
        title: "Federal Employment Agency",
        items: [
          "Provides Germany's largest official job database.",
          "Offers career guidance and support with job applications.",
        ],
      },
      {
        title: "Munich Onboarding Hub",
        items: ["Helps newcomers with job search guidance, CV preparation, and connecting to employers."],
      },
      {
        title: "AMIGA Career Center",
        items: ["Offers job coaching, networking events, and support for international professionals and migrant women."],
      },
    ],
    usefulLinks: [
      { label: "Jobcenter Munich", url: "https://jobcenter-muenchen.de/" },
      { label: "Federal Employment Agency", url: "https://www.arbeitsagentur.de/en" },
      { label: "Munich Onboarding Hub", url: "https://www.make-it-in-munich.com/onboarding/" },
      { label: "AMIGA Career Center", url: "https://www.amiga-muenchen.de/international/" },
    ],
    relatedPages: [{ label: "Family Integration", path: "/family-integration" }],
  },
  {
    title: "Education for Children",
    category: "Education",
    icon: "School",
    challenge:
      "Syrian children may struggle to enter school because of language barriers and differences between the Syrian and German education systems.",
    solutionGroups: [
      {
        title: "Munich school system",
        items: [
          "Public education is available.",
          "Schools provide support classes for non-German-speaking students.",
          "Children may be placed in integration or preparation classes to help them adjust.",
        ],
      },
      {
        title: "Make it in Munich family education guide",
        items: [
          "Helps parents understand the German school system.",
          "Explains required documents.",
          "Helps families prepare for enrollment.",
        ],
      },
    ],
    usefulLinks: [
      { label: "Munich School Education", url: "https://www.muenchen.de/en/living/school-education" },
      { label: "Make it in Munich Educational System", url: "https://www.make-it-in-munich.com/living-in-munich/family-life/educational-system/" },
    ],
    relatedPages: [{ label: "Education and Language", path: "/education-language" }],
  },
  {
    title: "Healthcare Access",
    category: "Health",
    icon: "Hospital",
    challenge:
      "Refugee families may not understand how the healthcare system works or how to access medical help.",
    solutionGroups: [
      {
        title: "Asylum Info Germany",
        items: [
          "Explains healthcare rights for refugees.",
          "Explains what services are covered.",
        ],
      },
      {
        title: "116117",
        items: ["A free medical helpline in Germany for non-emergency medical help."],
      },
      {
        title: "BAfF",
        items: ["Provides mental health support and trauma counseling for refugees."],
      },
    ],
    usefulLinks: [
      { label: "Asylum Info Germany Healthcare", url: "https://asylum-info-germany.de/en/healthcareforrefugees" },
      { label: "116117 Medical Helpline", url: "https://www.116117.de/en/index.php" },
      { label: "BAfF", url: "https://www.baff-zentren.org/en/" },
    ],
    relatedPages: [{ label: "Health and Safety", path: "/health-safety" }],
  },
  {
    title: "Cultural Adjustment and Belonging",
    category: "Culture",
    icon: "HeartHandshake",
    challenge:
      "Syrian families may feel isolated or struggle to adapt to German society while maintaining their Syrian identity.",
    solutionGroups: [
      {
        title: "Islamic Center Munich",
        items: [
          "Provides prayer space.",
          "Offers community activities.",
          "Helps families maintain religious and cultural practices.",
        ],
      },
      {
        title: "Syrian and Arab community groups",
        items: [
          "Families can meet other Syrians and Arabs.",
          "They can build friendships and reduce loneliness.",
        ],
      },
    ],
    usefulLinks: [
      { label: "Islamic Center Munich", url: "https://www.islamisches-zentrum-muenchen.de/" },
      { label: "Munich Arab Expats Meetup", url: "https://www.meetup.com/munich-arab-expats-meetup/" },
      { label: "Syrians in Munich Meetup", url: "https://www.meetup.com/de-de/munich_syrians/" },
    ],
    relatedPages: [
      { label: "Food, Faith, and Culture", path: "/food-faith-culture" },
      { label: "Community and Entertainment", path: "/community-entertainment" },
    ],
  },
  {
    title: "Discrimination and Islamophobia",
    category: "Rights",
    icon: "ShieldAlert",
    challenge:
      "Some Syrian refugees may face discrimination in work, housing, public life, or social situations. Muslim women who wear hijab may also worry about discrimination in the workplace.",
    solutionGroups: [
      {
        title: "Federal Anti-Discrimination Agency",
        items: [
          "Offers information and support in discrimination cases.",
          "Helps refugees understand their rights.",
          "Provides guidance for reporting or responding to discrimination.",
        ],
      },
      {
        title: "Practical advice",
        items: [
          "Keep records of discriminatory incidents.",
          "Seek advice from official anti-discrimination services.",
          "Connect with supportive community organizations.",
          "Learn about workplace rights in Germany.",
        ],
      },
    ],
    usefulLinks: [
      { label: "Federal Anti-Discrimination Agency", url: "https://www.antidiskriminierungsstelle.de/EN" },
    ],
    relatedPages: [
      { label: "Challenges and Solutions", path: "/challenges-solutions" },
      { label: "Family Integration", path: "/family-integration" },
    ],
  },
  {
    title: "Mental Health and Trauma",
    category: "Mental Health",
    icon: "HeartPulse",
    challenge:
      "Many Syrian refugees experience trauma, stress, anxiety, or emotional exhaustion because of war, displacement, family separation, or uncertainty.",
    solutionGroups: [
      {
        title: "BAfF",
        items: [
          "Provides therapy and psychological support for refugees.",
          "Connects refugees with psychosocial centers.",
        ],
      },
      {
        title: "Healthcare system support",
        items: [
          "Refugees can access doctors through public healthcare, local clinics, and social support systems depending on their residence status.",
        ],
      },
    ],
    helpfulNote: "Mental health support is not a weakness. It is part of rebuilding life after displacement.",
    usefulLinks: [
      { label: "BAfF", url: "https://www.baff-zentren.org/en/" },
      { label: "Asylum Info Germany Healthcare", url: "https://asylum-info-germany.de/en/healthcareforrefugees" },
    ],
    relatedPages: [{ label: "Health and Safety", path: "/health-safety" }],
  },
  {
    title: "Financial Struggles",
    category: "Finance",
    icon: "HandCoins",
    challenge:
      "Families may not have stable income when they first arrive in Munich.",
    solutionGroups: [
      {
        title: "Bürgergeld",
        items: ["Monthly financial support for basic needs for eligible people."],
      },
      {
        title: "Kindergeld",
        items: ["Financial support for children."],
      },
      {
        title: "Jobcenter Munich",
        items: ["Provides financial support, rent assistance, and job help."],
      },
    ],
    usefulLinks: [
      { label: "Bürgergeld / Citizen's Income", url: "https://www.arbeitsagentur.de/en/citizens-income" },
      { label: "Child Benefit / Kindergeld", url: "https://www.arbeitsagentur.de/en/family-and-children/child-benefit" },
      { label: "Jobcenter Munich", url: "https://jobcenter-muenchen.de/" },
    ],
    relatedPages: [
      { label: "Accommodation and Living Costs", path: "/accommodation" },
      { label: "Family Integration", path: "/family-integration" },
    ],
  },
];

export const challengesPage = {
  hero: {
    label: "Supportive problem solving",
    title: "Challenges and Solutions",
    subtitle:
      "Moving to Munich can bring difficulties, but each challenge can be handled step by step with the right support, resources, and community.",
    purpose: "This page names common challenges without making the family feel alone.",
    heroIcon: "ShieldAlert",
    placeholder: "Image placeholder: challenge and solution cards",
  },
  supportBanner: {
    label: "You are not alone",
    title: "Every challenge below has a next step.",
    text:
      "This page is serious but hopeful. It connects each problem with practical actions, useful links, and related guide pages.",
  },
  categories: ["All", "Language", "Housing", "Work", "Education", "Health", "Culture", "Rights", "Mental Health", "Finance"],
  header: {
    label: "Hopeful solutions",
    title: "Difficult moments can be planned for",
    intro: "Use the category chips to focus on one area, then expand a card for solutions and resources.",
  },
  cta: {
    title: "Not sure where to begin?",
    text: "Use the Family Plan tool to get a personalized first-step guide based on your family's needs.",
    label: "Create Family Plan",
    path: "/family-plan",
  },
};

export const familyPlanPage = {
  hero: {
    label: "Consultant tool",
    title: "Family Plan",
    subtitle: "Generate a personalized dummy relocation plan with React state only.",
    purpose: "The result reads like a printable consultant report and is ready for future research-backed logic.",
    heroIcon: "ClipboardCheck",
    placeholder: "Image placeholder: consultant report card",
  },
  reportPreview: {
    label: "Report style",
    title: "Professional consultation workspace",
    intro: "The wizard below is designed to feel like a real consultant intake and report generator, while all text remains dummy and editable.",
    cards: [
      { title: "Family profile", icon: "UsersRound", description: "Placeholder area ready for future family-summary logic." },
      { title: "Priority cards", icon: "ShieldCheck", description: "Placeholder area ready for future risk and urgency scoring." },
      { title: "Printable checklists", icon: "ClipboardList", description: "Placeholder area ready for future research-backed checklist logic." },
    ],
  },
  cta: { title: "See how this plan fits into the full timeline.", label: "Open Family Journey", path: "/family-journey" },
};

export const pagePersonalityBlocks = {
  documents: {
    label: "Document desk",
    title: "Formal preparation board",
    intro: "A consultant-style area for future official requirements, document tables, appointment links, and arrival checklists.",
    accent: "red",
    mapLabel: "Route map placeholder: application location -> Munich airport",
    columns: ["Document", "Purpose", "Status"],
    rows: [
      ["Passport copies", "Identity and travel file", "To be verified"],
      ["Civil records", "Family application folder", "To be translated"],
      ["Appointment confirmation", "Embassy/application visit", "To be updated"],
      ["Arrival address", "First-week registration", "Placeholder"],
    ],
    quickLinks: ["Official appointment link", "Translation rules link", "Arrival checklist link"],
  },
  housingDashboard: {
    label: "Housing dashboard",
    title: "Budget and living-cost workspace",
    intro: "A structured dashboard for future rent ranges, monthly expenses, map notes, and support resources.",
    accent: "gold",
    mapLabel: "Map placeholder: Munich neighborhoods and transport rings",
    columns: ["Monthly item", "Placeholder estimate", "Notes"],
    rows: [
      ["Rent", "Add range later", "Compare by district and family size"],
      ["Utilities", "Add estimate later", "Heating, electricity, internet"],
      ["Groceries", "Add estimate later", "Include halal and Syrian staples"],
      ["Transport", "Add estimate later", "Family passes and school commute"],
    ],
    quickLinks: ["Rent research link", "Furniture support link", "Budget worksheet link"],
  },
  culturalPattern: {
    label: "Cultural warmth",
    title: "Food, faith, and identity map",
    intro: "A warmer page surface with subtle pattern blocks for future restaurant, grocery, mosque, and community data.",
    accent: "green",
    mapLabel: "Map placeholder: halal groceries, mosques, Syrian restaurants",
    columns: ["Need", "Future data", "Family note"],
    rows: [
      ["Halal food", "Add verified grocery list", "Comfort and daily routine"],
      ["Prayer spaces", "Add mosque details", "Faith and community"],
      ["Syrian food", "Add restaurants", "Taste of home"],
      ["Arabic community", "Add meetups", "Language and belonging"],
    ],
    quickLinks: ["Restaurant list link", "Mosque directory link", "Community event link"],
  },
  familySupport: {
    label: "Family support cards",
    title: "Father, mother, children, and whole-family balance",
    intro: "A family-centered workspace for future services, rights, mentoring, activities, and emotional support data.",
    accent: "green",
    mapLabel: "Image placeholder: family support network",
    columns: ["Family member", "Support focus", "Future resource"],
    rows: [
      ["Father", "Work and recognition", "Mentoring link"],
      ["Mother", "Language, work, community", "Women's support link"],
      ["Children", "School and friendships", "Youth activity link"],
      ["Whole family", "Stress and routines", "Counseling/support link"],
    ],
    quickLinks: ["Work support link", "Parent group link", "Family rights link"],
  },
  learning: {
    label: "Learning planner",
    title: "Academic and language support board",
    intro: "A clean learning surface for future school rules, enrollment documents, integration courses, and parent resources.",
    accent: "gold",
    mapLabel: "Image placeholder: school and language pathway",
    columns: ["Learning area", "Next action", "Placeholder source"],
    rows: [
      ["School enrollment", "Collect records and translations", "City/school link"],
      ["Children's German", "Ask about school support", "Language support link"],
      ["Parent courses", "Compare integration options", "Course provider link"],
      ["Free practice", "Use libraries and apps", "Resource list link"],
    ],
    quickLinks: ["School enrollment link", "Language course link", "Library tools link"],
  },
  medicalCalm: {
    label: "Care board",
    title: "Calm healthcare and safety planner",
    intro: "A reassuring medical-style workspace for future insurance, emergency, clinic, child care, and mental health data.",
    accent: "green",
    mapLabel: "Map placeholder: clinics, emergency points, and family services",
    columns: ["Care need", "Preparation", "Future source"],
    rows: [
      ["Health insurance", "List questions and documents", "Official insurance link"],
      ["Emergency contacts", "Add verified numbers", "Emergency source link"],
      ["Mental health", "Find trauma-aware support", "Counseling link"],
      ["Children's care", "Prepare vaccination records", "Pediatric link"],
    ],
    quickLinks: ["Clinic access link", "Emergency numbers link", "Mental health support link"],
  },
  cityGuide: {
    label: "City guide",
    title: "Community and activity map",
    intro: "A lively guide surface for future parks, libraries, museums, sports clubs, football, and meetup data.",
    accent: "red",
    mapLabel: "Map placeholder: parks, libraries, museums, and community meetups",
    columns: ["Place/activity", "Family use", "Future link"],
    rows: [
      ["Parks", "Low-cost family rest", "Map/list link"],
      ["Libraries", "Language and study space", "Library link"],
      ["Sports clubs", "Children's friendships", "Youth activity link"],
      ["Meetups", "Arabic and Syrian community", "Community link"],
    ],
    quickLinks: ["City activity link", "Youth sports link", "Meetup calendar link"],
  },
};

export const familyJourney = {
  hero: {
    label: "Roadmap",
    title: "Family Journey",
    subtitle: "A clear timeline from preparation to long-term stability.",
    purpose:
      "This page turns the migration process into manageable stages with tasks and emotional reminders.",
    heroIcon: "Route",
    placeholder: "Image placeholder: roadmap from Syria/Egypt to Munich",
  },
  stages: [
    { title: "Before Arrival", page: "/visa-travel", goal: "Understand the route and collect core documents.", tasks: ["Create family document folder", "List questions for official sources", "Estimate travel and first-month costs"], reminder: "Preparation is a way to reduce fear, not a demand to know everything." },
    { title: "Visa Preparation", page: "/visa-travel", goal: "Track appointments, translations, and application steps.", tasks: ["Prepare copies and translations", "Check official appointment requirements", "Save all confirmations"], reminder: "Move one document at a time." },
    { title: "Travel to Munich", page: "/visa-travel", goal: "Make arrival day calm and practical.", tasks: ["Confirm accommodation", "Pack document folder", "Save offline contacts"], reminder: "The first day only needs to be safe, not perfect." },
    { title: "First Week", page: "/accommodation", goal: "Handle essentials and urgent family needs.", tasks: ["Phone and transport", "Temporary housing", "Registration and appointments"], reminder: "Small routines help children and parents feel grounded." },
    { title: "First Month", page: "/education-language", goal: "Begin school, healthcare, language, and housing routines.", tasks: ["School enrollment", "Healthcare access", "Language options"], reminder: "Stability grows from repeated small steps." },
    { title: "First Three Months", page: "/family-integration", goal: "Build work, language, community, and confidence.", tasks: ["CV and recognition questions", "Community activities", "Weekly family check-ins"], reminder: "Integration is a family process." },
    { title: "First Year", page: "/community-entertainment", goal: "Strengthen belonging and long-term plans.", tasks: ["Friendships and activities", "Work or study pathways", "Housing stability"], reminder: "Belonging can be built without forgetting home." },
    { title: "Long-Term Stability", page: "/challenges-solutions", goal: "Protect rights, identity, and family wellbeing.", tasks: ["Know support channels", "Plan education/work growth", "Preserve Syrian identity"], reminder: "A future in Munich can still carry Syrian values." },
  ],
  mapPlaceholder: {
    icon: "Route",
    label: "Map placeholder: full family roadmap",
    caption: "Replace with a horizontal/vertical journey diagram or custom class presentation graphic later.",
  },
  cta: { title: "Need sources for the final research version?", label: "Open Sources", path: "/sources" },
};

export const sourcesPage = {
  hero: {
    label: "Research library",
    title: "Sources / Research Placeholder",
    subtitle: "A structured place for your team to add verified sources later.",
    purpose: "This page intentionally uses dummy placeholders only. Add official links, dates, and research notes after verification.",
    heroIcon: "Library",
    placeholder: "Image placeholder: organized research library",
  },
  header: {
    label: "To be updated",
    title: "Future source cards",
    intro: "Each card includes a category, short description, link placeholder, and update tag.",
  },
  metadataColumns: ["Source title", "Category", "Verification date", "Research note"],
  cta: { title: "Return to the main guide overview.", label: "Back to Home", path: "/" },
};

export const sourceLibrary = [
  "Government sources",
  "Embassy and visa sources",
  "Munich city sources",
  "Housing and cost sources",
  "Work and education sources",
  "Health and safety sources",
  "Community and culture sources",
  "Academic/research sources",
].map((category) => ({
  title: `${category} placeholder`,
  category,
  description: "Add verified source title, summary, update date, and notes after the research phase.",
  linkLabel: "Link placeholder",
  tag: "To be updated",
}));

export const familyPlanData = {
  wizardSteps: ["Family Basics", "Parents", "Children", "Needs", "Result"],
  stepDescriptions: [
    "Start with the family's route and timing.",
    "Map each parent's language and work priorities.",
    "Prepare school, documents, and adaptation needs.",
    "Choose the practical and emotional concerns that matter most.",
    "Review the generated consultant-style report card.",
  ],
  travelStages: ["Still researching", "Preparing documents", "Visa appointment booked", "Visa approved", "Already arrived"],
  germanLevels: ["Beginner", "Some basics", "Intermediate", "Advanced"],
  motherPriorities: ["Work immediately", "Study German first", "Volunteer", "Focus on family for now"],
  childAgeRanges: ["0-5", "6-10", "11-14", "15-18"],
  concernLevels: ["Low", "Medium", "High"],
  budgetRanges: ["Low / needs careful support", "Planning carefully", "Moderate savings", "Flexible budget"],
  culturalNeeds: ["Halal food", "Mosque", "Arabic-speaking community", "Hijab-friendly workplace concern"],
  mainConcerns: ["Visa", "Housing", "School", "Work", "Healthcare", "Language", "Discrimination", "Community"],
  regulatedProfessionKeywords: ["doctor", "nurse", "teacher", "engineer", "lawyer", "pharmacist", "dentist", "architect", "midwife"],
  concernPages: {
    Visa: ["Visa and Travel", "Sources / Research Placeholder"],
    Housing: ["Accommodation and Living Costs", "Challenges and Solutions"],
    School: ["Education and Language", "Family Integration"],
    Work: ["Family Integration", "Education and Language"],
    Healthcare: ["Health and Safety", "Sources / Research Placeholder"],
    Language: ["Education and Language", "Community and Entertainment"],
    Discrimination: ["Challenges and Solutions", "Community and Entertainment"],
    Community: ["Food, Faith, and Culture", "Community and Entertainment"],
  },
  reportTemplates: {
    defaultPriorities: {
      helpful: [
        "Create a family map of nearby parks, libraries, halal groceries, mosques, and community spaces.",
        "Keep Syrian routines visible at home through Arabic, food traditions, family stories, and familiar celebrations.",
        "Choose one trusted contact or organization to ask for help when a form, letter, or appointment feels confusing.",
      ],
    },
    checklists: {
      beforeArrival: [
        "Create one shared document folder for passports, civil records, translations, school papers, photos, and appointment notes.",
        "Prepare a family budget worksheet that separates travel, first housing, transport, food, winter clothing, and document costs.",
      ],
      firstWeek: [
        "Confirm temporary accommodation, phone access, local transport, and basic groceries before scheduling extra appointments.",
        "Keep printed and digital copies of important documents available for city, school, health, and support visits.",
      ],
      firstMonth: [
        "Set a weekly family check-in to review appointments, school progress, language learning, housing, and stress levels.",
        "Choose one low-cost family activity in Munich each week to make the city feel more familiar.",
      ],
    },
    rules: {
      syriaLocation: {
        urgent: "Confirm where visa applications can currently be submitted and which official appointment route applies.",
        beforeArrival: "Add a placeholder visa-route note for families starting from Syria, including where applications may need to be submitted.",
        section: "Visa & Travel",
      },
      egyptLocation: {
        important: "Prepare a Cairo-to-Munich travel checklist with airport timing, luggage priorities, document copies, and arrival contacts.",
        beforeArrival: "Create a Cairo/Munich travel preparation sheet with flight details, baggage needs, and first-night accommodation contacts.",
        section: "Visa & Travel",
      },
      beginnerGerman: {
        urgent: "Prioritize German language support early, especially phrases for appointments, transport, school, and housing messages.",
        firstMonth: "Register or shortlist integration courses, library language tools, and weekly family German practice routines.",
        section: "Education & Language",
      },
      children: {
        urgent: "Prepare school enrollment, vaccination, previous school records, translations, and child identity documents.",
        firstWeek: "Contact school or education support offices and ask what documents are needed for enrollment.",
        firstMonth: "Build a gentle school routine with language practice, rest, activities, and emotional check-ins.",
        sections: ["Education & Language", "Health & Safety"],
      },
      hijabConcern: {
        important: "Review workplace inclusion, discrimination reporting paths, and hijab-friendly professional support placeholders.",
        section: "Challenges & Solutions",
      },
      lowBudget: {
        urgent: "Prioritize financial support research, second-hand furniture options, low-cost groceries, and emergency household essentials.",
        beforeArrival: "Make a low-budget starter list for bedding, kitchen basics, winter clothing, transport, and second-hand furniture.",
        section: "Housing & Living Costs",
      },
      highHousingConcern: {
        urgent: "Plan temporary accommodation first and compare outer districts with reliable transport instead of focusing only on central Munich.",
        firstWeek: "Use a housing tracker for temporary accommodation, viewing appointments, required documents, and follow-up messages.",
        section: "Housing & Living Costs",
      },
      motherStudiesFirst: {
        important: "Give the mother a protected language-learning path before work pressure, with community activities for confidence.",
        firstMonth: "Shortlist integration courses, women's community activities, library programs, and Arabic-speaking support spaces.",
        section: "Food, Faith & Culture",
      },
      regulatedProfession: {
        important: "Add a qualification recognition placeholder for the father's profession before setting long-term job expectations.",
        firstMonth: "Prepare a professional folder with certificates, translations, CV notes, and recognition questions for the father's field.",
        section: "Family Integration",
      },
      highSchoolConcern: {
        urgent: "Treat school placement and emotional adaptation as a high-priority family stability issue.",
      },
      healthcareConcern: {
        urgent: "Prepare health insurance questions, medication notes, emergency contacts, and clinic access placeholders.",
      },
    },
    emotionalSupport:
      "This dummy plan treats relocation as both practical and emotional work. Move one step at a time, protect rest, keep family conversations gentle, and ask for help early rather than waiting until stress becomes overwhelming.",
    emptyPriority: "No special priority added from the selected answers.",
    noChildrenNote:
      "No children are selected, so the generated plan will focus more on parents, housing, language, and community setup.",
  },
  initialForm: {
    location: "Syria",
    destination: "Munich",
    familySize: "4",
    travelStage: "Still researching",
    fatherProfession: "",
    fatherGermanLevel: "Beginner",
    motherProfession: "",
    motherGermanLevel: "Beginner",
    motherPriority: "Study German first",
    childrenCount: "2",
    childAgeRange: "6-10",
    schoolConcernLevel: "Medium",
    childrenGermanLevel: "Beginner",
    budgetRange: "Planning carefully",
    housingConcernLevel: "Medium",
    culturalNeeds: ["Halal food", "Arabic-speaking community"],
    mainConcern: "Housing",
  },
};
