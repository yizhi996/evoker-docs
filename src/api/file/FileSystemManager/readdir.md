# FileSystemManager.readdir

> 以 Promise 风格调用：不支持

读取目录内文件列表。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.readdir({
  dirPath: `${ek.env.USER_DATA_PATH}/example`,
  success: res => {
    console.log(res.files)
  },
  fail: err => {
    console.error(err)
  }
})
```

<script setup>
const props = [
    {
        name: "dirPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要读取的目录路径 (本地路径)"
    }
]

const results = [
  {
    name: 'files',
    type: 'string[]',
    desc: "指定目录下的文件名数组"
  }
]
</script>
