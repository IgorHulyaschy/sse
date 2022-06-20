const config = require('config')
const app = require('./app.js')

const port = config.get('server.port')
app.listen(port, console.log(`server starts at port ${port}`))
