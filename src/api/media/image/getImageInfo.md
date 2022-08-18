# ek.getImageInfo

> <Icon type="success" /> 支持 Promise

获取图片信息。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await ek.getImageInfo({
  src: 'https://example.com/test.png'
})
console.log(res.width, res.height, res.path)
```

<script setup>
const props = [
    {
        name: "src", 
        type: "string",
        default: "",
        required: true, 
        desc: "图片的路径，支持网络路径、本地路径、代码包路径"
    },
]

const results = [
  {
    name: 'width',
    type: 'number',
    desc: '图片原始宽度，单位px',
    version: '0.1.0',
  },
  {
    name: 'height',
    type: 'number',
    desc: '图片原始高度，单位px',
    version: '0.1.0',
  },
  {
    name: 'path',
    type: 'string',
    desc: '图片的本地路径',
    version: '0.1.0',
  },
  {
    name: 'orientation',
    type: 'string',
    desc: '拍照时设备方向',
    version: '0.1.0',
    values: [
      { value: "up", desc: "默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。" },
      { value: "up-mirrored", desc: "同 up，但镜像翻转，对应 Exif 中的 2" },
      { value: "down", desc: "旋转180度，对应 Exif 中的 3" },
      { value: "down-mirrored", desc: "同 down，但镜像翻转，对应 Exif 中的 4" },
      { value: "left", desc: "逆时针旋转90度，对应 Exif 中的 8" },
      { value: "left-mirrored", desc: "同 left，但镜像翻转，对应 Exif 中的 5" },
      { value: "righ", desc: "顺时针旋转90度，对应 Exif 中的 6" },
      { value: "right-mirrored", desc: "同 right，但镜像翻转，对应 Exif 中的 7" },
    ]
  },
  {
    name: 'type',
    type: 'string',
    desc: '图片格式',
    version: '0.1.0',
    values: [
      { value: "unknown", desc: "未知格式" },
      { value: "jpeg", desc: "jpeg" },
      { value: "png", desc: "png" },
      { value: "gif", desc: "gif" },
      { value: "tiff", desc: "tiff" },
    ]
  },
]
</script>
