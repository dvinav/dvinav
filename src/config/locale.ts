import type { Direction } from '@mui/material'

type LocaleDef = { locale: string; dir: Direction; name: string }[]

export const localesDef: LocaleDef = [
  { locale: 'en', dir: 'ltr', name: 'English' },
  { locale: 'fa', dir: 'rtl', name: 'فارسی' }
]

export const locales = localesDef.map(item => item.locale)

export const dirs = Object.fromEntries(localesDef.map(l => [l.locale, l.dir]))
