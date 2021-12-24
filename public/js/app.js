// Get current date

const date = document.querySelector('#date')

const nDate = new Date()
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

date.textContent = `${days[nDate.getDay()]}, ${
  month[nDate.getMonth()]
} ${nDate.getDate()}`

const reloadBtn = document.querySelector('.wrapper__reload--btn')
reloadBtn.addEventListener('click', () => {
  window.location.href = '/'
})
