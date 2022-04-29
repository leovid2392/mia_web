/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

const nextTranslate = require('next-translate')
module.exports = {
  ...nextTranslate(),
}
