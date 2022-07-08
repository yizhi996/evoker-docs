# ek.setScreenBrightness

> <Icon type="success" /> 支持 Promise

设置屏幕亮度。

### 参数

<Props :data="props" options />

### Example

```ts
ek.setScreenBrightness({ value: 0.6 })
```

<script setup>
const props = [
    {
        name: "value", 
        type: "number",
        default: "",
        required: true, 
        desc: "屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮", 
        version: "0.1.0",
    },
]
</script>
