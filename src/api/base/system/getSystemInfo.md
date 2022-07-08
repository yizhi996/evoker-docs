# ek.getSystemInfo

> <Icon type="success" /> 支持 Promise

获取系统信息。

是由 [ek.getAppBaseInfo](./getAppBaseInfo), [ek.getDeviceInfo](./getDeviceInfo), [ek.getSystemSetting](./getSystemSetting), [ek.getWindowInfo](./getWindowInfo), [ek.getAppAuthorizeSetting](./getAppAuthorizeSetting) 合并返回，所以可以直接请求相关需要的 API，提高性能。

### 参数

<Props options />

### 返回

<Results :data="results" />

### SafeArea 说明

<Results :data="safeArea" />

### AuthorizedStatus 说明

```ts
type AuthorizedStatus = 'authorized' | 'denied' | 'not determined'
```

- authorized: 已经授权
- denied: 拒绝授权
- not determined: 还未同意是否授权

### Example

```ts
const res = await ek.getSystemInfo()
console.log(res)
```

<script setup>
const results = [
  {
    name: 'SDKVersion',
    type: 'string',
    desc: '客户端JS基础库版本',
    version: '0.1.0',
  },
  {
    name: 'nativeSDKVersion',
    type: 'string',
    desc: '原生客户端基础库版本',
    version: '0.1.0',
  },
  {
    name: 'version',
    type: 'string',
    desc: '宿主版本号',
    version: '0.1.0',
  },
  {
    name: 'language',
    type: 'string',
    desc: '系统语言',
    version: '0.1.0',
  },
  {
    name: 'theme',
    type: 'string',
    desc: '系统当前主题',
    version: '0.1.0',
    types: [
      { type: "light", desc:"浅色主题" },
      { type: "dark", desc:"深色主题" },
    ]
  },
  {
    name: 'brand',
    type: 'string',
    desc: '设备品牌',
    version: '0.1.0',
  },
  {
    name: 'model',
    type: 'string',
    desc: '设备型号',
    version: '0.1.0',
  },
  {
    name: 'system',
    type: 'string',
    desc: '操作系统及版本',
    version: '0.1.0',
  },
  {
    name: 'platform',
    type: 'string',
    desc: '客户端平台',
    version: '0.1.0',
  },
  {
    name: 'bluetoothEnabled',
    type: 'boolean',
    desc: '蓝牙的系统开关',
    version: '0.1.0',
  },
  {
    name: 'locationEnabled',
    type: 'boolean',
    desc: '地理位置的系统开关',
    version: '0.1.0',
  },
  {
    name: 'wifiEnabled',
    type: 'boolean',
    desc: 'Wi-Fi 的系统开关',
    version: '0.1.0',
  },
  {
    name: 'deviceOrientation',
    type: 'string',
    desc: '设备方向',
    version: '0.1.0',
    values: [
      { value: "portrait", desc: "竖屏" },
      { value: "landscape", desc: "横屏" },
    ]
  },
  {
    name: 'pixelRatio',
    type: 'number',
    desc: '设备像素比',
    version: '0.1.0',
  },
  {
    name: 'screenWidth',
    type: 'number',
    desc: '屏幕宽度，单位px',
    version: '0.1.0',
  },
  {
    name: 'screenHeight',
    type: 'number',
    desc: '屏幕高度，单位px',
    version: '0.1.0',
  },
  {
    name: 'windowWidth',
    type: 'number',
    desc: '可使用窗口宽度，单位px',
    version: '0.1.0',
  },
  {
    name: 'windowHeight',
    type: 'number',
    desc: '可使用窗口高度，单位px',
    version: '0.1.0',
  },
  {
    name: 'statusBarHeight',
    type: 'number',
    desc: '状态栏的高度，单位px',
    version: '0.1.0',
  },
  {
    name: 'safeArea',
    type: 'SafeArea',
    desc: '安全区域',
    version: '0.1.0',
  },
  {
    name: 'screenTop',
    type: 'number',
    desc: '窗口上边缘的 y 值，单位px',
    version: '0.1.0',
  },
  {
    name: 'albumAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主使用相册的开关',
    version: '0.1.0',
  },
  {
    name: 'bluetoothAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主使用蓝牙的开关',
    version: '0.1.0',
  },
  {
    name: 'cameraAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主使用摄像头的开关',
    version: '0.1.0',
  },
  {
    name: 'locationAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主使用定位的开关',
    version: '0.1.0',
  },
  {
    name: 'locationReducedAccuracy',
    type: 'boolean',
    desc: '是否是模糊定位',
    version: '0.1.0',
  },
  {
    name: 'microphoneAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主使用麦克风的开关',
    version: '0.1.0',
  },
  {
    name: 'notificationAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主通知的开关',
    version: '0.1.0',
  },
  {
    name: 'notificationAlertAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主通知带有提醒的开关',
    version: '0.1.0',
  },
  {
    name: 'notificationBadgeAuthorized',
    type: 'AuthorizeStatus',
    desc: '允许宿主通知带有标记的开关',
    version: '0.1.0',
  },
  {
    name: 'notificationSoundAuthorized',
    type: 'AuthorizedStatus',
    desc: '允许宿主通知带有声音的开关',
    version: '0.1.0',
  },
]

const safeArea = [
  {
    name: 'left',
    type: 'number',
    desc: '安全区域左上角横坐标',
    version: '0.1.0',
  },
  {
    name: 'right',
    type: 'number',
    desc: '安全区域右下角横坐标',
    version: '0.1.0',
  },
  {
    name: 'top',
    type: 'number',
    desc: '安全区域左上角纵坐标',
    version: '0.1.0',
  },
  {
    name: 'bottom',
    type: 'number',
    desc: '安全区域右下角纵坐标',
    version: '0.1.0',
  },
  {
    name: 'width',
    type: 'number',
    desc: '安全区域的宽度',
    version: '0.1.0',
  },
  {
    name: 'height',
    type: 'number',
    desc: '安全区域的高度',
    version: '0.1.0',
  },
]
</script>
