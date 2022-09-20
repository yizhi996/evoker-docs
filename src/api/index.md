# api

全局变量 `ek`。

## Example

```vue
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await ek.getStorage({ key: 'k_uid' })
  console.log(res.data)
})
</script>
```
