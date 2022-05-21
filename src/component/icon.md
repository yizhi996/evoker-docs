<script setup>
const icon = (type)=> {
    return `<div class="nz-icon"><i class="nz-icon--${type}" style="width: 23px; height: 23px;" /></div>`
}

const props = [
    {
        name: "type", 
        type: "string",
        default: "",
        required: true, 
        desc:`icon的类型`, 
        version: "0.1.0",
        types: [
            {type: "success", desc: icon("success") },
            {type: "success-no-circle", desc: icon("success-no-circle") },
            {type: "info", desc: icon("info") },
            {type: "warn", desc: icon("warn") },
            {type: "waiting", desc: icon("waiting") },
            {type: "cancel", desc: icon("cancel") },
            {type: "download", desc: icon("download") },
            {type: "search", desc: icon("search") },
            {type: "clear", desc: icon("clear") },
            {type: "circle", desc: icon("circle") },
            {type: "info-circle", desc: icon("info-circle") },
        ]
    },
    {
        name: "size", 
        type:"number | string",
        default: "23",
        required: false, 
        desc:"icon的大小，单位默认为px", 
        version: "0.1.0"
    },
    {
        name: "color", 
        type:"color",
        default: "",
        required: false, 
        desc:"icon的颜色", 
        version: "0.1.0"
    },
]

</script>

# icon

图标组件

### Props

<Props :data="props" />

### Example

```vue
<template>
  <icon type="success" :size="93" />
</template>
```
