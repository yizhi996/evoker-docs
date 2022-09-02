# [CameraContext](./../CameraContext).takePhoto

> <Icon type="success" /> 支持 Promise

拍摄照片。

### 参数

<Props :data="props" options />

### 调用成功返回

<Results :data="results" />

### Example

```vue
<script setup lang="ts">
const ctx = ek.createCameraContext()

const fn = async () => {
  const res = await ctx.takePhoto({ quality: 'high' })
  console.log(res.tempImagePath)
}
</script>
```

<script setup>

const props = [
  {
    name: 'quality',
    type: 'string',
    default: 'normal',
    required: false,
    desc: '成像质量',
    values: [
        { value: "high", desc: "高质量" },
        { value: "normal", desc: "普通质量" },
        { value: "low", desc: "低质量" },
    ],
  },
]

const results = [
  {
    name: 'tempImagePath',
    type: 'string',
    desc: '照片文件的临时路径 (本地路径)'
  },
]

</script>
