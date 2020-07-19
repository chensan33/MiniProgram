App({
  onLaunch: function () {
    
  },
  onShow: function (options) {
    console.log(options)
    switch(options.scene){
      case 1001: 
      break
      case 1005: 
      break
    }
    //1.第一种方法
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  },
  globalData: {
    name: 'cjm',
    age: 18
  }
})
