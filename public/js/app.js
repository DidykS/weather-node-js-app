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
