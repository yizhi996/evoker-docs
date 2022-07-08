# ek.createAnimation

> <Icon type="success" /> 支持 Promise

### 功能描述

创建一个动画实例 [Animation](./Animation.md)，调用实例的方法来描述动画，最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。

本接口封装的 CSS 动画，如果没有连续执行多个动画的需求，可以直接使用 CSS 动画，性能会更好，也更简单。

### 参数

<Props :data="props" options />

### 返回值

**[Animation](./Animation.md)**

### Example

```vue
<template>
  <view :animation="animationData" style="background:red; height:100px; width:100px">box</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePage } from 'evoker'

const { onShow } = usePage()

const animation = ek.createAnimation({
  duration: 1000,
  timingFunction: 'ease'
})

const animationData = ref(null)

onShow(() => {
  // 旋转同时放大
  animation
    .scale(2, 2)
    .rotate(45)
    .step()
  animationData.value = animation.export()

  setTimeout(() => {
    // 先旋转后放大
    animation.rotate(0).step()
    animation.scale(1, 1).step()
    animationData.value = animation.export()
  }, 1000)
})
</script>
```

<script setup>
const props = [
    {
        name: "duration", 
        type: "number",
        default: "400",
        required: false, 
        desc: "动画持续时间，单位 ms", 
        version: "0.1.0"
    },
    {
        name: "timingFunction", 
        type: "string",
        default: "linear",
        required: false, 
        desc: "动画的效果", 
        version: "0.1.0",
        values: [
            { value: "linear", desc: "线性" },
            { value: "ease", desc: "动画以低速开始，然后加快，在结束前变慢" },
            { value: "ease-in", desc: "缓入" },
            { value: "ease-out", desc: "缓出" },
            { value: "ease-in-out", desc: "缓入缓出" },
            { value: "step-start", desc: "动画第一帧就跳至结束状态直到结束" },
            { value: "step-end", desc: "动画一直保持开始状态，最后一帧跳到结束状态" },
        ]
    },
    {
        name: "delay", 
        type: "number",
        default: "0",
        required: false, 
        desc: "动画延迟时间，单位 ms", 
        version: "0.1.0"
    },
]
</script>
