import React, { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AgencyFormProps {
  language: Language;
  selectedServiceId?: string;
  onSelectService?: (serviceId: string) => void;
}

export const AgencyForm: React.FC<AgencyFormProps> = ({ language, selectedServiceId }) => {
  const t = TRANSLATIONS[language].form;
  const servicesList = TRANSLATIONS[language].servicesSection.services;

  const [selectedServices, setSelectedServices] = useState<string[]>(
    selectedServiceId ? [selectedServiceId] : ['web-design', 'lead-generation']
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    budget: '$5,000 - $15,000',
    timeline: 'Immediate (< 2 weeks)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prop changes
  React.useEffect(() => {
    if (selectedServiceId && !selectedServices.includes(selectedServiceId)) {
      setSelectedServices((prev) => [...prev, selectedServiceId]);
    }
  }, [selectedServiceId]);

  const toggleService = (id: string) => {
    if (id === 'all') {
      if (selectedServices.length === servicesList.length) {
        setSelectedServices([]);
      } else {
        setSelectedServices(servicesList.map((s) => s.id));
      }
      return;
    }

    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = t.errors.name;
    if (!formData.email.trim()) {
      errs.email = t.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.errors.emailInvalid;
    }
    if (!formData.company.trim()) errs.company = t.errors.company;
    if (selectedServices.length === 0) errs.services = t.errors.services;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact-form" className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-2">
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

        {isSubmitted ? (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="w-14 h-14 bg-[#0B192C] text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 font-heading mb-2">
              {t.successTitle}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              {t.successMessage(formData.fullName, formData.company, formData.email)}
            </p>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-6">
              <div className="font-semibold text-slate-800">{t.requestedCaps}</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedServices.map((sid) => {
                  const s = servicesList.find((item) => item.id === sid);
                  return (
                    <span key={sid} className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded text-xs font-medium">
                      {s ? s.title : sid}
                    </span>
                  );
                })}
              </div>
              <div className="text-slate-500 pt-1">
                {t.estBudgetLabel} <span className="text-slate-900 font-medium">{formData.budget}</span> · {t.timelineText} <span className="text-slate-900 font-medium">{formData.timeline}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  company: '',
                  website: '',
                  budget: '$5,000 - $15,000',
                  timeline: 'Immediate (< 2 weeks)',
                  notes: '',
                });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>{t.anotherRequestButton}</span>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50/60 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs"
          >
            {/* Step 1: Service Selection */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <label className="text-sm font-bold text-slate-950 uppercase tracking-wider font-heading">
                  {t.step1Title}
                </label>
                <button
                  type="button"
                  onClick={() => toggleService('all')}
                  className="text-xs font-semibold text-[#0B192C] hover:underline self-start sm:self-auto"
                >
                  {selectedServices.length === servicesList.length ? t.deselectAll : t.selectAll}
                </button>
              </div>

              {errors.services && (
                <p className="text-xs text-red-600 mb-3 font-medium">{errors.services}</p>
              )}

              {/* 5 Services Checkbox / Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {servicesList.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`relative rounded-xl p-4 border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-white border-[#0B192C] shadow-xs ring-1 ring-[#0B192C]'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                            isChecked
                              ? 'bg-[#0B192C] border-[#0B192C] text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-900 leading-tight">
                            {service.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {service.tagline}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Client & Company Information */}
            <div className="mb-10 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-heading mb-4">
                {t.step2Title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.nameLabel}
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.companyLabel}
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t.companyPlaceholder}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent ${
                      errors.company ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="website" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.websiteLabel}
                  </label>
                  <input
                    id="website"
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder={t.websitePlaceholder}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Project Parameters */}
            <div className="mb-10 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-heading mb-4">
                {t.step3Title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.budgetLabel}
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent"
                  >
                    {t.budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.timelineLabel}
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent"
                  >
                    {t.timelineOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.notesLabel}
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.notesPlaceholder}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent"
                />
              </div>
            </div>

            {/* Submission & Trust Guarantees */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>{t.ndaBadge}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-700" />
                  <span>{t.proposalBadge}</span>
                </div>
              </div>

              {/* High-Converting CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] transition-colors rounded-lg shadow-sm whitespace-nowrap active:scale-98 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  <span>{t.submittingButton}</span>
                ) : (
                  <>
                    <span>{t.submitButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
