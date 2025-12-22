
import React from 'react';
import { siteContent } from '../../constants';

const Hero: React.FC = () => {
  const ServiceIcon = siteContent.services[0].icon;

  return (
    <section id="home" className="relative pt-12 pb-24 lg:pt-24 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block py-2 px-4 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest mb-8">
              Reliable • Compliant • Efficient
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              {siteContent.hero.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              {siteContent.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a
                href="#consultation"
                className="bg-sky-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-sky-700 transition-all shadow-xl hover:-translate-y-1 text-center"
              >
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-50 transition-all text-center shadow-md"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-y-6 gap-x-10">
              {siteContent.hero.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="p-2 bg-sky-50 rounded-lg group-hover:bg-sky-100 transition-colors">
                    <badge.icon size={22} className="text-sky-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-slate-400/10 rounded-full blur-[100px]"></div>
            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50 overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-bl-[8rem]"></div>
              <div className="relative flex flex-col space-y-10">
                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-200">
                    <ServiceIcon size={40} />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-40 bg-slate-100 rounded-full"></div>
                    <div className="h-3 w-24 bg-slate-50 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-5 w-full bg-slate-50 rounded-full"></div>
                  <div className="h-5 w-5/6 bg-slate-50 rounded-full"></div>
                  <div className="h-5 w-4/6 bg-slate-50 rounded-full"></div>
                </div>
                <div className="flex flex-col space-y-4 pt-6">
                   <div className="w-full h-14 rounded-2xl bg-sky-500/10 border-2 border-dashed border-sky-300 flex items-center justify-center text-sky-600 font-black tracking-widest text-sm">
                      DHA REGULATORY CLEARANCE
                   </div>
                   <div className="w-2/3 h-14 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 font-bold text-sm">
                      LICENSE PENDING
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
