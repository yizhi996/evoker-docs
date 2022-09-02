# ek.getSavedFileInfo

> <Icon type="success" /> 支持 Promise

获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.getSavedFileInfo({ filePath })
console.log(res)
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "文件路径 (本地路径)"
    }
]

const results = [
  {
    name: 'size',
    type: 'number',
    desc: "文件大小，单位 B"
  },
  {
    name: 'createTime',
    type: 'number',
    desc: "文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数"
  }
]

</script>
