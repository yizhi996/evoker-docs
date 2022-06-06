# nz.compressVideo

> <Icon type="success" /> 支持 Promise

压缩视频，当需要更精细的控制时，可指定 bitrate、fps、和 resolution，当 quality 传入时，这三个参数将被忽略。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const src = 'nzfile://usr/test.mp4'

const res = await nz.compressVideo({
  src,
  quality: 'medium'
})
// or
const res = await nz.compressVideo({
  src,
  bitrate: 2000,
  resolution: 0.7
})
```

<script setup>
const props = [
    {
        name: "src", 
        type: "string",
        default: "",
        required: true, 
        desc: "视频文件路径，可以是临时文件路径也可以是永久文件路径", 
        version: "0.1.0"
    },
    {
        name: "quality", 
        type: "string",
        default: "",
        required: true, 
        desc: "压缩质量", 
        version: "0.1.0",
        values: [
          { value: "low", desc: "低" },
          { value: "medium", desc: "中" },
          { value: "high", desc: "高" },
        ]
    },
    {
        name: "bitrate", 
        type: "number",
        default: "",
        required: false, 
        desc: "码率，单位 kbps", 
        version: "0.1.0"
    },
    {
        name: "fps", 
        type: "number",
        default: "",
        required: false, 
        desc: "帧率", 
        version: "0.1.0"
    },
    {
        name: "resolution", 
        type: "number",
        default: "",
        required: false, 
        desc: "相对于原视频的分辨率比例，取值范围 0 - 1", 
        version: "0.1.0"
    },
]

const results = [
  {
    name: 'tempFilePath',
    type: 'string',
    desc: '压缩后的临时文件地址',
    version: '0.1.0',
  },
  {
    name: 'size',
    type: 'number',
    desc: '压缩后的大小，单位 KB',
    version: '0.1.0',
  },
]
</script>
