# CameraContext.takePhoto

> 支持 Promise

拍摄照片。

### 参数

<Props :data="props" options />

### 调用成功返回

<Result :data="result" />

### Example

```vue
<script setup lang="ts">
const ctx = nz.createCameraContext()

const fn = async () => {
  const res = await ctx.takePhoto({ quality: 'high' })
  console.log(res.tempImagePath)
}
</script>
```

<script setup>
import Props from '/@theme/components/Props.vue'
import Result from '/@theme/components/Result.vue'

const props = [
  {
    name: 'quality',
    type: 'string',
    default: 'normal',
    required: false,
    desc: '成像质量',
    version: '0.1.0',
    types: [
        { type: "high", desc: "高质量" },
        { type: "normal", desc: "普通质量" },
        { type: "low", desc: "低质量" },
    ],
  },
]

const result = [
  {
    name: 'tempImagePath',
    type: 'string',
    desc: '照片文件的临时路径 (本地路径)',
    version: '0.1.0',
  },
]

</script>
