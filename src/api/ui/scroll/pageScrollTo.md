# ek.pageScrollTo

> <Icon type="success" /> 支持 Promise

将页面滚动到目标位置，支持选择器和滚动距离两种方式定位。

### 参数

<Props :data="props" options />

### Example

```ts
ek.pageScrollTo({ scrollTop: 100 })
// or
ek.pageScrollTo({ selector: '.user-profile' })
```

<script setup>
const props = [
    {
        name: "scrollTop", 
        type: "number",
        default: "",
        required: false, 
        desc: "滚动到页面的目标位置，单位 px", 
        version: "0.1.0"
    },
    {
        name: "duration", 
        type: "number",
        default: "300",
        required: false, 
        desc: "滚动动画的时长，单位 ms", 
        version: "0.1.0"
    },
    {
        name: "selector", 
        type: "string",
        default: "",
        required: false, 
        desc: "选择器", 
        version: "0.1.0"
    },
    {
        name: "offsetTop", 
        type: "number",
        default: "",
        required: false, 
        desc: "偏移距离，需要和 selector 参数搭配使用，可以滚动到 selector 加偏移距离的位置，单位 px", 
        version: "0.1.0"
    },
]
</script>
