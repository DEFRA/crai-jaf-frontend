const { schema } = require('../../schemas/jaf-repository/upload')
const { UploadModel } = require('../../models/jaf-repository/upload')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository/upload',
    handler: async (request, h) => {
      return h.view('jaf-repository/upload')
    }
  },
  {
    method: 'POST',
    path: '/jaf-repository/upload',
    options: {
      payload: {
        maxBytes: 5 * 1000 * 1000,
        output: 'stream',
        timeout: false,
        parse: true,
        allow: 'multipart/form-data',
        multipart: true
      },
      validate: {
        payload: schema,
        failAction: (request, h, err) => {
          const model = new UploadModel(err)
          return h.view('jaf-repository/upload', { model }).takeover(400)
        }
      }
    },
    handler: async (request, h) => {
      return h.redirect('/jaf-repository')
    }
  }
]
