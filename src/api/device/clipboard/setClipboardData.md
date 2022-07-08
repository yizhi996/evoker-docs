# nz.setClipboardData

> <Icon type="success" /> 支持 Promise

设置系统剪贴板的内容。

::: tip
调用成功后，会弹出 toast 提示“内容已复制”，持续 1.5 秒。
:::

### 参数

<Props :data="props" options />

### Example

```ts
nz.setClipboardData({ data: 'Hello world' })
```

<script setup>
const props = [
  {
    name: 'data',
    type: 'string',
    default: '',
    required: true,
    desc: '剪贴板的内容',
    version: '0.1.0',
  },
]
</script>
