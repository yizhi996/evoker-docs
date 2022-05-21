<script setup>
const props = [
    {
        name: "direction", 
        type:`'all' | 'vertical' | 'horizontal' | 'none'`,
        default: "none",
        required: false, 
        desc:"movable-view的移动方向", 
        version: "0.1.0"
    },
    {
        name: "x", 
        type:"number | string",
        default: "",
        required: false, 
        desc:"定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画；单位支持px", 
        version: "0.1.0"
    },
    {
        name: "y", 
        type:"number | string",
        default: "",
        required: false, 
        desc:"定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画；单位支持px", 
        version: "0.1.0"
    },
    {
        name: "animation", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否使用动画", 
        version: "0.1.0"
    },
]

const events = [
    {
        name: "change", 
        desc:"拖动过程中触发的事件", 
        event:"{ x: number, y: number }",
        version: "0.1.0"
    },
]
</script>

# movable-view

移动组件。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <movable-area class="w-48 h-48 bg-gray-300">
    <movable-view
      class="bg-blue-400 w-12 h-12"
      v-model:x="position.x"
      v-model:y="position.y"
      >😅</movable-view
    >
  </movable-area>
  <button type="primary" @click="onMove">点击移动到(30px, 30px)</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const position = reactive({ x: 5, y: 5 })

const onMove = () => {
  position.x = 30
  position.y = 30
}
</script>
```
