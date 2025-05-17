import type { MetadataRoute } from 'next'
import { getLocale } from 'next-intl/server'

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const locale = await getLocale()

  return {
    name: 'Dvin',
    short_name: 'Dvin',
    start_url: `/${locale}`,
    id: `/${locale}`,
    display: 'standalone',
    background_color: '#252120',
    theme_color: '#ede8d0',
    description: 'The official app for visiting Dvin',
    lang: locale,
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      { src: '/icons/maskable_icon_x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/maskable_icon_x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  }
}

export default manifest
