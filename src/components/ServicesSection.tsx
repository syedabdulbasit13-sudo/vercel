import React, { useState } from 'react';
import {
  Briefcase,
  Award,
  Building2,
  FileText,
  CheckCircle2,
  FolderCheck,
  UserCheck,
  PlaneTakeoff,
  Globe2,
  Plane,
  ChevronRight,
  ArrowRight,
  Sparkles,
  X,
  MessageCircle,
  Phone
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_CONTACT } from '../data/immigrationData';
import { ImmigrationService } from '../types';

interface ServicesSectionProps {
  onOpenApply: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  FolderCheck: <FolderCheck className="w-6 h-6" />,
  UserCheck: <UserCheck className="w-6 h-6" />,
  PlaneTakeoff: <PlaneTakeoff className="w-6 h-6" />,
  Globe2: <Globe2 className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenApply }) => {
  const [selectedService, setSelectedService] = useState<ImmigrationService | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading in White, Red & Navy Blue Theme */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>End-To-End Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight" id="work-visas">
            Our Immigration Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Professional consultancy &amp; overseas recruitment services built on legal integrity, thorough profile evaluation, and official standard documentation.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-red-600 hover:shadow-xl transition-all flex flex-col justify-between group"
              id={`service-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0a192f] flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {iconMap[service.iconName] || <Briefcase className="w-6 h-6" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {service.id === 'visit-visa-services' && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Worldwide Travel
                      </span>
                    )}
                    <span className="text-xs font-mono font-black text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#0a192f] mt-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Features preview */}
                <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                  {service.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-black text-red-600 hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
                  id={`learn-more-service-${service.id}`}
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenApply(service.title)}
                  className="px-4 py-2 bg-[#0a192f] hover:bg-red-600 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
                  id={`apply-service-${service.id}`}
                >
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 rounded-3xl bg-[#0a192f] border-2 border-red-600/30 p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-red-400">
              Personalized Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Unsure which visa category matches your current qualifications?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
              Speak directly with our senior counselors for an objective eligibility audit.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_CONTACT.whatsappUrl("Hello, I need guidance selecting the right visa stream for my qualifications.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenApply()}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-colors shadow-md shadow-red-600/30 cursor-pointer"
            >
              Request Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Service Detailed Modal in White, Red and Navy */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
                {iconMap[selectedService.iconName] || <Briefcase className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-red-600">
                  Immigration &amp; Recruitment Service
                </span>
                <h4 className="text-xl font-black text-[#0a192f]">
                  {selectedService.title}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {selectedService.fullDesc}
            </p>

            <div className="mt-5">
              <div className="text-xs font-black uppercase tracking-wider text-[#0a192f] mb-2.5">
                Key Deliverables &amp; Scope:
              </div>
              <ul className="space-y-2">
                {selectedService.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-[#0a192f] font-black">Ideal Candidate: </strong>
              {selectedService.idealFor}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <a
                href={COMPANY_CONTACT.whatsappUrl(`Hello, I would like to inquire about ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a192f] font-bold text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenApply(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Apply for this service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
