# ek.stopPullDownRefresh

> <Icon type="success" /> 支持 Promise

停止当前页面下拉刷新。

### 参数

<Props options />

### Example

```vue
<template>
  <span>下滑页面即可刷新</span>
  <button @click="onStop">停止刷新</button>
</template>

<script setup lang="ts">
import { usePage } from 'evoker'

const { onPullDownRefresh } = usePage()

onPullDownRefresh(() => {
  ek.showToast({ title: 'Loading...', icon: 'none' })
})

const onStop = () => {
  ek.stopPullDownRefresh()
}
</script>
```
