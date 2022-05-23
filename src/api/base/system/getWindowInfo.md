# nz.getWindowInfo

获取窗口信息。

### 返回

<Results :data="results" />

### SafeArea 说明

<Results :data="safeArea" />

### Example

```ts
const info = nz.getWindowInfo()
```

<script setup>
const results = [
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
