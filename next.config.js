/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: 'volvoadmin@volvo.com',
    PASSWORD: 'volvoadmin123',
    SECRET_COOKIE_PASSWORD: 'volvo_monitoring_articulated_haulers_a40g',
    DRIVE_FOLDER_ID: '1yiBl94tQQopSesLNLOycROLVeu1RZ_n7'
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //       path: 'empty'
  //     }
  //   }
  //   return config
  // }
}

module.exports = nextConfig
