// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemclick(event){
        //1.取出index
        const index = event.currentTarget.dataset.index
        //2.设置currentIndex
        this.setData({
          currentIndex : index
        })
        //3.传递数据出去
        this.triggerEvent('itemclick',{index,title: this.properties.titles[index]},{})
    }
  }
})
