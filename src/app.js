const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const router = require('./router/router')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyParser.text())
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true,
  })
)

app.use(
  bodyParser.json({
    limit: '50mb',
  })
)

app.use('', router)

module.exports = app
