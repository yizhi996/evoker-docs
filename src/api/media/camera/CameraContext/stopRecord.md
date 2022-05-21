# [CameraContext](./../CameraContext).stopRecord

> 支持 Promise

结束录像。

### 参数

<Props :data="props" options />

### 调用成功返回

<Result :data="result" />

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
import Result from '/@theme/components/Result.vue'

const props = [
  {
    name: 'compressed',
    type: 'boolean',
    default: 'false',
    required: false,
    desc: '压缩视频',
    version: '0.1.0',
  },
]

const result = [
  {
    name: 'tempThumbPath',
    type: 'string',
    desc: '封面图片文件的临时路径 (本地路径)',
    version: '0.1.0',
  },
  {
    name: 'tempVideoPath',
    type: 'string',
    desc: '视频文件的临时路径 (本地路径)',
    version: '0.1.0',
  },
]

</script>
