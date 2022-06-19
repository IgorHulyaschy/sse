const app = require('./app.js')
const config = require('./config/config')

const port = config.get('server.port')
app.listen(port, console.log(`server starts at port ${port}`))
