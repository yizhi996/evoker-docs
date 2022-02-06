import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',

  title: 'Lilith',
  lang: 'zh-Hans',
  description: '一款基于 Vue3 & Vite 的小程序容器，小程序引擎',

  themeConfig: {
    repo: 'yizhi996/lilith',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: '指南',
        link: '/guide/introduction',
        activeMatch: '^/$|^/guide/'
      },
      {
        text: '组件',
        link: '/component/view',
        activeMatch: '^/$|^/component/'
      },
      { text: 'API', link: '/api', activeMatch: '^/$|^/api/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          children: [
            { text: '简介', link: '/guide/introduction' },
            {
              text: '快速开始',
              link: '/guide/quick-start'
            }
          ]
        },
        {
          text: '基础',
          children: [
            { text: '应用生命周期', link: '/guide/essentials/app-lifecycle' },
            { text: '页面生命周期', link: '/guide/essentials/page-lifecycle' }
          ]
        }
      ],
      '/component/': [
        {
          text: '视图容器',
          children: [
            { text: 'view', link: '/component/view' },
            { text: 'scroll-view', link: '/component/scroll-view' },
            { text: 'movable-area', link: '/component/movable-area' },
            { text: 'movable-view', link: '/component/movable-view' },
            { text: 'swiper', link: '/component/swiper' },
            { text: 'swiper-item', link: '/component/swiper-item' }
          ]
        },
        {
          text: '基础内容',
          children: [
            { text: 'icon', link: '/component/icon' },
            { text: 'progress', link: '/component/progress' },
            { text: 'text', link: '/component/text' }
          ]
        },
        {
          text: '表单组件',
          children: [
            { text: 'button', link: '/component/button' },
            { text: 'checkbox', link: '/component/checkbox' },
            { text: 'checkbox-group', link: '/component/checkbox-group' },
            { text: 'input', link: '/component/input' }
          ]
        }
      ]
    }
  }
})
