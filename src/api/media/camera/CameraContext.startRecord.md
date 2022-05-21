# CameraContext.startRecord

> 支持 Promise

开始录像。

### 参数

<Props :data="props" options />

### Example

```ts
const ctx = nz.createCameraContext()

const record = () => {
  ctx.startRecord()
  setTimeout(async () => {
    const res = await ctx.stopRecord()
    console.log(res.tempVideoPath)
  }, 5000)
}
```

<script setup>
import Props from '/@theme/components/Props.vue'

const props = []

</script>
