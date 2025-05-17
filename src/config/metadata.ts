import { Metadata } from 'next/types'
import { getLocale, getTranslations } from 'next-intl/server'

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata')
  const locale = await getLocale()

  return {
    robots: 'index, follow',
    metadataBase: new URL(`https://${process.env.DOMAIN}`),
    description: t('description'),
    title: {
      default: t('title'),
      template: `${t('title')} | %s`
    },
    openGraph: {
      type: 'website',
      title: t('ogTitle'),
      description: t('description'),
      url: process.env.DOMAIN,
      siteName: t('title'),
      images: `https://${process.env.DOMAIN}/images/og-image_${locale}.jpg`,
      locale: locale.replace('-', '_')
    },
    twitter: {
      images: `https://${process.env.DOMAIN}/images/og-image_${locale}.jpg`,
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('description')
    }
  }
}

export default generateMetadata
