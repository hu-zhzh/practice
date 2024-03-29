//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'test-hu',
        // env: 'release-hu',
        traceUser: true,
      })
    }

  },

  // /**
  //  * 当小程序启动，或从后台进入前台显示，会触发 onShow
  //  */
  // onShow: function(options) {
  //   // console.log(options)
  // },

  // /**
  //  * 当小程序从前台进入后台，会触发 onHide
  //  */
  // onHide: function() {

  // },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log(msg)
  },

  globalData: {
    hasLogin: false,
    openid: null
  },
  
  // 通过云函数获取用户 openid，支持回调或 Promise
  getUserOpenIdViaCloud() {
    return wx.cloud.callFunction({
      name: 'wxContext',
      data: {}
    }).then(res => {
      this.globalData.openid = res.result.openid
      return res.result.openid
    })
  }
})