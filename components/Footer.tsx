import React from 'react';
import { Logo } from './Logo';
import { Twitter, Instagram, Send, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed">
              Future of Knowledge (F.O.K.) — образовательная платформа нового поколения. 
              Мы делаем сложные вещи простыми и доступными.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all">
                    <Send size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all">
                    <Instagram size={18} />
                </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all">
                    <Twitter size={18} />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-tech text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
                <li><a href="#hero" className="text-slate-400 hover:text-brand text-sm">Главная</a></li>
                <li><a href="#tariffs" className="text-slate-400 hover:text-brand text-sm">Тарифы</a></li>
                <li><a href="#reviews" className="text-slate-400 hover:text-brand text-sm">Отзывы</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-brand text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold font-tech text-lg mb-6">Контакты</h4>
             <ul className="space-y-3">
                <li className="text-slate-400 text-sm">Email: <span className="text-white">contact@f0nkell.com</span></li>
                <li className="text-slate-400 text-sm">Telegram: <a href="#" className="text-brand">@f0nkell_tutor</a></li>
                <li className="text-slate-400 text-sm">Location: <span className="text-white">Online Worldwide</span></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-tech text-lg mb-6">Рассылка</h4>
            <form className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-brand focus:outline-none"
                />
                <button className="bg-brand text-white font-bold rounded-lg py-3 text-sm hover:bg-brand-dark transition-colors">
                    Подписаться
                </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
                © {new Date().getFullYear()} F.O.K. Learning. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-slate-600 text-xs hover:text-white">Privacy Policy</a>
                <a href="#" className="text-slate-600 text-xs hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;