const { get, post } = require('./base')

const baseUrl = 'http://host.docker.internal:3001'

const getAllJafs = async (profession) => {
  if (profession) {
    const query = encodeURIComponent(profession)

    return get(`${baseUrl}/jaf/repository?profession=${query}`)
  }

  return get(`${baseUrl}/jaf/repository`)
}

const getJafById = async (id) => {
  return get(`${baseUrl}/jaf/repository/${id}`)
}

const uploadJaf = async (jaf, profession, contentType) => {
  const headers = {
    'content-type': contentType,
    'x-profession': profession
  }

  return post(`${baseUrl}/jaf/repository`, jaf, headers)
}

const compareJaf = async (id) => {
  return get(`${baseUrl}/jaf/compare/${id}`)
}

const compareJafs = async (baseId, comparedId) => {
  return get(`${baseUrl}/jaf/compare/${baseId}/${comparedId}`)
}

const getProfessions = async () => {
  return get(`${baseUrl}/jaf/profession`)
}

module.exports = {
  getAllJafs,
  getJafById,
  uploadJaf,
  compareJaf,
  compareJafs,
  getProfessions
}
