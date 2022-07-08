# ek.getSetting

> <Icon type="success" /> 支持 Promise

调起小程序原生设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { authSetting } = await ek.openSetting()
console.log(authSetting)
```

<script setup>
const results = [
  {
    name: 'authSetting',
    type: '[x: string]: boolean',
    desc: `<a target='_black' href='/api/open/auth/scope.html'>用户授权</a>`,
    version: '0.1.0',
  },
]
</script>
