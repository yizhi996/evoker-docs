# ek.reLaunch

> <Icon type="success" /> 支持 Promise

关闭所有页面，打开到应用内的某个页面，并非真的重启应用。

### 参数

<Props :data="props" options />

### Example

```ts
ek.reLaunch({ url: 'home' })
```

<script setup>
const props = [
  {
    name: 'url',
    type: 'string',
    default: '',
    required: true,
    desc: '需要跳转的应用内页面路径 (代码包路径)，路径后可以带参数。'
  },
]
</script>
