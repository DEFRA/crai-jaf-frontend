const { schema } = require('../../schemas/jaf-repository/upload')
const { UploadModel } = require('../../models/jaf-repository/upload')
const { uploadJaf } = require('../../api/jaf-repository')
const { getFilenameComponents } = require('../../lib/file')

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
      const buffer = request.payload.jaf._data
      const { filename } = request.payload.jaf.hapi
      const { type } = getFilenameComponents(filename)
      await uploadJaf(buffer, type)
      return h.redirect('/jaf-repository')
    }
  }
]
