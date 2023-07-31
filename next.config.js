/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  //assetPrefix: "/nsra-chicago.github.io/",
  //basePath: "/nsra-chicago.github.io",

  assetPrefix: isProd ? 'https://nsra.online/' : undefined,
  //basePath: isProd ? 'http://nsra.online' : undefined,
}

module.exports = nextConfig
