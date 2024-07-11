module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository',
    handler: async (request, h) => {
      const model = {}
      return h.view('jaf-repository/index', model)
    }
  }
]
