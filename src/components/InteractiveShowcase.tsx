import React, { useState, useEffect } from 'react';
import { Bot, BarChart3, Video, Layers, TrendingUp, Send, RefreshCw, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface InteractiveShowcaseProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({
  language,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'data' | 'video' | 'web' | 'roi'>('chatbot');
  const t = TRANSLATIONS[language].demoSection;

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: t.chatbot.initialGreeting,
      time: '12:00 PM',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Sync initial message when language toggles
  useEffect(() => {
    setChatMessages([
      {
        sender: 'bot',
        text: t.chatbot.initialGreeting,
        time: '12:00 PM',
      },
    ]);
  }, [language]);

  const handleSendChat = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    const userMsg = { sender: 'user' as const, text, time: '12:01 PM' };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = language === 'id'
        ? 'Terima kasih atas pertanyaan Anda. Infrastruktur AI kami terhubung secara aman menggunakan pipeline API bersertifikasi SOC2 dan vektor embeddings privat. Apakah Anda ingin tim teknis kami melakukan audit arsitektur gratis?'
        : 'Thank you for your question. Our AI infrastructure connects securely using SOC2-compliant API pipelines and dedicated vector embeddings. Would you like our engineering team to conduct a free architecture review?';

      const lower = text.toLowerCase();
      if (lower.includes('database') || lower.includes('postgresql') || lower.includes('data')) {
        botResponse = language === 'id'
          ? 'Untuk sumber PostgreSQL dan data warehouse, kami memasang konektor federasi read-only dengan VPC privat. Mesin analitik data kami memindai skema, mengindeks tabel historis, dan menyusun dasbor eksekutif tanpa mempengaruhi beban performa penulisan data.'
          : 'For PostgreSQL and data warehouse sources, we deploy read-only federated connectors with private VPC peering. Our data analysis engine extracts schemas, indexes historical tables, and synthesizes executive dashboards without altering write performance.';
      } else if (lower.includes('video') || lower.includes('ads') || lower.includes('iklan') || lower.includes('turnaround')) {
        botResponse = language === 'id'
          ? 'Saluran produksi iklan video pendek kami mengirimkan konsep naskah awal dan 20+ variasi hook dalam waktu 48 jam sejak onboarding. Seluruh aset video vertikal 9:16 hasil editing lengkap dengan tipografi kinetik dan voice-over dikirim setiap minggu untuk pengujian rutin.'
          : 'Our short-form video ad pipeline delivers initial script concepts and 20+ hook variations within 48 hours of onboarding. Complete edited 9:16 vertical assets with dynamic typography and voice synthesis are shipped weekly for continuous testing.';
      } else if (lower.includes('halusinasi') || lower.includes('hallucination') || lower.includes('accuracy') || lower.includes('cegah') || lower.includes('prevent')) {
        botResponse = language === 'id'
          ? 'Kami menerapkan arsitektur RAG (Retrieval-Augmented Generation) deterministik dengan batasan kebijakan ketat. Agen hanya menyusun jawaban berdasarkan dokumen terverifikasi di knowledge base Anda. Setiap pertanyaan dengan tingkat keyakinan semantik di bawah 0.88 akan otomatis dialihkan ke tim staf Anda.'
          : 'We enforce deterministic Retrieval-Augmented Generation (RAG) with hard policy boundaries. The agent can only construct answers using verified source nodes in your knowledge base. Any query below a 0.88 semantic confidence score triggers an automatic escalation to your support team.';
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time: '12:01 PM' },
      ]);
      setIsTyping(false);
    }, 700);
  };

  // Data Demo State
  const [dataViewMode, setDataViewMode] = useState<'insights' | 'raw'>('insights');

  // Video Demo State
  const [selectedHook, setSelectedHook] = useState(0);

  // ROI Calculator State
  const [monthlyTraffic, setMonthlyTraffic] = useState(25000);
  const [avgDealValue, setAvgDealValue] = useState(2400);
  const estimatedLeads = Math.round(monthlyTraffic * 0.024);
  const estimatedQualifiedDeals = Math.round(estimatedLeads * 0.18);
  const estimatedNewRevenue = estimatedQualifiedDeals * avgDealValue;

  return (
    <section id="interactive-demo" className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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

          {/* Interactive Mode Segmented Controls */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl max-w-full">
            <button
              onClick={() => setActiveTab('chatbot')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'chatbot'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Bot className="w-4 h-4 text-[#0B192C]" />
              <span>{t.tabs.chatbot}</span>
            </button>

            <button
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'data'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-[#0B192C]" />
              <span>{t.tabs.data}</span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'video'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Video className="w-4 h-4 text-[#0B192C]" />
              <span>{t.tabs.video}</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'web'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Layers className="w-4 h-4 text-[#0B192C]" />
              <span>{t.tabs.web}</span>
            </button>

            <button
              onClick={() => setActiveTab('roi')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'roi'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-[#0B192C]" />
              <span>{t.tabs.roi}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Chatbot Sandbox */}
        {activeTab === 'chatbot' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.chatbot.title}</div>
                  <div className="text-xs text-slate-400">{t.chatbot.subtitle}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setChatMessages([
                    {
                      sender: 'bot',
                      text: t.chatbot.initialGreeting,
                      time: '12:00 PM',
                    },
                  ]);
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{t.chatbot.reset}</span>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-6 h-80 overflow-y-auto space-y-4 bg-slate-50/50">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0B192C] text-white'
                        : 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[10px] mt-1 opacity-70 text-right">{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500 shadow-xs flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                    <span className="inline-block w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="inline-block w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                    <span>{language === 'id' ? 'Agen sedang memindai basis data...' : 'Agent querying vector index...'}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Preset Query Chips */}
            <div className="px-6 py-2.5 bg-slate-100/80 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 shrink-0">{t.chatbot.samplePromptLabel}</span>
              {t.chatbot.samples.map((query, qIdx) => (
                <button
                  key={qIdx}
                  onClick={() => handleSendChat(query)}
                  className="text-xs bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200 px-3 py-1 rounded-md transition-colors text-left"
                >
                  {query}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                placeholder={t.chatbot.inputPlaceholder}
                className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent"
              />
              <button
                onClick={() => handleSendChat()}
                className="px-4 py-2.5 bg-[#0B192C] text-white rounded-lg hover:bg-[#1E3E62] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <span>{t.chatbot.sendButton}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{t.chatbot.serviceNote}</span>
              <button
                onClick={() => onSelectService('customer-support-chatbot')}
                className="font-semibold text-[#0B192C] hover:underline"
              >
                {t.chatbot.deployCta}
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Data Analysis & Insights Engine */}
        {activeTab === 'data' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  {t.data.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.data.subtitle}
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => setDataViewMode('insights')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    dataViewMode === 'insights' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {t.data.insightsTab}
                </button>
                <button
                  onClick={() => setDataViewMode('raw')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    dataViewMode === 'raw' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {t.data.rawTab}
                </button>
              </div>
            </div>

            {dataViewMode === 'insights' ? (
              <div className="pt-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">{t.data.churnLabel}</div>
                    <div className="text-2xl font-bold text-red-600 tabular-nums font-heading mt-1">4.2%</div>
                    <div className="text-xs text-slate-600 mt-1">{t.data.churnDesc}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">{t.data.revenueLabel}</div>
                    <div className="text-2xl font-bold text-emerald-700 tabular-nums font-heading mt-1">+$412,000</div>
                    <div className="text-xs text-slate-600 mt-1">{t.data.revenueDesc}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">{t.data.cacLabel}</div>
                    <div className="text-2xl font-bold text-[#0B192C] tabular-nums font-heading mt-1">-38% CAC</div>
                    <div className="text-xs text-slate-600 mt-1">{t.data.cacDesc}</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2">
                    {t.data.recommendationTitle}
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {t.data.recommendationBody}
                  </p>
                </div>
              </div>
            ) : (
              <div className="pt-6">
                <div className="font-mono text-xs bg-slate-900 text-slate-200 p-4 rounded-xl overflow-x-auto space-y-1">
                  <div className="text-slate-400"># RAW INGESTION DUMP [BATCH_ID: 98402]</div>
                  <div>2026-10-21T18:42:01.002Z [USER: 84920] EVENT: checkout_failed CODE: ERR_GATEWAY_TIMEOUT AMT: 499.00</div>
                  <div>2026-10-21T18:42:09.114Z [USER: 10423] EVENT: pageview PATH: /pricing DWELL_SEC: 142 REFERRER: organic_google</div>
                  <div>2026-10-21T18:42:15.908Z [USER: 54932] EVENT: support_ticket STATUS: escalated DEPT: billing PRIORITY: high</div>
                  <div>2026-10-21T18:42:22.443Z [USER: 84920] EVENT: session_end BOUNCE: true RECOVERY_ACTION: none</div>
                  <div className="text-emerald-400 mt-2">
                    → AI Synthesizer: {language === 'id' ? 'Berhasil mengekstrak 3 pola kunci dari 45.000 baris data mentah.' : 'Extracted 3 critical business patterns from 45k raw rows.'}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Service 03 · {language === 'id' ? 'Analisis Data & Wawasan Bisnis' : 'Data Analysis & Insights'}</span>
              <button
                onClick={() => onSelectService('data-analysis')}
                className="font-semibold text-[#0B192C] hover:underline"
              >
                {t.data.inquireCta}
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Short Form Video Ad Hooks */}
        {activeTab === 'video' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                {t.video.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.video.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {t.video.hooks.map((hook, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedHook(index)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedHook === index
                      ? 'border-[#0B192C] bg-slate-50/80 ring-1 ring-[#0B192C]'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="text-xs font-semibold text-[#0B192C] mb-2">{hook.title}</div>
                  <p className="text-xs font-medium text-slate-800 italic line-clamp-3 mb-3">
                    {hook.hookText}
                  </p>
                  <div className="text-[11px] font-mono tabular-nums text-emerald-700 font-semibold">
                    {hook.predictedRetention}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Hook Detail */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {t.video.hooks[selectedHook].title} · {t.video.storyboardLabel}
                </span>
                <span className="text-xs font-mono text-slate-500">{t.video.hooks[selectedHook].format}</span>
              </div>
              <blockquote className="text-base font-medium text-slate-900 border-l-2 border-slate-300 pl-4 py-1 italic mb-4">
                {t.video.hooks[selectedHook].hookText}
              </blockquote>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-800">{t.video.visualPacing}:</span> {t.video.hooks[selectedHook].pacing}
                </div>
                <div>
                  <span className="font-semibold text-slate-800">{t.video.audioTrack}:</span> {t.video.hooks[selectedHook].suggestedAudio}
                </div>
                <div>
                  <span className="font-semibold text-slate-800">{t.video.benchmark}:</span> {t.video.hooks[selectedHook].predictedRetention}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Service 05 · {language === 'id' ? 'Iklan Video Pendek AI' : 'Short Form Video Ads'}</span>
              <button
                onClick={() => onSelectService('video-ads')}
                className="font-semibold text-[#0B192C] hover:underline"
              >
                {t.video.inquireCta}
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Web Speed Benchmark */}
        {activeTab === 'web' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                {t.web.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.web.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legacy Web Design */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  {t.web.legacyTitle}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>{t.web.lighthouseLabel}</span>
                      <span className="font-mono text-amber-600 font-semibold">58 / 100</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-[58%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>{t.web.ttiLabel}</span>
                      <span className="font-mono text-red-600 font-semibold">3.8 seconds</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[76%]" />
                    </div>
                  </div>
                  <div className="pt-2 text-xs text-slate-500">
                    {t.web.legacyDesc}
                  </div>
                </div>
              </div>

              {/* AI Create Autonomous Web Design */}
              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  {t.web.aiTitle}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{t.web.lighthouseLabel}</span>
                      <span className="font-mono text-emerald-400 font-semibold">99 / 100</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[99%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{t.web.ttiLabel}</span>
                      <span className="font-mono text-emerald-400 font-semibold">0.4 seconds</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[12%]" />
                    </div>
                  </div>
                  <div className="pt-2 text-xs text-slate-400">
                    {t.web.aiDesc}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Service 01 · {language === 'id' ? 'Desain Web AI' : 'AI Web Design'}</span>
              <button
                onClick={() => onSelectService('web-design')}
                className="font-semibold text-[#0B192C] hover:underline"
              >
                {t.web.inquireCta}
              </button>
            </div>
          </div>
        )}

        {/* Tab 5: ROI Calculator */}
        {activeTab === 'roi' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                {t.roi.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.roi.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>{t.roi.trafficLabel}</span>
                    <span className="font-mono text-slate-950 tabular-nums">{monthlyTraffic.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B192C]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5,000</span>
                    <span>100,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>{t.roi.dealValueLabel}</span>
                    <span className="font-mono text-slate-950 tabular-nums">${avgDealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B192C]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>$500</span>
                    <span>$20,000</span>
                  </div>
                </div>
              </div>

              {/* Calculated Results Card */}
              <div className="bg-[#0B192C] text-white p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {t.roi.estimatedAnnualTitle}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums font-heading">
                    ${(estimatedNewRevenue * 12).toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 mt-2">
                    {t.roi.estimatedDetails(estimatedLeads, estimatedQualifiedDeals)}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80">
                  <button
                    onClick={() => onSelectService('lead-generation')}
                    className="w-full py-2.5 px-4 bg-white text-slate-950 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.roi.ctaButton}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
