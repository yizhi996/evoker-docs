# ek.previewImage

> <Icon type="success" /> 支持 Promise

在新页面中全屏预览图片。

### 参数

<Props :data="props" options />

### Example

```ts
const urls = [
  'https://example.com/1.png',
  'https://example.com/2.png',
  'nzfile://usr/test.png',
  'nzfile://tmp_{random}.png'
]
ek.previewImage({
  urls,
  current: urls[2]
})
```

<script setup>
const props = [
    {
        name: "urls", 
        type: "string[]",
        default: "",
        required: true, 
        desc: "需要预览的图片链接列表"
    },
    {
        name: "current", 
        type: "string",
        default: "urls[0]",
        required: false, 
        desc: "当前显示图片的链接"
    },
]
</script>
