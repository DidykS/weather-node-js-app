// import node-fetch
// const fetch = require('node-fetch')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

// import dotenv
require('dotenv').config()

const getData = async (city) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    )

    const data = await response.json()
    const celsius = Math.round(data.main.temp - 273.15)

    return {
      name: data.name,
      temp: celsius,
      icon:
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png',
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      min: data.main.temp_min,
      max: data.main.temp_min,
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = getData
