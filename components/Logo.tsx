import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        {/* Abstract representation of F.O.K. logo based on description */}
        <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-brand rounded-full blur opacity-40 animate-pulse"></div>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full text-brand-dark drop-shadow-[0_0_10px_rgba(254,0,125,0.8)]">
                <path d="M20 20 L50 20 L50 80 L20 80" stroke="#fe007d" strokeWidth="8" strokeLinecap="round" />
                <path d="M50 50 L80 50" stroke="#fe007d" strokeWidth="8" strokeLinecap="round" />
                <circle cx="65" cy="35" r="10" stroke="white" strokeWidth="4" />
                <path d="M60 80 L80 50" stroke="white" strokeWidth="6" strokeLinecap="round" />
            </svg>
        </div>
        <span className="font-tech font-bold text-2xl tracking-wider text-white">
            F.O.K.
        </span>
    </div>
  );
};