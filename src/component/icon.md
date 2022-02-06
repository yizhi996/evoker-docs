<script setup>
import Props from '/@theme/components/Props.vue'

const props = [
    {
        name: "type", 
        type: "string",
        default: "",
        required: true, 
        desc:`icon的类型，有效值：success, success-no-circle, info, warn, waiting, cancel, download, search, clear, circle, info-circle`, 
        version: "0.1.0"
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
        type:"string",
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
<icon type="success" :size="93" color="#000" />
```
