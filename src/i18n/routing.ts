import { locales } from '@/config/locale'
import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales,
  defaultLocale: process.env.DEFAULT_LOCALE || 'en'
})

export default routing
