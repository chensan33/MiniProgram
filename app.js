App({
  globalData(){
    token: ''
  },
  onLaunch: function () {
    //1.获取缓存中的token
    const token = wx.getStorageSync('token')
    //2.判断token是否有值
    if(token && token.length !==0){//是否有token，验证token是否过期
      this.check_token(token) //验证token是否过期
    }else{  //没有token，登录操作
      this.login()
    }
  },
  check_token(token){
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res=>{
        //console.log(res)
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  login(){
    console.log('执行了登录操作')
    wx.login({
      //1.获取code
      success: res=>{
        //console.log(res)
        const code = res.code
        //2.将code发送给服务器，并获取token
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          //2.1 取出token
          success: res=>{
            //console.log(res)
            const token = res.data.token
            //2.2 将token保存在globalData中
            this.globalData.token = token
            console.log(this.globalData.token)
            //2.3 进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }
})
