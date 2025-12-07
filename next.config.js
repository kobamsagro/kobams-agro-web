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

    // 🏆 NEW RULE TO FIX 'tap' ISSUE 🏆
    // Exclude ALL JavaScript files within the node_modules folder from Next.js's
    // file resolution process, which is often what picks up test files.
    webpackConfig.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
    })

    // Completely exclude test directories from being processed
    webpackConfig.module.rules.push({
      test: /[\\/]node_modules[\\/](thread-stream|pino|pino-abstract-transport|sonic-boom)[\\/]test[\\/]/,
      loader: 'ignore-loader',
    })

    // Also exclude .test. files
    webpackConfig.module.rules.push({
      test: /\.test\.(js|mjs|cjs|ts|tsx)$/,
      loader: 'ignore-loader',
    })

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
