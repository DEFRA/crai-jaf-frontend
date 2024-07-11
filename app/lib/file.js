const getFilenameComponents = (filename) => {
  const index = filename.lastIndexOf('.')

  const name = filename.substring(0, index)
  const ext = filename.substring(index + 1)

  return {
    name,
    ext
  }
}

module.exports = {
  getFilenameComponents
}
