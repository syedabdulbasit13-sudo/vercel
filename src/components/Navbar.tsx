import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, ShieldCheck, UserCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { CountryId } from '../types';
import { CountryFlag } from './CountryFlag';
import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  onOpenApply: () => void;
  onSelectCountry: (countryId: CountryId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onSelectCountry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCountryClick = (id: CountryId) => {
    onSelectCountry(id);
    setCountriesDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('countries');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Advisors', href: '#advisors' },
    { label: 'Work Visas', href: '#work-visas' },
    { label: 'Immigration Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const countryLinks: { id: CountryId; label: string }[] = [
    { id: 'usa', label: 'USA Immigration' },
    { id: 'canada', label: 'Canada Immigration' },
    { id: 'australia', label: 'Australia Immigration' },
    { id: 'new-zealand', label: 'New Zealand Immigration' },
    { id: 'europe', label: 'Europe Immigration' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Contact Bar - Deep Navy with Red and White Accents */}
      <div className="bg-[#0a192f] text-slate-200 text-xs py-2.5 px-4 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-extrabold uppercase tracking-wider text-[11px]">Official:</span>
            <span className="text-slate-200">Professional Immigration &amp; Overseas Recruitment Consultancy</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Hotline: <strong className="text-white font-extrabold">{COMPANY_CONTACT.phone}</strong></span>
            </a>

            <a
              href={COMPANY_CONTACT.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-emerald-400 font-bold"
              id="topbar-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: <strong className="text-emerald-300">{COMPANY_CONTACT.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp White Background with Bold Navy Blue and Cardinal Red accents */}
      <nav
        className={`bg-white transition-shadow duration-300 border-b border-slate-200 ${
          isScrolled ? 'shadow-lg py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name - BOLD AND ENLARGED SIZE with user's official logo */}
            <a href="#home" className="flex items-center gap-3.5 group shrink-0" id="brand-logo-link">
              <CompanyLogo variant="horizontal" size="lg" />
            </a>

            {/* Desktop Navigation Menu */}
            <div className="hidden xl:flex items-center gap-1 lg:gap-1.5">
              <a
                href="#home"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50"
                id="nav-home"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50"
                id="nav-about"
              >
                About Us
              </a>

              {/* Countries Dropdown with National Flags */}
              <div className="relative">
                <button
                  onClick={() => setCountriesDropdownOpen(!countriesDropdownOpen)}
                  onMouseEnter={() => setCountriesDropdownOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50 cursor-pointer"
                  id="nav-countries-dropdown-btn"
                >
                  <span>Countries &amp; Visas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform text-red-600 ${countriesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {countriesDropdownOpen && (
                  <div
                    onMouseLeave={() => setCountriesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border-2 border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 text-[11px] font-black uppercase tracking-wider text-slate-500">
                      Select Target Destination
                    </div>
                    {countryLinks.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleCountryClick(item.id)}
                        className="w-full px-4 py-2.5 text-left text-sm font-bold text-[#0a192f] hover:bg-red-50 hover:text-red-600 flex items-center gap-3 transition-colors cursor-pointer"
                        id={`dropdown-country-${item.id}`}
                      >
                        <CountryFlag countryId={item.id} size="sm" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#advisors"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50 flex items-center gap-1.5"
                id="nav-advisors"
              >
                <UserCheck className="w-4 h-4 text-red-600" />
                <span>Formal Counselors</span>
              </a>

              <a
                href="#work-visas"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50"
                id="nav-work-visas"
              >
                Work Visas
              </a>

              <a
                href="#services"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50"
                id="nav-services"
              >
                Immigration Services
              </a>

              <a
                href="#contact"
                className="px-3 py-2 text-sm font-extrabold text-[#0a192f] hover:text-red-600 rounded-lg transition-colors hover:bg-slate-50"
                id="nav-contact"
              >
                Contact Us
              </a>
            </div>

            {/* Header Right Action CTA Button (Bold Red Button on White) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a192f] font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-300"
                id="nav-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={onOpenApply}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm transition-all shadow-md shadow-red-600/30 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                id="nav-apply-now-btn"
              >
                <span>Apply Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={onOpenApply}
                className="sm:hidden px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-black text-xs"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-[#0a192f] hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b-2 border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
            <div className="p-3 bg-red-50/70 rounded-2xl border border-red-200 mb-2">
              <CompanyLogo variant="horizontal" size="sm" />
              <div className="text-xs text-slate-700 font-semibold mt-2 pt-2 border-t border-red-200/60">
                📞 Hotline: <strong className="text-[#0a192f]">{COMPANY_CONTACT.phone}</strong>
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-extrabold text-[#0a192f] hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Countries List with Flags */}
            <div className="pt-2 border-t border-slate-200">
              <div className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-500">
                Target Destinations:
              </div>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {countryLinks.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCountryClick(c.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-bold text-[#0a192f] hover:bg-red-50 hover:text-red-600 transition-colors text-left cursor-pointer"
                  >
                    <CountryFlag countryId={c.id} size="sm" />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-black text-sm text-center shadow-md shadow-red-600/30"
              >
                Apply Now (Free Assessment)
              </button>

              <a
                href={COMPANY_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us: {COMPANY_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
