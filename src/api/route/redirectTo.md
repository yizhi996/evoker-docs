# ek.redirectTo

> <Icon type="success" /> 支持 Promise

关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabBar 页面。

### 参数

<Props :data="props" options />

### Example

```ts
ek.redirectTo({ url: 'profile?id=1' })
```

<script setup>
const props = [
  {
    name: 'url',
    type: 'string',
    default: '',
    required: true,
    desc: '需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数',
    version: '0.1.0',
  },
]
</script>
