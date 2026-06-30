"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  // Çeviri anahtarlarına göre yapılandırılmış dinamik menü yapısı
  const links = [
    {
      title: t('titles.products'),
      items: [
        { name: t('items.bars'), href: "#products" },
        { name: t('items.parts'), href: "#products" },
        { name: t('items.chassis'), href: "#products" },
        { name: t('items.kits'), href: "#products" }
      ]
    },
    {
      title: t('titles.corporate'),
      items: [
        { name: t('items.about'), href: "#about" },
        { name: t('items.tech'), href: "#process" },
        { name: t('items.quality'), href: "#process" },
        { name: t('items.career'), href: "#" }
      ]
    },
    {
      title: t('titles.support'),
      items: [
        { name: t('items.requests'), href: "#contact" },
        { name: t('items.technical'), href: "mailto:info@perfectcarbonrapier.com" },
        { name: t('items.headquarters'), href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#f9f9f9] text-neutral-600 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-neutral-200">
      
      {/* JUNCTION MASK */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ÜST DÜZEY: Kurumsal Bilgi ve Navigasyon Link Grupları */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          
          {/* Logo ve Kısa Tanım Alanı */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-4">
            <Link href="#home" className="flex items-center gap-2 cursor-pointer">
              <div className="w-auto h-12 relative">
                <img src="/images/perfect-logo 1.svg" alt="Perfect Carbon Rapier Logo" className="w-auto h-14 object-cover" />
              </div>
            </Link>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Dinamik Link Grupları */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {links.map((group, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-widest select-none">
                  {group.title}
                </span>
                <ul className="flex flex-col items-start gap-2.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.href.startsWith('mailto:') ? (
                        <a 
                          href={item.href} 
                          className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors duration-300 font-normal"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link 
                          href={item.href} 
                          className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors duration-300 font-normal"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ALT DÜZEY: İnce Çizgi ve Yasal Metinler */}
        <div className="w-full pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-neutral-400">
          
          {/* Telif Hakkı Bloğu ve Geliştirici İmzası */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{t('copyright', { year: currentYear })}</span>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Developed by{" "}
              <a 
                href="https://www.esmanurertay.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline text-red-600 hover:text-neutral-800 transition-colors duration-300 font-medium"
              >
                Esma Nur Ertay
              </a>
            </span>
          </div>

          {/* Menşei ve Lokasyon Künyesi */}
          <div className="flex items-end gap-4 text-neutral-400">
            <span>{t('location')}</span>
          </div>

        </div>

      </div>
    </footer>
  );
}