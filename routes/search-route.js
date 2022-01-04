// import express
const express = require('express')
// import controller
const postData = require('../controllers/search-controller')

// create router
const router = express.Router()

router.post('/city', postData)

module.exports = router
