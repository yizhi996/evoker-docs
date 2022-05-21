import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  base: '/',
  title: 'NZoth',
  lang: 'zh-Hans',
  description: '一个基于 Vue3 的小程序容器，小程序引擎',

  themeConfig: {
    repo: 'yizhi996/nzoth',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: '指南',
        link: '/guide/introduction',
        activeMatch: '^/guide/'
      },
      {
        text: '组件',
        link: '/component/view',
        activeMatch: '^/component/'
      },
      {
        text: 'API',
        link: '/api/index',
        activeMatch: '^/api/'
      }
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
            { text: 'radio', link: '/component/radio' },
            { text: 'radio-group', link: '/component/radio-group' },
            { text: 'input', link: '/component/input' },
            { text: 'textarea', link: '/component/textarea' },
            { text: 'picker', link: '/component/picker' },
            { text: 'picker-view', link: '/component/picker-view' },
            { text: 'picker-view-column', link: '/component/picker-view-column' },
            { text: 'switch', link: '/component/switch' },
            { text: 'label', link: '/component/label' },
            { text: 'slider', link: '/component/slider' },
            { text: 'form', link: '/component/form' }
          ]
        },
        {
          text: '媒体组件',
          children: [
            { text: 'image', link: '/component/image' },
            { text: 'video', link: '/component/video' },
            { text: 'camera', link: '/component/camera' }
          ]
        }
      ],
      '/api/': [
        {
          text: '路由',
          children: [
            { text: 'nz.navigateTo', link: '/api/route/navigateTo' },
            { text: 'nz.navigateBack', link: '/api/route/navigateBack' },
            { text: 'nz.reLaunch', link: '/api/route/reLaunch' },
            { text: 'nz.redirectTo', link: '/api/route/redirectTo' },
            { text: 'nz.switchTab', link: '/api/route/switchTab' }
          ]
        },
        {
          text: '媒体',
          children: [
            {
              text: '相机',
              children: [
                { text: 'nz.createCameraContext', link: '/api/media/camera/createCameraContext' },
                {
                  text: 'CameraContext',
                  link: '/api/media/camera/CameraContext',
                  children: [
                    {
                      text: 'CameraContext.takePhoto',
                      link: '/api/media/camera/CameraContext/takePhoto'
                    },
                    {
                      text: 'CameraContext.zetZoom',
                      link: '/api/media/camera/CameraContext/zetZoom'
                    },
                    {
                      text: 'CameraContext.startRecord',
                      link: '/api/media/camera/CameraContext/startRecord'
                    },
                    {
                      text: 'CameraContext.stopRecord',
                      link: '/api/media/camera/CameraContext/stopRecord'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
})
