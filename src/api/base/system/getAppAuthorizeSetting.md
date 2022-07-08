# ek.getAppAuthorizeSetting

获取宿主 APP 授权设置。

### 返回

<Results :data="results" />

### AuthorizedStatus 说明

```ts
type AuthorizedStatus = 'authorized' | 'denied' | 'not determined'
```

- authorized: 已经授权
- denied: 拒绝授权
- not determined: 还未同意是否授权

### Example

```ts
const setting = ek.getAppAuthorizeSetting()
```

<script setup>
const results = [
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
</script>
