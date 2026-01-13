// lib/staticParams.ts
import { routing } from '@/i18n/routing'

export const localeParams = routing.locales.map((locale) => ({ locale }))