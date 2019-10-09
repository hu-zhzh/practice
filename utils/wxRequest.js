'use strict'
const md5 = require('./md5.js')
var util = require('./util.js')

const API_SECRET_KEY = 'www.leiwangkeji.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = (params = {}, url) => {
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: {
        'content-Type': 'application/json'
      },
      success: resolve,
      fail: reject
    })
  })
}

module.exports.wxRequest = wxRequest