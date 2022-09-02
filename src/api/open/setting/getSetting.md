# ek.getSetting

> <Icon type="success" /> 支持 Promise

获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { authSetting } = await ek.getSetting()
console.log(authSetting)
```

<script setup>
const results = [
  {
    name: 'authSetting',
    type: '[x: string]: boolean',
    desc: `<a target='_blank' href='/api/open/auth/scope.html'>用户授权</a>`
  },
]
</script>
