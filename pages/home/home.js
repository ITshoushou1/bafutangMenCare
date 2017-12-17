//导入js  
var util = require('../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider: [
      {
        linkUrl: '../../resources/images/slider_1.jpg',
        id: 1,
        picUrl: '../../resources/images/slider_1.jpg'
      },
      {
        linkUrl: '../../resources/images/slider_2.jpg',
        id: 2,
        picUrl: '../../resources/images/slider_2.jpg'
      },
      {
        linkUrl: '../../resources/images/slider_3.jpg',
        id: 3,
        picUrl: '../../resources/images/slider_3.jpg'
      },
      {
        linkUrl: '../../resources/images/slider_4.jpg',
        id: 4,
        picUrl: '../../resources/images/slider_4.jpg'
      }
    ],
    navbar:[
    {text:'品牌介绍',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac.jpg'},
    {text:'客户反馈',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac.jpg'},
    {text:'联系我们',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac.jpg'}
    ],
  
    currentTab: 0,
   
    productList:[],
    csImg:'../../resources/wxCustomerService.png'

  },
         /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this;
    this.setData({
      productList:getApp().globalData.productList
    });
    //网络访问，获取轮播图的图片  
    // util.getRecommend(function (data) {
    //   that.setData({
    //     slider: data.data.slider
    //   })
    // });
    // that.setData(slider)
  },

  //轮播图的切换事件  
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  navbarTap: function (e) {
   
   
    var targetText = e.currentTarget.dataset.text;
     console.log(targetText);
     if(targetText == "品牌介绍"){
        wx.navigateTo({
          url: '/pages/brandInfo/brandInfo',
        })
     }
  },

  swiperImageTap: function (e) {
    console.log("轮播图片点击：")
    console.log(e)

  },
  productItemTap:function(e){
    var id = e.currentTarget.id
    wx.navigateTo({
      url: "/pages/goodsInfo/goodsInfo?index="+id,
    })
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

var pageData = {

}