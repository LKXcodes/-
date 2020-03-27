Page({
  data:{
    WeeklyMovieList:[
    {
      name:"泰坦尼克号",
      comment:"失去的才是永恒的。",
      imagePath:"/Images/ttnkh.jpg",
      isHighlyRecommended:false,
        title:"%E6%B3%B0%E5%9D%A6%E5%B0%BC%E5%85%8B%E5%8F%B7",
    },
    {
      name:"这个杀手不太冷",
      comment:"小萝莉与怪蜀黍纯真灿烂的爱情故事。",
      imagePath:"/Images/zgssbtl.jpg",
      isHighlyRecommended:false,
      title:"%E8%BF%99%E4%B8%AA%E6%9D%80%E6%89%8B%E4%B8%8D%E5%A4%AA%E5%86%B7"
    },
    {
      name:"教父",
      comment:"最精彩的剧本，最真实的黑帮电影。",
      imagePath:"/Images/jf.jpg",
      isHighlyRecommended:true,
      title: "%E6%95%99%E7%88%B6"
    },
    ],
    count:0,
    score:61,
  },
  // onLoad的生命周期回调函数
  onLoad:function(options){
    this.setData({
      currentIndex:this.data.WeeklyMovieList.length - 1
    })
  },
  f0:function(event){
    this.setData({
      currentIndex: this.data.WeeklyMovieList.length - 1
    })
  },
  f1:function(event){
    // var movieId = event.currentTarget.dataset.movieId
    // console.log(movieId);

    var movieTitle = event.currentTarget.dataset.movieTitle
    console.log(movieTitle);

    // 导航跳转逻辑
    wx:wx.navigateTo({
      // url: '/pages/detail/detail?id='+movieId,
      url: '/pages/detail/detail?title=' + movieTitle,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})