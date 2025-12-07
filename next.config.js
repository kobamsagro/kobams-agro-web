import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  webpack: (webpackConfig, { isServer }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Ignore test files and tap module to prevent build errors
    webpackConfig.plugins.push(
      new webpackConfig.constructor.IgnorePlugin({
        resourceRegExp: /^tap$/,
      }),
      new webpackConfig.constructor.IgnorePlugin({
        resourceRegExp: /\.test\.(js|mjs|cjs|ts|tsx)$/,
        contextRegExp: /node_modules/,
      }),
      new webpackConfig.constructor.IgnorePlugin({
        resourceRegExp: /[\\/]test[\\/]/,
        contextRegExp: /node_modules[\\/](thread-stream|pino|pino-abstract-transport|sonic-boom)/,
      }),
    )

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
