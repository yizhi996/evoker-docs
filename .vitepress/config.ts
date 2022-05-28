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
          text: '基础',
          children: [
            { text: 'nz.env', link: '/api/base/env' },
            {
              text: '系统',
              children: [
                { text: 'nz.getWindowInfo', link: '/api/base/system/getWindowInfo' },
                { text: 'nz.getSystemSetting', link: '/api/base/system/getSystemSetting' },
                { text: 'nz.getDeviceInfo', link: '/api/base/system/getDeviceInfo' },
                { text: 'nz.getAppBaseInfo', link: '/api/base/system/getAppBaseInfo' },
                {
                  text: 'nz.getAppAuthorizeSetting',
                  link: '/api/base/system/getAppAuthorizeSetting'
                },
                { text: 'nz.getSystemInfo', link: '/api/base/system/getSystemInfo' },
                { text: 'nz.getSystemInfoAsync', link: '/api/base/system/getSystemInfoAsync' },
                { text: 'nz.getSystemInfoSync', link: '/api/base/system/getSystemInfoSync' }
              ]
            }
          ]
        },
        {
          text: '跳转',
          children: [
            { text: 'nz.navigateToMiniProgram', link: '/api/navigate/navigateToMiniProgram' },
            { text: 'nz.exitMiniProgram', link: '/api/navigate/exitMiniProgram' }
          ]
        },
        {
          text: '界面',
          children: [
            {
              text: '交互',
              children: [
                { text: 'nz.showToast', link: '/api/ui/interaction/showToast' },
                { text: 'nz.hideToast', link: '/api/ui/interaction/hideToast' },
                { text: 'nz.showModal', link: '/api/ui/interaction/showModal' },
                { text: 'nz.showLoading', link: '/api/ui/interaction/showLoading' },
                { text: 'nz.hideLoading', link: '/api/ui/interaction/hideLoading' },
                { text: 'nz.showActionSheet', link: '/api/ui/interaction/showActionSheet' }
              ]
            },
            {
              text: '导航栏',
              children: [
                {
                  text: 'nz.showNavigationBarLoading',
                  link: '/api/ui/navigation/showNavigationBarLoading'
                },
                {
                  text: 'nz.hideNavigationBarLoading',
                  link: '/api/ui/navigation/hideNavigationBarLoading'
                },
                {
                  text: 'nz.setNavigationBarTitle',
                  link: '/api/ui/navigation/setNavigationBarTitle'
                },
                {
                  text: 'nz.setNavigationBarColor',
                  link: '/api/ui/navigation/setNavigationBarColor'
                },
                {
                  text: 'nz.hideHomeButton',
                  link: '/api/ui/navigation/hideHomeButton'
                }
              ]
            },
            {
              text: 'Tab Bar',
              children: [
                { text: 'nz.showTabBarRedDot', link: '/api/ui/tabBar/showTabBarRedDot' },
                { text: 'nz.hideTabBarRedDot', link: '/api/ui/tabBar/hideTabBarRedDot' },
                { text: 'nz.showTabBar', link: '/api/ui/tabBar/showTabBar' },
                { text: 'nz.hideTabBar', link: '/api/ui/tabBar/hideTabBar' },
                { text: 'nz.setTabBarStyle', link: '/api/ui/tabBar/setTabBarStyle' },
                { text: 'nz.setTabBarItem', link: '/api/ui/tabBar/setTabBarItem' },
                { text: 'nz.setTabBarBadge', link: '/api/ui/tabBar/setTabBarBadge' },
                { text: 'nz.removeTabBarBadge', link: '/api/ui/tabBar/removeTabBarBadge' }
              ]
            },
            {
              text: '字体',
              children: [{ text: 'nz.loadFontFace', link: '/api/ui/font/loadFontFace' }]
            },
            {
              text: '下拉刷新',
              children: [
                {
                  text: 'nz.startPullDownRefresh',
                  link: '/api/ui/pullDownRefresh/startPullDownRefresh'
                },
                {
                  text: 'nz.stopPullDownRefresh',
                  link: '/api/ui/pullDownRefresh/stopPullDownRefresh'
                }
              ]
            },
            {
              text: '滚动',
              children: [{ text: 'nz.pageScrollTo', link: '/api/ui/scroll/pageScrollTo' }]
            },
            {
              text: '动画',
              children: [
                { text: 'nz.createAnimation', link: '/api/ui/animation/createAnimation' },
                {
                  text: 'Animation',
                  link: '/api/ui/animation/Animation',
                  children: [
                    { text: 'Animation.export', link: '/api/ui/animation/Animation/export' },
                    { text: 'Animation.step', link: '/api/ui/animation/Animation/step' },
                    {
                      text: 'Animation.backgroundColor',
                      link: '/api/ui/animation/Animation/backgroundColor'
                    },
                    { text: 'Animation.top', link: '/api/ui/animation/Animation/top' },
                    { text: 'Animation.bottom', link: '/api/ui/animation/Animation/bottom' },
                    { text: 'Animation.left', link: '/api/ui/animation/Animation/left' },
                    { text: 'Animation.right', link: '/api/ui/animation/Animation/right' },
                    { text: 'Animation.width', link: '/api/ui/animation/Animation/width' },
                    { text: 'Animation.height', link: '/api/ui/animation/Animation/height' },
                    { text: 'Animation.rotate', link: '/api/ui/animation/Animation/rotate' },
                    { text: 'Animation.rotateX', link: '/api/ui/animation/Animation/rotateX' },
                    { text: 'Animation.rotateY', link: '/api/ui/animation/Animation/rotateY' },
                    { text: 'Animation.rotateZ', link: '/api/ui/animation/Animation/rotateZ' },
                    { text: 'Animation.rotate3d', link: '/api/ui/animation/Animation/rotate3d' },
                    { text: 'Animation.scale', link: '/api/ui/animation/Animation/scale' },
                    { text: 'Animation.scaleX', link: '/api/ui/animation/Animation/scaleX' },
                    { text: 'Animation.scaleY', link: '/api/ui/animation/Animation/scaleY' },
                    { text: 'Animation.scaleZ', link: '/api/ui/animation/Animation/scaleZ' },
                    { text: 'Animation.scale3d', link: '/api/ui/animation/Animation/scale3d' },
                    { text: 'Animation.translate', link: '/api/ui/animation/Animation/translate' },
                    {
                      text: 'Animation.translateX',
                      link: '/api/ui/animation/Animation/translateX'
                    },
                    {
                      text: 'Animation.translateY',
                      link: '/api/ui/animation/Animation/translateY'
                    },
                    {
                      text: 'Animation.translateZ',
                      link: '/api/ui/animation/Animation/translateZ'
                    },
                    {
                      text: 'Animation.translate3d',
                      link: '/api/ui/animation/Animation/translate3d'
                    },
                    { text: 'Animation.skew', link: '/api/ui/animation/Animation/skew' },
                    { text: 'Animation.skewX', link: '/api/ui/animation/Animation/skewX' },
                    { text: 'Animation.skewY', link: '/api/ui/animation/Animation/skewY' },
                    { text: 'Animation.matrix', link: '/api/ui/animation/Animation/matrix' },
                    { text: 'Animation.matrix3d', link: '/api/ui/animation/Animation/matrix3d' },
                  ]
                }
              ]
            }
          ]
        },
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
