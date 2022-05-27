# nz.setTabBarBadge

> <Icon type="success" /> 支持 Promise

设置 Tab Bar 的右上角文本。

### 参数

<Props :data="props" options />

### Example

```ts
nz.setTabBarBadge({
  index: 0,
  text: '1'
})
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
    {
        name: "text", 
        type: "string",
        default: "",
        required: true, 
        desc: "显示的文本", 
        version: "0.1.0"
    },
]
</script>
