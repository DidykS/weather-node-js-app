// import node-fetch
// const fetch = require('node-fetch')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

// import dotenv
require('dotenv').config()

const getData = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
  )

  const data = await response.json()

  console.log(data)
}

module.exports = getData
