// miniprogram/pages/authorization/authorization.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.setStorageSync('userInfo', e.detail.userInfo)
      wx.navigateBack()
    } else {
      //用户按了拒绝按钮
      wx.showToast({
        title: '请授权之后再进入！',
        icon: 'none',
      })
    }
  },
  gohome: () => {
    wx.switchTab({
      url: '../home/home',
    })
  }
})