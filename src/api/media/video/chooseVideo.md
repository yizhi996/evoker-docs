# ek.chooseVideo

> <Icon type="success" /> 支持 Promise

从本地相册选择视频或使用相机拍摄。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await ek.chooseVideo()
console.log(res.tempFilePaths)
```

<script setup>
const props = [
    {
        name: "sourceType", 
        type: "string[]",
        default: "['album', 'camera']",
        required: false, 
        desc: "视频选择的来源", 
        version: "0.1.0",
        values: [
          { value: "album", desc: "从相册选择视频" },
          { value: "camera", desc: "使用相机拍摄视频" },
        ]
    },
    {
        name: "compressed", 
        type: "boolean",
        default: "true",
        required: false, 
        desc: "是否压缩所选择的视频文件", 
        version: "0.1.0",
    },
    {
        name: "camera", 
        type: "string",
        default: "back",
        required: false, 
        desc: "默认拉起的是前置或者后置摄像头", 
        version: "0.1.0",
        values: [
          { value: "back", desc: "默认拉起后置摄像头" },
          { value: "front", desc: "默认拉起前置摄像头" },
        ]
    },
]

const results = [
  {
    name: 'tempFilePath',
    type: 'string',
    desc: '视频的本地临时文件路径列表 (本地路径)',
    version: '0.1.0',
  },
  {
    name: 'duration',
    type: 'number',
    desc: '视频的时间长度',
    version: '0.1.0',
  },
  {
    name: 'size',
    type: 'number',
    desc: '视频的数据量大小',
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
]
</script>
