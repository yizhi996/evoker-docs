# ek.hideLoading

> <Icon type="success" /> 支持 Promise

隐藏 loading 提示框。

### 参数

<Props  options />

### Example

```ts
const loading = () => {
  ek.showLoading({
    title: 'Loading...',
    mask: 'true'
  })
  setTimeout(() => {
    ek.hideLoading()
  }, 2000)
}
```
