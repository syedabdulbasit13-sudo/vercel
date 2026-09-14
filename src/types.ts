export type CountryId = 'usa' | 'canada' | 'australia' | 'new-zealand' | 'europe';

export interface VisaPathway {
  code: string;
  name: string;
  description: string;
  keyCriteria: string[];
  targetAudience: string;
}

export interface CountryInfo {
  id: CountryId;
  name: string;
  flag: string;
  badge: string;
  highlightSummary: string;
  taglineBullet: string;
  overview: string;
  popularPathways: VisaPathway[];
  keyRequirements: string[];
  officialNotes?: string;
  heroImage: string;
}

export interface ImmigrationService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  idealFor: string;
}

export interface AssessmentFormData {
  fullName: string;
  phone: string;
  email: string;
  targetCountry: CountryId | 'undecided';
  serviceType: string;
  education: string;
  yearsOfExperience: string;
  occupation: string;
  englishTest: string;
  notes?: string;
}
