class JafOverview {
  constructor (jafs) {
    this.jafs = jafs.map((jaf) => ({
      id: jaf.id,
      jobTitle: jaf.summary.details.job_title,
      grade: jaf.summary.details.grade
    }))
  }
}

module.exports = {
  JafOverview
}
