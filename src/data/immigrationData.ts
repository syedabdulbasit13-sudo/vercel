import { CountryInfo, ImmigrationService } from '../types';

export const COMPANY_CONTACT = {
  name: "Career Recruit and Immigration Consultancy",
  shortName: "Career Recruit",
  registeredName: "Career Recruit Immigration",
  overview: "Career Recruit Immigration registered in Canada and Pakistan since 2021, offers expert Immigrations, Educations and Employment consultations. We assist clients with Residency, Business Immigration, Study abroad and Visit Visa opportunities Worldwide.",
  establishedYear: "2021",
  registeredCountries: ["Canada", "Pakistan"],
  phone: "+92-320-2216612",
  phoneDisplay: "+92 320 2216612",
  whatsappNumber: "923202216612",
  email: "info@careerglobalrecruit.com",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM (PKT)",
  address: "Main Commercial Avenue, Karachi, Pakistan",
  whatsappUrl: (message?: string) => {
    const defaultMsg = "Hello Career Recruit and Immigration Consultancy, I am interested in work visa and immigration consultation.";
    return `https://wa.me/923202216612?text=${encodeURIComponent(message || defaultMsg)}`;
  }
};

export const OFFICIAL_NOTICE = {
  title: "Important Notice & Official Transparency",
  text: "Visa approval is subject to the decision of the relevant government immigration authority. We provide consultancy and application-support services and do not guarantee visa approval or employment.",
  points: [
    "Government Authority Sovereignty: Decisions are exclusively made by official departments (USCIS, IRCC, Australia Dept of Home Affairs, INZ, EU member state ministries).",
    "Application Support & Advisory: We assess eligibility, prepare documentation, guide legal compliance, and maximize profile strength.",
    "Zero False Promises: We strictly reject guaranteed visas or forged documents. We adhere to professional immigration ethics."
  ]
};

