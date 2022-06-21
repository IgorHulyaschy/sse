const getPrices = require('../../src/coingecko/CoinGecko')

beforeAll(async () => {
  jest.setTimeout(10000)
})
afterAll((done) => {
  done()
})
describe('CoinGecko', () => {
  test('should return prices', async () => {
    const response = await getPrices()
    expect(response).toHaveLength(4)
    expect(response[0]).toHaveProperty('price')
    expect(response[1]).toHaveProperty('price')
    expect(response[2]).toHaveProperty('price')
    expect(response[3]).toHaveProperty('price')
    expect(response[0]).toEqual(expect.objectContaining({ ticker: 'DOGE', toTicker: 'usd' }))
    expect(response[1]).toEqual(expect.objectContaining({ ticker: 'BTC', toTicker: 'usd' }))
    expect(response[2]).toEqual(expect.objectContaining({ ticker: 'ETH', toTicker: 'usd' }))
    expect(response[3]).toEqual(expect.objectContaining({ ticker: 'BNB', toTicker: 'usd' }))
  })
})
