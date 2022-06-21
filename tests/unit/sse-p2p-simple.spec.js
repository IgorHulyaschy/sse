const sse = require('../../src/middlewares/sse-p2p-simple')

describe('middleware', () => {
  test('should return done', async () => {
    const req = {
      socket: {
        setNoDelay: (bb) => {},
      },
    }
    const res = {
      writeHead: (sts, headers) => ({
        sts,
        headers,
      }),
      write: (str) => str,
      sse: {
        close: () => {},
        send: ({ ev, data }) => ({ event: ev, data }),
      },
    }
    const next = () => ({ done: 'done' })
    const response = sse(req, res, next)
    expect(response).toHaveProperty('done')
    expect(response.done).toEqual('done')
  })
})
