// MODULES
// import express
const express = require('express')
// import dotenv
require('dotenv').config()
// import morgan
const morgan = require('morgan')
// import createPath
const createPath = require('./helpers/create-path')
// import search route
const searchRoute = require('./routes/search-route')
// import getData function
const { getPosData } = require('./requests/weather-request')
// import navigator
const { Navigator } = require('node-navigator')
const navigator = new Navigator()

const app = express()

// initialization of ejs
app.set('view engine', 'ejs')

// MIDDLEWARES
// morgan logger middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// middleware for static files
app.use(express.static(__dirname))
// middleware for work with method POST
app.use(express.urlencoded({ extended: false }))

// ROUTES
// main route
app.get('/', (req, res) => {
  const title = 'Home'

  async function success(position) {
    const latitude = position.latitude
    const longitude = position.longitude

    const data = await getPosData(latitude, longitude)

    res.render(createPath('index'), { title, data })
  }

  function error(errror) {
    console.log(error)
  }

  if (!navigator.geolocation) {
  } else {
    navigator.geolocation.getCurrentPosition(success, error)
  }
})

// post route
app.use(searchRoute)

// error route
app.use((req, res) => {
  const title = 'Error'
  res.status(400).render(createPath('error'), { title })
})

// LISTEN
// start server
app.listen(process.env.PORT || 3000, (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`)
})
