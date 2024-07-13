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
        hostname: 'ha.lyck.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'homeassistant.local',
        port: '8123',
        pathname: '/**',
      },
    ],
  },
}

export default config
