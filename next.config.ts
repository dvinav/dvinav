import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {}

const withIntl = createNextIntlPlugin()

export default withIntl(nextConfig)
