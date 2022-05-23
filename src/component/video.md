# video

视频组件。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <video
    src="https://exmaple.com/test.mp4"
    title="text.mp4"
    vslide-gesture
    :show-center-play-btn="false"
    :autoplay="false"
    muted
    show-mute-btn
    loop
  ></video>
</template>
```

<script setup>
const props = [
  {
    name: 'src',
    type: 'string',
    default: '',
    required: true,
    desc: '要播放视频的资源地址，支持网络路径、本地临时路径',
    version: '0.1.0',
  },
  {
    name: 'duration',
    type: 'number',
    default: '',
    required: false,
    desc: '指定视频时长（只是显示视频总时长，不会改变原有视频的进度）',
    version: '0.1.0',
  },
  {
    name: 'controls',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否显示默认播放控件',
    version: '0.1.0',
  },
  {
    name: 'autoplay',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否自动播放',
    version: '0.1.0',
  },
  {
    name: 'loop',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否循环播放',
    version: '0.1.0',
  },
  {
    name: 'muted',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否静音播放',
    version: '0.1.0',
  },
  {
    name: 'initial-time',
    type: 'number',
    default: '0',
    required: false,
    desc: '指定视频初始播放位置',
    version: '0.1.0',
  },
  {
    name: 'direction',
    type: 'number',
    default: '',
    required: false,
    desc: '设置全屏时视频的方向，不指定则根据宽高比自动判断',
    version: '0.1.0',
    values: [
      { value: 0, desc: '正常竖向' },
      { value: 90, desc: '屏幕逆时针90度' },
      { value: -90, desc: '屏幕顺时针90度' },
    ],
  },
  {
    name: 'show-progress',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否显示控制栏的进度条',
    version: '0.1.0',
  },
  {
    name: 'show-fullscreen-btn',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否显示控制栏的全屏按钮',
    version: '0.1.0',
  },
  {
    name: 'show-play-btn',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否显示控制栏的播放按钮',
    version: '0.1.0',
  },
  {
    name: 'show-mute-btn',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否显示控制栏的静音按钮',
    version: '0.1.0',
  },
  {
    name: 'show-center-play-btn',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否显示视频中间的播放按钮',
    version: '0.1.0',
  },
  {
    name: 'show-screen-lock-button',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作',
    version: '0.1.0',
  },
  {
    name: 'object-fit',
    type: 'string',
    default: 'contain',
    required: false,
    desc: '当视频大小与 video 容器大小不一致时，视频的表现形式',
    version: '0.1.0',
    values: [
      { value: 'contain', desc: '包含' },
      { value: 'fill', desc: '填充' },
      { value: 'cover', desc: '覆盖' },
    ],
  },
  {
    name: 'poster',
    type: 'string',
    default: '',
    required: false,
    desc: '视频封面的图片网络资源地址',
    version: '0.1.0',
  },
  {
    name: 'title',
    type: 'string',
    default: '',
    required: false,
    desc: '视频的标题，全屏时在顶部展示',
    version: '0.1.0',
  },
  {
    name: 'play-btn-position',
    type: 'string',
    default: 'bottom',
    required: false,
    desc: '播放按钮的位置',
    version: '0.1.0',
    values: [
      { value: 'bottom', desc: '控制栏' },
      { value: 'center', desc: '视频中间' }
    ],
  },
   {
    name: 'enable-progress-gesture',
    type: 'boolean',
    default: 'true',
    required: false,
    desc: '是否开启控制进度的手势',
    version: '0.1.0',
  },
  {
    name: 'enable-play-gesture',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '是否开启播放手势，即双击切换播放/暂停',
    version: '0.1.0',
  },
   {
    name: 'vslide-gesture',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '在非全屏模式下，是否开启亮度与音量调节手势',
    version: '0.1.0',
  },
  {
    name: 'vslide-gesture-in-fullscreen',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '在全屏模式下，是否开启亮度与音量调节手势',
    version: '0.1.0',
  },
]

const events = [
    {
        name: "play", 
        desc: "开始/继续播放时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "pause", 
        desc: "暂停播放时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "ended", 
        desc: "播放到末尾时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "timeupdate", 
        desc: "播放进度变化时触发，触发频率 250ms 一次", 
        event:"{ currentTime: number, duration: number }",
        version: "0.1.0"
    },
    {
        name: "fullscreenchange", 
        desc: "视频进入和退出全屏时触发", 
        event:"{fullScreen: boolean, direction: 'vertical' | 'horizontal' }",
        version: "0.1.0"
    },
    {
        name: "waiting", 
        desc: "视频出现缓冲时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "error", 
        desc: "视频播放出错时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "progress", 
        desc: "加载进度变化时触发，只支持一段加载，单位为百分比", 
        event:"{ buffered: number }",
        version: "0.1.0"
    },
    {
        name: "loadedmetadata", 
        desc: "视频元数据加载完成时触发", 
        event:"{ width: number, height: number, duration: number }",
        version: "0.1.0"
    },
    {
        name: "controlstoggle", 
        desc: "切换 controls 显示隐藏时触发", 
        event:"{ show: boolean }",
        version: "0.1.0"
    },
    {
        name: "seekcomplete", 
        desc: "seek 完成时触发，单位为秒", 
        event:"{ position: number }",
        version: "0.1.0"
    },
]

</script>
