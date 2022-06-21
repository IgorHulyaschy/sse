const config = require('config')
const { start, app } = require('./app.js')

const port = config.get('server.port')
async function listen() {
  const server = await start(app)
  return server.listen(port, console.log(`server starts at port ${port}`))
}
listen()
