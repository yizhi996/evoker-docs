# [CameraContext](./../CameraContext).zetZoom

> <Icon type="success" /> 支持 Promise

设置缩放级别。

### 参数

<Props :data="props" options />

### 调用成功返回

<Results :data="results" />

### Example

```vue
<script setup lang="ts">
const ctx = nz.createCameraContext()

const fn = () => {
  ctx.setZoom({ zoom: 2.0 })
}
</script>
```

<script setup>
const props = [
  {
    name: 'zoom',
    type: 'number',
    default: '',
    required: false,
    desc: '缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 bindinitdone 返回值中获取。',
    version: '0.1.0',
  },
]

const results = [
  {
    name: 'zoom',
    type: 'number',
    desc: '实际设置的缩放级别',
    version: '0.1.0',
  },
]
</script>
