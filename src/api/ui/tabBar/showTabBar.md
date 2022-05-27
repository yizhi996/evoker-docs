# nz.showTabBar

> <Icon type="success" /> 支持 Promise

显示 Tab Bar，在非 Tab Bar 页面调用无效。

### 参数

<Props :data="props" options />

### Example

```ts
nz.showTabBar()
```

<script setup>
const props = [
    {
        name: "animation", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "是否需要动画效果", 
        version: "0.1.0"
    },
]
</script>
