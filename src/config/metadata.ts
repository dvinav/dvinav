import { Metadata } from 'next/types'

const metadata: Record<'en' | 'fa', Metadata> = {
  en: {
    robots: 'index, follow, noimageindex',
    metadataBase: new URL('https://dvinav.github.io/en/'),
    description: 'Full Stack Developer and Linux Specialist',
    title: {
      default: 'Dvin Avanesian',
      template: '%s | Dvin Avanesian'
    },
    openGraph: {
      type: 'website',
      title: 'Dvin Avanesian',
      description: 'Full Stack Developer and Linux Specialist',
      url: 'https://dvinav.github.io/en/',
      siteName: 'Dvin Avanesian',
      images: 'https://dvinav.github.io/images/og-image_en.jpg',
      locale: 'en_US'
    },
    twitter: {
      images: 'https://dvinav.github.io/images/og-image_en.jpg',
      card: 'summary_large_image',
      title: 'Dvin Avanesian',
      description: 'Full Stack Developer and Linux Specialist'
    },
    alternates: {
      canonical: 'https://dvinav.github.io/en/',
      languages: {
        en: 'https://dvinav.github.io/en/',
        fa: 'https://dvinav.github.io/fa/'
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
  },
  fa: {
    robots: 'index, follow, noimageindex',
    metadataBase: new URL('https://dvinav.github.io/fa/'),
    description: 'برنامه‌نویس فول استک و متخصص لینوکس',
    title: {
      default: 'دوین آوانسیان',
      template: '%s | دوین آوانسیان'
    },
    openGraph: {
      type: 'website',
      title: 'دوین آوانسیان',
      description: 'برنامه‌نویس فول استک و متخصص لینوکس',
      url: 'https://dvinav.github.io/fa/',
      siteName: 'دوین آوانسیان',
      images: 'https://dvinav.github.io/images/og-image_fa.jpg',
      locale: 'fa_IR'
    },
    twitter: {
      images: 'https://dvinav.github.io/images/og-image_fa.jpg',
      card: 'summary_large_image',
      title: 'دوین آوانسیان',
      description: 'برنامه‌نویس فول استک و متخصص لینوکس'
    },
    alternates: {
      canonical: 'https://dvinav.github.io/fa/',
      languages: {
        en: 'https://dvinav.github.io/en/',
        fa: 'https://dvinav.github.io/fa/'
      }
    },
    appleWebApp: {
      title: 'دوین',
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

const getMetadata = (locale: 'en' | 'fa'): Metadata => metadata[locale]

export default getMetadata
