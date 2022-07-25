/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
// Hydrogen components are only exported as ESM, not CJS. Shopify will support
// multiple export types in a future version of Hydrogen, so the extra transpile
// step is a temporary workaround.
const withTM = require("next-transpile-modules")(["@shopify/hydrogen"]);

module.exports = withTM({
  reactStrictMode: true,
});
