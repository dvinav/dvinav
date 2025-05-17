import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/'
    },
    sitemap: 'https://dvinav.com/sitemap.xml'
  }
}

export default robots
