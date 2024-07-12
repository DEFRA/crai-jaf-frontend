const { getAllJafs } = require('../../api/jaf-repository')
const { JafOverview } = require('../../models/jaf-repository/jaf-overview')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository',
    handler: async (request, h) => {
      const jafs = await getAllJafs()
      const model = new JafOverview(jafs)
      return h.view('jaf-repository/index', { model })
    }
  }
]
