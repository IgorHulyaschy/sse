const moment = require('moment')

class Controller {
  process(req, res) {
    let c = 0
    setInterval(() => {
      c++
      if (c <= req.params.count) {
        res.sse.send({
          event: 'ping',
          data: JSON.stringify({
            count: c,
            updatedAt: moment(new Date()).format('YYYY.MM.DD HH:mm:ss'),
          }),
        })
      } else {
        res.sse.close()
      }
    }, 2000)
  }
}

module.exports = new Controller()
