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

// const determineOverallMatch = (objects, threshold) => {
//   const matchCount = objects.filter(obj => obj.match === true).length
//   const matchPercentage = matchCount / objects.length

//   return matchPercentage >= threshold
// }

module.exports = {
  JafComparison
}
