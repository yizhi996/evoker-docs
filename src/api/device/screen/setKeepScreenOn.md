# nz.setKeepScreen

> <Icon type="success" /> 支持 Promise

设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。

### 参数

<Props :data="props" options />

### Example

```ts
nz.setKeepScreen({ keepScreenOn: true })
```

<script setup>
const props = [
    {
        name: "keepScreenOn", 
        type: "boolean",
        default: "",
        required: true, 
        desc: "是否保持屏幕常亮", 
        version: "0.1.0",
    },
]
</script>
