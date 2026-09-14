import React, { useState } from 'react';
import { ShieldCheck, Users, CheckCircle2, ArrowRight, Calculator, FileCheck, Phone, UserCheck, GraduationCap, Briefcase, Building2, Plane, Award, Globe } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { CompanyLogo } from './CompanyLogo';

interface AboutSectionProps {
  onOpenApply: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApply }) => {
  // Mini interactive points estimator for skilled migration
  const [ageRange, setAgeRange] = useState<'18-24' | '25-32' | '33-39' | '40-44' | '45+'>('25-32');
  const [eduLevel, setEduLevel] = useState<'phd' | 'masters' | 'bachelors' | 'diploma'>('bachelors');
  const [expYears, setExpYears] = useState<'3-5' | '5-7' | '8+'>('5-7');
  const [englishLevel, setEnglishLevel] = useState<'proficient' | 'competent' | 'superior'>('proficient');

  const calculateEstimate = () => {
    let pts = 0;
    // Age
    if (ageRange === '18-24') pts += 25;
    else if (ageRange === '25-32') pts += 30;
    else if (ageRange === '33-39') pts += 25;
    else if (ageRange === '40-44') pts += 15;
    else pts += 0;

    // Education
    if (eduLevel === 'phd') pts += 20;
    else if (eduLevel === 'masters') pts += 15;
    else if (eduLevel === 'bachelors') pts += 15;
    else pts += 10;

    // Experience overseas
    if (expYears === '8+') pts += 15;
    else if (expYears === '5-7') pts += 10;
    else pts += 5;

    // English
    if (englishLevel === 'superior') pts += 20;
    else if (englishLevel === 'proficient') pts += 10;
    else pts += 0;

    return pts;
  };

  const estimatedPoints = calculateEstimate();

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text / Info Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
              <UserCheck className="w-3.5 h-3.5 text-red-600" />
              <span>About Our Consultancy</span>
            </div>

            {/* OFFICIAL LOGO & BOLD ENLARGED COMPANY NAME */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-2.5 rounded-2xl bg-white border-2 border-slate-200 shadow-md shrink-0">
                <CompanyLogo variant="icon" size="lg" />
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a192f] tracking-tight uppercase leading-tight">
                  CAREER RECRUIT &amp; IMMIGRATIONS CONSULTANCY
                </span>
                <span className="block text-xs sm:text-sm font-extrabold text-red-600 uppercase tracking-wider mt-1">
                  Empowering Global Ambitions Through Regulated, Verifiable Immigration Support
                </span>
              </div>
            </div>

            {/* OFFICIAL COMPANY OVERVIEW - Exact User Specification */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a192f] via-[#0e2444] to-[#122e56] text-white border-2 border-red-600/60 shadow-xl my-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  Official Company Overview
                </span>
                <span className="text-xs text-slate-300 font-bold hidden sm:inline">
                  Est. 2021 • Canada &amp; Pakistan
                </span>
              </div>

              {/* Exact Requested Lines */}
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed font-sans">
                <strong className="text-white font-black">Career Recruit Immigration</strong> registered in Canada and Pakistan since 2021, offers expert Immigrations, Educations and Employment consultations. We assist clients with Residency, Business Immigration, Study abroad and Visit Visa opportunities Worldwide.
              </p>

              {/* Highlight Badges for Services Mentioned in Overview */}
              <div className="mt-4 pt-4 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                  <Building2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Residency &amp; Business</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                  <GraduationCap className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Study Abroad</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                  <Briefcase className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Employment Visas</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                  <Plane className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Visit Visas Worldwide</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
              At <strong className="text-[#0a192f] font-black">{COMPANY_CONTACT.name}</strong>, we specialize in guiding professionals, skilled tradespeople, and overseas job seekers across complex international immigration landscapes.
            </p>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Whether you are pursuing Australia’s Skills in Demand 482 or Points-tested visas (189/190), New Zealand’s Accredited Employer Work Visa (AEWV), Canadian LMIA and Express Entry streams, or European Blue Cards, our formal advisors eliminate misinformation and prepare legally bulletproof documentation.
            </p>

            {/* Core Values Grid in Navy, Red and White */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-red-600 transition-colors">
                <div className="flex items-center gap-2.5 text-[#0a192f] font-black text-sm">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  <span>Ethical Transparency</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  We give realistic profile assessments. Zero counterfeit assurances or misleading visa quotas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-red-600 transition-colors">
                <div className="flex items-center gap-2.5 text-[#0a192f] font-black text-sm">
                  <FileCheck className="w-5 h-5 text-red-600" />
                  <span>Meticulous Compliance</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Every reference letter, credential evaluation, and petition is cross-matched with official occupational lists.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-red-600 transition-colors">
                <div className="flex items-center gap-2.5 text-[#0a192f] font-black text-sm">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>Formal Human Counsel</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Direct counseling by experienced human specialists in business suits, not algorithmic bots or unverified agents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-red-600 transition-colors">
                <div className="flex items-center gap-2.5 text-[#0a192f] font-black text-sm">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Dedicated Case Hotline</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Direct WhatsApp communication and active case file tracking at <strong className="text-[#0a192f]">{COMPANY_CONTACT.phone}</strong>.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenApply}
                className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-sm transition-all shadow-md shadow-red-600/30 flex items-center gap-2 cursor-pointer border border-red-500"
              >
                <span>Book Formal Profile Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_CONTACT.whatsappUrl("Hello, I would like to schedule an introductory consultation with Career Recruit and Immigration Consultancy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-800 hover:text-red-600 flex items-center gap-1.5"
              >
                <span>Chat directly on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Quick Points Estimator in Navy, Red and White */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div className="flex items-center gap-2 text-[#0a192f] font-black text-base">
                  <Calculator className="w-5 h-5 text-red-600" />
                  <span>Skilled Migration Points Estimator</span>
                </div>
                <span className="text-[11px] font-black px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200">
                  Quick Tool
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-4">
                Estimate your indicative score for points-tested pathways like Australia Subclass 189/190 or Canada FSWP.
              </p>

              <div className="space-y-4 text-xs">
                {/* Age */}
                <div>
                  <label className="font-bold text-[#0a192f] block mb-1">
                    Age Group
                  </label>
                  <select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="18-24">18–24 years (25 pts)</option>
                    <option value="25-32">25–32 years (30 pts - Max)</option>
                    <option value="33-39">33–39 years (25 pts)</option>
                    <option value="40-44">40–44 years (15 pts)</option>
                    <option value="45+">45+ years (0 pts)</option>
                  </select>
                </div>

                {/* Education */}
                <div>
                  <label className="font-bold text-[#0a192f] block mb-1">
                    Highest Educational Qualification
                  </label>
                  <select
                    value={eduLevel}
                    onChange={(e) => setEduLevel(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="phd">Doctorate / PhD (20 pts)</option>
                    <option value="masters">Master’s Degree (15 pts)</option>
                    <option value="bachelors">Bachelor’s Degree (15 pts)</option>
                    <option value="diploma">Diploma / Trade Certificate (10 pts)</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="font-bold text-[#0a192f] block mb-1">
                    Relevant Skilled Work Experience
                  </label>
                  <select
                    value={expYears}
                    onChange={(e) => setExpYears(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="8+">8+ Years Experience (15 pts)</option>
                    <option value="5-7">5–7 Years Experience (10 pts)</option>
                    <option value="3-5">3–4 Years Experience (5 pts)</option>
                  </select>
                </div>

                {/* English */}
                <div>
                  <label className="font-bold text-[#0a192f] block mb-1">
                    English Language Capability (IELTS / PTE)
                  </label>
                  <select
                    value={englishLevel}
                    onChange={(e) => setEnglishLevel(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="superior">Superior (IELTS 8+ / PTE 79+) (+20 pts)</option>
                    <option value="proficient">Proficient (IELTS 7+ / PTE 65+) (+10 pts)</option>
                    <option value="competent">Competent (IELTS 6 / PTE 50) (+0 pts)</option>
                  </select>
                </div>
              </div>

              {/* Result display in Navy and Red */}
              <div className="mt-5 p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center">
                <div className="text-xs font-black text-[#0a192f] uppercase tracking-wider">
                  Estimated Indicative Points
                </div>
                <div className="text-4xl sm:text-5xl font-black text-red-600 my-1.5">
                  {estimatedPoints} <span className="text-sm font-bold text-slate-500">/ 65+ pass mark</span>
                </div>
                <p className="text-xs text-[#0a192f] font-semibold mt-1">
                  {estimatedPoints >= 65
                    ? '🎉 Strong candidate profile! You meet or exceed the standard baseline for invitation pools.'
                    : '💡 Viable candidate! Additional points can be gained through state nomination (+5), regional pathways (+15), or higher English scores.'}
                </p>
              </div>

              <button
                onClick={onOpenApply}
                className="mt-4 w-full py-3.5 bg-[#0a192f] hover:bg-red-600 text-white font-black rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Discuss this score with our formal counselor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
