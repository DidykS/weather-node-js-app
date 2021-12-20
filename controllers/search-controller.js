// import createPath
const createPath = require('../helpers/create-path')

// post controller
const postData = (req, res) => {
  const { city } = req.body
  res.send(city)
}

module.exports = { postData }
