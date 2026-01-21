import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, MessageSquare, User, Clock } from 'lucide-react';
import { TIME_SLOTS } from '../constants';
import { sendBookingNotification } from '../services/telegramService';
import { TimeSlot } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    topic: '',
    timeSlotId: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const selectedTime = TIME_SLOTS.find(t => t.id === formData.timeSlotId)?.time || 'Не выбрано';
    
    await sendBookingNotification({
        name: formData.name,
        contact: formData.contact,
        topic: formData.topic,
        time: selectedTime
    });

    setLoading(false);
    setSuccess(true);
  };

  const resetForm = () => {
    setSuccess(false);
    setStep(1);
    setFormData({ name: '', contact: '', topic: '', timeSlotId: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={resetForm}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-dark-surface border border-brand/20 rounded-2xl p-8 w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold font-tech text-white">Book One-Shot</h3>
            <button onClick={resetForm} className="text-slate-400 hover:text-white transition-colors">
              <X />
            </button>
          </div>

          {success ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Заявка отправлена!</h4>
              <p className="text-slate-400 mb-6">F0nkell свяжется с вами в Telegram в ближайшее время.</p>
              <button 
                onClick={resetForm}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Progress */}
              <div className="flex gap-2 mb-6">
                <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-brand' : 'bg-slate-800'}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-brand' : 'bg-slate-800'}`} />
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                   <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Выберите время</label>
                    <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot: TimeSlot) => (
                            <button
                                key={slot.id}
                                type="button"
                                disabled={!slot.available}
                                onClick={() => setFormData({...formData, timeSlotId: slot.id})}
                                className={`
                                    py-2 px-3 rounded-lg text-sm font-medium border transition-all
                                    ${formData.timeSlotId === slot.id 
                                        ? 'bg-brand text-white border-brand shadow-[0_0_10px_#fe007d]' 
                                        : slot.available 
                                            ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-brand/50' 
                                            : 'bg-slate-900/50 border-slate-800 text-slate-600 cursor-not-allowed'}
                                `}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Тема занятия</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                        <input 
                            required
                            type="text" 
                            placeholder="Например: Производные"
                            value={formData.topic}
                            onChange={(e) => setFormData({...formData, topic: e.target.value})}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder:text-slate-600 transition-all"
                        />
                    </div>
                  </div>
                  <button 
                    type="button"
                    disabled={!formData.timeSlotId || !formData.topic}
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Далее
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Ваше имя</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                            <input 
                                required
                                type="text" 
                                placeholder="Иван Иванов"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder:text-slate-600 transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Telegram Username</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-slate-500">@</span>
                            <input 
                                required
                                type="text" 
                                placeholder="username"
                                value={formData.contact}
                                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-8 pr-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder:text-slate-600 transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                         <button 
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 py-3 bg-transparent border border-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Назад
                        </button>
                        <button 
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-3 bg-brand text-white font-bold rounded-lg hover:bg-brand-dark transition-all shadow-[0_0_15px_rgba(254,0,125,0.4)] disabled:opacity-70 flex justify-center items-center"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : 'Подтвердить'}
                        </button>
                    </div>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;