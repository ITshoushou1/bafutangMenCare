Page({
  data: {
    goodsInfo: {}
  },
  onLoad: function (options) {
    var index = options.index
    this.setData({
      goodsInfo: getApp().globalData.productList[index]
    });
  }
});