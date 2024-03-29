# switch

开关选择器。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <switch :checked="true" color="#04BE02" />
</template>
```

<script setup>
const props = [
    {
        name: "checked", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"是否选中（支持 v-model:checked）"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用"
    },
    {
        name: "type", 
        type:"string",
        default: "switch",
        required: false, 
        desc:"样式，有效值：switch, checkbox"
    },
    {
        name: "color", 
        type:"color",
        default: "#1989fa",
        required: false, 
        desc:"switch 选中时的颜色"
    },
]

const events = [
    {
        name: "change", 
        desc: "点击导致 checked 改变时会触发 change 事件", 
        event:"{ value: boolean }"
    },
]
</script>
