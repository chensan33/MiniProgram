// pages/wxml/wxml.js
Page({
  data: {
    message: '哈哈哈',
    firstname: 'chen',
    lastname: 'jiemin',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies: ['火影忍者','妖精的尾巴','名侦探柯南'],
    nums: [
      [110,112,113],
      [12,15,18],
      [1,5,6]
    ],
    letters: ['a','b','c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  bindColor(){
    this.setData({
      isActive: ! this.data.isActive
    })
  },
  handleShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleAdd(){
    this.setData({
      score: this.data.score + 10
    })
  }
})