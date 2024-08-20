class UploadModel {
  constructor (professions, err) {
    if (err) {
      this.error = {
        text: err.details[0].message
      }
    }

    this.professions = professions.map(profession => ({
      value: profession,
      text: profession
    }))
  }
}

module.exports = {
  UploadModel
}
