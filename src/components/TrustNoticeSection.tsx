import React from 'react';
import { AlertTriangle, ShieldCheck, Scale, CheckCircle2, Lock, HelpCircle } from 'lucide-react';
import { OFFICIAL_NOTICE, COMPANY_CONTACT, FAQS } from '../data/immigrationData';

export const TrustNoticeSection: React.FC = () => {
  return (
    <section id="notice" className="py-16 bg-[#0a192f] text-white relative overflow-hidden border-y-4 border-red-600">
      {/* Subtle background glow in red and navy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Important Notice Card */}
        <div className="rounded-3xl bg-[#0e2444]/95 border-2 border-red-500/50 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-700 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 ring-2 ring-red-500/40">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-400">
                Official Transparency &amp; Regulatory Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-0.5 uppercase">
                Important Notice
              </h2>
            </div>
          </div>

          {/* Exact Prompt Mandated Disclaimer in Red & Navy Framing */}
          <div className="my-6 p-6 rounded-2xl bg-red-950/40 border-2 border-red-600/40 text-white text-base sm:text-lg font-bold leading-relaxed">
            <p className="italic">
              &ldquo;{OFFICIAL_NOTICE.text}&rdquo;
            </p>
          </div>

          {/* Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#0a192f] border border-slate-700">
              <div className="flex items-center gap-2 text-red-400 font-black text-sm mb-1.5">
                <Scale className="w-4 h-4" />
                <span>Government Authority</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Visa issuance is solely within the jurisdiction of immigration departments (USCIS, IRCC, Australia DHA, INZ, EU).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a192f] border border-slate-700">
              <div className="flex items-center gap-2 text-white font-black text-sm mb-1.5">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Application-Support Role</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Our role is providing honest diagnostic assessments, meticulous document drafting, and filing assistance to maximize chances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a192f] border border-slate-700">
              <div className="flex items-center gap-2 text-red-400 font-black text-sm mb-1.5">
                <Lock className="w-4 h-4" />
                <span>Zero False Promises</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                We strictly avoid fictitious job guarantees or unauthorized representations. Your profile security is our priority.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
            {/* Bold and enlarged company name */}
            <span className="font-black text-white text-sm">
              {COMPANY_CONTACT.name} • Regulated Advisory Standard
            </span>
            <a
              href={COMPANY_CONTACT.whatsappUrl("I would like to know more about your application-support procedures.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-bold"
            >
              Questions? Chat with our team on WhatsApp →
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-red-400 mb-4 justify-center">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, fIdx) => (
              <div key={fIdx} className="p-6 rounded-2xl bg-[#0e2444]/90 border border-slate-700">
                <h3 className="text-base font-black text-white">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
