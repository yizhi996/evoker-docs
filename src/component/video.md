<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

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
    types: [
      { type: 0, desc: '正常竖向' },
      { type: 90, desc: '屏幕逆时针90度' },
      { type: -90, desc: '屏幕顺时针90度' },
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
    name: 'object-fit',
    type: 'string',
    default: 'contain',
    required: false,
    desc: '当视频大小与 video 容器大小不一致时，视频的表现形式',
    version: '0.1.0',
    types: [
      { type: 'contain', desc: '包含' },
      { type: 'fill', desc: '填充' },
      { type: 'cover', desc: '覆盖' },
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
    types: [
      { type: 'bottom', desc: '控制栏' },
      { type: 'center', desc: '视频中间' }
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

</script>

# video

视频组件。

### Props

<Props :data="props" />

### Example

```vue
<template>
  <image src="../test.png" /> <image src="https://example.com/test.png" />
</template>
```
