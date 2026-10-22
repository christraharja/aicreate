import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ProcessSectionProps {
  language: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].process;

  return (
    <section id="process" className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-2">
            <span>{t.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.subkicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-heading">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-[#0B192C] mb-4 tabular-nums">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{step.phaseLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
