/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ua', 'eng'],
    defaultLocale: 'ua',
  },
};
const { i18n } = require('./next-i18next.config');

module.exports = {
  nextConfig,
  i18n,
  reactStrictMode: true,
  concurrentFeatures: true,
};
