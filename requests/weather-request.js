// import node-fetch
// const fetch = require('node-fetch')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

// import dotenv
require('dotenv').config()

const getData = async (city = 'Lviv') => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    )

    const data = await response.json()
    const celsius = Math.round(data?.main?.temp - 273.15)
    const minTemp = Math.round(data?.main?.temp_min - 273.15)
    const maxTemp = Math.round(data?.main?.temp_max - 273.15)

    return {
      name: data.name,
      country: data.sys.country,
      temp: celsius,
      icon:
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png',
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      min: minTemp,
      max: maxTemp,
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = getData
