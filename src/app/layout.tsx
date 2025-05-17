import { NextIntlClientProvider } from 'next-intl'
import AppLayout from '@/components/layout'
import { dirs } from '@/config/locale'
import { getLocale } from 'next-intl/server'

export { default as generateMetadata } from '@/config/metadata'

const RootLayout: LC = async ({ children }) => {
  const locale = await getLocale()
  const dir = dirs[locale]

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dvin" />
        <link rel="alternate" href={`https://${process.env.DOMAIN}/en/`} hrefLang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dvin Avanesian',
              url: 'https://dvinav.com',
              jobTitle: 'Full Stack Developer and Linux Specialist',
              sameAs: [
                'https://github.com/dvinav',
                'https://linkedin.com/in/dvin-avanesian-0b4565283',
                'https://t.me/dvinav',
                'https://instagram.com/dvin.av',
                'https://wa.me/989020092004',
                'mailto:dvinav@outlook.com',
                'tel:+989020092004'
              ]
            })
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
