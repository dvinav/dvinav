import createNextIntlPlugin from 'next-intl/plugin'
import withRspack from 'next-rspack'
import withPlugins from 'next-compose-plugins'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {}

const withIntl = createNextIntlPlugin()

export default withPlugins([withIntl, withRspack], nextConfig)
