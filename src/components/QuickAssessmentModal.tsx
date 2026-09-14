import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Globe, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { FORMAL_ADVISORS } from '../data/advisorsData';
import { CountryId } from '../types';
import { CountryFlag } from './CountryFlag';
import { CompanyLogo } from './CompanyLogo';

interface QuickAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCountry?: CountryId;
  initialService?: string;
}

export const QuickAssessmentModal: React.FC<QuickAssessmentModalProps> = ({
  isOpen,
  onClose,
  initialCountry,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetCountry: initialCountry || 'australia',
    serviceType: initialService || 'Work Visa Consultation',
    preferredAdvisor: 'Any Formal Counselor',
    education: 'Bachelor Degree',
    yearsOfExperience: '3-5 years',
    occupation: '',
    englishTest: 'IELTS Completed',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync props if modal re-opened with new values
  React.useEffect(() => {
    if (initialCountry) {
      setFormData((prev) => ({ ...prev, targetCountry: initialCountry }));
    }
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialCountry, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('immigration_applications') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('immigration_applications', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    // Format WhatsApp message
    const waMessage = `*NEW APPLICATION / PROFILE ASSESSMENT*
*Agency:* CAREER RECRUIT AND IMMIGRATION CONSULTANCY
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Target Destination:* ${formData.targetCountry.toUpperCase()}
*Service Requested:* ${formData.serviceType}
*Assigned Counselor:* ${formData.preferredAdvisor}
*Education Level:* ${formData.education}
*Work Experience:* ${formData.yearsOfExperience}
*Current Occupation:* ${formData.occupation}
*English Test Status:* ${formData.englishTest}
*Additional Info:* ${formData.notes || 'None'}

Please connect me with a formal counselor to assess my eligibility.`;

    window.open(`https://wa.me/923202216612?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a192f]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-2 border-slate-200 my-8 relative">
        {/* Header with OFFICIAL LOGO & ENLARGED COMPANY NAME */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
              <CompanyLogo variant="icon" size="sm" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-wider mb-0.5 border border-red-200">
                <Sparkles className="w-3 h-3 text-red-600" />
                <span>Official Case Evaluation</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-[#0a192f] leading-tight">
                CAREER RECRUIT &amp; IMMIGRATIONS
              </h2>
              <p className="text-xs text-red-600 font-bold">
                Profile Evaluation &amp; Work Visa Intake
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            id="close-assessment-modal"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-[#0a192f]">
              Assessment Dossier Formatted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your profile has been compiled into an official case inquiry. You can now chat directly with our formal counselor on WhatsApp at <strong className="text-red-600 font-bold">{COMPANY_CONTACT.phone}</strong>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMPANY_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+92-320-2216612)</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3.5 bg-[#0a192f] hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-semibold focus:border-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 320 2216612"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-semibold focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-semibold focus:border-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Target Destination *
                </label>
                <select
                  value={formData.targetCountry}
                  onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value as CountryId })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="australia">🇦🇺 Australia (Skills in Demand / 189 / 190)</option>
                  <option value="canada">🇨🇦 Canada (LMIA / Express Entry / PNP)</option>
                  <option value="new-zealand">🇳🇿 New Zealand (AEWV / Green List / SMC)</option>
                  <option value="usa">🇺🇸 USA (H-1B / EB-1 / EB-2 NIW / EB-3)</option>
                  <option value="europe">🇪🇺 Europe (EU Blue Card / Chancenkarte)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Service Category
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="Work Visa Consultation">Work Visa Consultation</option>
                  <option value="Visit Visa Services">Visit Visa Services (Tourist / Business / Family)</option>
                  <option value="Skilled Immigration">Skilled Immigration (PR)</option>
                  <option value="Employer-Sponsored Visa">Employer-Sponsored Visa Guidance</option>
                  <option value="Job Documentation Assistance">Job/Employment Documentation Assistance</option>
                  <option value="Overseas Recruitment Services">Overseas Recruitment Services</option>
                  <option value="Profile Assessment">Profile Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Formal Counselor Preference
                </label>
                <select
                  value={formData.preferredAdvisor}
                  onChange={(e) => setFormData({ ...formData, preferredAdvisor: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="Any Formal Counselor">First Available Formal Counselor</option>
                  {FORMAL_ADVISORS.map((a) => (
                    <option key={a.id} value={a.name}>
                      {a.name} ({a.experienceYears})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Education Level
                </label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="Master/PhD">Master&apos;s or PhD</option>
                  <option value="Bachelor Degree">Bachelor&apos;s Degree</option>
                  <option value="Diploma/Vocational">Diploma / Trade</option>
                  <option value="Higher Secondary">Higher Secondary</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  Experience
                </label>
                <select
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="8+ years">8+ years</option>
                  <option value="5-7 years">5–7 years</option>
                  <option value="3-5 years">3–5 years</option>
                  <option value="1-2 years">1–2 years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                  English Status
                </label>
                <select
                  value={formData.englishTest}
                  onChange={(e) => setFormData({ ...formData, englishTest: e.target.value })}
                  className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-white text-[#0a192f] font-bold focus:border-red-600 focus:outline-none"
                >
                  <option value="IELTS 7+ / PTE 65+">IELTS 7+ / PTE 65+</option>
                  <option value="IELTS 6.0 / PTE 50">IELTS 6.0 / PTE 50</option>
                  <option value="Planning to take test">Planning to take test</option>
                  <option value="None yet">None yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                Current Occupation / Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Software Engineer, Mechanical Engineer, Nurse, Accountant"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-semibold focus:border-red-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-[#0a192f] uppercase mb-1">
                Additional Comments or Specific Country Goals
              </label>
              <textarea
                rows={2}
                placeholder="Share any details regarding job offers, certifications, or previous visa history..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-[#0a192f] font-medium focus:border-red-600 focus:outline-none"
              />
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500">
                🔒 Official verification by Career Recruit advisors.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer border border-red-500"
                id="submit-assessment-btn"
              >
                <span>Submit &amp; Open WhatsApp Dossier</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
