
import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { siteContent } from '../../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="whyus" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 text-sky-600 font-black mb-6 uppercase tracking-[0.4em] text-xs bg-sky-50 px-4 py-2 rounded-full">
            <Sparkles size={16} />
            <span>Market Advantage</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8">Why Work With Us</h2>
          <div className="w-32 h-2.5 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {siteContent.whyUs.cards.map((card, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-50 group">
              <div className="w-20 h-20 rounded-3xl bg-sky-600/10 text-sky-600 flex items-center justify-center mb-10 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <card.icon size={36} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{card.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-widest opacity-20">Voice of Our Clients</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {siteContent.whyUs.testimonials.map((t, idx) => (
            <div key={idx} className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group hover:border-sky-500 transition-all duration-500 overflow-hidden">
              <Quote className="absolute -top-4 -right-4 text-slate-50 group-hover:text-sky-50 transition-colors rotate-12" size={120} />
              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sky-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic font-bold leading-relaxed mb-10">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-sky-600 font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
