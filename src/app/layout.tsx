import { NextIntlClientProvider } from 'next-intl'
import AppLayout from '@/components/layout'
import { dirs } from '@/config/locale'
import { getLocale } from 'next-intl/server'
import jsonLd from '@/config/jsonld'

export { default as generateMetadata } from '@/config/metadata'

const RootLayout: LC = async ({ children }) => {
  const locale = await getLocale()
  const dir = dirs[locale]

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href={`/${locale}.json`} />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="alternate" href={`https://${process.env.DOMAIN}/en/`} hrefLang="x-default" />
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
