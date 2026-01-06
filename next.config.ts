import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

const withIntl = createNextIntlPlugin()

export default withIntl(nextConfig)
