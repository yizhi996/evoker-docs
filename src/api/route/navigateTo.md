# nz.navigateTo

> 支持 Promise

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabBar 页面。使用 [nz.navigateBack](./navigateBack) 可以返回到原页面。

### 参数

<Props :data="props" options />

### Example

```ts
nz.navigateTo({ url: 'profile?id=1' })
```

<script setup>
import Props from '/@theme/components/Props.vue'

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
