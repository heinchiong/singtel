/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
		remotePatterns: [
			{
        protocol: 'https',
        hostname: '**',
      }
		],
	},
}

module.exports = nextConfig
