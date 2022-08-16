/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  assetPrefix: '/',
  basePath: '',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.ENV  || "development",
  }
});
