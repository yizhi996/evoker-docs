# [Animation](./../Animation).export

导出动画队列。

export 方法每次调用后会清掉之前的动画操作。

### Example

```vue
<template>
  <view :animation="animData">box</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const animData = ref(null)

const anim = nz.createAnimation()

onMounted(() => {
  setTimeout(() => {
    animData.value = anim
      .rotate(45)
      .step()
      .export()
  }, 1000)
})
</script>
```
