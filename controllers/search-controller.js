// import createPath
const createPath = require('../helpers/create-path')
// import getData function
const getData = require('../requests/weather-request')

// post controller
const postData = (req, res) => {
  const { city } = req.body
  getData(city)
}

module.exports = { postData }
