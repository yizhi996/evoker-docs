# ek.removeTabBarBadge

> <Icon type="success" /> 支持 Promise

移除 Tab Bar 的右上角文本。

### 参数

<Props :data="props" options />

### Example

```ts
ek.removeTabBarBadge({
  index: 0
})
```

<script setup>
const props = [
    {
        name: "index", 
        type: "number",
        default: "",
        required: true, 
        desc: "Tab Bar 的哪一项，从左边算起第一个为 0"
    },
]
</script>
