Page({
  data: {
    posts: [],
    activeTab: 'shequ'
  },

  onLoad() {
    wx.request({
      url: 'http://localhost:8000/posts',
      method: 'GET',
      success: (res) => {
        this.setData({
          posts: res.data
        });
      },
      fail: (err) => {
        console.error('Failed to fetch posts:', err);
      }
    });
  }
});
