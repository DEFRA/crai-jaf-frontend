const { getAllJafs, getProfessions } = require('../../api/jaf-repository')
const { JafOverview } = require('../../models/jaf-repository/jaf-overview')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository',
    handler: async (request, h) => {
      const { profession } = request.query

      const jafs = await getAllJafs(profession)
      const { professions } = await getProfessions()

      const model = new JafOverview(jafs, professions, profession)

      return h.view('jaf-repository/index', { model })
    }
  }
]
