# ek.showTabBarRedDot

> <Icon type="success" /> 支持 Promise

显示 Tab Bar 某一项的右上角的红点。

### 参数

<Props :data="props" options />

### Example

```ts
ek.showTabBarRedDot({ index: 0 })
```

<script setup>
const props = [
    {
        name: "index", 
        type: "number",
        default: "",
        required: true, 
        desc: "Tab Bar 的哪一项，从左边算起第一个为 0", 
        version: "0.1.0"
    },
]
</script>
