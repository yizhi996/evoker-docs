# FileSystemManager.getFileInfo

> 以 Promise 风格调用：不支持

获取该小程序下的 本地临时文件 或 本地缓存文件 信息

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.getFileInfo({
  filePath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  success: res => {
    console.log(res)
  },
  fail: err => {
    console.error(err)
  }
})
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要读取的文件的路径 (本地路径)"
    }
]

const results = [
  {
    name: 'size',
    type: 'number',
    desc: "文件大小，以字节为单位"
  }
]
</script>
