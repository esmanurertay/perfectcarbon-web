import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Process from '@/components/Process'; 
import Brands from '@/components/Brands';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-red-500 selection:text-white scroll-smooth">
      {/* Gezinme Çubuğu */}     
      <Navbar />

      {/* Karşılama Alanı (Light) */}
      <div id="home">
        <Hero />
      </div>
      
    
      {/* Hakkımızda Alanı */}
      <div id="about">
        <About /> 
      </div>
      {/* İstatistik Alanı (Light) */}
      <Stats />

      {/* Süreç Akış Alanı (Sinematik Dark Geçişi) */}
      <Process /> 
      <Brands /> 
        {/* Ürünler Alanı */}
      <div id="products">
        <Products /> 
      </div>

      {/* İletişim Alanı */}
      <div id="contact">
        <Contact /> 
      </div>
    </main>
  );
}