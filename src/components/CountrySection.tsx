import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Info, ShieldCheck, ArrowUpRight, Award, Globe } from 'lucide-react';
import { COUNTRIES_DATA, COMPANY_CONTACT } from '../data/immigrationData';
import { CountryId, CountryInfo } from '../types';
import { CountryFlag } from './CountryFlag';

interface CountrySectionProps {
  selectedCountryId: CountryId;
  onSelectCountry: (id: CountryId) => void;
  onOpenApply: (countryId?: CountryId) => void;
}

export const CountrySection: React.FC<CountrySectionProps> = ({
  selectedCountryId,
  onSelectCountry,
  onOpenApply,
}) => {
  const [activeTab, setActiveTab] = useState<CountryId>(selectedCountryId || 'australia');

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedCountryId) {
      setActiveTab(selectedCountryId);
    }
  }, [selectedCountryId]);

  const currentCountry: CountryInfo =
    COUNTRIES_DATA.find((c) => c.id === activeTab) || COUNTRIES_DATA[2]; // Default to Australia

  return (
    <section id="countries" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with White, Red and Navy Blue accents */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5 text-red-600" />
            <span>Official Government Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
            Targeted Work Visa &amp; Immigration Pathways
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Official immigration frameworks verified for skilled workers, employer sponsorship, and long-term residence across the world&apos;s leading economies.
          </p>
        </div>

        {/* Country Selector Tabs with High-Definition National Flags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 p-2 bg-white rounded-2xl border-2 border-slate-200 shadow-sm max-w-4xl mx-auto">
          {COUNTRIES_DATA.map((country) => {
            const isActive = activeTab === country.id;
            return (
              <button
                key={country.id}
                onClick={() => {
                  setActiveTab(country.id);
                  onSelectCountry(country.id);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-black text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a192f] text-white shadow-md border-b-2 border-red-500'
                    : 'text-[#0a192f] hover:text-red-600 hover:bg-red-50'
                }`}
                id={`tab-country-${country.id}`}
              >
                <CountryFlag countryId={country.id} size="sm" />
                <span>{country.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Country Detailed Display Card */}
        <div className="mt-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden" id="country-detail-card">
          {/* Country Banner / Header in Deep Navy Blue with Cardinal Red Accent Line */}
          <div className="relative p-6 sm:p-10 bg-gradient-to-r from-[#0a192f] via-[#0d2346] to-[#0a192f] text-white border-b-4 border-red-600">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-4">
                  {/* Big High Definition Flag */}
                  <div className="p-1 rounded-lg bg-white/10 ring-2 ring-white/30 shrink-0">
                    <CountryFlag countryId={currentCountry.id} size="xl" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider bg-red-600 text-white">
                        {currentCountry.badge}
                      </span>
                      <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                        Official Sovereign Jurisdiction
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-white mt-1.5 tracking-tight flex items-center gap-3">
                      <span>{currentCountry.name} Immigration</span>
                      <span className="text-2xl sm:text-3xl">{currentCountry.flag}</span>
                    </h3>
                  </div>
                </div>

                {/* Tagline Bullet */}
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/20">
                  <Info className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{currentCountry.taglineBullet}</span>
                </div>

                <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                  {currentCountry.overview}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <button
                  onClick={() => onOpenApply(currentCountry.id)}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer border border-red-500"
                  id={`apply-country-${currentCountry.id}-btn`}
                >
                  <span>Apply for {currentCountry.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_CONTACT.whatsappUrl(`Hello, I want to inquire about immigration and work visa options for ${currentCountry.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#1e293b] hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 text-center border border-slate-700"
                >
                  <CountryFlag countryId={currentCountry.id} size="sm" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          </div>

          {/* Official Update Note Banner (Crucial for Australia & NZ) */}
          {currentCountry.officialNotes && (
            <div className="bg-red-50/80 border-b border-red-200 px-6 py-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0a192f] leading-relaxed font-semibold">
                <strong className="text-red-700 font-black">Official Notice: </strong>
                {currentCountry.officialNotes}
              </p>
            </div>
          )}

          {/* Visa Pathways Grid */}
          <div className="p-6 sm:p-10">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <CountryFlag countryId={currentCountry.id} size="sm" />
                <h4 className="text-lg sm:text-xl font-black text-[#0a192f]">
                  Official Visa Streams &amp; Eligible Categories
                </h4>
              </div>
              <span className="text-xs text-red-700 font-black uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                Verified Regulations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCountry.popularPathways.map((pathway, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-red-600 hover:shadow-md transition-all flex flex-col justify-between"
                  id={`pathway-card-${currentCountry.id}-${idx}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-[#0a192f] text-white">
                        <CountryFlag countryId={currentCountry.id} size="sm" />
                        <span>{pathway.code}</span>
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {pathway.targetAudience}
                      </span>
                    </div>

                    <h5 className="text-base sm:text-lg font-black text-[#0a192f] mt-3">
                      {pathway.name}
                    </h5>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pathway.description}
                    </p>

                    {/* Key Criteria Points */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                        Official Criteria &amp; Requirements:
                      </div>
                      <ul className="space-y-2">
                        {pathway.keyCriteria.map((criterion, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenApply(currentCountry.id)}
                      className="text-xs font-black text-red-600 hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Check my eligibility</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={COMPANY_CONTACT.whatsappUrl(`I would like to inquire about ${currentCountry.name} ${pathway.code} (${pathway.name}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-700 hover:text-[#0a192f] flex items-center gap-1"
                    >
                      <span>Ask Consultant</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* General Country Document & Eligibility Checklist */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <h5 className="text-sm font-black text-[#0a192f] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Prerequisites for {currentCountry.name} Visa Consultation</span>
              </h5>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCountry.keyRequirements.map((req, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Countries Quick Comparative Summary Grid with Prominent National Flags */}
        <div className="mt-14">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0a192f]">
              Direct National Consular Frameworks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select any nation to review updated visa regulations, eligibility matrices, and work permits
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COUNTRIES_DATA.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  onSelectCountry(c.id);
                  const el = document.getElementById('country-detail-card');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                  activeTab === c.id
                    ? 'bg-white border-red-600 shadow-md ring-2 ring-red-100'
                    : 'bg-white border-slate-200 hover:border-red-300 hover:shadow-sm'
                }`}
                id={`card-country-summary-${c.id}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <CountryFlag countryId={c.id} size="md" />
                  <span className="text-2xl">{c.flag}</span>
                </div>
                <h4 className="font-black text-[#0a192f] text-base">{c.name}</h4>
                <p className="mt-1.5 text-xs text-slate-600 font-medium line-clamp-2">
                  {c.taglineBullet}
                </p>
                <div className="mt-4 pt-2 border-t border-slate-100 text-xs font-black text-red-600 flex items-center justify-between">
                  <span>Explore Pathways</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
