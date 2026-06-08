import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Process from '@/components/Process'; 
import Brands from '@/components/Brands';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-red-500 selection:text-white">
      {/* Gezinme Çubuğu */}      
      {/* Karşılama Alanı (Light) */}
      <Hero />

      {/* İstatistik Alanı (Light) */}
      <Stats />

      {/* Süreç Akış Alanı (Sinematik Dark Geçişi) */}
      <Process /> {/* 👈 Stats'ın hemen altına yerleştirdik */}
      <Brands /> {/* 👈 Process'in hemen altına yerleştirdik */ }
      <Products /> {/* 👈 Brands'in hemen altına yerleştirdik */ }
      <About /> {/* 👈 Products'in hemen altına yerleştirdik */ }
      <Contact /> {/* 👈 About'in hemen altına yerleştirdik */ }
    </main>
  );
}