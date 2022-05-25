# nz.setNavigationBarTitle

> <Icon type="success" /> 支持 Promise

设置当前页面的标题。

### 参数

<Props :data="props" options />

### Example

```ts
nz.setNavigationBarTitle({ title: 'NZoth' })
```

<script setup>
const props = [
    {
        name: "title", 
        type: "string",
        default: "",
        required: true, 
        desc:"页面标题", 
        version: "0.1.0"
    },
]
</script>
