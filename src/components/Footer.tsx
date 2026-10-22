import React from 'react';
import { AGENCY_LOGO_URL } from '../data/agencyData';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onBookClick }) => {
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;
  const servicesList = TRANSLATIONS[language].servicesSection.services;

  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={AGENCY_LOGO_URL}
                alt="AI Create Logo"
                className="h-8 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                AI Create
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {t.locations}
              </span>
            </div>
          </div>

          {/* Capabilities Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.capabilitiesTitle}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.number}. {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.exploreTitle}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">
                  {nav.demo}
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  {nav.caseStudies}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {nav.process}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-white transition-colors">
                  {language === 'id' ? 'Formulir Klien' : 'Client Intake Portal'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & CTA Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.contactTitle}
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>partnerships@aicreate.agency</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                {t.retainerNote}
              </p>
              <button
                onClick={onBookClick}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0B192C] bg-white hover:bg-slate-100 transition-colors rounded-lg shadow-sm"
              >
                <span>{t.ctaButton}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <span>{t.soc2}</span>
            <span aria-hidden="true">·</span>
            <span>{t.gdpr}</span>
            <span aria-hidden="true">·</span>
            <span>{t.noTraining}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
