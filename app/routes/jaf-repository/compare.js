const { getJafById, compareJaf, compareJafs } = require('../../api/jaf-repository')
const { JafComparison } = require('../../models/jaf-comparison/jaf-comparison')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository/compare/{id}',
    handler: async (request, h) => {
      const jafId = request.params.id
      const { jaf } = await getJafById(jafId)
      const response = await compareJaf(jafId)

      const jafComparison = new JafComparison(jaf, response)
      console.log(jafComparison.response)

      return h.view('jaf-repository/compare', { jafComparison })
    }
  },
  {
    method: 'GET',
    path: '/jaf-repository/compare/{baseId}/{compareId}',
    handler: async (request, h) => {
      const { baseId, compareId } = request.params
      const jaf = await getJafById(baseId)
      const response = await compareJafs(baseId, compareId)

      const jafComparison = new JafComparison(jaf, response)

      return h.view('jaf-repository/compare', { jafComparison })
    }
  }
]
