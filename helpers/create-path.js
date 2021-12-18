// create path function
// imoprt path
const path = require('path')

const createPath = (page) =>
  path.resolve(__dirname, '../html-views', `${page}.html`)

module.exports = createPath
