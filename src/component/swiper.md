# swiper

轮播容器，其中只可放置 [swiper-item](./swiper-item) 组件。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <swiper class="w-full h-40 text-white" autoplay indicator-dots indicator-active-color="white">
    <swiper-item v-for="item of items" :key="item" :style="{ 'background-color': item }">
      {{ item }}</swiper-item>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ['blue', 'red', 'yellow', 'green']
</script>
```

<script setup>
const props = [
    {
        name: "indicator-dots", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"是否显示面板指示器"
    },
    {
        name: "indicator-color", 
        type:"color",
        default: "rgba(0, 0, 0, .3)",
        required: false, 
        desc:"指示器颜色"
    },
    {
        name: "indicator-active-color", 
        type:"color",
        default: "#000",
        required: false, 
        desc:"当前选中的指示器颜色"
    },
     {
        name: "autoplay", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否自动切换"
    },
    {
        name: "current", 
        type:"number",
        default: "0",
        required: false, 
        desc:"当前所在滑块的 index"
    },
    {
        name: "interval", 
        type:"number",
        default: "5000",
        required: false, 
        desc:"自动切换时间间隔"
    },
    {
        name: "duration", 
        type:"number",
        default: "500",
        required: false, 
        desc:"滑动动画时长"
    },
    {
        name: "circular", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否采用衔接滑动"
    },
      {
        name: "vertical", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"滑动方向是否为纵向"
    },
    {
        name: "previous-margin", 
        type:"string",
        default: `"0px"`,
        required: false, 
        desc:"前边距，可用于露出前一项的一小部分，接受 px"
    },
    {
        name: "next-margin", 
        type:"string",
        default: `"0px"`,
        required: false, 
        desc:"后边距，可用于露出后一项的一小部分，接受 px"
    },
     {
        name: "display-multiple-items", 
        type:"number",
        default: `1`,
        required: false, 
        desc:"同时显示的滑块数量"
    },
     {
        name: "easing-function", 
        type:"string",
        default: "default",
        required: false, 
        desc:"指定 swiper 切换缓动动画类型",
        values: [
            { value: "default", desc: "默认"},
            { value: "linear", desc: "线性"},
            { value: "easeInCubic", desc: "缓入"},
            { value: "easeOutCubic", desc: "缓出"},
            { value: "easeInOutCubic", desc: "缓入缓出"}
        ]
    },
]

const events = [
    {
        name: "change", 
        desc:"每一页轮播结束后触发", 
        event:"{ current: number, source: 'autoplay' | 'touch' | '' }"
    },
]
</script>
