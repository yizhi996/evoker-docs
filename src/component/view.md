<script setup>
import Props from '/@theme/components/Props.vue'

const props = [
    {
        name: "hover-class", 
        type:"string",
        default: "none",
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
        default: "50",
        required: false, 
        desc:"按住后多久出现点击态，单位毫秒", 
        version: "0.1.0"
    },
    {
        name: "hover-stay-time", 
        type:"number",
        default: "400",
        required: false, 
        desc:"手指松开后点击态保留时间，单位毫秒", 
        version: "0.1.0"
    },
]

</script>

# view

对应 HTML 中的`div`。

**强烈建议**：如果不需要使用 hover 功能可以直接使用`div`编写 Vue 模板，来获得更好的渲染性能（会直接创建 dom ，而不是使用 Vue 的`createVNode`来创建）。

### Props

<Props :data="props" />

### Example

```vue
<template>
  <view class="box" hover-class="box-hover" :hover-stay-time="100">Box</view>
</template>

<style scoped>
.box {
  color: red;
  width: 100px;
  height: 100px;
}

.box-hover {
  color: blue;
}
</style>
```
