# 页面生命周期

Evoker 并非一个单页应用，所以额外增加了页面的显示隐藏等部分原生客户端生命周期的钩子。

也可以直接使用 Vue 的[生命周期](https://vuejs.org/guide/essentials/lifecycle.html)。

### onLoad

在页面被首次加载时触发，对应 Vue 的 setup。

```ts
function onLoad(callback: (query: Record<string, any>) => void): void
```

### onShow

在页面首次加载时或者页面进入前台时触发。如 [ek.navigateBack](../../api/route/navigateBack) 或底部 Tab 切换到本页面，应用切入前台等。

```ts
function onShow(callback: () => void): void
```

### onReady

在页面首次渲染完成时触发，相较于 [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) 的区别是 `onMounted` 发生在逻辑层，组件不一定已经渲染完成，而 `onReady` 是渲染层返回的事件，更加精准。

```ts
function onReady(callback: () => void): void
```

### onHide

在页面隐藏/切入后台时触发。 如 [ek.navigateTo](../../api/route/navigateTo) 或底部 Tab 切换到其他页面，应用切入后台等。

```ts
function onHide(callback: () => void): void
```

### onUnload

页面卸载时触发。如 [ek.redirectTo](../../api/route/redirectTo) 或 [ek.navigateBack](../../api/route/navigateBack) 到其他页面时。对应 Vue 的 [onUnmounted](https://vuejs.org/api/composition-api-lifecycle.html#onunmounted)

```ts
function onUnload(callback: () => void): void
```

```vue
<script setup lang="ts">
import { usePage } from 'evoker'

const { onShow, onHide } = usePage()

onShow(() => {
  console.log('onShow')
})

onHide(() => {
  console.log('onHide')
})
</script>
```
