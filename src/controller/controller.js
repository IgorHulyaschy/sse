const moment = require('moment')
const getPrices = require('../coingecko/CoinGecko')

class Controller {
  async process(req, res) {
    let c = 0
    setInterval(async () => {
      c++
      if (c <= req.params.count) {
        res.sse.send({
          event: 'ping',
          data: JSON.stringify({
            count: c,
            updatedAt: moment(new Date()).format('YYYY.MM.DD HH:mm:ss'),
            prices: await getPrices(),
          }),
        })
      } else {
        res.sse.close()
      }
    }, 1000)
  }
}

module.exports = new Controller()
