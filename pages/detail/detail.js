// pages/detail/detail.js
Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function(){
    //1.获取首页的页面对象
    //getCurrentPages当前栈的所有页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    //2.调用页面对象的setData
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBack(){
    wx.navigateBack({
      delta: 1
    })
  }
})