export const COUNTRIES_DATA: CountryInfo[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    badge: 'North America',
    taglineBullet: 'Work Visas • Employment-Based Immigration • Skilled Workers',
    highlightSummary: 'Diverse pathways for specialized tech, healthcare, executive leadership, and employment-based green card petitions.',
    overview: 'The United States offers prestigious employment-based immigration streams and non-immigrant work visas for skilled professionals, managers, researchers, and specialized talent worldwide.',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1000&q=80',
    popularPathways: [
      {
        code: 'H-1B',
        name: 'Specialty Occupation Worker',
        description: 'For bachelor degree holders or equivalent in specialized fields like Software Engineering, Finance, Architecture, and Healthcare.',
        keyCriteria: ['Job offer from US employer', 'Labor Condition Application (LCA)', 'Minimum Bachelor degree in specialty field'],
        targetAudience: 'Skilled professionals and technical specialists'
      },
      {
        code: 'EB-1',
        name: 'Priority Workers (First Preference)',
        description: 'For individuals with extraordinary ability in sciences, arts, education, business, outstanding professors/researchers, and multinational executives.',
        keyCriteria: ['Extraordinary ability evidence or multinational manager status', 'No labor certification needed for EB-1A'],
        targetAudience: 'Top leaders, researchers, executive transferees'
      },
      {
        code: 'EB-2 / NIW',
        name: 'Advanced Degree & National Interest Waiver',
        description: 'Permanent residency pathway for professionals holding an advanced degree or exceptional ability, with self-petition available under NIW.',
        keyCriteria: ['Master degree or Bachelor + 5 yrs experience', 'National Interest substantial merit justification for NIW'],
        targetAudience: 'Engineers, doctors, researchers, scientists'
      },
      {
        code: 'EB-3',
        name: 'Skilled Workers, Professionals & Other Workers',
        description: 'Employer-sponsored permanent residency for skilled workers with minimum 2 years training/experience and bachelor degree professionals.',
        keyCriteria: ['PERM Labor Certification approved by DOL', 'Full-time permanent US job offer'],
        targetAudience: 'Skilled trades, technicians, and degreed professionals'
      },
      {
        code: 'L-1A / L-1B',
        name: 'Intracompany Transferee',
        description: 'Allows international companies to transfer executives, managers (L-1A), or specialized knowledge personnel (L-1B) to US offices.',
        keyCriteria: ['1 year continuous employment with foreign affiliate', 'Executive, managerial, or specialized knowledge role'],
        targetAudience: 'Corporate executives and multinational staff'
      }
    ],
    keyRequirements: [
      'Verified academic credentials (WES or equivalent evaluation)',
      'Sponsoring US employer with verified petition readiness',
      'Proof of specialty occupation and pertinent domain experience',
      'Clean security background and consular documentation compliance'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    badge: 'North America',
    taglineBullet: 'Work Permits • Employer-Specific Work Permit • Skilled Immigration',
    highlightSummary: 'Fast-track points pathways (Express Entry, PNP) alongside LMIA-backed employer-specific work permits.',
    overview: 'Canada remains a top destination for overseas workers, with transparent immigration programs categorized under Express Entry, Provincial Nominee Programs (PNP), and Temporary Foreign Worker streams.',
    heroImage: 'https://images.unsplash.com/photo-1517935703635-2717090c2226?auto=format&fit=crop&w=1000&q=80',
    popularPathways: [
      {
        code: 'LMIA WP',
        name: 'Employer-Specific Work Permit',
        description: 'Enables Canadian employers to hire foreign talent with a positive Labour Market Impact Assessment (LMIA) confirming no Canadian is available for the role.',
        keyCriteria: ['Valid Canadian job offer', 'Approved LMIA or LMIA-exempt code', 'Language & education proof for TEER category'],
        targetAudience: 'Tradespeople, IT specialists, healthcare staff, engineers'
      },
      {
        code: 'EE - FSWP',
        name: 'Federal Skilled Worker Program',
        description: 'Comprehensive Ranking System (CRS) points-based immigration for skilled workers with foreign work experience.',
        keyCriteria: ['Minimum 67/100 eligibility points', 'CLB 7 English/French', 'At least 1 year continuous TEER 0, 1, 2, or 3 experience'],
        targetAudience: 'Degree holders with professional background'
      },
      {
        code: 'PNP Streams',
        name: 'Provincial Nominee Programs',
        description: 'Specific provinces (Ontario, BC, Alberta, Saskatchewan, Manitoba) nominate applicants matching targeted regional labor shortages.',
        keyCriteria: ['Provincial nomination certificate (awards +600 CRS points)', 'Regional occupational in-demand list match'],
        targetAudience: 'Regional specialists, tech workers, in-demand trades'
      },
      {
        code: 'GSS',
        name: 'Global Skills Strategy (2-Week Processing)',
        description: 'Accelerated 2-week work permit processing for high-skilled tech professionals and senior talent holding LMIA-exempt or Global Talent Stream offers.',
        keyCriteria: ['Employer approved under GTS Category A or B', 'Eligible NOC/TEER code'],
        targetAudience: 'Software engineers, AI engineers, executive tech leads'
      }
    ],
    keyRequirements: [
      'Educational Credential Assessment (ECA via WES/ICAS)',
      'Language proficiency (IELTS General or CELPIP minimum CLB score)',
      'Proof of verifiable work experience with detailed reference letters',
      'Police clearances and medical examination by panel physicians'
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    badge: 'Oceania',
    taglineBullet: 'Skilled Migration • Employer Sponsored Visas • Regional Work Visas',
    highlightSummary: 'Current official framework: Skills in Demand Subclass 482, Skilled Independent 189, Skilled Nominated 190, and Regional 491/494.',
    overview: 'Australia operates one of the world’s most structured immigration systems. Under the Australian Migration Strategy, employer sponsorship and regional skilled pathways offer direct tracks to permanent residence.',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80',
    popularPathways: [
      {
        code: 'Subclass 482',
        name: 'Skills in Demand (Temporary Skill Shortage)',
        description: 'Current official employer-sponsored visa featuring the Core Skills, Specialist Skills, and Essential Skills streams with a clear pathway to permanent residency (ENS 186).',
        keyCriteria: ['Sponsorship by approved Australian employer', 'Occupation on relevant skilled occupation list', 'Minimum 2 years relevant work experience', 'Skills assessment (where required) and English competency'],
        targetAudience: 'Experienced professionals with an Australian job offer'
      },
      {
        code: 'Subclass 189',
        name: 'Skilled Independent Visa',
        description: 'Points-tested permanent residence visa that does not require employer or state/territory sponsorship. Live and work anywhere in Australia.',
        keyCriteria: ['Occupation on Medium and Long-term Strategic Skills List (MLTSSL)', 'Positive skills assessment', 'Minimum 65 points on points test', 'Under 45 years of age and Competent English'],
        targetAudience: 'High-scoring independent professionals'
      },
      {
        code: 'Subclass 190',
        name: 'Skilled Nominated Visa',
        description: 'State or territory nominated points-tested permanent residence visa. Awards an automatic +5 points towards your invitation score.',
        keyCriteria: ['Nomination by an Australian State or Territory government', 'Occupation on state priority list', 'Positive skills assessment and minimum 65 points'],
        targetAudience: 'Skilled individuals nominated by specific Australian states'
      },
      {
        code: 'Subclass 491 & 494',
        name: 'Skilled Regional Pathways',
        description: 'Subclass 491 (Skilled Work Regional) awards +15 points for regional state/family nomination. Subclass 494 is Employer Sponsored Regional.',
        keyCriteria: ['Commitment to live and work in designated regional areas', 'Positive skills assessment', 'Pathway to Subclass 191 Permanent Residence after 3 years'],
        targetAudience: 'Applicants targeting booming regional cities and territories'
      }
    ],
    officialNotes: 'Official Migration Update: The Australian Government continues transitioning to the new Skills in Demand system, providing clearer multi-year PR pathways across core skills categories.',
    keyRequirements: [
      'Positive Skills Assessment from designated bodies (ACS, VETASSESS, Engineers Australia, TRA, ANMAC)',
      'English test scores (IELTS, PTE Academic Competent/Proficient level)',
      'Expression of Interest (EOI) submission via SkillSelect',
      'Australian health and character checks'
    ]
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    badge: 'Oceania',
    taglineBullet: 'Accredited Employer Work Visa • Skilled Work • Residence Pathways',
    highlightSummary: 'Accredited Employer Work Visa (AEWV) requiring accredited employer and specific wage/qualification thresholds, Green List, and SMC.',
    overview: 'New Zealand offers world-class quality of life. Current official policy centers on the Accredited Employer Work Visa (AEWV) and fast-tracked residence pathways under the Green List and the 6-point Skilled Migrant Category.',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
    popularPathways: [
      {
        code: 'AEWV',
        name: 'Accredited Employer Work Visa',
        description: 'The primary temporary work visa in New Zealand. Requires a job offer from an INZ-accredited employer who has completed the Job Check process.',
        keyCriteria: [
          'Must be offered a role by an Accredited Employer',
          'Must meet wage thresholds (standard median wage requirements) or specific role exceptions',
          'Must hold the qualifications and work experience specified in the Job Check',
          'Minimum English requirement for roles at ANZSCO skill levels 4 and 5'
        ],
        targetAudience: 'Skilled trades, ICT specialists, healthcare workers with NZ job offers'
      },
      {
        code: 'Green List',
        name: 'Green List Straight to Residence & Work to Residence',
        description: 'Targeted priority pathway for in-demand occupations. Tier 1 roles grant immediate Straight to Residence; Tier 2 grants Work to Residence after 2 years.',
        keyCriteria: ['Job offer in specified Green List occupation', 'Exact NZQA-recognized qualification or registration', 'Full-time permanent employment'],
        targetAudience: 'Doctors, nurses, civil/structural engineers, ICT leaders'
      },
      {
        code: 'SMC 6-Point',
        name: 'Skilled Migrant Category (SMC)',
        description: 'New Zealand’s 6-point residence system based on NZ professional registration, recognized advanced qualification, or high income.',
        keyCriteria: ['6 points minimum from registration, qualifications, or income', 'Offer of skilled employment in NZ', 'Age under 56 and English proficiency'],
        targetAudience: 'Qualified professionals already holding NZ job offers'
      }
    ],
    officialNotes: 'Official Immigration New Zealand (INZ) Rule: Work visa applications strictly require employer accreditation, compliant advertising through Job Check, and meeting applicable wage/qualification criteria.',
    keyRequirements: [
      'NZQA International Qualification Assessment (IQA) where required',
      'Job offer from an INZ-Accredited Employer with approved Job Check',
      'Demonstrated 3+ years relevant work experience or relevant qualification',
      'Clean police clearances and INZ medical certificate'
    ]
  },
  {
    id: 'europe',
    name: 'Europe & Schengen Area',
    flag: '🇪🇺',
    badge: 'European Union',
    taglineBullet: 'Work Visas • Skilled Employment • EU Immigration Opportunities',
    highlightSummary: 'EU Blue Card across Germany, Netherlands, France, alongside national pathways like the German Opportunity Card (Chancenkarte).',
    overview: 'European nations face historic demographic and skill deficits, leading to reformed labor immigration laws across Germany, Austria, Ireland, Poland, and Scandinavia.',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    popularPathways: [
      {
        code: 'EU Blue Card',
        name: 'European Union Blue Card',
        description: 'Work and residence permit for non-EU highly qualified workers. Recognized across 25 of 27 EU member states with lowered salary thresholds.',
        keyCriteria: ['Higher education degree recognized in host nation (e.g., Anabin for Germany)', 'Binding job offer or work contract for at least 6 months', 'Salary meeting the national threshold for shortage occupations'],
        targetAudience: 'IT engineers, scientists, medical doctors, mathematicians'
      },
      {
        code: 'Chancenkarte',
        name: 'Germany Opportunity Card (Opportunity Card)',
        description: 'Points-based job search visa allowing skilled third-country nationals to arrive in Germany for up to 1 year to seek qualified employment.',
        keyCriteria: ['Basic German (A1) or English (B2)', 'Recognized 2-year vocational qualification or university degree', 'Score minimum 6 points for language, age, and experience'],
        targetAudience: 'Job seekers wanting to find employment inside Germany directly'
      },
      {
        code: 'Critical Skills',
        name: 'Ireland Critical Skills Employment Permit',
        description: 'Designed to attract highly skilled workers in ICT, engineering, and healthcare. Direct pathway to Stamp 4 permanent residency after 2 years.',
        keyCriteria: ['Job offer on Critical Skills Occupations List', 'Minimum salary €38,000/year (or €64,000 for non-list roles)', 'Relevant degree qualification'],
        targetAudience: 'Tech innovators, biopharma specialists, financial analysts'
      },
      {
        code: 'National Work Visas',
        name: 'Skilled Worker & D-Visa Streams',
        description: 'National long-stay employment visas across Poland, Czech Republic, Portugal, and Scandinavian nations with expedited sponsor processes.',
        keyCriteria: ['Employer work permit authorization', 'Employment contract', 'Accommodation proof and valid health coverage'],
        targetAudience: 'Skilled technical, manufacturing, hospitality, and logistics personnel'
      }
    ],
    keyRequirements: [
      'Degree evaluation via Anabin / ZAB (for Germany) or national equivalence',
      'Official employment contract matching national minimum/shortage wage criteria',
      'Proof of language proficiency (German, English, French depending on country)',
      'Schengen-compliant health insurance coverage'
    ]
  }
];

export const SERVICES_DATA: ImmigrationService[] = [
  {
    id: 'work-visa-consultation',
    title: 'Work Visa Consultation',
    iconName: 'Briefcase',
    shortDesc: 'In-depth advisory on international work permit categories, employment rules, and legal eligibility.',
    fullDesc: 'One-on-one tailored counseling analyzing your background against global labor market criteria. We map out realistic timelines, costs, employer sponsorship rules, and multi-country options.',
    keyFeatures: [
      'Comprehensive labor market eligibility check',
      'Comparative destination analysis (US, Canada, Aus, NZ, EU)',
      'Strategic timeline and cost breakdown',
      'Clarification on temporary vs. permanent routes'
    ],
    idealFor: 'Professionals evaluating their overseas career options.'
  },
  {
    id: 'visit-visa-services',
    title: 'Visit Visa Services',
    iconName: 'Plane',
    shortDesc: 'Comprehensive tourist, business, and family visit visa filing for USA, Canada, UK, Australia, New Zealand, and Schengen Europe.',
    fullDesc: 'We assist travelers, tourists, corporate business delegates, and families visiting relatives overseas with complete visit visa documentation. Our licensed advisory audits your bank statements and proof of funds, prepares airtight evidence of strong ties to your home country (employment, assets, family), drafts customized itineraries and cover letters, and manages error-free consular portal submissions to maximize visa approval probability.',
    keyFeatures: [
      'Tourist, Family Visit, and Business Conference Visa filing worldwide',
      'Thorough bank statement audit, financial sufficiency & proof of funds vetting',
      'Airtight Home Ties evaluation (employment verification, property assets & family commitments)',
      'Customized travel itineraries, hotel booking advisory, and invitation letter drafting'
    ],
    idealFor: 'Tourists, business delegates, and families visiting relatives abroad.'
  },
  {
    id: 'skilled-immigration',
    title: 'Skilled Immigration',
    iconName: 'Award',
    shortDesc: 'Points-tested PR programs including Australia 189/190, Canada Express Entry, and NZ SMC.',
    fullDesc: 'End-to-end guidance for points-tested permanent residency streams. We calculate points, prepare skills assessment petitions, craft Expressions of Interest (EOI), and handle ITA submissions.',
    keyFeatures: [
      'Points calculation and optimization strategy',
      'Skills assessment documentation with VETASSESS, ACS, WES, etc.',
      'SkillSelect and Express Entry profile lodging',
      'State & provincial nomination applications'
    ],
    idealFor: 'Experienced degree holders seeking direct permanent residency.'
  },
  {
    id: 'employer-sponsored-visa',
    title: 'Employer-Sponsored Visa Guidance',
    iconName: 'Building2',
    shortDesc: 'Guidance on Australia Subclass 482/494, NZ AEWV, US H-1B/EB-3, and Canada LMIA permits.',
    fullDesc: 'Specialized support for candidates with overseas job prospects or employers seeking overseas talent. We guide candidates and employers through accreditation, job checks, and labor certifications.',
    keyFeatures: [
      'Advisory on NZ Accredited Employer criteria & wage tests',
      'Guidance on Australian Skills in Demand 482 benchmarks',
      'Canadian LMIA and US LCA compliance walkthrough',
      'Transition roadmap from work visa to permanent residency'
    ],
    idealFor: 'Candidates in talks with overseas employers or holding offers.'
  },
  {
    id: 'job-documentation-assistance',
    title: 'Job/Employment Documentation Assistance',
    iconName: 'FileText',
    shortDesc: 'International CV formatting, verifiable reference letters, and duties harmonization.',
    fullDesc: 'Immigration authorities require strict alignment between your actual duties and official occupation codes (ANZSCO, NOC/TEER, SOC). We ensure your employment documentation meets official standards.',
    keyFeatures: [
      'Format CV/Resume to Canadian, Australian & Euro standards',
      'Drafting detailed job reference letters matching ANZSCO/NOC codes',
      'Pay slip, tax record, and employment contract verification support',
      'Organizational chart and managerial proof documentation'
    ],
    idealFor: 'Applicants needing compliant work experience evidence.'
  },
  {
    id: 'visa-application-guidance',
    title: 'Visa Application Guidance',
    iconName: 'CheckCircle2',
    shortDesc: 'Error-free online portal submission, fee processing, and immigration questionnaire filing.',
    fullDesc: 'Meticulous portal entry on official government systems (ImmiAccount, IRCC Portal, CEAC, INZ Immigration Online). We prevent costly mistakes, misrepresentation traps, and avoidable delays.',
    keyFeatures: [
      'Step-by-step guidance on official government portals',
      'Comprehensive audit of all entered biographical details',
      'Fee payment guidance and tracking confirmation',
      'Real-time application status monitoring and response management'
    ],
    idealFor: 'Applicants ready to submit their visa file to authorities.'
  },
  {
    id: 'document-preparation',
    title: 'Document Preparation',
    iconName: 'FolderCheck',
    shortDesc: 'Certified translations, apostilles, attestation, and evidentiary index compilation.',
    fullDesc: 'A flawless document bundle is the foundation of visa approval. We assist with foreign ministry attestations, police certificates, medical booking, and structured file indices.',
    keyFeatures: [
      'Notarization and attestation advisory (MOFA, HEC, IBCC)',
      'Certified translation coordination for European visas',
      'Police Character Certificate guidance and verification',
      'Structured evidentiary indexing for immigration officers'
    ],
    idealFor: 'Candidates needing structured document attestation.'
  },
  {
    id: 'profile-assessment',
    title: 'Profile Assessment',
    iconName: 'UserCheck',
    shortDesc: 'Detailed evaluation of education, age, language capability, and occupational demand.',
    fullDesc: 'Receive an honest, transparent diagnostic of your immigration profile before investing money. We identify gaps in your qualifications, English scores, or experience and provide remedies.',
    keyFeatures: [
      'Comprehensive scoring against US, Canadian, Aus, and NZ metrics',
      'Occupational demand list matching (MLTSSL, Green List, Shortage Lists)',
      'Gap identification (IELTS target bands, credential equivalents)',
      'Written profile diagnostic report with realistic probabilities'
    ],
    idealFor: 'Anyone starting their international journey.'
  },
  {
    id: 'pre-departure-guidance',
    title: 'Pre-Departure Guidance',
    iconName: 'PlaneTakeoff',
    shortDesc: 'Briefings on port-of-entry procedures, tax registration, banking, and settlement.',
    fullDesc: 'Securing your visa is just step one. We provide thorough pre-departure briefings covering customs regulations, port-of-entry questioning, health insurance, social security setup, and accommodation.',
    keyFeatures: [
      'Port-of-entry questioning and border security briefing',
      'Guidance on Tax File Number (TFN), SIN, and SSN registration',
      'Opening overseas bank accounts and foreign currency guidelines',
      'Initial housing, health insurance, and local orientation advice'
    ],
    idealFor: 'Visa holders preparing to relocate overseas.'
  },
  {
    id: 'overseas-recruitment-services',
    title: 'Overseas Recruitment Services',
    iconName: 'Globe2',
    shortDesc: 'Connecting global talent with international manpower demands and accredited employers.',
    fullDesc: 'We bridge skilled professionals with verified overseas recruitment channels and legitimate international employers across technical, engineering, healthcare, and hospitality trades.',
    keyFeatures: [
      'Access to international recruitment networks and job boards',
      'Guidance on approaching accredited employers in NZ, Aus, and Europe',
      'Interview preparation and cross-cultural communication coaching',
      'Strict adherence to ethical international recruitment practices'
    ],
    idealFor: 'Skilled workers and trades looking for international job openings.'
  }
];

export const FAQS = [
  {
    q: "Can you guarantee that my visa will be approved?",
    a: "No consultancy can honestly guarantee a visa approval. As stated in our Important Notice: 'Visa approval is subject to the decision of the relevant government immigration authority. We provide consultancy and application-support services and do not guarantee visa approval or employment.' What we guarantee is rigorous, professional preparation, thorough eligibility checks, and highest quality documentation to maximize your approval chances."
  },
  {
    q: "How does Australia's Skills in Demand Subclass 482 visa work?",
    a: "Under the Australian system, the Subclass 482 visa allows approved Australian employers to sponsor skilled workers when local workers are unavailable. It features pathways such as the Core Skills and Specialist Skills streams. Applicants need relevant work experience, positive skills evaluation where mandated, and meeting English requirements, with defined tracks to permanent residency via ENS 186."
  },
  {
    q: "What are the rules for New Zealand's Accredited Employer Work Visa (AEWV)?",
    a: "New Zealand's AEWV requires three key pillars: 1) The employer must be officially accredited with Immigration New Zealand (INZ); 2) The employer must pass an approved Job Check proving labor market testing; 3) The applicant must meet the required wage rate (aligned with median wage criteria unless exempt) and hold the verified qualifications and experience specified for that role."
  },
  {
    q: "How do I book a consultation or check my eligibility?",
    a: "You can click 'Apply Now' to complete our fast online profile assessment form, or message us directly on WhatsApp at +92-320-2216612. Our consultants review your education, work experience, and language scores to recommend the best legal pathway."
  },
  {
    q: "What are the requirements for Visit Visa applications (USA, Canada, UK, Australia, Schengen Europe)?",
    a: "Visit visa and tourist visa decisions primarily hinge on demonstrating genuine temporary intent and financial sufficiency. Key requirements include a verified bank statement demonstrating sufficient funds, clean proof of home ties (ongoing employment, business ownership, family ties, property assets), an accurate travel itinerary, and a formal invitation or sponsorship letter where applicable. We audit your documentation thoroughly to minimize refusal risks."
  }
];
