
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 scale-90 -ml-4 origin-left">
              <Logo />
            </div>
            <p className="text-lg leading-relaxed mb-10 font-medium">
              Elite document clearance and regulatory consultancy in the UAE. We bridge the gap between businesses and authorities.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-sky-600 hover:text-white transition-all"><Linkedin size={22} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-sky-600 hover:text-white transition-all"><Instagram size={22} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-sky-600 hover:text-white transition-all"><Facebook size={22} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Specialized Services</h4>
            <ul className="space-y-5 text-lg font-bold">
              <li><a href="#healthcare" className="hover:text-sky-400 transition-colors">Healthcare Licensing</a></li>
              <li><a href="#formation" className="hover:text-sky-400 transition-colors">Mainland Setup</a></li>
              <li><a href="#formation" className="hover:text-sky-400 transition-colors">Free Zone Entry</a></li>
              <li><a href="#govt" className="hover:text-sky-400 transition-colors">Employee Visas</a></li>
              <li><a href="#govt" className="hover:text-sky-400 transition-colors">Annual PRO Contracts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Corporate Info</h4>
            <ul className="space-y-5 text-lg font-bold">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#whyus" className="hover:text-sky-400 transition-colors">Our Advantage</a></li>
              <li><a href="#consultation" className="hover:text-sky-400 transition-colors">Book Advisory</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Legal Notices</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Connect</h4>
            <ul className="space-y-6 text-lg font-bold">
              <li className="flex items-start space-x-4 group">
                <MapPin size={24} className="text-sky-500 mt-1 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">Sheikh Zayed Road, <br/>Business Bay, Dubai</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <Phone size={24} className="text-sky-500 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">+971 4 000 0000</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <Mail size={24} className="text-sky-500 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">info@smartservice.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm font-bold opacity-50 uppercase tracking-[0.2em]">
          <p>© {currentYear} Smart Service Transactions. All Rights Reserved.</p>
          <p className="mt-6 md:mt-0">Licensed Government Services Provider - UAE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
