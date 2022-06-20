const express = require('express')
const path = require('path')

const SSE = require('../middlewares/sse-p2p-simple')
const Controller = require('../controller/controller')

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/templates/Main.html`))
})
router.get('/prices/:count', SSE, Controller.process)

module.exports = router
