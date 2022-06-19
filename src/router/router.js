const express = require('express')

const SSE = require('../middlewares/sse-p2p-simple')
const Controller = require('../controller/controller')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('SSE server')
})
router.get('/ping/:count', SSE, Controller.process)

module.exports = router
