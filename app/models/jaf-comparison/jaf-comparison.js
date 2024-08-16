class JafComparison {
  constructor (jaf, comparedJafs) {
    this.id = jaf.id
    this.name = jaf.name
    this.jobSummary = jaf.summary.job_summary
    this.skills = jaf.summary.skills
    this.mainActivities = jaf.summary.main_activities
    this.comparedJafs = comparedJafs
  }
}

module.exports = {
  JafComparison
}
