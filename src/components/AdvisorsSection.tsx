import React from 'react';
import { ShieldCheck, Award, MessageCircle, ArrowRight, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';
import { FORMAL_ADVISORS, FormalAdvisor } from '../data/advisorsData';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { CountryFlag } from './CountryFlag';
import { CountryId } from '../types';

interface AdvisorsSectionProps {
  onOpenApply: () => void;
  onSelectCountry: (id: CountryId) => void;
}

export const AdvisorsSection: React.FC<AdvisorsSectionProps> = ({ onOpenApply, onSelectCountry }) => {
  return (
    <section id="advisors" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
            <UserCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Senior Formal Advisory Council</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
            Consult With Our Formal Immigration Counselors &amp; Legal Specialists
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Direct access to dedicated human specialists with verified credentials in international migration law, accredited employer compliance, and consular documentation.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FORMAL_ADVISORS.map((advisor: FormalAdvisor) => (
            <div
              key={advisor.id}
              className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              id={`advisor-card-${advisor.id}`}
            >
              {/* Formal Counselor Image Container */}
              <div className="relative h-72 w-full overflow-hidden bg-[#0a192f]">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-85" />

                {/* Experience Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a192f]/90 text-white text-[11px] font-bold border border-white/20 backdrop-blur-sm">
                  {advisor.experienceYears}
                </div>

                {/* Name & Credentials Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-black tracking-tight text-white leading-snug drop-shadow-sm">
                    {advisor.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-400 mt-0.5">
                    {advisor.qualifications}
                  </p>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="text-xs font-bold text-[#0a192f] uppercase tracking-wider mb-2">
                    {advisor.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {advisor.bio}
                  </p>

                  {/* Specialization Countries with Flags */}
                  <div className="pt-3 border-t border-slate-100 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Jurisdiction Specialization:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {advisor.specializationCountries.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            onSelectCountry(c.id);
                            const el = document.getElementById('countries');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 text-[11px] font-bold text-[#0a192f] transition-colors cursor-pointer"
                        >
                          <CountryFlag countryId={c.id} size="sm" />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Formal Quote */}
                  <div className="p-3 rounded-lg bg-slate-50 border-l-4 border-red-600 text-[11px] italic text-slate-700 leading-relaxed mb-4">
                    &ldquo;{advisor.formalQuote}&rdquo;
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl(
                      `Hello, I would like to request a formal case consultation with ${advisor.name} regarding my immigration profile.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0a192f] hover:bg-red-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                    id={`advisor-whatsapp-${advisor.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Consult on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formal Human Consultation Showcase Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0a192f] via-[#0d2346] to-[#0a192f] border-2 border-red-600/40 p-8 sm:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-widest mb-3">
                <span>Direct Human Accountability</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                No Automated Algorithms. Every File Handled by Accredited Specialists.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                At <strong className="text-white font-bold">{COMPANY_CONTACT.name}</strong>, your migration file is personally managed by formal counselors who verify every line of your employment certificates, police attestations, and employer petitions before submission to foreign authorities.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Confidential One-on-One File Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Verified ANZSCO / NOC Code Harmonization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Cross-Border Labor Market Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Direct WhatsApp Updates from Your Case Officer</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer"
                  id="advisors-book-session-btn"
                >
                  <span>Book Formal Profile Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="px-6 py-3.5 bg-white text-[#0a192f] hover:bg-slate-100 font-bold text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <span>Call Us: {COMPANY_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Photo: Formal Consultation in Boardroom */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                  alt="Formal client and counselor case consultation"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                    Official Protocol
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Formal In-Person &amp; Virtual Client Dossier Examination
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
