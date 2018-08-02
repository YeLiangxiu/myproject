module.exports = [
  {
    alias: '/',
    path: '/pages/users/index',
    name: 'Users',
    meta: {
      nav: true
    },
    config: {
      enablePullDownRefresh: true,
      navigationBarTitleText: '结果'
    }
  },
  {
    path: '/pages/index/index',
    name: 'Index',
    meta: {
      nav: false
    },
    config: {
      navigationBarTitleText: '我的'
    }
  },
  {
    path: '/pages/logs/index',
    name: 'Logs',
    meta: {
      nav: true
    },
    config: {
      navigationBarTitleText: '日志',
      enablePullDownRefresh: true
    }
  }
]