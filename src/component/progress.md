<script setup>
import Props from '/@theme/components/Props.vue'

const props = [
    {
        name: "percentage", 
        type: "number | string",
        default: "0",
        required: false, 
        desc:"进度百分比", 
        version: "0.1.0"
    },
    {
        name: "stroke-width", 
        type:"number | string",
        default: "4px",
        required: false, 
        desc:"icon的大小，单位默认为px", 
        version: "0.1.0"
    },
    {
        name: "color", 
        type:"string",
        default: "#1989fa",
        required: false, 
        desc:"进度条颜色", 
        version: "0.1.0"
    },
    {
        name: "track-color", 
        type:"string",
        default: "#e5e5e5",
        required: false, 
        desc:"轨道颜色", 
        version: "0.1.0"
    },
    {
        name: "pivot-text", 
        type:"string",
        default: "",
        required: false, 
        desc:"进度文字内容", 
        version: "0.1.0"
    },
    {
        name: "pivot-color", 
        type:"string",
        default: "",
        required: false, 
        desc:"同进度条颜色", 
        version: "0.1.0"
    },
    {
        name: "text-color", 
        type:"string",
        default: "white",
        required: false, 
        desc:"进度文字颜色", 
        version: "0.1.0"
    },
    {
        name: "show-pivot", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"是否显示进度文字", 
        version: "0.1.0"
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
