const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name)
console.log(age)
Page({
  handleBtnClick(event){
    console.log(event)
  }
})