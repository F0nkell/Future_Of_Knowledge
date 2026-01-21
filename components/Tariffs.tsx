import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import BookingModal from './BookingModal';

const Tariffs: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="tariffs" className="py-24 relative bg-dark-bg">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-tech mb-4">
                    Выберите свой <span className="text-brand">путь</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Гибкие тарифы для любых целей. От точечной проработки до полного менторства.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRICING_TIERS.map((tier, index) => (
                    <motion.div
                        key={tier.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setActiveCard(tier.id)}
                        onMouseLeave={() => setActiveCard(null)}
                        className={`
                            relative flex flex-col p-6 rounded-2xl border transition-all duration-300
                            ${tier.recommended 
                                ? 'bg-slate-900/80 border-brand shadow-[0_0_30px_rgba(254,0,125,0.15)] scale-105 z-10' 
                                : 'bg-dark-card border-white/5 hover:border-white/20 hover:bg-dark-card/80'}
                            ${activeCard === tier.id && !tier.recommended ? 'scale-[1.02]' : ''}
                        `}
                    >
                        {tier.recommended && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                <Star className="w-3 h-3 fill-current" />
                                POPULAR
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-tech text-white">{tier.title}</h3>
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-4">{tier.subtitle}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-white">
                                    {tier.totalPrice.toLocaleString('ru-RU')} ₽
                                </span>
                            </div>
                            {tier.discount && (
                                <div className="mt-1 text-sm text-green-400 font-bold">
                                    {tier.discount} saving
                                </div>
                            )}
                            <div className="text-xs text-slate-500 mt-2">
                                {tier.pricePerTopic.toLocaleString('ru-RU')} ₽ / тема
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm mb-6 min-h-[60px]">
                            {tier.description}
                        </p>

                        <ul className="space-y-3 mb-8 flex-1">
                            {tier.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                    <Check className="w-5 h-5 text-brand shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => tier.id === 'single' ? setIsBookingOpen(true) : null}
                            className={`
                                w-full py-3 rounded-lg font-bold transition-all
                                ${tier.id === 'single' 
                                    ? 'bg-transparent border border-brand text-brand hover:bg-brand hover:text-white' 
                                    : 'bg-white text-black hover:bg-slate-200'}
                                ${tier.recommended ? 'bg-brand text-white border-none hover:bg-brand-dark hover:shadow-[0_0_20px_rgba(254,0,125,0.5)]' : ''}
                            `}
                        >
                            {tier.id === 'single' ? 'Выбрать время' : 'Купить пакет'}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
};

export default Tariffs;