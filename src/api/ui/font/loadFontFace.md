# ek.loadFontFace

> <Icon type="success" /> 支持 Promise

动态加载网络字体，文件地址需为下载类型。

### 参数

<Props :data="props" options />

### Desc

<Props :data="desc" />

### 成功返回

<Results :data="results" />

### Example

```vue
<template>
  <div :class="loaded ? 'font-loaded' : ''">{{ fontFamily }}</div>
  <button type="primary" @click="load">加载字体</button> <button @click="clean">清除字体</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fontFamily = 'Bitstream Vera Serif Bold'

const loaded = ref(false)

const load = async () => {
  await ek.loadFontFace({
    family: fontFamily,
    source: 'url("https://sungd.github.io/Pacifico.ttf")'
  })
  loaded.value = true
}

const clean = () => {
  loaded.value = false
}
</script>

<style scoped>
.font-loaded {
  font-family: 'Bitstream Vera Serif Bold';
}
</style>
```

<script setup>
const props = [
    {
        name: "family", 
        type: "string",
        default: "",
        required: true, 
        desc: "定义的字体名称", 
        version: "0.1.0"
    },
    {
        name: "source", 
        type: "string",
        default: "",
        required: true, 
        desc: "字体资源的地址", 
        version: "0.1.0"
    },
    {
        name: "desc", 
        type: "Desc",
        default: "",
        required: false, 
        desc: "可选的字体描述符", 
        version: "0.1.0"
    },
]

const desc = [
    {
        name: "style", 
        type: "string",
        default: "normal",
        required: false, 
        desc: "字体样式，可选值为 <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-style#values'>font-style</a>", 
        version: "0.1.0"
    },
    {
        name: "weight", 
        type: "string",
        default: "normal",
        required: false, 
        desc: "字体粗细，可选值为 <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight#values'>font-weight</a>", 
        version: "0.1.0"
    },
    {
        name: "variant", 
        type: "string",
        default: "normal",
        required: false, 
        desc: "设置小型大写字母的字体显示文本，可选值为 <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variant#values'>font-varint</a>", 
        version: "0.1.0"
    },
]


const results = [
    {
    name: 'status',
    type: 'string',
    desc: `加载字体结果，值为 <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/API/FontFace/status#value'>FontFace.status</a>`,
    version: '0.1.0',
  },
]
</script>
