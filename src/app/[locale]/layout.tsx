import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import AppLayout from '@/components/layout'
import { dirs } from '@/config/locale'
import jsonLd from '@/config/jsonld'
import getMetadata from '@/config/metadata'

export { generateStaticParams } from './page'

interface Params {
  params: Promise<{ locale: string }>
}

export const generateMetadata = async ({ params }: Params) => {
  const { locale } = await params
  return getMetadata(locale as 'en' | 'fa')
}

const RootLayout: LC<Params> = async ({ children, params }) => {
  const { locale } = await params
  const dir = dirs[locale]

  setRequestLocale(locale)

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href={`/manifest_${locale}.json`} />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="alternate" href={`https://dvinav.github.io/en/`} hrefLang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      </head>
      <body tabIndex={-1}>
        <NextIntlClientProvider>
          <AppLayout dir={dir}> {children}</AppLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
