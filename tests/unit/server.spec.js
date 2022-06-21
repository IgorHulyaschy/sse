const fetch = require('node-fetch')
const { app, start } = require('../../src/app')

describe('server', () => {
  test('start server', async () => {
    const server = await start(app)
    server.listen(3000)
    const reponse = await fetch('http://localhost:3000/prices/1')
    expect(reponse.status).toBe(200)
  })
})
