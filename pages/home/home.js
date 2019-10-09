// pages/home/home.js
// const api = require('../../api/api.js')
var mock = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: mock.lunboArr,
    array2: mock.gridArr,
    array3: mock.rexiaoArr,
    array4: mock.goodsArr,
    isAD: !1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 检测用户信息是否授权
    wx.getSetting({
      success: res => {
        // console.log(res)
        if (!res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url: '../authorization/authorization',
          })
        }
      }
    })

  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function() {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function() {

  // }

  // AD弹窗关闭
  close: function() {
    this.setData({
      isAD: !1
    })
  }
})