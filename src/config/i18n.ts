export const locales = ['en', 'sv','he'] as const;
// Upcoming languages: , 'uk', 'ru', 'zh', 'ar', 'es', 'fr', 'de', 'he']
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as const;

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Add languages with right-to-left writing
export const rtlLocales = ['he'] as const; // TODO: add 'ar'
export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as typeof rtlLocales[number]);
}
