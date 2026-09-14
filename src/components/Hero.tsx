import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Briefcase, UserCheck, Star } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { CountryId } from '../types';
import { CountryFlag } from './CountryFlag';
import { CompanyLogo } from './CompanyLogo';

interface HeroProps {
  onOpenApply: () => void;
  onSelectCountry: (id: CountryId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onSelectCountry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a192f] text-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b-4 border-red-600">
      {/* Background Subtle Pattern & Lighting Accents in Navy Blue and Red */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Most Important: Company Name Font Bold & Enlarge Size in Main Hero Banner */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-red-600/15 border-2 border-red-500/40 text-white backdrop-blur-sm shadow-inner mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-red-300">
              Government Regulated Consultancy Standard
            </span>
          </div>

          {/* OFFICIAL COMPANY LOGO & SUPER ENLARGED BOLD BRANDING */}
          <div className="p-4 sm:p-6 rounded-3xl bg-[#0e2444]/95 border-2 border-red-500/40 shadow-2xl max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Logo Emblem on Crisp White Circular Base */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center p-2 shrink-0 ring-4 ring-red-600/30">
              <CompanyLogo variant="icon" size="lg" />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight font-sans drop-shadow-md">
                CAREER RECRUIT <span className="text-red-500">&amp;</span> IMMIGRATIONS CONSULTANCY
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-red-400" />
                  Regulated Consular Standard
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Main Content Grid: Copy on Left, Formal Human Counselor Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Requested Exact Words & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase font-sans">
              YOUR CAREER. YOUR FUTURE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-white">
                YOUR GLOBAL JOURNEY.
              </span>
            </h1>

            <p className="mt-5 text-xl sm:text-2xl font-black text-slate-100 tracking-normal border-l-0 lg:border-l-4 lg:border-red-600 lg:pl-4">
              Professional Immigration &amp; Overseas Recruitment Consultancy
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore Work Visa &amp; Immigration Opportunities Worldwide
            </p>

            {/* Registration & Scope Banner */}
            <div className="mt-4 inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-xl bg-red-950/60 border border-red-500/40 text-xs sm:text-sm text-red-200">
              <span className="font-bold text-white">Registered in Canada &amp; Pakistan (Since 2021)</span>
              <span className="text-red-400 hidden sm:inline">•</span>
              <span className="text-slate-200">Residency, Business, Study &amp; Visit Visas Worldwide</span>
            </div>

            {/* Action CTAs: [Apply Now] [Contact Us] [WhatsApp Us] */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-600/40 transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer transform hover:-translate-y-0.5 border border-red-500"
                id="hero-apply-btn"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-100 text-[#0a192f] font-black rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
                id="hero-contact-btn"
              >
                <span>Contact Us</span>
                <Phone className="w-4 h-4 text-red-600" />
              </a>

              <a
                href={COMPANY_CONTACT.whatsappUrl("Hello Career Recruit and Immigration Consultancy, I want to explore work visa opportunities.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-[#1e293b] hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Countries Flag Shortcuts Bar - Prominently Displaying Flags */}
            <div className="mt-10 pt-6 border-t border-slate-800">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-black mb-3">
                Targeted Destinations (With Official Government Flags):
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {[
                  { id: 'usa', label: 'United States' },
                  { id: 'canada', label: 'Canada' },
                  { id: 'australia', label: 'Australia' },
                  { id: 'new-zealand', label: 'New Zealand' },
                  { id: 'europe', label: 'Europe (EU)' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCountry(c.id as CountryId);
                      const el = document.getElementById('countries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 rounded-xl bg-[#0f2444] hover:bg-red-600/30 border border-slate-700 hover:border-red-400 text-slate-200 hover:text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer shadow-sm"
                    id={`hero-shortcut-${c.id}`}
                  >
                    <CountryFlag countryId={c.id} size="sm" />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Formal Human Character / Senior Counselor Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame in Navy & Red */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#102a4e] to-[#0a192f] border-2 border-red-600/40 p-4 shadow-2xl overflow-hidden">
                {/* Formal Human Counselor Photo */}
                <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                    alt="Formal Senior Immigration Consultant in Suit"
                    className="w-full h-full object-cover object-top brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-90" />

                  {/* Top Counselor Credential Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-[#0a192f]/90 border border-red-500/50 backdrop-blur-md flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-black text-white">Senior Consular Director</span>
                  </div>

                  {/* Official Verification Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-white/95 text-[#0a192f] text-[11px] font-black shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                    <span>Regulated Advisory</span>
                  </div>

                  {/* Counselor Info Overlay at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[#0a192f]/90 border border-slate-700/80 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-black text-white leading-tight">
                          Dedicated Case Counselor
                        </h3>
                        <p className="text-xs font-semibold text-slate-300 mt-0.5">
                          Direct One-on-One File Review &amp; Employer Liaison
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-black shrink-0">
                        Formal Review
                      </span>
                    </div>

                    {/* Flags of Supported Jurisdictions */}
                    <div className="mt-3 pt-2.5 border-t border-slate-700/70 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Assisting With:
                      </span>
                      <div className="flex items-center gap-1.5">
                        <CountryFlag countryId="usa" size="sm" />
                        <CountryFlag countryId="canada" size="sm" />
                        <CountryFlag countryId="australia" size="sm" />
                        <CountryFlag countryId="new-zealand" size="sm" />
                        <CountryFlag countryId="europe" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-[#0c1f3b] border border-slate-700/60">
                    <div className="text-base font-black text-white">100%</div>
                    <div className="text-[10px] font-semibold text-slate-400 leading-tight">Zero Counterfeit</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0c1f3b] border border-slate-700/60">
                    <div className="text-base font-black text-red-400">15+ Yrs</div>
                    <div className="text-[10px] font-semibold text-slate-400 leading-tight">Counsel Experience</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0c1f3b] border border-slate-700/60">
                    <div className="text-base font-black text-emerald-400">24/7</div>
                    <div className="text-[10px] font-semibold text-slate-400 leading-tight">WhatsApp Case Line</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Feature Badges - Navy & Red Theme */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-[#0e2444]/80 border-2 border-slate-700/60 hover:border-red-500/60 transition-colors backdrop-blur-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-600/20 text-red-400 shrink-0 ring-1 ring-red-500/30">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Work Visa Consultation</h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                Subclass 482, NZ AEWV, Canada LMIA, and US EB-1/EB-2/H-1B employment routes.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e2444]/80 border-2 border-slate-700/60 hover:border-red-500/60 transition-colors backdrop-blur-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 shrink-0 ring-1 ring-blue-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Overseas Recruitment</h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                Harmonizing compliant CVs, reference letters, and candidate dossiers for verified employers.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e2444]/80 border-2 border-slate-700/60 hover:border-red-500/60 transition-colors backdrop-blur-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0 ring-1 ring-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Honest Ethical Assessment</h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                Strict adherence to genuine government immigration authorities. No false assurances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
