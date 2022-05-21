# nz.switchTab

> <Icon type="success" /> 支持 Promise

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

### 参数

<Props :data="props" options />

### Example

```ts
nz.switchTab({ url: 'home' })
```

<script setup>
const props = [
  {
    name: 'url',
    type: 'string',
    default: '',
    required: true,
    desc: '需要跳转的 tabBar 页面的路径 (代码包路径)（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。',
    version: '0.1.0',
  },
]
</script>
