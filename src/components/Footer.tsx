"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Menü link yapıları - Şasi ve yedek parça mühendisliğine uygun kurumsal başlıklar
  const links = [
    {
      title: "Ürünler",
      items: [
        { name: "Karbon Rapier Çubukları", href: "#products" },
        { name: "Yedek Parça Çözümleri", href: "#products" },
        { name: "Özel Tasarım Şasiler", href: "#products" },
        { name: "Performans Kitleri", href: "#products" }
      ]
    },
    {
      title: "Kurumsal",
      items: [
        { name: "Hakkımızda", href: "#about" },
        { name: "Üretim Teknolojimiz", href: "#process" },
        { name: "Kalite Standartları", href: "#process" },
        { name: "Kariyer", href: "#" }
      ]
    },
    {
      title: "İletişim & Destek",
      items: [
        { name: "Müşteri Talepleri", href: "#contact" },
        { name: "Teknik Destek", href: "mailto:info@perfectcarbonrapier.com" },
        { name: "Genel Merkez", href: "#contact" }
      ]
    }
  ];

  return (
    /* Arka plan #090909 yapılarak sitenin o asil karanlık tonuna sabitlendi */
    <footer className="w-full bg-[#090909] text-neutral-400 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      
      {/* JUNCTION MASK: Contact bileşeninin bitişindeki red-500 rengini, footer'ın #090909 rengiyle pürüzsüzce eritir */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* ÜST DÜZEY: Kurumsal Bilgi ve Navigasyon Link Grupları */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          
          {/* Logo ve Kısa Tanım Alanı (4 Kolon) */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-4">
            <span className="font-sans font-medium text-white tracking-tight text-sm select-none">
              Perfect <span className="opacity-50 font-light">Carbon</span> Rapier
            </span>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Dokuma tezgahları için yüksek hassasiyetli, dayanıklı ve hafif karbon fiber rapier bileşenleri tasarımı ve üretimi.
            </p>
          </div>

          {/* Dinamik Link Grupları (Her biri 2-3 kolon kaplayacak şekilde dağıtıldı) */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {links.map((group, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest select-none">
                  {group.title}
                </span>
                <ul className="flex flex-col items-start gap-2.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a 
                        href={item.href} 
                        className="text-xs text-neutral-400 hover:text-white transition-colors duration-300 font-normal"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ALT DÜZEY: İnce Çizgi ve Yasal Metinler */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-neutral-500">
          
          {/* Telif Hakkı Bloğu */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>Copyright © {currentYear} Perfect Carbon Rapier.</span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span>Tüm hakları saklıdır.</span>
          </div>

          {/* Menşei ve Lokasyon Künyesi */}
          <div className="flex items-center gap-4 text-neutral-500">
            <span>Gaziantep, Türkiye</span>
            <span className="text-neutral-700">|</span>
            <span className="font-mono text-[9px] tracking-wider uppercase text-neutral-600">
              Precision Engineering
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}