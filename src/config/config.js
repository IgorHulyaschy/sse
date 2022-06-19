const convict = require('convict')
require('dotenv').config()

convict.addFormat(require('convict-format-with-validator').ipaddress)

const config = convict({
  server: {
    url: {
      env: 'BASE_URL',
      default: 'localhost:3000',
      format: String,
    },
    port: { env: 'PORT', default: 3000, format: Number },
  },
  sse: {
    clientRetryInterval: {
      env: 'CLIENT_RETRY_INTERVAL',
      default: 1000,
      format: Number,
    },
    maxStreamDuration: {
      env: 'MAX_STREAM_DURATION',
      default: 50000,
      format: Number,
    },
  },
})

config.validate({ allowed: 'strict' })
module.exports = config
