// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '',
    todos: [{
      title: '吃饭',
    }, {
      title: '喝水'
    }, {
      title: '游泳'
    }
    ]
  },
  addItem: function (event) {
    this.data.todos.push({
      title: event.detail.value
    })
    this.setData({
      todos: this.data.todos,
      current: ''
    })
    // TODO: set focus
  },
  deleteItem: function (event) {
    // console.log(JSON.stringify(event))
    var index = event.currentTarget.id;
    this.data.todos.splice(index, 1)
    this.setData({
      todos: this.data.todos
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    //获取存储信息
    wx.getStorage({
      key: 'todos',
      success: function (res) {
        if (res.data)
          that.setData({
            todos: res.data
          })
        console.log('Load stored data: ' + JSON.stringify(res.data))
        console.log('todos: ' + JSON.stringify(that.data.todos))
      }
    })
    // wx.getStorageInfo({
    //   success: function (res) {
    //     console.log(res.keys)
    //     console.log('storage size/limit: ' + res.currentSize + '/' + res.limitSize)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    try {
      wx.setStorageSync('todos', this.data.todos)
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})