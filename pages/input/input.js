// pages/input/input.js
Page({
  data: {

  },
  bindInput(event){
    console.log('用户输入内容:',event)
  },
  bindFocus(event){
    console.log('输入框聚焦:',event)
  },
  bindBlur(event){
    console.log('输入框失去焦点:',event)
  }
})