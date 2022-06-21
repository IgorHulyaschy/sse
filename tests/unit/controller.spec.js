const controller = require('../../src/controller/controller')
const getPrices = require('../../src/coingecko/CoinGecko')

beforeAll(async () => {
  jest.setTimeout(10000)
})
afterAll((done) => {
  done()
})
const req = { params: { count: 1 } }
const res = {
  sse: {
    send: ({ event, data }) => {
      clearInterval()
      return { event, data }
    },
    close: () => 'closed',
  },
}
describe('controller', () => {
  test('procces', async () => {
    await controller.process(req, res)
  })
})
