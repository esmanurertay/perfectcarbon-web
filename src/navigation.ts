import { createNavigation } from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;
export const defaultLocale = 'tr' as const;

// pathnames ve localePrefix'i boş nesne ve standart ayarlarla vererek tanımlıyoruz
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: 'always' // ya da projenize göre 'as-needed' yapabilirsiniz
});