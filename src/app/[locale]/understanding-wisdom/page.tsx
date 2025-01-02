import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function UnderstandingWisdom({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('UnderstandingWisdom');

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('introduction')}
          </p>
          <div className="italic text-gray-700">
            <p className="mb-2">{t('quotes.sagan')}</p>
            <p>{t('quotes.einstein')}</p>
          </div>
        </section>

        {/* Featured Quotes Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ancient Wisdom */}
            <div className="p-6 border rounded bg-gray-50">
              <h3 className="text-xl mb-4 font-medium">{t('quotes.ancient.title')}</h3>
              <div className="space-y-4">
                <blockquote className="pl-4 border-l-2 border-gray-300">
                  <p className="text-gray-600 mb-2">{t('quotes.ancient.buddhist')}</p>
                  <cite className="text-sm text-gray-500">— The Dhammapada</cite>
                </blockquote>
                <blockquote className="pl-4 border-l-2 border-gray-300">
                  <p className="text-gray-600 mb-2">{t('quotes.ancient.laoTzu')}</p>
                  <cite className="text-sm text-gray-500">— Lao Tzu</cite>
                </blockquote>
              </div>
            </div>
            
            {/* Modern Insights */}
            <div className="p-6 border rounded bg-gray-50">
              <h3 className="text-xl mb-4 font-medium">{t('quotes.modern.title')}</h3>
              <div className="space-y-4">
                <blockquote className="pl-4 border-l-2 border-gray-300">
                  <p className="text-gray-600 mb-2">{t('quotes.modern.schweitzer')}</p>
                  <cite className="text-sm text-gray-500">— Albert Schweitzer</cite>
                </blockquote>
                <blockquote className="pl-4 border-l-2 border-gray-300">
                  <p className="text-gray-600 mb-2">{t('quotes.modern.carson')}</p>
                  <cite className="text-sm text-gray-500">— Rachel Carson</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Unity in Diversity Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('unity.title')}</h2>
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-gray-600">{t('unity.description')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Common Ground Card */}
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-3">{t('unity.commonGround.title')}</h3>
                <p className="text-gray-600">{t('unity.commonGround.description')}</p>
              </div>
              {/* Unique Perspectives Card */}
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-3">{t('unity.uniquePerspectives.title')}</h3>
                <p className="text-gray-600">{t('unity.uniquePerspectives.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wisdom Traditions Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('traditions.title')}</h2>
          <div className="space-y-8">
            {/* Abrahamic Traditions */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('traditions.abrahamic.title')}</h3>
              <div className="space-y-4">
                <p className="text-gray-600">{t('traditions.abrahamic.description')}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.abrahamic.judaism.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.abrahamic.judaism.insight')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.abrahamic.christianity.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.abrahamic.christianity.insight')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.abrahamic.islam.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.abrahamic.islam.insight')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eastern Traditions */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('traditions.eastern.title')}</h3>
              <div className="space-y-4">
                <p className="text-gray-600">{t('traditions.eastern.description')}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.eastern.buddhism.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.eastern.buddhism.insight')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.eastern.hinduism.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.eastern.hinduism.insight')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.eastern.taoism.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.eastern.taoism.insight')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indigenous Wisdom */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('traditions.indigenous.title')}</h3>
              <p className="text-gray-600 mb-4">{t('traditions.indigenous.description')}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t('traditions.indigenous.connection.title')}</h4>
                  <p className="text-sm text-gray-600">{t('traditions.indigenous.connection.insight')}</p>
                </div>
              </div>
            </div>

            {/* Modern Perspectives */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-4">{t('traditions.modern.title')}</h3>
              <div className="space-y-4">
                <p className="text-gray-600">{t('traditions.modern.description')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.modern.humanism.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.modern.humanism.insight')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('traditions.modern.science.title')}</h4>
                    <p className="text-sm text-gray-600">{t('traditions.modern.science.insight')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Principles Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('principles.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('principles.interconnectedness.title')}</h3>
              <p className="text-gray-600">{t('principles.interconnectedness.description')}</p>
            </div>
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('principles.compassion.title')}</h3>
              <p className="text-gray-600">{t('principles.compassion.description')}</p>
            </div>
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('principles.justice.title')}</h3>
              <p className="text-gray-600">{t('principles.justice.description')}</p>
            </div>
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('principles.transformation.title')}</h3>
              <p className="text-gray-600">{t('principles.transformation.description')}</p>
            </div>
          </div>
        </section>

        {/* Contemplative Practices Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">{t('practices.title')}</h2>
          <div className="space-y-6">
            <p className="text-gray-600">{t('practices.description')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-3">{t('practices.meditation.title')}</h3>
                <p className="text-gray-600">{t('practices.meditation.description')}</p>
              </div>
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-3">{t('practices.prayer.title')}</h3>
                <p className="text-gray-600">{t('practices.prayer.description')}</p>
              </div>
              <div className="p-6 border rounded">
                <h3 className="text-xl mb-3">{t('practices.service.title')}</h3>
                <p className="text-gray-600">{t('practices.service.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-gray-50 p-8 rounded">
          <h2 className="text-2xl mb-4">{t('action.title')}</h2>
          <p className="text-gray-600 mb-6">{t('action.description')}</p>
          <div className="space-x-4">
            <a href={`/${locale}/dialogue`} className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              {t('action.dialogue')}
            </a>
            <a href={`/${locale}/take-action`} className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              {t('action.join')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
