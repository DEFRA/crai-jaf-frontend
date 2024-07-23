const { get, post } = require('./base')

const baseUrl = 'http://host.docker.internal:3001'

const getAllJafs = async () => {
  return get(`${baseUrl}/jaf/repository`)
}

const getJafById = async (id) => {
  return get(`${baseUrl}/jaf/repository/${id}`)
}

const uploadJaf = async (jaf, contentType) => {
  const headers = {
    'content-type': contentType
  }

  return post(`${baseUrl}/jaf/repository`, jaf, headers)
}

const compareJaf = async (id) => {
  return get(`${baseUrl}/jaf/compare/${id}`)
}

const compareJafs = async (baseId, comparedId) => {
  return get(`${baseUrl}/jaf/compare/${baseId}/${comparedId}`)
}

module.exports = {
  getAllJafs,
  getJafById,
  uploadJaf,
  compareJaf,
  compareJafs
}
