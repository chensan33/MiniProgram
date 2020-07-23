// pages/home/home.js
Page({
  data: {
  },
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      icon: 'loading',
      mask: true
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelColor: '#ff0000',
      //showCancel: false,
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
      mask: true
    }),
    setTimeout(function () {
      //隐藏加载框
      wx.hideLoading()
    }, 2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: '#ff0000',
      success: res=>{
        console.log(res.tapIndex)
      },
      fail: res=>{
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage: function(options){
    return {
      title: '你好啊',
      path: '/pages/home/home',
      // imageUrl: ''
    }
  }
})