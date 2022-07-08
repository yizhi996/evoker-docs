# ek.navigateBack

> <Icon type="success" /> 支持 Promise

关闭当前页面，返回上一页面或多级页面。

### 参数

<Props :data="props" options />

### Example

```ts
ek.navigateBack()
```

<script setup>
const props = [
  {
    name: 'delta',
    type: 'number',
    default: '1',
    required: false,
    desc: '返回的页面数，如果 delta 大于现有页面数，则返回到首页',
    version: '0.1.0',
  },
]
</script>
