App({
  //生命周期函数
  //1.小程序初始化完成时执行的函数
  onLaunch: function(){
    console.log('初始化小程序成功: onLaunch')
    // wx.request({
    //   url: 'url',
    // })
    // //异步调用
    // wx.getUserInfo({
    //   //数据拿到之后，再进行回调
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // },3000)
  },
  //小程序界面显示完成时执行的函数
  onShow: function(){
    console.log('界面显示完成: onShow')
  },
  //界面被隐藏时执行的函数
  onHide:function(){
    console.log('界面被隐藏了: onHide')
  },
  //发生错误时执行的函数
  onError: function(){
    console.log('发生了错误: onError')
  }
})