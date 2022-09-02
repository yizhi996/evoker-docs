# ek.getFileInfo

> <Icon type="success" /> 支持 Promise

获取文件信息。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.getFileInfo({ filePath })
console.log(res)
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "本地文件路径 (本地路径)"
    },
    {
        name: "digestAlgorithm", 
        type: "string",
        default: "md5",
        required: false, 
        desc: "计算文件摘要的算法",
        values: [
          { value: "md5", desc:"md5 算法" },
          { value: "sha1", desc:"sha1 算法" },
        ]
    }
]

const results = [
  {
    name: 'size',
    type: 'number',
    desc: "文件大小，单位 B"
  },
  {
    name: 'digest',
    type: 'string',
    desc: "按照传入的 digestAlgorithm 计算得出的的文件摘要"
  }
]

</script>
