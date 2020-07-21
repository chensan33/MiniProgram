// pages/home/home.js
Page({
  data: {
    titles: ['衣服','裤子','鞋子']
  },
  handleBindClick(){
    console.log('按钮发生了点击')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTouchTap')
  },
  handleLongpress(){
    console.log('handleLongpress')
  },

  handleEventClick(event){
    console.log(event)
  },
  handleEventEnd(event){
    console.log(event)
  },
  handleInner(event){
    console.log(event)
  },
  handleOuter(event){
    console.log(event)
  },
  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const index = dataset.index
    const item = dataset.item
    console.log(item,index)
  },
  //---------------事件冒泡和事件捕获--------------------------
  captrueView1(){
    console.log('captrueView1')
  },
  bindView1(){
    console.log('bindView1')
  },
  captrueView2(){
    console.log('captrueView2')
  },
  bindView2(){
    console.log('bindView2')
  },
  captrueView3(){
    console.log('captrueView3')
  },
  bindView3(){
    console.log('bindView3')
  }
})