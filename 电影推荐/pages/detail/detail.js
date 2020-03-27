Page({

  data:{

  },

  onLoad:function(options){
    // console.log(options.id)
    console.log(options.title)
    this.setData({
      mid:options.title
    })

    var that = this


    wx.request({
      // url: 'https://api.douban.com/v2/movie/subject/'+options.id,
      // url: 'https://easy-mock.com/mock/5cb181fc31c1f7511b033328/example/test',
      // url: 'https://api.weibo.com/2/search/topics.json',
      //  url: 'http://v.juhe.cn/boxoffice/rank',
      url: 'http://v.juhe.cn/movie/index?key=d78d75a676d3219959436aae0934ddd0&title='+ options.title,



      header:{
        "content-type":"json"
      },

    // 服务器端返回调用后信息的处理（三个回调函数）
      success:function(res){
        console.log(res)

        that.setData({
          movie:res.data
        })
      },
      fail:function(){

      },
      complete:function(){

      }
    })

  }
})