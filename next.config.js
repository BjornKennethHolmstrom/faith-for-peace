const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/faith-for-peace' : '',
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
