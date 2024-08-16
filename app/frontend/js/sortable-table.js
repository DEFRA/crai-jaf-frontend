function sortTable (event) {
  const button = event.currentTarget
  const th = button.parentElement
  const table = th.closest('table')
  const currentSort = th.getAttribute('aria-sort')
  const newSort = (currentSort === 'ascending') ? 'descending' : 'ascending'

  table.querySelectorAll('th[aria-sort]').forEach(th => th.setAttribute('aria-sort', 'none'))
  th.setAttribute('aria-sort', newSort)

  const columnIndex = Array.from(th.parentElement.children).indexOf(th)
  const tbody = table.querySelector('tbody')
  const rows = Array.from(tbody.querySelectorAll('tr'))

  const sortedRows = rows.sort((a, b) => {
    const aValue = parseFloat(a.children[columnIndex].textContent)
    const bValue = parseFloat(b.children[columnIndex].textContent)
    return newSort === 'ascending' ? aValue - bValue : bValue - aValue
  })

  tbody.innerHTML = ''
  sortedRows.forEach(row => tbody.appendChild(row))
}

const buttons = document.querySelectorAll('th button')

for (const button of buttons) {
  button.addEventListener('click', sortTable)
}
