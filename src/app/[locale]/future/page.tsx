import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Future');

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

        {/* Children's Inheritance Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('inheritance.title')}</h2>
          <div className="space-y-6">
            <p className="text-gray-600">{t('inheritance.description')}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sacred Trust */}
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-4">{t('inheritance.trust.title')}</h3>
                <p className="text-gray-600 mb-4">{t('inheritance.trust.description')}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('inheritance.trust.peace')}</li>
                  <li>{t('inheritance.trust.environment')}</li>
                  <li>{t('inheritance.trust.wisdom')}</li>
                </ul>
              </div>
              {/* Their Rights */}
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-4">{t('inheritance.rights.title')}</h3>
                <p className="text-gray-600 mb-4">{t('inheritance.rights.description')}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('inheritance.rights.stability')}</li>
                  <li>{t('inheritance.rights.nature')}</li>
                  <li>{t('inheritance.rights.opportunities')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Indigenous Wisdom Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('indigenous.title')}</h2>
          <div className="p-6 border rounded">
            <p className="text-gray-600 mb-6">{t('indigenous.description')}</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl mb-3">{t('indigenous.generations.title')}</h3>
                <p className="text-gray-600">{t('indigenous.generations.description')}</p>
              </div>
              <div>
                <h3 className="text-xl mb-3">{t('indigenous.harmony.title')}</h3>
                <p className="text-gray-600">{t('indigenous.harmony.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Earth and Beyond Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('cosmic.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Planetary Stewardship */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('cosmic.earth.title')}</h3>
              <p className="text-gray-600 mb-4">{t('cosmic.earth.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('cosmic.earth.climate')}</li>
                <li>{t('cosmic.earth.biodiversity')}</li>
                <li>{t('cosmic.earth.resources')}</li>
              </ul>
            </div>
            {/* Cosmic Potential */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('cosmic.space.title')}</h3>
              <p className="text-gray-600 mb-4">{t('cosmic.space.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('cosmic.space.exploration')}</li>
                <li>{t('cosmic.space.challenges')}</li>
                <li>{t('cosmic.space.unity')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Building the Future Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('building.title')}</h2>
          <div className="space-y-6">
            {/* Education and Wisdom */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('building.education.title')}</h3>
              <p className="text-gray-600 mb-4">{t('building.education.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('building.education.knowledge')}</li>
                  <li>{t('building.education.values')}</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('building.education.skills')}</li>
                  <li>{t('building.education.wisdom')}</li>
                </ul>
              </div>
            </div>

            {/* Sustainable Peace */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('building.peace.title')}</h3>
              <p className="text-gray-600 mb-4">{t('building.peace.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('building.peace.dialogue')}</li>
                  <li>{t('building.peace.systems')}</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('building.peace.cooperation')}</li>
                  <li>{t('building.peace.justice')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 p-8 rounded">
          <h2 className="text-2xl mb-4">{t('action.title')}</h2>
          <p className="text-gray-600 mb-6">{t('action.description')}</p>
          <div className="space-x-4">
            <a
              href="https://discord.gg/yQ76qBguMF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('action.join')}
            </a>
            <a
              href={`/${locale}/take-action`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('action.act')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
