
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteContent } from '../../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 text-sky-600 mb-6">
            <HelpCircle size={32} />
            <span className="font-black uppercase tracking-[0.4em] text-sm">Knowledge Base</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">Expert Insights & Queries</h2>
          <p className="text-xl text-slate-500 font-medium">Your guide to UAE documentation and regulatory frameworks.</p>
        </div>

        <div className="space-y-6">
          {siteContent.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                openIdx === idx ? 'border-sky-600 bg-sky-50/20 shadow-xl shadow-sky-100' : 'border-slate-50 bg-white hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <span className="text-xl font-black text-slate-900 pr-8">{faq.q}</span>
                <span className={`flex-shrink-0 p-2 rounded-xl transition-all duration-300 ${
                  openIdx === idx ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                }`}>
                  {openIdx === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-lg text-slate-600 font-medium leading-relaxed border-t border-sky-100/50 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
