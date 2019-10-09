'use strict'
const { wxRequest: http } = require('../utils/wxRequest.js')

const APIURL = 'https://getman.cn/'

// GET: { query: params }    POST: { query: params, method: 'POST' }
const test = (params) => http({ query: params }, APIURL + 'echo')

module.exports = {
  test
}