import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale, // navigation.ts'den gelen 'en' değerini otomatik kullanır
  localePrefix: 'always'
});

export const config = {
  // Regex deseninde de önceliği en'e verebilirsin (opsiyonel)
  matcher: ['/', '/(en|tr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};