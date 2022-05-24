# nz.navigateToMiniProgram

> <Icon type="success" /> 支持 Promise

退出当前小程序，必须由用户点击才能调用成功。

### 参数

<Props options />

### Example

```vue
<template>
  <button @click="onExit">Exit</button>
</template>

<script setup lang="ts">
const onExit = () => {
  nz.exitMiniProgram()
}
</script>
```
