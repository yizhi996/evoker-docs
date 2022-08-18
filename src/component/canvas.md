# canvas

画布。

:::warning
暂时只支持 `2d` API [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
:::

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <canvas type="2d" id="my-canvas"></canvas>
</template>

<script setup lang="ts">
import { usePage } from 'evoker'

const { onReady } = usePage()

onReady(() => {
  const query = ek.createSelectorQuery()
  query
    .select('#my-canvas')
    .fields({ node: true, size: true })
    .exec(res => {
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')

      const dpr = ek.getSystemInfoSync().pixelRatio
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      ctx.scale(dpr, dpr)

      ctx.fillRect(0, 0, 100, 100)
    })
})
</script>
```

<script setup>
const props = [
    {
    name: 'type',
    type: `'2d'`,
    default: '',
    required: true,
    desc: '指定 canvas 类型',
    version: '0.5.0',
  },
]

const events = [
    {
        
    },
]
</script>
