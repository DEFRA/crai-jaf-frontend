class UploadModel {
  constructor (err) {
    this.error = {
      text: err.details[0].message
    }
  }
}

module.exports = {
  UploadModel
}
