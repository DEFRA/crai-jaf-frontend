class JafComparison {
  constructor (jaf, response) {
    this.id = jaf.id
    this.name = jaf.name
    this.summary = jaf.summary.summary
    this.deliverables = jaf.summary.deliverables
    this.keyResponsibilities = jaf.summary.keyResponsibilities
    this.response = response.response
  }
}

module.exports = {
  JafComparison
}
