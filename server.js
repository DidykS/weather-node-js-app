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

// MIDDLEWARES
// morgan logger middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// middleware for static files
app.use(express.static(__dirname))

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(createPath('index'))
})

// LISTEN
// start server
app.listen(process.env.PORT || 3000, (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`)
})
