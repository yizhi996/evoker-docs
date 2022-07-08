# ek.checkSession

> <Icon type="success" /> 支持 Promise

统一的检查登录态是否过期接口，按照[微信](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)设计，需要在 Native 自行实现，也可以不使用本接口，直接在 JS 端自行实现。

### 参数

<Props options />

### Example

```ts
ek.checkSession({
  success: res => {
    // 未过期
  },
  fail: res => {
    // 已过期
    ek.login()
    // ....
  }
})
```
