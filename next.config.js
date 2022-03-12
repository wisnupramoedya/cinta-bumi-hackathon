/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
};

const sassOptions = {
  includePaths: [path.join(__dirname, "styles")],
};

const images = {
  domains: ["www.static-src.com"],
};

module.exports = {
  nextConfig,
  sassOptions,
};
