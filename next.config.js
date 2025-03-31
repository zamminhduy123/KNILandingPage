/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        search: '',
      },
    ],
  }
}

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();
  
module.exports = withNextIntl(nextConfig);
