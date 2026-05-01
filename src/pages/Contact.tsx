import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Globe2, Mail, MessageSquare } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const dates = [
    { day: 14, weekday: 'Mon' },
    { day: 15, weekday: 'Tue' },
    { day: 16, weekday: 'Wed' },
    { day: 17, weekday: 'Thu' },
  ];

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM', '04:30 PM'];

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Copy & Info */}
        <div className="lg:col-span-4 lg:pt-8">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald mb-4 flex items-center gap-2">
             <span className="w-2 h-2 bg-emerald rounded-[2px] inline-block"></span>
             Let's Talk
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight text-obsidian mb-6 leading-[1.05]">
            See Procura in action.
          </h1>
          <p className="text-[15px] text-obsidian/60 mb-12 leading-relaxed">
            Schedule a tailored walkthrough of the platform with one of our supply chain experts. We'll show you how to automate your specific workflows.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-emerald" />
              </div>
              <div>
                <h3 className="font-heading text-[16px] font-extrabold mb-1 text-obsidian">Expert Consultation</h3>
                <p className="text-[13px] text-obsidian/60 leading-relaxed">We don't do generic demos. We map out your current bottlenecks and show you how to eliminate them.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-emerald" />
              </div>
              <div>
                <h3 className="font-heading text-[16px] font-extrabold mb-1 text-obsidian">Global Coverage</h3>
                <p className="text-[13px] text-obsidian/60 leading-relaxed">Our teams operate across NA, EMEA, and APAC. We're here when you need us.</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
              <a href="mailto:hello@procuratech.example.com" className="flex items-center gap-3 text-[14px] text-obsidian hover:text-emerald transition-colors font-semibold">
                <Mail className="w-4 h-4 opacity-50" />
                hello@procuratech.example.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Interface */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bento-card p-6 md:p-8 lg:p-10 bg-white border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit"
        >
          {formState === 'success' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-emerald/20 text-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-extrabold mb-3 text-obsidian">Meeting Confirmed</h3>
              <p className="text-[15px] text-obsidian/60 mb-8 max-w-sm mx-auto">
                Check your inbox for the calendar invitation and video link. We look forward to speaking with you.
              </p>
              <button 
                onClick={() => setFormState('idle')}
                className="text-[12px] font-extrabold uppercase tracking-widest text-emerald hover:text-obsidian transition-colors"
              >
                Book another session
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {/* Left Column of Form: Calendar */}
              <div>
                <h3 className="text-lg font-heading font-extrabold text-obsidian mb-4">Select a date</h3>
                <div className="border border-black/5 rounded-lg p-2 sm:p-4 bg-[#f9f9f9] shadow-inner flex justify-center custom-day-picker w-full items-start overflow-x-auto">
                  <DayPicker 
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0 || date.getDay() === 6;
                    }}
                    modifiers={{
                      available: (date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date >= today && date.getDay() !== 0 && date.getDay() !== 6;
                      }
                    }}
                    modifiersClassNames={{ available: 'is-available' }}
                  />
                </div>
              </div>

              {/* Right Column of Form: Times & Details */}
              <div className="flex flex-col gap-10">
                {/* Time Slots */}
                <div className={selectedDate ? 'opacity-100 transition-opacity' : 'opacity-50 pointer-events-none transition-opacity'}>
                  <h3 className="text-lg font-heading font-extrabold text-obsidian mb-4">
                    Select a time
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 px-3 rounded text-[13px] font-bold transition-all ${
                          selectedTime === t
                            ? 'bg-emerald text-obsidian shadow-sm'
                            : 'bg-black/5 hover:bg-black/10 text-obsidian/60 hover:text-obsidian'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details Form */}
                <div className={selectedTime ? 'opacity-100 transition-opacity flex flex-col h-full' : 'opacity-50 pointer-events-none transition-opacity flex flex-col h-full'}>
                  <h3 className="text-lg font-heading font-extrabold text-obsidian mb-4">Your details</h3>
                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-obsidian/80 mb-1.5">First Name</label>
                        <input required type="text" className="w-full bg-[#f9f9f9] border border-black/5 rounded px-4 py-2.5 text-[14px] text-obsidian focus:outline-none focus:border-emerald focus:bg-white transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-obsidian/80 mb-1.5">Last Name</label>
                        <input required type="text" className="w-full bg-[#f9f9f9] border border-black/5 rounded px-4 py-2.5 text-[14px] text-obsidian focus:outline-none focus:border-emerald focus:bg-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-obsidian/80 mb-1.5">Work email</label>
                      <input required type="email" className="w-full bg-[#f9f9f9] border border-black/5 rounded px-4 py-2.5 text-[14px] text-obsidian focus:outline-none focus:border-emerald focus:bg-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-obsidian/80 mb-1.5">Company name</label>
                      <input required type="text" className="w-full bg-[#f9f9f9] border border-black/5 rounded px-4 py-2.5 text-[14px] text-obsidian focus:outline-none focus:border-emerald focus:bg-white transition-colors" />
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={!selectedDate || !selectedTime || formState === 'submitting'}
                    className="w-full bg-black/10 hover:bg-emerald text-obsidian px-5 py-4 rounded text-[14px] font-extrabold transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center"
                  >
                    {formState === 'submitting' ? (
                       <span className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin"></span>
                    ) : (
                      'Book a call'
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
