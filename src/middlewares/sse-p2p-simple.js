const config = require('config')

const options = {
  clientRetryInterval: config.get('sse.clientRetryInterval'),
  maxStreamDuration: config.get('sse.maxStreamDuration'),
}

const sendMessage = (res, message) => {
  if (res.writableEnded) return
  res.write(
    `${message.event ? `event: ${message.event}\n` : ''}` +
      `data: ${message.data || ''}\n\n` +
      `id: ${res.sse.id}\n`
  )
}

const terminate = (res) => {
  res.end()
}

module.exports = (req, res, next) => {
  req.socket.setNoDelay(true)
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  })

  res.write(`retry:  ${options.clientRetryInterval}\n\n`)

  res.sse = {
    close: () => {
      terminate(res)
    },

    send: ({ event, data }) => {
      sendMessage(res, { event, data })
    },
  }

  setTimeout(() => {
    terminate(res)
  }, options.maxStreamDuration)

  next()
}
