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

  res.render(createPath('home'), { title })
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
