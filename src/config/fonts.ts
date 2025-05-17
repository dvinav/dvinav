import { Inter, Vazirmatn, Fira_Code } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const vazir = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-vazir'
})

export const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
  variable: '--font-fira'
})
