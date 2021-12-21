// import createPath
const createPath = require('../helpers/create-path')
// import getData function
const getData = require('../requests/weather-request')

// post controller
const postData = async (req, res) => {
  const { city } = req.body
  const data = await getData(city)

  res.render(createPath(index), { data })
}

module.exports = { postData }
