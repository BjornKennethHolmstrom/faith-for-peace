// src/app/[locale]/page.tsx

import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-normal mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Understanding & Wisdom Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.understandingWisdom.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.understandingWisdom.description')}
            </p>
            <Link 
              href={`/${locale}/understanding-wisdom`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.understandingWisdom.button')}
            </Link>
          </div>

          {/* Dialogue Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.dialogue.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.dialogue.description')}
            </p>
            <Link 
              href={`/${locale}/dialogue`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.dialogue.button')}
            </Link>
          </div>

          {/* Take Action Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.action.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.action.description')}
            </p>
            <Link 
              href={`/${locale}/take-action`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.action.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Joint Purpose Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6 font-normal">
            {t('purpose.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('purpose.description')}
          </p>
        </div>
      </section>
    </div>
  );
}
