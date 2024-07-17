class JafComparison {
  constructor (jaf, response) {
    this.name = jaf.name
    this.summary = jaf.summary.summary
    this.deliverables = jaf.deliverables
    this.response = response
  }
}

module.exports = {
  JafComparison
}
