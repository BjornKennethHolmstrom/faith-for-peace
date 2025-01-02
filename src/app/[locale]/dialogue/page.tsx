import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function DialoguePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Dialogue');

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

        {/* Principles of Dialogue Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('principles.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Core Principles */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('principles.core.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.core.respect')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.core.listen')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.core.openMind')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.core.learn')}</span>
                </li>
              </ul>
            </div>

            {/* Guidelines */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('principles.guidelines.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.guidelines.speak')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.guidelines.ask')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.guidelines.share')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('principles.guidelines.reflect')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ways to Engage Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('engage.title')}</h2>
          <div className="space-y-6">
            {/* Online Community */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('engage.online.title')}</h3>
              <p className="text-gray-600 mb-4">{t('engage.online.description')}</p>
              <a
                href="https://discord.gg/yQ76qBguMF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
              >
                {t('engage.online.button')}
              </a>
            </div>

            {/* Local Dialogue */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('engage.local.title')}</h3>
              <p className="text-gray-600 mb-4">{t('engage.local.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">{t('engage.local.starting.title')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t('engage.local.starting.find')}</li>
                    <li>{t('engage.local.starting.invite')}</li>
                    <li>{t('engage.local.starting.space')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{t('engage.local.topics.title')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t('engage.local.topics.shared')}</li>
                    <li>{t('engage.local.topics.practices')}</li>
                    <li>{t('engage.local.topics.peace')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Personal Connections */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('engage.personal.title')}</h3>
              <p className="text-gray-600 mb-4">{t('engage.personal.description')}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t('engage.personal.letters.title')}</h4>
                  <p className="text-gray-600">{t('engage.personal.letters.description')}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{t('engage.personal.virtual.title')}</h4>
                  <p className="text-gray-600">{t('engage.personal.virtual.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('resources.title')}</h2>
          <div className="p-6 border rounded">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl mb-3">{t('resources.topics.title')}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('resources.topics.faith')}</li>
                  <li>{t('resources.topics.peace')}</li>
                  <li>{t('resources.topics.wisdom')}</li>
                  <li>{t('resources.topics.practices')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-3">{t('resources.questions.title')}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>{t('resources.questions.meaning')}</li>
                  <li>{t('resources.questions.practices')}</li>
                  <li>{t('resources.questions.peace')}</li>
                  <li>{t('resources.questions.future')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 p-8 rounded">
          <h2 className="text-2xl mb-4">{t('cta.title')}</h2>
          <p className="text-gray-600 mb-6">{t('cta.description')}</p>
          <a
            href="https://discord.gg/yQ76qBguMF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            {t('cta.button')}
          </a>
        </section>
      </div>
    </div>
  );
}
