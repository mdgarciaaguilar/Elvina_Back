const mongoose = require('mongoose')

const connectionURL = process.env.URL || require('../config.js').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
