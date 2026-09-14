import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACT, OFFICIAL_NOTICE } from '../data/immigrationData';
import { CountryId } from '../types';
import { CountryFlag } from './CountryFlag';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onSelectCountry: (id: CountryId) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCountry, onOpenApply }) => {
  return (
    <footer className="bg-[#0a192f] text-slate-300 text-xs border-t-4 border-red-600">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col with OFFICIAL LOGO & BOLD ENLARGED COMPANY NAME */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <CompanyLogo variant="horizontal" size="lg" inverted={true} />
            </div>

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm font-normal">
              {COMPANY_CONTACT.overview}
            </p>

            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call: <strong className="text-white">{COMPANY_CONTACT.phone}</strong></span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: <strong>{COMPANY_CONTACT.phone}</strong></span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Menu */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-red-600/60 pb-1.5 inline-block">
              Main Menu
            </h4>
            <ul className="space-y-2 font-bold text-slate-300">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#advisors" className="hover:text-red-400 transition-colors">Formal Counselors</a>
              </li>
              <li>
                <a href="#work-visas" className="hover:text-red-400 transition-colors">Work Visas</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">Immigration Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <button
                  onClick={onOpenApply}
                  className="text-red-400 hover:text-red-300 font-black transition-colors text-left cursor-pointer"
                >
                  Apply Now (Free Assessment)
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations with Flags */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-red-600/60 pb-1.5 inline-block">
              Destinations
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-300">
              {[
                { id: 'usa', label: 'USA Immigration' },
                { id: 'canada', label: 'Canada Immigration' },
                { id: 'australia', label: 'Australia Immigration' },
                { id: 'new-zealand', label: 'New Zealand Immigration' },
                { id: 'europe', label: 'Europe Immigration' },
              ].map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectCountry(c.id as CountryId);
                      const el = document.getElementById('countries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-red-400 transition-colors text-left flex items-center gap-2 cursor-pointer"
                  >
                    <CountryFlag countryId={c.id} size="sm" />
                    <span>{c.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Transparency Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-red-600/60 pb-1.5 inline-block">
              Official Disclaimer
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0e2444] border border-slate-700 text-[11px] text-slate-300 leading-relaxed font-normal">
              Visa issuance is strictly within the jurisdiction of government authorities. We provide consultancy and document preparation and do not guarantee visa approval.
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <span>WhatsApp Case Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#071324] py-5 border-t border-slate-800 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">{COMPANY_CONTACT.name}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Official Application-Support Services</span>
            <span>•</span>
            <a href="#notice" className="text-red-400 hover:underline">Official Notice</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white">Contact &amp; Hours</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
