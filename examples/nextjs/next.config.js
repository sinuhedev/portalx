module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true
  },
  devIndicators: {
    appIsrStatus: false
  }
}
