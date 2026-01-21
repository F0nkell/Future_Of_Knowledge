import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase mb-6 font-tech">
            Future of Knowledge
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Unlock Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Potential</span> with 
            <span className="text-brand drop-shadow-[0_0_15px_rgba(254,0,125,0.5)]"> F0nkell</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Персональный подход, современные методики и полное погружение в предмет. 
            Будущее знаний начинается здесь.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#tariffs"
              className="px-8 py-4 bg-brand text-white rounded-lg font-bold hover:bg-brand-dark transition-all shadow-[0_0_20px_rgba(254,0,125,0.4)] hover:shadow-[0_0_30px_rgba(254,0,125,0.6)] flex items-center justify-center gap-2 group"
            >
              Выбрать план
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#reviews"
              className="px-8 py-4 border border-slate-700 bg-white/5 text-white rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Отзывы учеников
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract 3D-like floating element */}
          <div className="relative w-full aspect-square animate-float">
             <div className="absolute inset-10 border-2 border-brand/30 rounded-2xl rotate-12 backdrop-blur-sm z-10"></div>
             <div className="absolute inset-10 border-2 border-white/10 rounded-2xl -rotate-6 bg-dark-card/50 backdrop-blur-md z-20 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-white mb-2 font-tech">92+</div>
                  <div className="text-slate-400 uppercase tracking-widest text-sm">Средний балл</div>
                </div>
             </div>
             {/* Decorative orbs */}
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand rounded-full blur-xl opacity-60"></div>
             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-40"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;