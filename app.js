//app.js
import 'wx-promise-pro'

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.pro.setStorageSync('logs', logs)

    // 登录
    wx.pro.login().then(res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      // console.log(res)
    })

    // 获取用户信息
    wx.pro.getSetting().then(res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.pro
          .getUserInfo()
          .then(res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            // 流程处理完毕
          })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
