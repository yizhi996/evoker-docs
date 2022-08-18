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
        values: [
            { value: "success", desc: icon("success") },
            { value: "success-no-circle", desc: icon("success-no-circle") },
            { value: "info", desc: icon("info") },
            { value: "warn", desc: icon("warn") },
            { value: "waiting", desc: icon("waiting") },
            { value: "cancel", desc: icon("cancel") },
            { value: "download", desc: icon("download") },
            { value: "search", desc: icon("search") },
            { value: "clear", desc: icon("clear") },
            { value: "circle", desc: icon("circle") },
            { value: "info-circle", desc: icon("info-circle") },
        ]
    },
    {
        name: "size", 
        type:"number | string",
        default: "23",
        required: false, 
        desc:"icon的大小，单位默认为px"
    },
    {
        name: "color", 
        type:"color",
        default: "",
        required: false, 
        desc:"icon的颜色"
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
