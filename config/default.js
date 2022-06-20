require('dotenv').config()

module.exports = {
  server: {
    url: process.env.BASE_URL || 'localhost:3000',
    port: Number(process.env.PORT) || 3000,
  },
  sse: {
    clientRetryInterval: Number(process.env.CLIENT_RETRY_INTERVAL) || 1000,
    maxStreamDuration: Number(process.env.MAX_STREAM_DURATION) || 50000,
  },
}
