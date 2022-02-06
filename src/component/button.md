<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "type", 
        type:`'primary' | 'default' | 'success' | 'warning' | 'danger'`,
        default: "default",
        required: false, 
        desc:"类型", 
        version: "0.1.0"
    },
    {
        name: "size", 
        type:`'large' | 'normal' | 'small' | 'mini'`,
        default: "normal",
        required: false, 
        desc:"尺寸", 
        version: "0.1.0"
    },
    {
        name: "color", 
        type:"string",
        default: "",
        required: false, 
        desc:"按钮颜色", 
        version: "0.1.0"
    },
    {
        name: "plain", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否为朴素按钮", 
        version: "0.1.0"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用按钮", 
        version: "0.1.0"
    },
    {
        name: "loading", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否显示为加载状态", 
        version: "0.1.0"
    },
     {
        name: "hover-class", 
        type:"string",
        default: "ll-button--hover",
        required: false, 
        desc:`指定按下去的样式类。当 hover-class="none" 时，没有点击态效果`, 
        version: "0.1.0"
    },
    {
        name: "hover-stop-propagation", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"指定是否阻止本节点的祖先节点出现点击态", 
        version: "0.1.0"
    },
    {
        name: "hover-start-time", 
        type:"number",
        default: "20",
        required: false, 
        desc:"按住后多久出现点击态，单位毫秒", 
        version: "0.1.0"
    },
    {
        name: "hover-stay-time", 
        type:"number",
        default: "70",
        required: false, 
        desc:"手指松开后点击态保留时间，单位毫秒", 
        version: "0.1.0"
    },
]

const events = [
    {
        name: "click", 
        desc:"点击按钮，且按钮状态不为加载或禁用时触发", 
        event:"",
        version: "0.1.0"
    },
]
</script>

# button

按钮。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <button type="primary" @click="onClick">Click</button>
</template>

<script setup lang="ts">
const onClick = () => {
  console.log('click')
}
</script>
```
