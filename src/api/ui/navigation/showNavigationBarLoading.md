# nz.showNavigationBarLoading

> <Icon type="success" /> 支持 Promise

显示当前页面导航栏加载动画。

### 参数

<Props options />

### Example

```ts
const loadData = () => {
  nz.showNavigationBarLoading()
  setTimeout(() => {
    nz.hideNavigationBarLoading()
  }, 2000)
}
```
