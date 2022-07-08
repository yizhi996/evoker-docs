# ek.chooseImage

> <Icon type="success" /> 支持 Promise

从本地相册选择图片或使用相机拍照。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### TempFile

<Results :data="tempFile" />

### Example

```ts
const res = await ek.chooseImage({
  count: 2
})
console.log(res.tempFilePaths)
```

<script setup>
const props = [
    {
        name: "count", 
        type: "number",
        default: "9",
        required: false, 
        desc: "最多可以选择的图片张数", 
        version: "0.1.0"
    },
    {
        name: "sizeType", 
        type: "string[]",
        default: "['original', 'compressed']",
        required: false, 
        desc: "所选的图片的尺寸", 
        version: "0.1.0",
        values: [
          { value: "original", desc: "原图" },
          { value: "compressed", desc: "压缩图" },
        ]
    },
    {
        name: "sourceType", 
        type: "string[]",
        default: "['album', 'camera']",
        required: false, 
        desc: "选择图片的来源", 
        version: "0.1.0",
        values: [
          { value: "album", desc: "从相册选图" },
          { value: "camera", desc: "使用相机" },
        ]
    },
]

const results = [
  {
    name: 'tempFilePaths',
    type: 'string[]',
    desc: '图片的本地临时文件路径列表 (本地路径)',
    version: '0.1.0',
  },
  {
    name: 'tempFiles',
    type: 'TempFile[]',
    desc: '图片的本地临时文件列表',
    version: '0.1.0',
  },
]

const tempFile = [
  {
    name: 'path',
    type: 'string',
    desc: '本地临时文件路径 (本地路径)',
    version: '0.1.0',
  },
  {
    name: 'size',
    type: 'number',
    desc: '本地临时文件大小，单位 B',
    version: '0.1.0',
  },
]
</script>
