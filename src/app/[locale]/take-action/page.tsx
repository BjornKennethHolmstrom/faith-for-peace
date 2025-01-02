import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function TakeAction({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('TakeAction');

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-600">
            {t('introduction')}
          </p>
        </section>

        {/* Personal Practice Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('personal.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Daily Practice */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('personal.daily.title')}</h3>
              <p className="text-gray-600 mb-4">{t('personal.daily.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('personal.daily.meditation')}</li>
                <li>{t('personal.daily.prayer')}</li>
                <li>{t('personal.daily.study')}</li>
                <li>{t('personal.daily.kindness')}</li>
              </ul>
            </div>

            {/* Personal Development */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('personal.development.title')}</h3>
              <p className="text-gray-600 mb-4">{t('personal.development.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('personal.development.learning')}</li>
                <li>{t('personal.development.reflection')}</li>
                <li>{t('personal.development.dialogue')}</li>
                <li>{t('personal.development.practice')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('community.title')}</h2>
          <div className="space-y-6">
            {/* Local Action */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('community.local.title')}</h3>
              <p className="text-gray-600 mb-4">{t('community.local.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('community.local.interfaith')}</li>
                  <li>{t('community.local.service')}</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('community.local.education')}</li>
                  <li>{t('community.local.support')}</li>
                </ul>
              </div>
            </div>

            {/* Online Engagement */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('community.online.title')}</h3>
              <p className="text-gray-600 mb-4">{t('community.online.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('community.online.discussion')}</li>
                  <li>{t('community.online.resources')}</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('community.online.sharing')}</li>
                  <li>{t('community.online.support')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('global.title')}</h2>
          <div className="space-y-6">
            {/* Support Peace Initiatives */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('global.initiatives.title')}</h3>
              <p className="text-gray-600 mb-4">{t('global.initiatives.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('global.initiatives.organizations')}</li>
                <li>{t('global.initiatives.advocacy')}</li>
                <li>{t('global.initiatives.awareness')}</li>
              </ul>
            </div>

            {/* Education and Sharing */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('global.education.title')}</h3>
              <p className="text-gray-600 mb-4">{t('global.education.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('global.education.teaching')}</li>
                <li>{t('global.education.writing')}</li>
                <li>{t('global.education.media')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Join Our Community Section */}
        <section className="bg-gray-50 p-8 rounded text-center">
          <h2 className="text-2xl mb-4">{t('join.title')}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('join.description')}
          </p>
          <div className="space-x-4">
            <a
              href={`/${locale}/dialogue`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('join.dialogue')}
            </a>
            <a
              href="https://discord.gg/yQ76qBguMF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('join.discord')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
