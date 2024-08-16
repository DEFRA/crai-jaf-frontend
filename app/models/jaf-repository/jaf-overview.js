class JafOverview {
  constructor (jafs, professions, selectedProfession) {
    this.jafs = jafs.map((jaf) => ({
      id: jaf.id,
      jobTitle: jaf.summary.details.job_title,
      grade: jaf.summary.details.grade,
      profession: jaf.profession
    }))

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
