/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brands.home-assistant.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'homeassistant.local:8123',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default config
