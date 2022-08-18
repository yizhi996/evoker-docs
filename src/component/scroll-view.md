<script setup>
const props = [
    {
        name: "scroll-x", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"允许横向滚动"
    },
    {
        name: "scroll-y", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"允许纵向滚动"
    },
    {
        name: "upper-threshold", 
        type:"number | string",
        default: "50",
        required: false, 
        desc:"距顶部/左边多远时，触发 scrolltoupper 事件"
    },
    {
        name: "lower-threshold", 
        type:"number | string",
        default: "50",
        required: false, 
        desc:"距底部/右边多远时，触发 scrolltolower 事件"
    },
    {
        name: "scroll-left", 
        type:"number | string",
        default: "",
        required: false, 
        desc:"设置横向滚动位置"
    },
    {
        name: "scroll-top", 
        type:"number | string",
        default: "",
        required: false, 
        desc:"设置纵向滚动位置"
    },
    {
        name: "scroll-into-view", 
        type:"string",
        default: "",
        required: false, 
        desc:"值应为某子元素id，在可滚动方向滚动到该元素"
    },
    {
        name: "scroll-with-animation", 
        type:"boolean",
        default: "",
        required: false, 
        desc:"在设置滚动位置时使用动画过渡"
    },
]

const events = [
    {
        name: "scrolltoupper", 
        desc:"滚动到顶部/左边时触发", 
        event:"{ direction: 'left' | 'top' }"
    },
    {
        name: "scrolltolower", 
        desc:"滚动到底部/右边时触发", 
        event:"{ direction: 'right' | 'bottom' }"
    },
    {
        name: "scroll", 
        desc:"滚动时触发", 
        event:"{\n  scrollLeft: number,\n  scrollTop: number,\n  scrollHeight: number,\n  scrollWidth: number,\n  deltaX: number,\n  deltaY: number\n}"
    },
]
</script>

# scroll-view

可滚动的视图区域。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
   <scroll-view scroll-y class="w-full h-36" @scroll="onScroll">
      <div class="w-full h-36 bg-green-500"></div>
      <div class="w-full h-36 bg-blue-500"></div>
      <div class="w-full h-36 bg-gray-300"></div>
    </scroll-view>
</template>
```
