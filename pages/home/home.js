// pages/home/home.js
Page({
  data: {
    title: '哈哈哈'
  },
  handleTap(){
    wx.navigateTo({
      url: '/pages/detail/detail?title="你好啊"'
    })
  }
})