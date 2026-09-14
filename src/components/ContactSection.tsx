import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, Send, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';
import { FORMAL_ADVISORS } from '../data/advisorsData';
import { CompanyLogo } from './CompanyLogo';

interface ContactSectionProps {
  onOpenApply: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenApply }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Australia',
    advisorPref: 'Any Senior Advisor',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Prepare WhatsApp message
    const waText = `*OFFICIAL INQUIRY - CAREER RECRUIT AND IMMIGRATION CONSULTANCY*
*Full Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Target Destination:* ${formData.destination}
*Preferred Advisor:* ${formData.advisorPref}
*Inquiry Details:* ${formData.message}`;
    // open WhatsApp in new tab
    window.open(`https://wa.me/923202216612?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Prompt Headline & Structure with OFFICIAL LOGO & BOLD ENLARGED COMPANY NAME */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-2xl bg-white border-2 border-slate-200 shadow-md">
              <CompanyLogo variant="icon" size="lg" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>Direct Consular Communication</span>
          </div>

          {/* SUPER ENLARGED & BOLD COMPANY NAME */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight uppercase leading-tight">
            CAREER RECRUIT &amp; IMMIGRATIONS CONSULTANCY
          </h2>

          <p className="mt-3 text-xl sm:text-3xl font-black text-red-600">
            Start Your International Career Today
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg sm:text-2xl font-black text-[#0a192f]">
            <span>Call / WhatsApp:</span>
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="text-red-600 hover:text-red-700 underline decoration-2 underline-offset-4"
            >
              {COMPANY_CONTACT.phone}
            </a>
          </div>

          {/* Action CTAs: [WhatsApp Us] [Apply Now] */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_CONTACT.whatsappUrl("Hello Career Recruit and Immigration Consultancy! I want to start my international career consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2 text-base cursor-pointer transform hover:-translate-y-0.5"
              id="contact-section-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenApply}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-700/30 transition-all flex items-center gap-2 text-base cursor-pointer transform hover:-translate-y-0.5 border border-red-500"
              id="contact-section-apply-btn"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Info & Interactive Direct Message Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards in White & Navy with Red Accents */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    Instant WhatsApp Support
                  </div>
                  <a
                    href={COMPANY_CONTACT.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-[#0a192f] hover:text-emerald-600 transition-colors"
                  >
                    {COMPANY_CONTACT.phone}
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Fast response for preliminary profile inquiries
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    Official Telephone Line
                  </div>
                  <a
                    href={`tel:${COMPANY_CONTACT.phone}`}
                    className="text-lg font-black text-[#0a192f] hover:text-red-600 transition-colors"
                  >
                    {COMPANY_CONTACT.phone}
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday to Saturday (10:00 AM – 7:00 PM)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    Direct Case Submissions
                  </div>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="text-base font-black text-[#0a192f] hover:text-red-600 transition-colors"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Send resumes and credentials for formal audit
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0a192f] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    Consultancy Chambers
                  </div>
                  <p className="text-sm font-black text-[#0a192f]">
                    {COMPANY_CONTACT.address}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    In-person dossier submissions by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Consultation Request Form in Crisp White & Navy */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-black text-red-600 uppercase tracking-wider">
                Direct Submission
              </span>
              <h3 className="text-2xl font-black text-[#0a192f]">
                Request a Formal Case File Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below. Your file will be instantly formatted and submitted directly to our senior advisory team.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-red-50 border-2 border-red-300 text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-[#0a192f]">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-sm text-slate-700 mt-2 max-w-md mx-auto">
                  A WhatsApp chat window has been opened with your inquiry parameters. Our formal case counselors will review your details promptly.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#0a192f] hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={onOpenApply}
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl"
                  >
                    Open Full Profile Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Syed Abdul Basit"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-semibold text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92-300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-semibold text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-semibold text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                      Target Destination *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-bold text-sm focus:outline-none bg-white"
                    >
                      <option value="Australia (Subclass 482 / 189 / 190)">Australia (Subclass 482 / 189 / 190)</option>
                      <option value="Canada (LMIA / Express Entry / PNP)">Canada (LMIA / Express Entry / PNP)</option>
                      <option value="New Zealand (AEWV / Green List)">New Zealand (AEWV / Green List)</option>
                      <option value="USA (H-1B / EB-1 / EB-2 / EB-3)">USA (H-1B / EB-1 / EB-2 / EB-3)</option>
                      <option value="Europe (EU Blue Card / Chancenkarte)">Europe (EU Blue Card / Chancenkarte)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                    Select Preferred Formal Counselor (Optional)
                  </label>
                  <select
                    value={formData.advisorPref}
                    onChange={(e) => setFormData({ ...formData, advisorPref: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-bold text-sm focus:outline-none bg-white"
                  >
                    <option value="Any Senior Advisor">First Available Senior Consular Advisor</option>
                    {FORMAL_ADVISORS.map((a) => (
                      <option key={a.id} value={`${a.name} (${a.role})`}>
                        {a.name} – {a.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#0a192f] mb-1">
                    Your Profile Summary &amp; Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide your highest degree, years of experience, current occupation, and IELTS/PTE status..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 text-[#0a192f] font-medium text-sm focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500">
                    🔒 All information submitted is strictly confidential under client privacy rules.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer border border-red-500"
                  >
                    <span>Submit &amp; Send to WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
