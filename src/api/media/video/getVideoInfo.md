# ek.getVideoInfo

> <Icon type="success" /> 支持 Promise

获取视频信息。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await ek.getVideoInfo({
  src: 'nzfile://usr/test.mp4'
})
console.log(res)
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
]

const results = [
  {
    name: 'type',
    type: 'string',
    desc: '视频的格式',
    version: '0.1.0',
  },
  {
    name: 'duration',
    type: 'number',
    desc: '视频的长度',
    version: '0.1.0',
  },
  {
    name: 'size',
    type: 'number',
    desc: '视频的大小，单位 KB',
    version: '0.1.0',
  },
  {
    name: 'width',
    type: 'number',
    desc: '视频的宽度',
    version: '0.1.0',
  },
  {
    name: 'height',
    type: 'number',
    desc: '视频的高度',
    version: '0.1.0',
  },
  {
    name: 'fps',
    type: 'number',
    desc: '视频的帧率',
    version: '0.1.0',
  },
  {
    name: 'bitrate',
    type: 'number',
    desc: '视频的码率，单位 kbps',
    version: '0.1.0',
  },
]
</script>
