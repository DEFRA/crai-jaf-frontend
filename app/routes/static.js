module.exports = [
  {
    method: 'GET',
    path: '/static/{path*}',
    options: {
      auth: false,
      handler: {
        directory: {
          path: ['app/dist', 'app/dist/assets']
        }
      },
      cache: {
        privacy: 'private'
      }
    }
  }
]
