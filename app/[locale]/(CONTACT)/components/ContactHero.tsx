import { useTranslations } from 'next-intl';

export default function ContactHero() {
  const t = useTranslations('contact.hero');

  return (
    <section className="py-[120px] lg:pt-[160px] lg:pb-[80px] text-center bg-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-[60px]">
        <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] block mb-6">
          {t('label')}
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight">
          {t('title')}
        </h1>
        <p className="mt-8 text-stone-500 text-base lg:text-lg leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}