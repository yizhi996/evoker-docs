# ek.login

> <Icon type="success" /> 支持 Promise

统一的登录接口，按照[微信](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)设计，需要在 Native 自行实现，也可以不使用本接口，直接在 JS 端自行实现。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.login()
console.log(res)
```

<script setup>
const results = [
  {
    name: 'code',
    type: 'string',
    desc: "用户登录凭证，在开发者服务器后台使用 code 换取需要的信息",
    version: '0.1.0',
  },
]
</script>
