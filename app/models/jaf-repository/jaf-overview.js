class JafOverview {
  constructor (jafs, professions, selectedProfession) {
    this.jafs = jafs.reduce((acc, jaf) => {
      const profession = jaf.profession
      const jobTitle = jaf.summary.details.job_title
      const grade = jaf.summary.details.grade

      if (!acc[profession]) {
        acc[profession] = []
      }

      acc[profession].push({
        id: jaf.id,
        jobTitle,
        grade,
        profession
      })

      return acc
    }, {})

    this.professions = professions.map((profession) => {
      const isSelected = profession === selectedProfession

      return {
        value: profession,
        text: profession,
        isSelected
      }
    })
  }
}

module.exports = {
  JafOverview
}
