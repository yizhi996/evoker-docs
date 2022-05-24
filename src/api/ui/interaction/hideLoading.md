# nz.hideLoading

> <Icon type="success" /> 支持 Promise

隐藏 loading 提示框。

### 参数

<Props  options />

### Example

```ts
const loading = () => {
  nz.showLoading({
    title: 'Loading...',
    mask: 'true'
  })
  setTimeout(() => {
    nz.hideLoading()
  }, 2000)
}
```
