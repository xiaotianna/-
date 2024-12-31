export const sidebar = {
  '/html/': [
    {
      text: 'HTML',
      items: [
        { text: '目录', link: '/html/' },
        { text: '目录1', link: '/html/index2' }
        // ...
      ]
    },
    // {
    //   text: 'html1',
    //   items: [
    //     { text: '目录', link: '/html/index2' }
    //     // ...
    //   ]
    // }
  ],
  '/前端工程化/': [
    {
      text: '前端工程化',
      items: [
        { text: '目录', link: '/前端工程化/' }
      ]
    },
    {
      text: 'babel',
      link: '/前端工程化/babel'
    },
  ],
  '/性能优化/': [
    {
      text: '性能优化',
      items: [
        { text: '目录', link: '/性能优化/' },
        { text: '性能优化概括', link: '/性能优化/性能优化概括' },
        { text: '性能优化指标', link: '/性能优化/性能优化指标' },
        { text: '首屏加载优化', link: '/性能优化/首屏加载优化' },
        { text: '懒加载', link: '/性能优化/懒加载' },
        { text: '虚拟列表', link: '/性能优化/虚拟列表' },
        { text: '打包体积过大', link: '/性能优化/打包体积过大' },
        { text: 'React性能优化', link: '/性能优化/React性能优化' },
        { text: '页面请求接口大规模并发问题', link: '/性能优化/页面请求接口大规模并发问题' },
      ]
    },
  ],
  '/项目/': [
    {
      text: '实习项目',
      items: [
        { text: '移动端上拉加载、下拉刷新实现方案', link: '/项目/实习项目/移动端上拉加载、下拉刷新实现方案' },
      ]
    },
    {
      text: '个人项目',
      items: [
        { text: '低代码项目性能优化', link: '/项目/个人项目/低代码项目性能优化' },
        { text: '开发约定式路由插件', link: '/项目/个人项目/开发约定式路由插件' },
        { text: '低代码物料组件库搭建', link: '/项目/个人项目/低代码物料组件库搭建' },
        { text: '单元测试', link: '/项目/个人项目/单元测试' },
        { text: '第三方包补丁', link: '/项目/个人项目/第三方包补丁' },
      ]
    }
  ],
  '/算法/': [
    {
      text: '算法',
      items: [
        { text: '目录', link: '/算法/' }
        // ...
      ]
    }
  ],
  '/git/': [
    {
      items: [
        { text: 'git常用命令', link: '/git/' },
      ]
    },
    {
      items: [
        { text: 'git提交规范', link: '/git/git提交规范' },
        { text: 'git提交前 husky、lint-staged', link: '/git/git提交前' },
        { text: 'git提交中', link: '/git/git提交中' },
        { text: 'git提交后 commitlint', link: '/git/git提交后' },
      ]
    }
  ],
  '/其他/': [
    {
      text: '其他',
      items: [
        { text: '目录', link: '/其他/' },
        { text: '设计模式', link: '/其他/设计模式' }
      ]
    }
  ]
}
