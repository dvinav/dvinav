import { MetadataRoute } from 'next/types'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://dvinav.com/en/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://dvinav.com/fa/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    }
  ]
}

export default sitemap
