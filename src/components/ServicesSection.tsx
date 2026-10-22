import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Layers,
  TrendingUp,
  BarChart3,
  Bot,
  Video,
  Pause,
  Play
} from 'lucide-react';
import { Language, LocalizedService, TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language, onSelectService }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const t = TRANSLATIONS[language].servicesSection;
  const servicesList: LocalizedService[] = t.services;
  const activeService: LocalizedService = servicesList[currentIndex] || servicesList[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex, servicesList.length]);

  return (
    <section id="services" className="bg-white py-16 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact and modern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-2">
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.capabilities}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-heading">
              {t.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              {t.subheading}
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors flex items-center gap-1.5"
              title={isAutoPlaying ? t.pause : t.autoPlay}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAutoPlaying ? t.pause : t.autoPlay}</span>
            </button>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={handlePrev}
                aria-label="Previous service"
                className="p-1.5 rounded-md text-slate-700 hover:text-slate-950 hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-semibold px-2 tabular-nums text-slate-800">
                0{currentIndex + 1} / 0{servicesList.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next service"
                className="p-1.5 rounded-md text-slate-700 hover:text-slate-950 hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Service Category Jump Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {servicesList.map((service, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={service.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all shrink-0 border ${
                  isActive
                    ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={`font-mono text-[11px] ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                  {service.number}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Space-Efficient Main Carousel Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Explanations, What We Offer & Deliverables */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium mb-2">
                  <span className="font-mono text-[#0B192C] font-bold text-sm">{activeService.number}</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#0B192C] font-semibold">{activeService.shortTag}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">{t.divisionLabel}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-heading mb-2">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-slate-800 mb-3">
                  {activeService.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Space-efficient What We Offer grid */}
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3">
                    {t.whatWeOfferTitle}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.whatWeOffer.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <Check className="w-3.5 h-3.5 text-[#0B192C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables line */}
                <div className="text-xs text-slate-600 mb-6">
                  <span className="font-semibold text-slate-900">{t.deliverablesLabel}: </span>
                  <span className="text-slate-700">
                    {activeService.deliverables.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Bottom Action Bar inside the card */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tabular-nums font-heading">
                    {activeService.impactMetric}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {activeService.metricLabel}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(activeService.id)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] transition-colors rounded-lg shadow-sm whitespace-nowrap active:scale-98"
                >
                  <span>{t.selectInForm}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Smaller Semi-Cartoon Illustration */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xs group">
                <img
                  src={activeService.image}
                  alt={`${activeService.title} semi-cartoon illustration`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-6', 'bg-slate-50');
                      target.parentElement.innerHTML = `<div class="text-center"><p class="text-sm font-semibold">${activeService.title}</p></div>`;
                    }
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs border border-slate-200 rounded-lg px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-800 shadow-xs">
                  {activeService.number}
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs text-slate-500 font-medium">
                  {activeService.title} · {t.workflowModel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Carousel Strip for Fast Jumping */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
          {servicesList.map((service, index) => {
            const isSelected = currentIndex === index;
            return (
              <div
                key={service.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'border-[#0B192C] bg-slate-50/90 ring-1 ring-[#0B192C] shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="w-12 h-12 rounded-lg border border-slate-100 overflow-hidden shrink-0 bg-white p-1 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono font-semibold text-slate-400">
                    {service.number}
                  </div>
                  <div className="text-xs font-semibold text-slate-900 truncate">
                    {service.title}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold truncate">
                    {service.impactMetric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
