import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const; // 'en' dilini başa almak her zaman iyi bir pratiktir
export const defaultLocale = 'en' as const; // Varsayılan dili 'en' yaptık

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: 'always' // veya isteğe göre 'as-needed'
});