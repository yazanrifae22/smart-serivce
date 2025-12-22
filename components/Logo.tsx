
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        {/* Document Icon Part (Dark Slate) */}
        <svg viewBox="0 0 100 100" className="absolute top-1 left-0 w-10 h-10 text-slate-800 fill-current">
          <path d="M20 10 L60 10 L80 30 L80 90 L20 90 Z" />
          <path d="M60 10 L60 30 L80 30" fill="none" stroke="white" strokeWidth="4"/>
          <rect x="30" y="40" width="30" height="4" fill="white" />
          <rect x="30" y="50" width="40" height="4" fill="white" />
          <rect x="30" y="60" width="40" height="4" fill="white" />
          <rect x="30" y="70" width="40" height="4" fill="white" />
          <rect x="30" y="80" width="30" height="4" fill="white" />
        </svg>
        
        {/* The Blue 'S' (Sky Blue) */}
        <svg viewBox="0 0 100 100" className="absolute -top-1 right-0 w-12 h-12 text-sky-500 fill-current drop-shadow-sm">
          <path d="M85 30 C85 15, 60 10, 50 10 C30 10, 15 20, 15 35 C15 50, 40 50, 50 60 C60 70, 40 85, 25 85 C15 85, 10 75, 10 75 L10 90 C10 90, 20 100, 40 100 C60 100, 85 90, 85 65 C85 50, 60 50, 50 40 C40 30, 60 15, 75 15 C85 15, 90 25, 90 25 Z" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-xl font-extrabold text-slate-800 tracking-tight">Smart Service</span>
        <span className="text-xl font-extrabold text-slate-800 tracking-tight -mt-1">Transactions</span>
        <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-0.5">Documents Clearance Service</span>
      </div>
    </div>
  );
};

export default Logo;
