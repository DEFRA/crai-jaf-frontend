const { schema } = require('../../schemas/jaf-repository/upload')
const { UploadModel } = require('../../models/jaf-repository/upload')
const { uploadJaf, getProfessions } = require('../../api/jaf-repository')
const { getFilenameComponents } = require('../../lib/file')

module.exports = [
  {
    method: 'GET',
    path: '/jaf-repository/upload',
    handler: async (request, h) => {
      const { professions } = await getProfessions()
     
      const model = new UploadModel(professions)

      return h.view('jaf-repository/upload', { model })
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
        failAction: async (request, h, err) => {
          const { professions } = await getProfessions()

          const model = new UploadModel(professions, err)

          return h.view('jaf-repository/upload', { model }).takeover(400)
        }
      }
    },
    handler: async (request, h) => {
      const buffer = request.payload.jaf._data
      const { filename } = request.payload.jaf.hapi
      const { type } = getFilenameComponents(filename)
      const { profession } = request.payload

      await uploadJaf(buffer, profession, type)
      return h.redirect('/jaf-repository')
    }
  }
]
