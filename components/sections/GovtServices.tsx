
import React from 'react';
import { BadgeCheck, Clock, Zap, Files } from 'lucide-react';
import { siteContent } from '../../constants';

const GovtServices: React.FC = () => {
  return (
    <section id="govt" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center space-x-4 text-sky-600 mb-8">
              <Files size={32} />
              <span className="font-black uppercase tracking-[0.4em] text-sm">PRO Authority</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-10 leading-tight">
              {siteContent.govtServices.intro}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {siteContent.govtServices.includes.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl hover:bg-sky-50 transition-all group cursor-default">
                  <BadgeCheck className="text-sky-600 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-slate-800 text-base font-bold">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-slate-600 font-bold border-l-8 border-sky-500 pl-6 py-2">
              {siteContent.govtServices.footer}
            </p>
          </div>

          <div className="relative bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white shadow-3xl overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-bl-[15rem] group-hover:scale-110 transition-transform duration-700"></div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
             
             <h3 className="text-3xl font-black mb-12 flex items-center">
               <span className="w-1.5 h-8 bg-sky-500 mr-4 rounded-full"></span>
               Service Standards
             </h3>
             <div className="space-y-8">
               {siteContent.govtServices.sla.map((chip, idx) => (
                 <div key={idx} className="flex items-center space-x-8 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:translate-x-2 group">
                   <div className="w-16 h-16 rounded-2xl bg-sky-600 flex items-center justify-center shadow-lg shadow-sky-900 group-hover:scale-110 transition-transform">
                     {idx === 0 ? <Zap size={32} /> : <Clock size={32} />}
                   </div>
                   <div>
                     <p className="text-sky-400 text-sm font-black uppercase tracking-[0.2em] mb-1">{chip.label}</p>
                     <p className="text-3xl font-black tracking-tight">{chip.value}</p>
                   </div>
                 </div>
               ))}
               <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-widest text-slate-400">Quarterly SLA Compliance</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-black text-sky-400">98%</span>
                    <div className="h-2.5 w-32 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-[98%] bg-sky-500 animate-pulse"></div>
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

export default GovtServices;
