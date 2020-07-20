// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    //系统API，选择相册图片
   wx.chooseImage({
     success: res=>{
       const path = res.tempFilePaths
       this.setData({
         imagePath: path
       })
     }
   })
  }
})