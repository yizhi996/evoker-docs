# 页面生命周期

可以直接使用 Vue 的生命周期 API，比如 [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted)，[onUnmounted](https://vuejs.org/api/composition-api-lifecycle.html#onunmounted) 等。

NZoth 并非一个单页应用，所以额外增加了页面的显示隐藏等部分原生客户端生命周期的钩子。

### onLoad

在页面被首次加载时触发。

```ts
function onLoad(callback: (query: Record<string, any>) => void): void
```

### onShow

在页面显示或进入前台时触发。

```ts
function onShow(callback: () => void): void
```

### onReady

在页面首次渲染完成时触发。

也可以直接使用 Vue 的 [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) 代替。

```ts
function onReady(callback: () => void): void
```

### onHide

在页面隐藏/切入后台时触发。 如 [nz.navigateTo](../../api/route/navigateTo) 或底部 Tab 切换到其他页面，应用切入后台等。

```ts
function onHide(callback: () => void): void
```

### onUnload

页面卸载时触发。如 [nz.redirectTo](../../api/route/redirectTo) 或 [nz.navigateBack](../../api/route/navigateBack) 到其他页面时。

也可以直接使用 Vue 的 [onUnmounted](https://vuejs.org/api/composition-api-lifecycle.html#onunmounted) 代替。

```ts
function onUnload(callback: () => void): void
```
