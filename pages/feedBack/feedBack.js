// pages/feedBack/feedBack.js

var feedBacks=
        [
            {
            content: "客户：王先生\n年龄：40\n职业：公务员\n使用牡蛎前硬度较差，充血不足，房事快感不强烈。\n       使用牡蛎后：硬度有了极大的提升，龟头恢复圆润饱满的状态",
            weChatRecords:[
              "../../resources/images/wang1.jpg",
              "../../resources/images/wang2.jpg"
            ]
            },
            {
            content: "客户：翟先生\n年龄：42\n职业：业务员\n使用牡蛎前：硬度较差，无法快速勃起，有严重肾虚腰痛情况，房事时间较短，妻子有轻微性冷淡。\n使用牡蛎后：硬度提升明显，可快速勃起，肾虚症状消失，房事时间提升至十多分钟左右，性冷淡情况也没再出现。",
            weChatRecords:[
              "../../resources/images/zhuo1.jpg",
              "../../resources/images/zhuo2.jpg",
                 "../../resources/images/zhuo3.jpg",
            ]

            },
           {
            content: "客户：党先生\n年龄：19\n职业：大学生\n使用牡蛎前：手淫导致的重度早泄，人极度自卑，缺乏自信。\n 使用牡蛎后：早泄情况有明显的改善，人也恢复自信。",
            weChatRecords:[
              "../../resources/images/dang1.jpg",
              "../../resources/images/dang2.jpg"
            ]

           },

           {
            content: "客户：黄先生\n年龄：33\n职业：司机\n啪啪胶使用前：对自己的长度粗度不太满意，想有更大的提升。\n  使用啪啪胶后：从原先的16厘米增加到了现在的17.3，而且还呈现增加的趋势！",
            weChatRecords:[
              "../../resources/images/huang1.jpg",
              "../../resources/images/huang2.jpg"
            ]
          },
          {
            content:"客户：俞先生\n年龄：26\n职业：白领\n啪啪胶使用前：时间偏短，长期手淫导致阴茎发育不良，尺寸偏小。\n使用啪啪胶后：时间增至30分钟，尺寸明显增加，性生活质量大大提升！" ,
            weChatRecords:[
             "../../resources/images/yu1.jpg",
             "../../resources/images/yu2.jpg"
            ]
          }
         
        ]
Page({

  /**
   * 页面的初始数据
   */
  data: {
        
        items: {
            'li': []
        },
        feedBack:feedBacks[0]
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

/**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function() {
      var arr = [{
          'cur': true,
          'name': '反馈1（王先生【牡蛎】）'
      },{
          'name': '反馈2（翟先生 【牡蛎】）'
      },{
          'name': '反馈3（党先生【牡蛎】)'
      },{
          'name': '反馈4（黄先生【啪啪胶】）'
      },{
          'name': '反馈5 （俞先生【啪啪胶】）'
      }];
      this.setData({
          items: {
              'li': arr
          }
      });
  },

 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
 changeSlide: function(e){
      //切换样式
      var _index = e.target.dataset.index,
          _arr = this.data.items.li;
      _arr.forEach(function(v, i){
          delete v.cur;
      });
      _arr[_index].cur = true;
      this.setData({
          items: {
              'li': _arr
          }
      });

     if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      }

      //切换数据
      this.setData({
         feedBack:feedBacks[_index]
      })

  }
})

   