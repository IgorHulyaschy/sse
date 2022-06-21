/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const express = require('express')
const request = require('supertest')
const router = require('../../src/router/router')

const server = express()
server.use('', router)
beforeAll(async () => {
  jest.setTimeout(10000)
})
afterAll((done) => {
  done()
})
describe('server', function () {
  test('should return the prices', async function () {
    await request(server).get('/prices/1').expect(200)
  })
  test('should render html', function () {
    request(server).get('/').expect(200)
  })
})
