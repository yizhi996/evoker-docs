# ek.hideNavigationBarLoading

> <Icon type="success" /> 支持 Promise

隐藏当前页面导航栏加载动画。

### 参数

<Props options />

### Example

```ts
const loadData = () => {
  ek.showNavigationBarLoading()
  setTimeout(() => {
    ek.hideNavigationBarLoading()
  }, 2000)
}
```
