import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section id="faq" className="py-24 bg-dark-card border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-tech mb-4">Частые вопросы</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-brand/50 bg-brand/5' : 'border-white/10 bg-dark-surface'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-medium text-lg ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {item.question}
                  </span>
                  <span className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-brand text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;