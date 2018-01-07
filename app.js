//app.js
var util = require('utils/util.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
     var now = new Date();
     var now = util.formatTime(now);
    console.log(now);
    //版本控制
     if (now < this.globalData.versionDate) {
        this.globalData.showMyVeseion=false;
     }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //showMyVersion 设置日期之前不显示我的版本
  globalData: {
    userInfo: null,
    versionDate:"2018/01/10",
    showMyVeseion:true,
    productList: [
    {
      productPicUrl: '../../resources/images/duliyc.jpg',
      productDesc:'牡蛎蛹虫草（销量第一)',
      goodsImgUrl:'http://www.bafutang.cn/upfiles/201712/05/ae6dcc95baf165cf5.jpg',
      name: "八府堂牡蛎蛹虫草\n（口服）",
      productFunction:"八府堂牡蛎蛹虫草可以完全调理身体的脾，肝，肾。补肾固精，滋阴补阳，提高人体免疫力，增加房事硬度，房事时间，房事次数，消除日常以及房事后的疲惫感，增加勃起频率，给您一颗年轻有力的肾脏！",
      characteristic:"",
      containsImg:"../../resources/images/muli_contains.jpg",
      contains:
      [
        {
          name:"牡蛎",
          desc:" 1.提高性功能\n牡蛎体内含有大量制造精子所不可缺少的精氨酸、与微量元素亚铅。精氨酸是制造精子的主要成分，亚铅促进荷尔蒙的分泌。食用牡蛎可以提高性功能。性功能下降、阳痿、前列腺肿大、性器官发育不全等男性疾病，在很多情况下都是因为亚铅不足而引起的。\n2.提高免疫力，缓解疲劳\n牡蛎被称作‘海里的牛奶’，富含十分优良的蛋白质，肝糖元、维生素与矿物质、含有十八种以上的氨基酸。食用牡蛎后，在人体内合成谷胱甘肽，除去体内的活性酸素，提高免疫力，抑制衰老。\n3.促进新陈代谢\n牡蛎中含有的氨基酸，亚铅等矿物质和维生素，会使血液的循环得到改善，女性的大敌，冷血症与低血压也会得到改善。"
        },
         {
          name:"蛹虫草",
          desc:"功效：治肾虚，阳萎遗精，腰膝酸痛，病后虚弱，起扶正固本作用，能提高肝脏解毒能力，起护肝作用，提高身体抗病毒和抗辐射能力。 \n虫草入肺肾二经，既能补肺阴，又能补肾阳，主治肾虚，阳萎遗精，腰膝酸痛，病后虚弱，久咳虚弱，劳咳痰血，自汗盗汗等，是唯一的一种能同时平衡、调节阴阳的中药。 \n八府堂精选云南野生蛹虫草，有效含量高于人工种植蛹虫草，常食用可补充性能量、全面补充体能、脑能和微循环能，抗疲劳，促进新陈代谢，对改善男性阳痿、早泄、遗精、遗尿、不育等有奇效。补足男人的精、气、神，是名副其实的能量补充剂。此外，对女性遗尿、空冷不孕也有良好作用。 " 
        },
         
         {
          name:"桑椹",
          desc:" 补血滋阴生津止渴，具有补肝益肾、生津润肠、乌发明目，桑葚具有免疫促进作用，对脾脏有增重作用，对溶血性反应有增强作用，可防止人体动脉硬化、骨骼关节硬化，促进新陈代谢。" },
         {
          name:"枸杞子",
          desc:" 养肝；滋肾；润肺。肝肾亏虚；头晕目眩；目视不清；腰膝酸软；阳痿遗精；虚劳咳嗽；消渴引饮。补肾保肝抗疲劳，强身壮阳、提高男性的性功能。提高机体免疫功能，增强机体适应调节能力。抗疲劳。增强人体的造血功能。提高机体的适应性。"
         }
      ]     
        
    },
    { 
      productPicUrl: '../../resources/images/duliyc2.jpg',
      productDesc: '啪啪胶',
      goodsImgUrl: 'http://www.bafutang.cn/upfiles/201703/28/a1e522192f660f03d.jpg',
      name: "八府堂啪啪胶\n（外用）",
      productFunction:"八府堂啪啪胶是目前唯一一款，首次将诺贝尔医学奖成果“内啡肽”运用到产品上的高端私处养护产品，集永久增粗增大延时为一体，独家采用药灸双向生物技术，修复受损海绵体，透过皮层，刺激内酚酞的生成，促进性激素分泌，从而引起阴茎的二次发育。",
      characteristic: "1.激活内啡肽内啡肽也被称为“快感荷尔蒙”，“年轻荷尔蒙”能引起更强的快感，促进生殖健康，调节内分泌，加上超强的延时功效，也仅八府堂拥有此项技术。\n2.水性凝胶：产品物体形态的革新，相对于液体而言，凝胶更易保存，不易挥发，能最大程度的发挥效用，无色素无沉淀，不含任何有害物质。\n  3.超临界CO2流体萃取技术：更有效的进行萃取与分离，保留药物本身的精华，将基质与萃取物（人参，蛇床子，肉桂，肉苁蓉，檀香，玛咖）有效分离，提取，和纯化，剔除掉无效成分。",
      containsImg:"../../resources/images/papa_contains.jpg",
      contains:
      [
        {
          name:"玛咖",
          desc:"玛咖有抗疲劳，补充体力，改善睡眠，抗更年期，活跃生育，增强记忆等功效。　   "
        },
        {
          name:"蛇床子",
          desc:"温肾壮阳，燥湿，祛风，杀虫。用于阳痿，，寒湿带下，湿痹腰痛；外治外阴湿疹"
        },
        {
          name:"肉桂",
          desc:"补元阳，暖脾胃，除积冷，通血脉。治命门火衰，肢冷脉微，亡阳虚脱，腹痛泄泻，寒疝奔豚，腰膝冷痛，经闭癥瘕，阴疽，流注，及虚阳浮越，上热下寒"
        },
        {
          name:"肉苁蓉",
          desc:"补肾阳，益精血，润肠通便，用于：阳痿，不孕，腰膝酸软，筋骨无力，肠燥便秘。"
        },
        {
          name:"檀香",
          desc:"行气温中，开胃止痛。用于寒凝气滞，胸痛，腹痛，胃痛食少；冠心病，心绞痛"
        }

      ]
    }
  ]
  }
})