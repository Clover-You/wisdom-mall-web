const packages = require('./package.json')
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts',
)

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  reactStrictMode: true,
  output: 'standalone',
  env: {
    package: packages,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/index',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          // destination: 'http://localhost:8840/api/:path*',
          destination: 'http://wisdom.ctong.top/api/:path*',
        },
      ],
    }
  },
})

module.exports = nextConfig
