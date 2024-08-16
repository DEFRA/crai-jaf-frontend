const { mime } = require('../constants/document-types')

const getFilenameComponents = (filename) => {
  const index = filename.lastIndexOf('.')

  const name = filename.substring(0, index)
  const ext = filename.substring(index + 1)

  const type = mime[ext]

  return {
    name,
    ext,
    type
  }
}

module.exports = {
  getFilenameComponents
}
