'use client'

import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');

  return (
    <section className="py-[120px] bg-[#fafaf9]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16 lg:gap-[100px]">
          
          <div>
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] block">
              {t('label')}
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-6 leading-tight uppercase">
              {t('title')}
            </h2>
            <p className="mt-6 text-stone-500 leading-relaxed">
              {t('description')}
            </p>
            <div className="w-20 h-[3px] bg-[#8b8b4b] mt-10" />
          </div>

          <form 
            action="https://formsubmit.co/tbenjelloun@yahoo.com" 
            method="POST"
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis le site KWESK" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://kwesk.com/merci" />
            <input type="text" name="_honey" className="hidden" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="prenom">{t('fields.firstName')}</label>
                <input type="text" name="prenom" id="prenom" required placeholder={t('placeholders.firstName')} className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="nom">{t('fields.lastName')}</label>
                <input type="text" name="nom" id="nom" required placeholder={t('placeholders.lastName')} className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="email">{t('fields.email')}</label>
                <input type="email" name="email" id="email" required placeholder={t('placeholders.email')} className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="telephone">{t('fields.phone')}</label>
                <input type="tel" name="telephone" id="telephone" placeholder={t('placeholders.phone')} className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="sujet">{t('fields.subject')}</label>
              <select name="sujet" id="sujet" required className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none bg-white appearance-none cursor-pointer transition-colors" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2378716c' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 15px center', backgroundSize: '20px' }}>
                <option value="">{t('placeholders.select')}</option>
                <option value="Demande de devis">Demande de devis</option>
                <option value="Informations produits">Informations produits</option>
                <option value="Service après-vente">Service après-vente</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-stone-900 uppercase tracking-wider" htmlFor="message">{t('fields.message')}</label>
              <textarea name="message" id="message" required rows={6} placeholder={t('placeholders.message')} className="w-full p-[18px] border border-stone-200 focus:border-[#8b8b4b] outline-none transition-colors resize-none" />
            </div>

            <button type="submit" className="bg-[#8b8b4b] text-white px-12 py-5 text-[13px] uppercase tracking-[2px] self-start hover:opacity-90 transition-opacity">
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}