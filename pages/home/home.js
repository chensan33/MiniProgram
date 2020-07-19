Page({
  data: {
    name: 'cjm',
    age: 18,
    students: [
      {id: 110,name: 'chenyi',age: 16},
      {id: 111,name: 'chener',age: 17},
      {id: 112,name: 'chensan',age: 18},
      {id: 113,name: 'chensi',age: 19}
    ],
    counter: 0
  },
  handBtnClick1(){
    //1.错误做法,界面是不会刷新的
    // this.data.counter += 1;
    // console.log(this.data.counter);
    
    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handBtnClick2(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})