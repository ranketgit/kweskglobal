import { useTranslations } from 'next-intl';

const icons = {
  address: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />,
  phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
  email: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
  hours: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
};

export default function ContactInfo() {
  const t = useTranslations('contact.info');
  const items = ['address', 'phone', 'email', 'hours'] as const;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item) => (
            <div key={item} className="text-center group">
              <div className="w-12 h-12 mx-auto text-[#8b8b4b] mb-6 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {icons[item]}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-4 uppercase tracking-wider">
                {t(`${item}.title`)}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed whitespace-pre-line">
                {t(`${item}.content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}