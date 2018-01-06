//导入js  

var api=require('../../utils/api.js');
var config=require('../../utils/config.js');


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
    {text:'品牌介绍',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac1.jpg'},
    {text:'客户反馈',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac2.jpg'},
    {text:'联系我们',onNavBarTap:'navbarTap',background:'../../resources/images/navbar_bac.jpg'}
    ],
    currentTab: 0,
    swiperCurrent:0,
    productList:[],
    csImg:'../../resources/wxCustomerService.png',

    showMyVeseion:{},
    swiper:null,
    img220:config.img220,
    img800:config.img800,
    version:null,
    currentTab:1,
    userInfo: {},
    products:[]
  },
         /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    
    this.setData({
      productList:getApp().globalData.productList,
      showMyVeseion:getApp().globalData.showMyVeseion
    });

    //替换版本控制代码
    if (!this.data.showMyVeseion) {

       console.log("showMyVersion:"+this.data.showMyVeseion)
        this.init();
        this.chooseAll();
        //swiper广告
        this.getSwiper();
        wx.setNavigationBarTitle({
            title: '家政服务预约',
          })
    }
          
    
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
      swiperCurrent:  e.detail.current
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
     } else if(targetText =="客户反馈"){
       wx.navigateTo({
         url: '/pages/feedBack/feedBack',
       })
     }else if (targetText == "联系我们") {
       wx.switchTab({
         url: '/pages/contactUs/contactUs',
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

   onMytap:function(options){
     wx.setClipboardData({
        data: "my---344361015",
        success: function(res) {
          wx.getClipboardData({
            success: function(res) {
              console.log(res.data); // data
              wx.showToast({
                title:'微信号已复制',
                icon:'success',
                duration: 2000
              });
            }
          })
        }
      });
  },

  //index start 


  init:function(){
    var v=new Date().getTime();
    this.setData({
      version:v
    })
  },
  getSwiper:function(){
    var that=this;
    
    api.getSwiperData(config.mid,function(res){ 
      var products=res.data.products;
      var swiper=new Array();
      for(var i=0;i<3;i++){
        swiper.push(products[i].p_icon);
      }
     // console.log("广告返回：==========="+swiper); 
      wx.setStorageSync('swiper', swiper);
      that.setData({
        swiper:swiper
      })
    });
  },
  chooseRecent:function(){
    var that = this;
  },
  //筛选
  chooseItemClick:function(e){
    var ds=e.currentTarget.dataset;
    var clickedTab=ds.tab;
    var currentTab=this.data.currentTab;
    if(currentTab==clickedTab){
      return;
    }
    this.setData({
      currentTab:ds.tab
    })
    var ct=this.data.currentTab;
    if(ct==1){
      this.chooseAll();
    }else if(ct==2){
      this.chooseHot();
    }else if(ct==3){
      this.chooseRecent();
    }else if(ct==4){
      this.chooseMode(1);
    }
  },

  chooseAll:function(){
      var that=this;
      
      api.getProductData(config.mid,function a(res){
        that.setData({
          products:res.data.products
        });
       
      });
      
  },

  chooseHot:function(){
    var that=this;
     api.getHotProductData(config.mid,function(res){
        that.setData({
          products:res.data.products
        });
           })
  },

  chooseRecent:function(){
    var that = this;
    api.getRecentProductData(config.mid, function(res){
      that.setData({
        products: res.data.products
      });
    });
  },

  chooseMode:function(mode){
     var that=this;
     api.getModeProductData(config.mid,mode,function(res){
        that.setData({
          products:res.data.products
        });
     })
  }  //index end 
})
