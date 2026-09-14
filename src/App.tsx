/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountrySection } from './components/CountrySection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TrustNoticeSection } from './components/TrustNoticeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickAssessmentModal } from './components/QuickAssessmentModal';
import { CountryId } from './types';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCountryId, setSelectedCountryId] = useState<CountryId>('australia');
  const [targetServiceForModal, setTargetServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenApply = (countryOrService?: CountryId | string) => {
    if (countryOrService) {
      if (['usa', 'canada', 'australia', 'new-zealand', 'europe'].includes(countryOrService)) {
        setSelectedCountryId(countryOrService as CountryId);
        setTargetServiceForModal(undefined);
      } else {
        setTargetServiceForModal(countryOrService);
      }
    }
    setIsApplyModalOpen(true);
  };

  const handleSelectCountry = (id: CountryId) => {
    setSelectedCountryId(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Navbar with Main Menu & Contact Details */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onSelectCountry={handleSelectCountry}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Homepage Hero Section */}
        <Hero
          onOpenApply={() => handleOpenApply()}
          onSelectCountry={handleSelectCountry}
        />

        {/* Countries Section: USA, Canada, Australia, New Zealand, Europe */}
        <CountrySection
          selectedCountryId={selectedCountryId}
          onSelectCountry={handleSelectCountry}
          onOpenApply={(cId) => handleOpenApply(cId)}
        />

        {/* 9 Immigration Services Section */}
        <ServicesSection
          onOpenApply={(serviceTitle) => handleOpenApply(serviceTitle)}
        />

        {/* About Us & Interactive Points Estimator */}
        <AboutSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Important Notice & Trust Transparency Section */}
        <TrustNoticeSection />

        {/* Contact Section: Call/WhatsApp +92-320-2216612 */}
        <ContactSection
          onOpenApply={() => handleOpenApply()}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onSelectCountry={handleSelectCountry}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Interactive Floating WhatsApp Contact Trigger */}
      <FloatingWhatsApp />

      {/* "Apply Now" Profile Assessment Modal */}
      <QuickAssessmentModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialCountry={selectedCountryId}
        initialService={targetServiceForModal}
      />
    </div>
  );
}

