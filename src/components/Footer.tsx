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
    /* Arka plan açık tonlara (#f9f9f9 veya bg-neutral-50) çekildi, metinler belirginleştirildi */
    <footer className="w-full bg-[#f9f9f9] text-neutral-600 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-neutral-200">
      
      {/* JUNCTION MASK: Üst bileşenden gelen geçişi light temaya uygun, hafif kırmızımsı bir sıcaklıkla eritir */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ÜST DÜZEY: Kurumsal Bilgi ve Navigasyon Link Grupları */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          
          {/* Logo ve Kısa Tanım Alanı (4 Kolon) */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-4">
            {/* Logo Bölümü */}
            <a href="#home" className="flex items-center gap-2 cursor-pointer">
              <div className="w-auto h-12 relative">
                <img src="/images/perfect-logo 1.svg" alt="Perfect Carbon Rapier Logo" className="w-auto h-14 object-cover" />
              </div>
            </a>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Dokuma tezgahları için yüksek hassasiyetli, dayanıklı ve hafif karbon fiber rapier bileşenleri tasarımı ve üretimi.
            </p>
          </div>

          {/* Dinamik Link Grupları (Her biri 2-3 kolon kaplayacak şekilde dağıtıldı) */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {links.map((group, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-widest select-none">
                  {group.title}
                </span>
                <ul className="flex flex-col items-start gap-2.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a 
                        href={item.href} 
                        className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors duration-300 font-normal"
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
        <div className="w-full pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-neutral-400">
          
          {/* Telif Hakkı Bloğu ve Geliştirici İmzası */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>Copyright © {currentYear} Perfect Carbon Rapier. Tüm hakları saklıdır.</span>
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
            <span>Gaziantep, Türkiye</span>
          </div>

        </div>

      </div>
    </footer>
  );
}