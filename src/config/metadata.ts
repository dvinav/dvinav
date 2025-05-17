import { Metadata } from 'next/types'
import { getLocale, getTranslations } from 'next-intl/server'

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata')
  const locale = await getLocale()

  return {
    robots: 'index, follow, noimageindex',
    metadataBase: new URL(`https://${process.env.DOMAIN}/en/`),
    description: t('description'),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`
    },
    openGraph: {
      type: 'website',
      title: t('ogTitle'),
      description: t('description'),
      url: `https://${process.env.DOMAIN}/en/`,
      siteName: t('title'),
      images: `https://${process.env.DOMAIN}/images/og-image_${locale}.jpg`,
      locale: locale.replace('-', '_')
    },
    twitter: {
      images: `https://${process.env.DOMAIN}/images/og-image_${locale}.jpg`,
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('description')
    },
    alternates: {
      canonical: `https://${process.env.DOMAIN}/en/`,
      languages: {
        en: `https://${process.env.DOMAIN}/en/`,
        fa: `https://${process.env.DOMAIN}/fa/`
      }
    },
    appleWebApp: {
      title: 'Dvin',
      statusBarStyle: 'black-translucent',
      capable: true,
      startupImage: [
        '/assets/startup/apple-touch-startup-image-768x1004.png',
        {
          url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
          media: '(device-width: 768px) and (device-height: 1024px)'
        }
      ]
    }
  }
}

export default generateMetadata
