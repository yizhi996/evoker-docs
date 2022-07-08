# [CameraContext](./../CameraContext).startRecord

> <Icon type="success" /> 支持 Promise

开始录像。

### 参数

<Props :data="props" options />

### Example

```ts
const ctx = ek.createCameraContext()

const record = () => {
  ctx.startRecord()
  setTimeout(async () => {
    const res = await ctx.stopRecord()
    console.log(res.tempVideoPath)
  }, 5000)
}
```

<script setup>
const props = []
</script>
