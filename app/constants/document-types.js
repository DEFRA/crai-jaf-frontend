const exts = {
  PDF: 'pdf',
  DOCX: 'docx'
}

const mime = {
  [exts.PDF]: 'application/pdf',
  [exts.DOCX]: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

module.exports = {
  exts,
  mime
}
