// src/components/layout/Header.tsx

'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const params = useParams();
  const locale = params.locale;

  return (
    <>
      <header className="w-full py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href={`/${locale}`} className="text-2xl">
                faith for peace
              </Link>
              <p className="text-sm text-gray-600 ml-8 hidden md:block">
                {t('message')}
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href={`/${locale}/understanding-wisdom`} className="hover:text-gray-600">
                {t('understandingWisdom')}
              </Link>
              <Link href={`/${locale}/dialogue`} className="hover:text-gray-600">
                {t('dialogue')}
              </Link>
              <Link href={`/${locale}/future`} className="hover:text-gray-600">
                {t('future')}
              </Link>
              <Link 
                href={`/${locale}/take-action`}
                className="px-4 py-1 border border-black hover:bg-black hover:text-white transition-colors"
              >
                {t('takeAction')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      <div className="w-full bg-gray-50 md:hidden">
        <div className="container mx-auto px-4 py-3">
          <p className="text-sm text-gray-600 text-center">
            {t('message')}
          </p>
        </div>
      </div>
    </>
  );
}
