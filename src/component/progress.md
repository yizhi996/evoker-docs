<script setup>
const props = [
    {
        name: "percentage", 
        type: "number | string",
        default: "0",
        required: false, 
        desc:"进度百分比"
    },
    {
        name: "stroke-width", 
        type:"number | string",
        default: "4px",
        required: false, 
        desc:"icon的大小，单位默认为px"
    },
    {
        name: "color", 
        type:"color",
        default: "#1989fa",
        required: false, 
        desc:"进度条颜色"
    },
    {
        name: "track-color", 
        type:"string",
        default: "#e5e5e5",
        required: false, 
        desc:"轨道颜色"
    },
    {
        name: "pivot-text", 
        type:"string",
        default: "",
        required: false, 
        desc:"进度文字内容"
    },
    {
        name: "pivot-color", 
        type:"string",
        default: "",
        required: false, 
        desc:"同进度条颜色"
    },
    {
        name: "text-color", 
        type:"string",
        default: "white",
        required: false, 
        desc:"进度文字颜色"
    },
    {
        name: "show-pivot", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否显示进度文字"
    },
]
</script>

# progress
进度条组件

### Props

<Props :data="props" />

### Example

```vue
<progress :percentage="30" />
```
