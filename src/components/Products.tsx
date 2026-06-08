"use client";

import React, { useRef, useState, useEffect } from 'react';

interface Product {
  id: number;
  brand: string;
  name: string;
  image: string;
}

const allProducts: Product[] = [
  { id: 1, brand: 'Van de Wiele', name: 'Karbon Mekik', image: '/images/vdw-mekik.png' },
  { id: 2, brand: 'Dornier', name: 'Yüksek Devir Dişli', image: '/images/dornier-disli.png' },
  { id: 3, brand: 'Schönherr', name: 'Hassas Kesim Makası', image: '/images/schonherr-makas.png' },
  { id: 4, brand: 'Van de Wiele', name: 'Teknolojik Şiş', image: '/images/vdw-sis.png' },
  { id: 5, brand: 'Dornier', name: 'Kancalı Şerit', image: '/images/dornier-serit.png' },
  { id: 6, brand: 'Schönherr', name: 'Mekik Dişlisi', image: '/images/schonherr-disli.png' },
  { id: 7, brand: 'Itema', name: 'Karbon Rapier Kafa', image: '/images/itema-kafa.png' },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Seçilen (Büyütülecek) ürünün durumunu tutan state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => scrollContainer?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // Modal açıkken arkadaki ana sayfanın kaymasını (scroll olmasını) engelleme
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProduct]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-white pt-16 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* ÜST ALAN */}
        <div className="w-full flex items-end justify-between border-b border-neutral-100 pb-5 mb-8">
          <div className="text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">Showcase</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-black font-sans">Öne Çıkan Ürünler</h2>
          </div>
          
          <a 
            href="/products" 
            className="text-xs font-medium text-neutral-500 hover:text-red-600 transition-colors flex items-center gap-1 group pb-1"
          >
            Tüm Ürünleri Gör
            <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ANA ŞERİT */}
        <div className="w-full relative group">
          
          {/* Sol Ok */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border border-neutral-200/50 rounded-full flex items-center justify-center shadow-sm z-20 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Sağ Ok */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border border-neutral-200/50 rounded-full flex items-center justify-center shadow-sm z-20 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Ürünler Akış Listesi */}
          <div 
            ref={scrollRef}
            className="w-full flex flex-row gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1"
          >
            {allProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)} // 👈 Tıklanınca ürünü state'e alıp büyütüyoruz
                className="w-[180px] md:w-[210px] shrink-0 bg-neutral-50/60 border border-neutral-100 rounded-[20px] p-3 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 snap-start group/card cursor-pointer"
              >
                {/* Resim Alanı */}
                <div className="w-full h-28 bg-white border border-neutral-100/50 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-[inset_0_1px_4px_rgba(0,0,0,0.01)]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover/card:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-neutral-300 tracking-wider uppercase select-none">
                    {product.brand.split(' ')[0]}
                  </div>
                </div>

                {/* Marka ve İsim */}
                <div className="mt-3 flex flex-col items-start text-left">
                  <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider block">
                    {product.brand}
                  </span>
                  <h3 className="text-xs font-medium text-black tracking-tight truncate w-full mt-0.5 group-hover/card:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 🖥️ APPLE STYLE INTERAKTIF PRODUCT MODAL (LIGHTBOX) */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProduct(null)} // Arkaya tıklanınca modal kapansın
        >
          {/* Modal Gövdesi */}
          <div 
            className="bg-white border border-neutral-100 w-full max-w-lg rounded-[32px] p-6 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()} // Pencere içine tıklayınca kapanmayı engelle
          >
            
            {/* Minimalist Apple Kapatma Butonu */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 hover:text-black rounded-full flex items-center justify-center border border-neutral-200/40 text-xs transition-all hover:scale-105 active:scale-95"
            >
              ✕
            </button>

            {/* Büyük Resim Alanı */}
            <div className="w-full aspect-square max-h-[280px] bg-neutral-50/50 border border-neutral-100 rounded-2xl flex items-center justify-center p-8 relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="max-w-full max-h-full object-contain filter drop-shadow-xl animate-scale-up"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-neutral-200 tracking-widest uppercase select-none -z-10">
                {selectedProduct.brand}
              </div>
            </div>

            {/* Sadece Marka ve Ürün İsmi (Yalın ve net) */}
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-bold text-red-600 tracking-[0.15em] uppercase mb-1">
                {selectedProduct.brand}
              </span>
              <h3 className="text-2xl font-normal text-black tracking-tight font-sans">
                {selectedProduct.name}
              </h3>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}