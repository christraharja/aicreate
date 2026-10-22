import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { AGENCY_LOGO_URL } from '../data/agencyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onBookClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { label: t.services, href: '#services' },
    { label: t.demo, href: '#interactive-demo' },
    { label: t.caseStudies, href: '#case-studies' },
    { label: t.process, href: '#process' },
    { label: t.faq, href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8 h-18">
          {/* Zone 1: Single text wordmark with official logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
          >
            <img
              src={AGENCY_LOGO_URL}
              alt="AI Create Logo"
              className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight text-slate-950 font-heading">
              AI <span className="text-[#0B192C] font-semibold text-opacity-80">Create</span>
            </span>
          </a>

          {/* Zone 2: Concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 relative hover:underline underline-offset-8 decoration-slate-900/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Primary CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Segmented Toggle (EN | ID) */}
            <div className="flex items-center rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/50'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLanguage('id')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'id'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/50'
                }`}
                aria-label="Ganti ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 md:px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0B192C] hover:bg-[#1E3E62] transition-colors rounded-lg shadow-sm whitespace-nowrap shrink-0 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] focus-visible:ring-offset-2"
            >
              <span>{t.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 py-5 space-y-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-slate-700 hover:text-slate-950 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors"
            >
              <span>{t.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
