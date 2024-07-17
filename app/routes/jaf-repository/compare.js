const { getJafById, compareJaf, compareJafs } = require('../../api/jaf-repository')
const { JafComparison } = require('../../models/jaf-comparison/jaf-comparison')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository/compare/{id}',
    handler: async (request, h) => {
      const { jaf } = await getJafById(request.params.id)
      const response = await compareJaf(request.params.id)

      const jafComparison = new JafComparison(jaf, response)

      return h.view('jaf-repository/compare', { jafComparison })
    }
  },
  {
    method: 'GET',
    path: '/jaf-repository/compare/{id1}/{id2}',
    handler: async (request, h) => {
      const jaf = await getJafById(request.params.id1)
      const response = await compareJafs(request.params.id1, request.params.id2)

      const jafComparison = new JafComparison(jaf, response)

      return h.view('jaf-repository/compare', { jafComparison })
    }
  }
]
