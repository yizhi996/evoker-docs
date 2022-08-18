# slider

滑动选择器。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <slider v-model:value="value1" :step="10"></slider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(50)
</script>
```

<script setup>
const props = [
    {
        name: "value", 
        type:"number",
        default: "0",
        required: false, 
        desc:"当前取值（支持 v-model:value）"
    },
    {
        name: "min", 
        type: "number",
        default: "0",
        required: false, 
        desc:"最小值"
    },
    {
        name: "max", 
        type: "number",
        default: "100",
        required: false, 
        desc:"最大值"
    },
    {
        name: "step", 
        type:"number",
        default: "1",
        required: false, 
        desc:"步长，取值必须大于 0，并且可被(max - min)整除"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用"
    },
    {
        name: "active-color", 
        type:"color",
        default: "#1989fa",
        required: false, 
        desc:"已选择的颜色"
    },
    {
        name: "background-color", 
        type:"color",
        default: "#e5e5e5",
        required: false, 
        desc:"背景条的颜色"
    },
    {
        name: "block-size", 
        type:"number",
        default: "28",
        required: false, 
        desc:"滑块的大小"
    },
    {
        name: "block-color", 
        type:"color",
        default: "#ffffff",
        required: false, 
        desc:"滑块的颜色"
    },
    {
        name: "show-value", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否显示当前 value"
    },
]

const events = [
    {
        name: "change", 
        desc: "完成一次拖动后触发", 
        event:"{ value: number }"
    },
    {
        name: "changing", 
        desc: "拖动过程中触发", 
        event:"{ value: number }"
    },
]
</script>
