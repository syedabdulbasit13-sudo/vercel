import { CountryId } from '../types';

export interface FormalAdvisor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experienceYears: string;
  image: string;
  bio: string;
  specializationCountries: { id: CountryId; name: string; flag: string }[];
  formalQuote: string;
}

export const FORMAL_ADVISORS: FormalAdvisor[] = [
  {
    id: 'farhan-qureshi',
    name: 'Advocate Farhan Al-Qureshi',
    role: 'Head of Consular Affairs & Senior Migration Counselor',
    qualifications: 'LL.M. International Law & Migration Frameworks',
    experienceYears: '16+ Years Experience',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Oversees skilled migration applications and points-tested verification for Australia, New Zealand, and European member states with zero-defect petition auditing.',
    specializationCountries: [
      { id: 'australia', name: 'Australia', flag: '🇦🇺' },
      { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿' },
      { id: 'europe', name: 'Europe', flag: '🇪🇺' },
    ],
    formalQuote: 'True immigration success is anchored in meticulous legal precision, truthful disclosure, and strict adherence to government mandates.',
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance, Senior Counselor',
    role: 'Principal Overseas Employment & LMIA Specialist',
    qualifications: 'Certified Foreign Labor & Skilled Work Advisor',
    experienceYears: '12+ Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in employer-specific work permits, Canadian LMIA compliance, and New Zealand Accredited Employer Work Visa (AEWV) wage-threshold criteria.',
    specializationCountries: [
      { id: 'canada', name: 'Canada', flag: '🇨🇦' },
      { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿' },
    ],
    formalQuote: 'Aligning candidate credentials with accredited employer mandates is the gold standard of sustainable global recruitment.',
  },
  {
    id: 'marcus-sterling',
    name: 'Marcus Sterling, Esq.',
    role: 'Corporate Work Visa & Priority Petition Strategist',
    qualifications: 'Juris Doctor • Member International Bar Association',
    experienceYears: '14+ Years Experience',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    bio: 'Guides multinational corporate transfers, H-1B specialty occupation filings, and EB-2 National Interest Waiver (NIW) evidentiary dossiers for technical leaders.',
    specializationCountries: [
      { id: 'usa', name: 'United States', flag: '🇺🇸' },
      { id: 'europe', name: 'Europe (Germany/UK)', flag: '🇪🇺' },
    ],
    formalQuote: 'Every application submitted through our consultancy receives the scrutiny of an official consular examination prior to lodgement.',
  },
  {
    id: 'zainab-tariq',
    name: 'Zainab Tariq',
    role: 'Director of Credential Attestation & Pre-Departure',
    qualifications: 'M.Sc. Human Resource Development • Certified Document Auditor',
    experienceYears: '10+ Years Experience',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Directs educational credential equivalence assessments (WES, ACS, VETASSESS), MOFA/Apostille verifications, and port-of-entry candidate preparation.',
    specializationCountries: [
      { id: 'usa', name: 'USA', flag: '🇺🇸' },
      { id: 'canada', name: 'Canada', flag: '🇨🇦' },
      { id: 'australia', name: 'Australia', flag: '🇦🇺' },
    ],
    formalQuote: 'A single unverified line in an employment reference can derail a career; we protect your future with exhaustive documentation integrity.',
  },
];
