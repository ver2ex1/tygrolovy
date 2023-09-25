/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ua', 'eng'],
    defaultLocale: 'ua',
  },
};
// It's assumed that this is a Next.js config file, so the import is from 'next'
/** @type {import('next').NextConfig} */
const nextI18nConfig = require('./next-i18next.config'); // import i18n configurations

module.exports = {
  ...nextI18nConfig,
  ...nextConfig,
  reactStrictMode: true,
  i18n: {
    locales: ['ua', 'eng'],
    defaultLocale: 'ua',
  },
};


