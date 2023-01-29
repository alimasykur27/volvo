/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: 'volvoadmin@volvo.com',
    PASSWORD: 'volvoadmin123',
    SECRET_COOKIE_PASSWORD: 'volvo_monitoring_articulated_haulers_a40g'
  }
}

module.exports = nextConfig
