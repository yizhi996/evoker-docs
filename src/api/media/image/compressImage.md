# ek.compressImage

> <Icon type="success" /> 支持 Promise

压缩图片。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await ek.compressImage({
  src: 'nzfile://usr/image.png',
  quality: 70
})
console.log(res.tempFilePath)
```

<script setup>
const props = [
    {
        name: "src", 
        type: "string",
        default: "",
        required: true, 
        desc: "图片的路径，支持本地路径、代码包路径", 
        version: "0.1.0"
    },
    {
        name: "quality", 
        type: "number",
        default: "",
        required: false, 
        desc: "压缩质量，范围0～100，数值越小，质量越低，压缩率越高", 
        version: "0.1.0"
    },
]

const results = [
  {
    name: 'tempFilePath',
    type: 'string',
    desc: '压缩后图片的临时文件路径 (本地路径)，jpg 格式',
    version: '0.1.0',
  },
]
</script>
