const Joi = require('joi')
const { getFilenameComponents } = require('../../lib/file')

const validExtensions = ['pdf', 'docx']

const validateExtension = (value, helpers) => {
  const { ext } = getFilenameComponents(value)

  if (validExtensions.includes(ext)) {
    return value
  }

  return helpers.error('any.invalid')
}

const schema = Joi.object({
  jaf: Joi.object({
    hapi: Joi.object({
      filename: Joi.string().required().messages({
        'string.base': 'The filename must be a text value',
        'string.empty': 'Select a file',
        'any.required': 'Select a file',
        'any.invalid': 'The selected file must be a PDF or DOCX document'
      }).custom(validateExtension)
    }).required().unknown()
  }).required().unknown()
})

module.exports = {
  schema
}
