export default {
  title: 'Felix Idea',
  description: '个人知识库',
  base: '/Felix-idea/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/tech/' },
      { text: '经验总结', link: '/experience/' },
      { text: '想法', link: '/thoughts/' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/' }
        ]
      },
      {
        text: '技术笔记',
        items: [
          { text: '示例', link: '/tech/example' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Felix/Felix-idea' }
    ]
  }
}
