import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.DOMAIN_NAME?.replace(/\/$/, '')

  return [
    {
      url: `${baseUrl}/en`,
      priority: 1.0
    },
    {
      url: `${baseUrl}/fa`,
      priority: 0.9
    }
  ]
}
