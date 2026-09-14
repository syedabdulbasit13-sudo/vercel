import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/immigrationData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 p-3 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-200 text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-600 text-[10px]"
            title="Dismiss"
          >
            ✕
          </button>
          <div className="flex items-center gap-2 font-bold text-slate-900 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Consultant Online</span>
          </div>
          <p className="text-[11px] text-slate-600">
            Have questions about Australian Subclass 482, NZ AEWV, or Canada visas?
          </p>
          <span className="text-[11px] font-bold text-emerald-700 block mt-1">
            WhatsApp: {COMPANY_CONTACT.phone}
          </span>
        </div>
      )}

      <a
        href={COMPANY_CONTACT.whatsappUrl("Hello Career Recruit and Immigration Consultancy, I would like to inquire about visa eligibility.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-700/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group relative ring-4 ring-emerald-400/20"
        id="floating-whatsapp-trigger"
        aria-label="Contact on WhatsApp +92-320-2216612"
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
