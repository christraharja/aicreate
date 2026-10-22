import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { CaseStudies } from './components/CaseStudies';
import { ProcessSection } from './components/ProcessSection';
import { AgencyForm } from './components/AgencyForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Language } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-design');

  // Update html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0B192C] selection:text-white">
      {/* Top Bar with Language Toggle (EN | ID) and Primary Action */}
      <Navbar
        language={language}
        onToggleLanguage={setLanguage}
        onBookClick={scrollToForm}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onCtaClick={scrollToForm}
          onExploreClick={scrollToServices}
        />

        {/* 5 Core Capabilities Carousel & Slideshow */}
        <ServicesSection
          language={language}
          onSelectService={handleSelectService}
        />

        {/* Live Interactive Sandbox / Demo of 5 Capabilities */}
        <InteractiveShowcase
          language={language}
          onSelectService={handleSelectService}
        />

        {/* Real Quantified Client Case Studies */}
        <CaseStudies language={language} />

        {/* 4-Phase Deployment Methodology */}
        <ProcessSection language={language} />

        {/* Dedicated Agency Intake & Service Options Form */}
        <AgencyForm
          language={language}
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectService}
        />

        {/* FAQ Accordion */}
        <FAQSection language={language} />
      </main>

      {/* Modern, Quiet Agency Footer */}
      <Footer language={language} onBookClick={scrollToForm} />
    </div>
  );
}
