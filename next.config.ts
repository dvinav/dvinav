import createNextIntlPlugin from 'next-intl/plugin'
import withRspack from 'next-rspack'
import withPlugins from 'next-compose-plugins'
import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  output: 'export'
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withIntl = createNextIntlPlugin()

export default withPlugins([withIntl, withRspack, withBundleAnalyzer], nextConfig)
