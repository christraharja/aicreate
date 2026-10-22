import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface CaseStudiesProps {
  language: Language;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ language }) => {
  const t = TRANSLATIONS[language].caseStudies;

  return (
    <section id="case-studies" className="bg-white py-16 lg:py-24 border-b border-slate-200">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.studies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
            >
              <div>
                {/* Header metadata unboxed with separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <span className="text-slate-900 font-semibold">{study.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.industry}</span>
                </div>

                <div className="text-3xl font-extrabold text-[#0B192C] tabular-nums tracking-tight font-heading mb-4">
                  {study.metric}
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <div>
                    <span className="font-semibold text-slate-900 block mb-0.5">{t.challengeLabel}</span>
                    <p className="leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block mb-0.5">{t.solutionLabel}</span>
                    <p className="leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <div className="text-xs font-medium text-slate-900">
                  {study.result}
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  — {study.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
