
import React from 'react';
import { CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { siteContent } from '../../constants';

const CompanyFormation: React.FC = () => {
  return (
    <section id="formation" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sky-600 font-black mb-4 uppercase tracking-[0.3em] text-xs">
            <Globe size={18} />
            <span>UAE Market Entry</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 max-w-4xl mx-auto">{siteContent.companyFormation.intro}</h2>
          <p className="text-slate-500 font-bold text-xl">Mainland, Free Zone, or Offshore — we find your perfect legal home.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center">
              Comprehensive Package Features:
            </h3>
            <div className="space-y-4">
              {siteContent.companyFormation.includes.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="p-2 bg-sky-50 rounded-xl group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <CheckCircle size={24} className="flex-shrink-0" />
                  </div>
                  <span className="text-slate-800 font-black text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                 <ArrowRight size={80} />
               </div>
               <p className="relative z-10 text-xl font-bold leading-relaxed italic opacity-90">
                 "{siteContent.companyFormation.note}"
               </p>
            </div>
          </div>

          <div className="lg:w-7/12 bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl relative border border-slate-50">
            <h3 className="text-3xl font-black text-slate-900 mb-16">Launch Timeline</h3>
            <div className="relative space-y-16">
              <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-slate-100 rounded-full"></div>
              {siteContent.companyFormation.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-start space-x-10 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-sky-600 text-white flex items-center justify-center font-black text-2xl z-10 transition-all group-hover:scale-110 shadow-lg shadow-sky-100 group-hover:bg-slate-900">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{step.step}</h4>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFormation;
