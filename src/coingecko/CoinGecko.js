const fetch = require('node-fetch')

const tickers = [
  { id: 'binance-peg-dogecoin', symbol: 'DOGE' },
  { id: 'bitcoin', symbol: 'BTC' },
  { id: 'ethereum', symbol: 'ETH' },
  { id: 'binancecoin', symbol: 'BNB' },
]

async function getPriceFromCoinGecko(ticker) {
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

module.exports = async () => {
  const prices = []
  for await (const ticker of tickers) {
    const quote = await getPriceFromCoinGecko(ticker.id)
    let change = 0
    if (ticker.symbol !== 'DOGE') change = Math.random()
    prices.push({
      ticker: ticker.symbol,
      toTicker: 'usd',
      price: String((quote.market_data.current_price['usd'] - change).toFixed(3)),
    })
  }
  return prices
}
