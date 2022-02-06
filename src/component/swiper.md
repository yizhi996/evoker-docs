<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "autoplay", 
        type: "number | string",
        default: "",
        required: false, 
        desc:"自动轮播间隔，单位为 ms", 
        version: "0.1.0"
    },
    {
        name: "duration", 
        type:"number | string",
        default: "500",
        required: false, 
        desc:"动画时长，单位为 ms", 
        version: "0.1.0"
    },
    {
        name: "initial-swipe", 
        type:"number | string",
        default: "0",
        required: false, 
        desc:"初始位置索引值", 
        version: "0.1.0"
    },
    {
        name: "loop", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否开启循环播放", 
        version: "0.1.0"
    },
    {
        name: "show-indictors", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否显示指示器", 
        version: "0.1.0"
    },
    {
        name: "touchable", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否可以通过手势滑动", 
        version: "0.1.0"
    },
    {
        name: "indicator-color", 
        type:"string",
        default: "#1989fa",
        required: false, 
        desc:"指示器颜色", 
        version: "0.1.0"
    },
    
]

const events = [
    {
        name: "change", 
        desc:"每一页轮播结束后触发", 
        event:"当前页的索引",
        version: "0.1.0"
    },
]
</script>

# swiper

轮播容器，其中只可放置[swiper-item](./swiper-item)组件。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <div class="mt-2.5 mx-2.5">
    <swiper
      class="w-full h-40 text-white"
      :autoplay="3000"
      indicator-color="white"
    >
      <swiper-item class="bg-blue-400">1</swiper-item>
      <swiper-item class="bg-red-400">2</swiper-item>
      <swiper-item class="bg-yellow-400">3</swiper-item>
      <swiper-item class="bg-green-400">4</swiper-item>
    </swiper>
  </div>
</template>
```
