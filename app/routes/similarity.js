module.exports = [
  {
    method: 'GET',
    path: '/similarity',
    handler: async (request, h) => {
      return h.view('similarity')
    }
  },
  {
    method: 'POST',
    path: '/similarity',
    options: {
      payload: {
        maxBytes: 5 * 1000 * 1000,
        output: 'stream',
        parse: true,
        allow: 'application/pdf'
      }
    },
    handler: async (request, h) => {
      return h.redirect('/similarity')
    }
  }
]
