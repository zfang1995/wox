module.exports = {
  title: 'Wox.js',
  description: '全方位的企业应用级前端业务开发 MVC 架构',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    repo: 'woxjs/wox',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: '简介', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '脚手架', link: '/cli/' },
      { text: '核心插件', link: '/plugins/' },
      { text: 'GitHub', link: 'https://github.com/woxjs' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'mvc'
      ],
      '/api/': [
        ''
      ],
      '/cli/': [
        ''
      ],
      '/plugins/': [
        ''
      ]
    }
  }
}