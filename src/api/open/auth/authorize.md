# nz.authorize

> <Icon type="success" /> 支持 Promise

提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权]()

### 参数

<Props :data="props" options />

### Example

```ts
// 先判断一下之前是否已经授权过
const { authSetting } = await nz.getSetting()

const scope = 'scope.record'
if (!authSetting[scope]) {
  await nz.authorize({ scope })
  // 调用相关的接口
}
```

<script setup>
const props = [
   {
    name: 'scope',
    type: 'string',
    default: '',
    required: true,
    desc: '需要获取权限的 scope，详见 scope 列表',
    version: '0.1.0',
  },
]
</script>
