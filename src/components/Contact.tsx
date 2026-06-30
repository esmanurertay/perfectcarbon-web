"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { sendEmail } from '@/app/actions/sendEmail';

export default function Contact() {
  const t = useTranslations('Contact');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsInView(entry.isIntersecting); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const result = await sendEmail(new FormData(event.currentTarget));
    setIsPending(false);
    if (result.success) {
      setStatus({ type: 'success', text: t('status.success') });
      event.currentTarget.reset();
    } else {
      setStatus({ type: 'error', text: t('status.error') });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-r from-[#090909] to-red-500 pt-32 pb-40 px-6 md:px-12 relative overflow-hidden text-white">
      
      {/* SPATIAL MASK */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#090909] to-transparent pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* SOL ALAN */}
        <div className={`lg:col-span-5 flex flex-col items-start text-left transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-normal font-sans tracking-tight leading-[1.05] mb-8">
            {t('title1')} <br />
            {t('title2')}<span className="text-white/30">.</span>
          </h2>
          <p className="text-sm text-neutral-400 font-normal max-w-sm leading-relaxed mb-10">
            {t('description')}
          </p>

          {/* İletişim Bilgileri */}
          <div className="flex flex-col gap-6 w-full mb-10">
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                {t('emailLabel')}
              </span>
              <a href="mailto:info@perfectcarbonrapier.com" className="text-base font-medium text-white hover:text-white/80 transition-colors border-b border-white/10 pb-0.5 w-fit">
                info@perfectcarbonrapier.com
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                {t('locationLabel')}
              </span>
              <p className="text-base font-medium text-white leading-relaxed whitespace-pre-line">
                {t('address')}
              </p>
            </div>
          </div>

          {/* Harita Alanı */}
          <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.123456789012!2d37.3197177!3d37.1121175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA2JzQzLjYiTiAzN8KwMTknMTEuMCJF!5e0!3m2!1str!2str!4v1690000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter grayscale-[80%] contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
            ></iframe>
          </div>
        </div>

        {/* SAĞ ALAN: Form */}
        <div className={`lg:col-span-7 w-full transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12 pt-2 lg:pt-8">
            
            {/* İsim & E-posta Alanı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
              <div className="flex flex-col items-start w-full relative group">
                <input 
                  required 
                  type="text" 
                  name="name" 
                  placeholder={t('placeholders.name')} 
                  className="w-full pb-4 bg-transparent border-b border-white/10 text-white text-base font-normal placeholder-white/30 outline-none focus:border-white transition-colors"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500" />
              </div>

              <div className="flex flex-col items-start w-full relative group">
                <input 
                  required 
                  type="email" 
                  name="email" 
                  placeholder={t('placeholders.email')} 
                  className="w-full pb-4 bg-transparent border-b border-white/10 text-white text-base font-normal placeholder-white/30 outline-none focus:border-white transition-colors"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </div>

            {/* Telefon Numarası */}
            <div className="flex flex-col items-start w-full relative group">
              <input 
                type="tel" 
                name="phone" 
                placeholder={t('placeholders.phone')} 
                className="w-full pb-4 bg-transparent border-b border-white/10 text-white text-base font-normal placeholder-white/30 outline-none focus:border-white transition-colors"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500" />
            </div>

            {/* Mesaj Alanı */}
            <div className="flex flex-col items-start w-full relative group">
              <textarea 
                required 
                name="message" 
                rows={3} 
                placeholder={t('placeholders.message')} 
                className="w-full pb-4 bg-transparent border-b border-white/10 text-white text-base font-normal placeholder-white/30 outline-none focus:border-white transition-colors resize-none min-h-[90px]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500" />
            </div>

            {/* Alt İşlem Çubuğu */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 white/5">
              <div className="text-left w-full sm:w-auto">
                {status && (
                  <span className={`text-xs font-medium tracking-wide ${status.type === 'success' ? 'text-green-300' : 'text-red-200'}`}>
                    {status.text}
                  </span>
                )}
              </div>
              
              <button 
                disabled={isPending}
                type="submit"
                className="w-full sm:w-auto bg-white text-black hover:bg-neutral-100 disabled:bg-neutral-400 text-sm font-medium uppercase tracking-widest px-12 h-13 rounded-full flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-98 shadow-2xl shadow-white/5"
              >
                {isPending ? t('status.sending') : t('status.send')}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}