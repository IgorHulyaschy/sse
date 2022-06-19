const fetch = require('node-fetch')

class CoinGeckoService {
  static tickers = [
    { id: 'binance-peg-dogecoin', symbol: 'DOGE' },
    { id: 'bitcoin', symbol: 'BTC' },
    { id: 'ethereum', symbol: 'ETH' },
    { id: 'binancecoin', symbol: 'BNB' },
  ]

  async getPriceFromCoinGecko(ticker) {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${ticker}?localization=false?community_data=false?developer_data=false`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    )
    return res.json()
  }

  async getPrice() {
    const prices = []
    for await (const ticker of CoinGeckoService.tickers) {
      const quote = await this.getPriceFromCoinGecko(ticker.id)
      prices.push({
        ticker: ticker.symbol,
        toTicker: 'usd',
        price: String(quote.market_data.currect_price['usd'] - Math.random()),
      })
    }
    return prices
  }
}

module.exports = new CoinGeckoService()
