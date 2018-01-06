var phonenumber ="13405242735";
var weixinhao ="nini8207";
Page({
  data: {
    bacImg:"../../resources/images/welcome.jpg",
   phonenumber:phonenumber,
   weixinhao:weixinhao,
   showMyVeseion:{}
  },
  onLoad: function (options) {
     
     this.setData({
      showMyVeseion:getApp().globalData.showMyVeseion
    });
     //替换版本控制代码
    if (!this.data.showMyVeseion) {

       console.log("showMyVersion:"+this.data.showMyVeseion)
        
        wx.setNavigationBarTitle({
            title: '家政服务预约',
          })
    }
  },
  wexinTap:function(options){
     wx.setClipboardData({
        data: weixinhao,
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
  phoneTap:function(options){
 wx.makePhoneCall({
     phoneNumber: phonenumber//仅为示例，并非真实的电话号码
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
  }

});