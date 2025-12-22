
import React, { useState } from 'react';
import { Check, Info, Zap } from 'lucide-react';
import { siteContent } from '../../constants';

const AnnualContracts: React.FC = () => {
  const [activePlan, setActivePlan] = useState(1);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sky-600 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Contracted Excellence</span>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8">Annual Service Agreements</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            {siteContent.annualContracts.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-start">
          <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white mr-4 shadow-lg shadow-sky-100">
                <Check size={24} />
              </span>
              Standard Inclusion Package
            </h3>
            <ul className="grid grid-cols-1 gap-6">
              {siteContent.annualContracts.includes.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-5 group">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sky-500 transition-colors">
                    <Check size={14} className="text-sky-500 group-hover:text-white" />
                  </div>
                  <span className="text-slate-700 text-lg font-bold leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteContent.annualContracts.benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border-2 border-slate-50 bg-white hover:border-sky-500 hover:shadow-2xl transition-all group">
                <div className="text-sky-500 mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={36} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
              <h3 className="text-4xl font-black mb-6 leading-tight">Scale Your Facility <br/><span className="text-sky-400">Without Legal Friction</span></h3>
              <p className="text-xl text-slate-300 mb-12 font-medium">
                Whether you're a single boutique clinic or a multi-specialty hospital group, our tiers adapt to your compliance volume.
              </p>
              <div className="flex flex-wrap bg-white/5 p-2 rounded-2xl gap-2 backdrop-blur-sm border border-white/10">
                {siteContent.annualContracts.plans.map((plan, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePlan(idx)}
                    className={`flex-1 min-w-[120px] py-4 rounded-xl text-sm font-black transition-all uppercase tracking-widest ${
                      activePlan === idx ? 'bg-sky-500 text-white shadow-xl scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[480px] bg-white text-slate-900 rounded-[3rem] p-10 lg:p-14 shadow-2xl border border-white relative group">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-900/20 rotate-12">
                <Zap size={32} />
              </div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sky-600 font-black uppercase tracking-widest text-xs py-1 px-3 bg-sky-50 rounded-lg">Elite Plan Structure</span>
                <Info size={20} className="text-slate-300" />
              </div>
              <h4 className="text-3xl font-black mb-8 border-b border-slate-100 pb-6">{siteContent.annualContracts.plans[activePlan].name} Tier Support</h4>
              <ul className="space-y-5 mb-12">
                {siteContent.annualContracts.plans[activePlan].features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="font-bold text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#consultation" className="block w-full text-center bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-sky-600 transition-all shadow-xl hover:shadow-sky-100 uppercase tracking-widest">
                Request Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualContracts;
