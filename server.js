// MODULES
// import express
const express = require('express')
// import dotenv
require('dotenv').config()
// import morgan
const morgan = require('morgan')
// import createPath
const createPath = require('./helpers/create-path')

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
  res.render(createPath('index'))
})

// error route
app.use((req, res) => {
  res.status(400).render(createPath('error'))
})

// LISTEN
// start server
app.listen(process.env.PORT || 3000, (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`)
})
