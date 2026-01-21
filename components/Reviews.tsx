import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 overflow-hidden bg-dark-bg relative">
       {/* Decor */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-brand/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-tech mb-12 text-center">
            Что говорят <span className="text-brand">студенты</span>
        </h2>
        
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
          {REVIEWS.map((review, i) => (
            <div 
                key={review.id}
                className="flex-1 min-w-[300px] bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-brand/30 transition-all hover:-translate-y-2 group"
            >
                <Quote className="w-10 h-10 text-brand/30 mb-6 group-hover:text-brand transition-colors" />
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                    "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{review.name}</h4>
                        <p className="text-xs text-brand uppercase tracking-wide">{review.role}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;