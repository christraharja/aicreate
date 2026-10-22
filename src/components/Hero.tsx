import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: Language;
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onCtaClick, onExploreClick }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="relative bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - Unboxed text with subtle separator */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-4">
          <span className="text-[#0B192C] font-semibold tracking-wide">{t.kicker}</span>
          <span aria-hidden="true">·</span>
          <span>{t.divisions}</span>
          <span aria-hidden="true">·</span>
          <span>{t.systems}</span>
        </div>

        {/* Space-Efficient Headline & Value Proposition Block */}
        <div className="max-w-4xl mb-10">
          <h1
            className="text-slate-950 font-bold tracking-tight leading-[1.1] mb-5 font-heading"
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
              textWrap: 'balance' as any,
            }}
          >
            {t.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-7">
            {t.subheadline}
          </p>

          {/* CTA Action Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] transition-colors rounded-lg shadow-sm whitespace-nowrap active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] focus-visible:ring-offset-2"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 hover:text-slate-950 border border-slate-200 transition-colors rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              <span>{t.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0B192C] shrink-0" />
              <span>{t.guarantees.zeroHallucinations}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B192C] shrink-0" />
              <span>{t.guarantees.soc2}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#0B192C] shrink-0" />
              <span>{t.guarantees.deployment}</span>
            </div>
          </div>
        </div>

        {/* 4-Column Proof KPI Bar */}
        <div className="border-t border-slate-200 pt-7 sm:pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {t.metrics.map((metric) => (
              <div key={metric.label} className="border-l border-slate-200 pl-4 sm:pl-5">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight tabular-nums font-heading">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
