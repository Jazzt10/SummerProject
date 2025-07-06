Page({
  data: {
    recommendTrips: [],
    activeTab: 'home' 
  },

  // Navigate to trip detail
  onTripTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id
    });
  },

  // Handle search
  onSearch(e) {
    const keyword = e.detail.value;
    wx.navigateTo({
      url: `/pages/search/search?query=${keyword}`
    });
  },

  // Fetch recommended trips from API on load
  onLoad() {
    const that = this;
    wx.request({
      url: 'https://183.173.200.83:8000/attractions',
      method: 'GET',
      success(res) {
        console.log('Recommended attractions:', res.data);

        const trips = res.data.map((item, index) => ({
          id: item.id,
          title: item.title || '未知标题',
          image: item.image || 'https://via.placeholder.com/320x200',
          days: item.days || 1,
          type: item.type || '未知类型'
        }));

        that.setData({
          recommendTrips: trips
        });
      },
      fail(err) {
        console.error('Failed to fetch attractions:', err);
      }
    });
  }
});