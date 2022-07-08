import { defineConfig } from '@evoker/vitepress'

export default defineConfig({
  srcDir: 'src',
  base: '/',
  title: 'NZoth',
  lang: 'zh-Hans',
  description: '一个基于 Vue3 的小程序容器，小程序引擎',

  lastUpdated: true,

  themeConfig: {
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-present YiZhi'
    },

    editLink: {
      pattern: 'https://github.com/yizhi996/nzoth-docs/edit/main/src/:path'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/yizhi996/nzoth' }],

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
          items: [
            { text: '简介', link: '/guide/introduction' },
            {
              text: '快速开始',
              link: '/guide/quick-start'
            }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '应用生命周期', link: '/guide/essentials/app-lifecycle' },
            { text: '页面生命周期', link: '/guide/essentials/page-lifecycle' }
          ]
        }
      ],
      '/component/': [
        {
          text: '视图容器',
          items: [
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
          items: [
            { text: 'icon', link: '/component/icon' },
            { text: 'progress', link: '/component/progress' },
            { text: 'text', link: '/component/text' }
          ]
        },
        {
          text: '表单组件',
          items: [
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
          items: [
            { text: 'image', link: '/component/image' },
            { text: 'video', link: '/component/video' },
            { text: 'camera', link: '/component/camera' }
          ]
        }
      ],
      '/api/': [
        {
          text: '基础',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.env', link: '/api/base/env' },
            { text: 'nz.arrayBufferToBase64', link: '/api/base/arrayBufferToBase64' },
            { text: 'nz.base64ToArrayBuffer', link: '/api/base/base64ToArrayBuffer' },
            {
              text: '系统',
              items: [
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
          text: '路由',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.navigateTo', link: '/api/route/navigateTo' },
            { text: 'nz.navigateBack', link: '/api/route/navigateBack' },
            { text: 'nz.reLaunch', link: '/api/route/reLaunch' },
            { text: 'nz.redirectTo', link: '/api/route/redirectTo' },
            { text: 'nz.switchTab', link: '/api/route/switchTab' }
          ]
        },
        {
          text: '跳转',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.navigateToMiniProgram', link: '/api/navigate/navigateToMiniProgram' },
            { text: 'nz.exitMiniProgram', link: '/api/navigate/exitMiniProgram' }
          ]
        },
        {
          text: '界面',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '交互',
              items: [
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
              items: [
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
              items: [
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
              items: [{ text: 'nz.loadFontFace', link: '/api/ui/font/loadFontFace' }]
            },
            {
              text: '下拉刷新',
              items: [
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
              items: [{ text: 'nz.pageScrollTo', link: '/api/ui/scroll/pageScrollTo' }]
            },
            {
              text: '动画',
              items: [
                { text: 'nz.createAnimation', link: '/api/ui/animation/createAnimation' },
                {
                  text: 'Animation',
                  link: '/api/ui/animation/Animation',
                  items: [
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
                    { text: 'Animation.matrix3d', link: '/api/ui/animation/Animation/matrix3d' }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '网络',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '请求',
              items: [
                {
                  text: 'nz.request',
                  link: '/api/network/request/request'
                },
                {
                  text: 'RequestTask',
                  link: '/api/network/request/RequestTask',
                  items: [
                    {
                      text: 'RequestTask.abort',
                      link: '/api/network/request/RequestTask/abort'
                    }
                  ]
                }
              ]
            },
            {
              text: '下载',
              items: [
                {
                  text: 'nz.downloadFile',
                  link: '/api/network/download/downloadFile'
                },
                {
                  text: 'DownloadTask',
                  link: '/api/network/download/DownloadTask',
                  items: [
                    {
                      text: 'DownloadTask.abort',
                      link: '/api/network/download/DownloadTask/abort'
                    },
                    {
                      text: 'DownloadTask.onProgressUpdate',
                      link: '/api/network/download/DownloadTask/onProgressUpdate'
                    },
                    {
                      text: 'DownloadTask.offProgressUpdate',
                      link: '/api/network/download/DownloadTask/offProgressUpdate'
                    }
                  ]
                }
              ]
            },
            {
              text: '上传',
              items: [
                {
                  text: 'nz.uploadFile',
                  link: '/api/network/upload/uploadFile'
                },
                {
                  text: 'UploadTask',
                  link: '/api/network/upload/UploadTask',
                  items: [
                    {
                      text: 'UploadTask.abort',
                      link: '/api/network/upload/UploadTask/abort'
                    },
                    {
                      text: 'UploadTask.onProgressUpdate',
                      link: '/api/network/upload/UploadTask/onProgressUpdate'
                    },
                    {
                      text: 'UploadTask.offProgressUpdate',
                      link: '/api/network/upload/UploadTask/offProgressUpdate'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '数据缓存',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.getStorage', link: '/api/storage/getStorage' },
            { text: 'nz.getStorageSync', link: '/api/storage/getStorageSync' },
            { text: 'nz.setStorage', link: '/api/storage/setStorage' },
            { text: 'nz.setStorageSync', link: '/api/storage/setStorageSync' },
            { text: 'nz.removeStorage', link: '/api/storage/removeStorage' },
            { text: 'nz.removeStorageSync', link: '/api/storage/removeStorageSync' },
            { text: 'nz.clearStorage', link: '/api/storage/clearStorage' },
            { text: 'nz.clearStorageSync', link: '/api/storage/clearStorageSync' },
            { text: 'nz.getStorageInfo', link: '/api/storage/getStorageInfo' },
            { text: 'nz.getStorageInfoSync', link: '/api/storage/getStorageInfoSync' }
          ]
        },
        {
          text: '媒体',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '图片',
              items: [
                {
                  text: 'nz.saveImageToPhotosAlbum',
                  link: '/api/media/image/saveImageToPhotosAlbum'
                },
                {
                  text: 'nz.previewImage',
                  link: '/api/media/image/previewImage'
                },
                {
                  text: 'nz.getImageInfo',
                  link: '/api/media/image/getImageInfo'
                },
                {
                  text: 'nz.compressImage',
                  link: '/api/media/image/compressImage'
                },
                {
                  text: 'nz.chooseImage',
                  link: '/api/media/image/chooseImage'
                }
              ]
            },
            {
              text: '视频',
              items: [
                {
                  text: 'nz.saveVideoToPhotosAlbum',
                  link: '/api/media/video/saveVideoToPhotosAlbum'
                },
                {
                  text: 'nz.getVideoInfo',
                  link: '/api/media/video/getVideoInfo'
                },
                {
                  text: 'nz.compressVideo',
                  link: '/api/media/video/compressVideo'
                },
                {
                  text: 'nz.chooseVideo',
                  link: '/api/media/video/chooseVideo'
                }
              ]
            },
            {
              text: '音频',
              items: [
                {
                  text: 'nz.createInnerAudioContext',
                  link: '/api/media/audio/createInnerAudioContext'
                },
                {
                  text: 'InnerAudioContext',
                  link: '/api/media/audio/InnerAudioContext',
                  items: [
                    { text: 'play', link: '/api/media/audio/InnerAudioContext/play' },
                    { text: 'pause', link: '/api/media/audio/InnerAudioContext/pause' },
                    { text: 'stop', link: '/api/media/audio/InnerAudioContext/stop' },
                    { text: 'seek', link: '/api/media/audio/InnerAudioContext/seek' },
                    { text: 'destroy', link: '/api/media/audio/InnerAudioContext/destroy' },
                    { text: 'onCanplay', link: '/api/media/audio/InnerAudioContext/onCanplay' },
                    { text: 'offCanplay', link: '/api/media/audio/InnerAudioContext/offCanplay' },
                    { text: 'onPlay', link: '/api/media/audio/InnerAudioContext/onPlay' },
                    { text: 'offPlay', link: '/api/media/audio/InnerAudioContext/offPlay' },
                    { text: 'onPause', link: '/api/media/audio/InnerAudioContext/onPause' },
                    { text: 'offPause', link: '/api/media/audio/InnerAudioContext/offPause' },
                    { text: 'onStop', link: '/api/media/audio/InnerAudioContext/onStop' },
                    { text: 'offStop', link: '/api/media/audio/InnerAudioContext/offStop' },
                    { text: 'onEnded', link: '/api/media/audio/InnerAudioContext/onEnded' },
                    { text: 'offEnded', link: '/api/media/audio/InnerAudioContext/offEnded' },
                    {
                      text: 'onTimeUpdate',
                      link: '/api/media/audio/InnerAudioContext/onTimeUpdate'
                    },
                    {
                      text: 'offTimeUpdate',
                      link: '/api/media/audio/InnerAudioContext/offTimeUpdate'
                    },
                    { text: 'onError', link: '/api/media/audio/InnerAudioContext/onError' },
                    { text: 'offError', link: '/api/media/audio/InnerAudioContext/offError' },
                    { text: 'onWaiting', link: '/api/media/audio/InnerAudioContext/onWaiting' },
                    { text: 'offWaiting', link: '/api/media/audio/InnerAudioContext/offWaiting' },
                    { text: 'onSeeking', link: '/api/media/audio/InnerAudioContext/onSeeking' },
                    { text: 'offSeeking', link: '/api/media/audio/InnerAudioContext/offSeeking' },
                    { text: 'onSeeked', link: '/api/media/audio/InnerAudioContext/onSeeked' },
                    { text: 'offSeeked', link: '/api/media/audio/InnerAudioContext/offSeeked' }
                  ]
                }
              ]
            },
            {
              text: '录音',
              items: [
                {
                  text: 'nz.getRecorderManager',
                  link: '/api/media/recorder/getRecorderManager'
                },
                {
                  text: 'RecorderManager',
                  link: '/api/media/recorder/RecorderManager',
                  items: [
                    { text: 'start', link: '/api/media/recorder/RecorderManager/start' },
                    { text: 'pause', link: '/api/media/recorder/RecorderManager/pause' },
                    { text: 'resume', link: '/api/media/recorder/RecorderManager/resume' },
                    { text: 'stop', link: '/api/media/recorder/RecorderManager/stop' },
                    { text: 'onStart', link: '/api/media/recorder/RecorderManager/onStart' },
                    { text: 'onResume', link: '/api/media/recorder/RecorderManager/onResume' },
                    { text: 'onPause', link: '/api/media/recorder/RecorderManager/onPause' },
                    { text: 'onStop', link: '/api/media/recorder/RecorderManager/onStop' },
                    { text: 'onError', link: '/api/media/recorder/RecorderManager/onError' },
                    {
                      text: 'onInterruptionBegin',
                      link: '/api/media/recorder/RecorderManager/onInterruptionBegin'
                    },
                    {
                      text: 'onInterruptionEnd',
                      link: '/api/media/recorder/RecorderManager/onInterruptionEnd'
                    }
                  ]
                }
              ]
            },
            {
              text: '相机',
              items: [
                { text: 'nz.createCameraContext', link: '/api/media/camera/createCameraContext' },
                {
                  text: 'CameraContext',
                  link: '/api/media/camera/CameraContext',
                  items: [
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
        },
        {
          text: '位置',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.getLocation', link: '/api/location/getLocation' },
            { text: 'nz.startLocationUpdate', link: '/api/location/startLocationUpdate' },
            { text: 'nz.stopLocationUpdate', link: '/api/location/stopLocationUpdate' },
            { text: 'nz.onLocationChange', link: '/api/location/onLocationChange' },
            { text: 'nz.offLocationChange', link: '/api/location/offLocationChange' },
            { text: 'nz.onLocationChangeError', link: '/api/location/onLocationChangeError' },
            { text: 'nz.offLocationChangeError', link: '/api/location/offLocationChangeError' }
          ]
        },
        {
          text: '开放接口',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '登录',
              items: [
                { text: 'nz.login', link: '/api/open/login/login' },
                { text: 'nz.checkSession', link: '/api/open/login/checkSession' }
              ]
            },
            {
              text: '用户信息',
              items: [
                { text: 'nz.getUserInfo', link: '/api/open/user/getUserInfo' },
                { text: 'nz.getUserProfile', link: '/api/open/user/getUserProfile' }
              ]
            },
            {
              text: '授权',
              items: [{ text: 'nz.authorize', link: '/api/open/authorize' }]
            },
            {
              text: '设置',
              items: [
                { text: 'nz.openSetting', link: '/api/open/setting/openSetting' },
                { text: 'nz.getSetting', link: '/api/open/setting/getSetting' }
              ]
            }
          ]
        },
        {
          text: '设备',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '电量',
              items: [{ text: 'nz.getBatteryInfo', link: '/api/device/battery/getBatteryInfo' }]
            },
            {
              text: '剪切板',
              items: [
                { text: 'nz.getClipboardData', link: '/api/device/clipboard/getClipboardData' },
                { text: 'nz.setClipboardData', link: '/api/device/clipboard/setClipboardData' }
              ]
            },
            {
              text: '网络',
              items: [
                { text: 'nz.getNetworkType', link: '/api/device/network/getNetworkType' },
                { text: 'nz.getLocalIPAddress', link: '/api/device/network/getLocalIPAddress' },
                {
                  text: 'nz.onNetworkStatusChange',
                  link: '/api/device/network/onNetworkStatusChange'
                },
                {
                  text: 'nz.offNetworkStatusChange',
                  link: '/api/device/network/offNetworkStatusChange'
                }
              ]
            },
            {
              text: '加密',
              items: [
                { text: 'nz.getRandomValues', link: '/api/device/crypto/getRandomValues' },
                { text: 'nz.rsa', link: '/api/device/crypto/rsa' }
              ]
            },
            {
              text: '屏幕',
              items: [
                { text: 'nz.getScreenBrightness', link: '/api/device/screen/getScreenBrightness' },
                { text: 'nz.setScreenBrightness', link: '/api/device/screen/setScreenBrightness' },
                { text: 'nz.setKeepScreenOn', link: '/api/device/screen/setKeepScreenOn' },
                { text: 'nz.onUserCaptureScreen', link: '/api/device/screen/onUserCaptureScreen' },
                { text: 'nz.offUserCaptureScreen', link: '/api/device/screen/offUserCaptureScreen' }
              ]
            },
            {
              text: '键盘',
              items: [
                {
                  text: 'nz.onKeyboardHeightChange',
                  link: '/api/device/keyboard/onKeyboardHeightChange'
                },
                {
                  text: 'nz.offKeyboardHeightChange',
                  link: '/api/device/keyboard/offKeyboardHeightChange'
                },
                { text: 'nz.hideKeyboard', link: '/api/device/keyboard/hideKeyboard' }
              ]
            },
            {
              text: '电话',
              items: [{ text: 'nz.makePhoneCall', link: '/api/open/phone/makePhoneCall' }]
            },
            {
              text: '振动',
              items: [
                { text: 'nz.vibrateShort', link: '/api/open/vibrate/vibrateShort' },
                { text: 'nz.vibrateLong', link: '/api/open/vibrate/vibrateLong' }
              ]
            }
          ]
        },
        {
          text: 'HTML',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'nz.createSelectorQuery', link: '/api/HTML/createSelectorQuery' },
            {
              text: 'SelectorQuery',
              link: '/api/HTML/SelectorQuery',
              items: [
                { text: 'SelectorQuery.exec', link: '/api/HTML/SelectorQuery/exec' },
                { text: 'SelectorQuery.in', link: '/api/HTML/SelectorQuery/in' }
              ]
            }
          ]
        }
      ]
    }
  }
})
