const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const store = require('./routes/store')
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors())
app.use(morgan('tiny'))

app.use('/store', store)

// Mount the router to the Express application at the /gift-exchange endpoint.
// app.use('/gift-exchange', giftExchange)

app.get('/', (req, res) => {
  console.log('app.js console.logginggggg')
  res.status(200).send({ "ping": "pong" })
})

module.exports = app;
