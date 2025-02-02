module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true
      }
    ]
  }

  // eslint: {
  //   ignoreDuringBuilds: true
  // },
  // devIndicators: {
  //   appIsrStatus: false
  // }
}
