# [Animation](./../Animation).step

表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

默认情况下的参数使用 [ek.createAnimation](../createAnimation) 的 options。

### 参数

<Props :data="props" />

### 返回值

**[Animation](./../Animation)**

### Example

```vue
<template>
  <view :animation="animData">box</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const animData = ref(null)

const anim = ek.createAnimation({ duration: 500 })

onMounted(() => {
  setTimeout(() => {
    animData.value = anim
      .rotate(45)
      .step({ duration: 1000 })
      .export()
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
    {
        name: "transformOrigin", 
        type: "string",
        default: "50% 50% 0",
        required: false, 
        desc: "<a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin'>语法</a>", 
        version: "0.1.0"
    },
]

</script>
