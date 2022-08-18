# ek.vibrateShort

> <Icon type="success" /> 支持 Promise

使手机发生较短时间的振动。

### 参数

<Props :data="props" options />

### Example

```ts
ek.vibrateShort({ type: 'light' })
```

<script setup>
const props = [
    {
        name: "type", 
        type: "string",
        default: "",
        required: true, 
        desc: "震动强度, 有效值为：heavy、medium、light"
    },
]
</script>
