# FileSystemManager.access

> 以 Promise 风格调用：不支持

判断文件/目录是否存在。

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.access({
  path: `${ek.env.USER_DATA_PATH}/hello.txt`,
  success: res => {
    // 文件存在
    console.log(res)
  },
  fail: err => {
    // 文件不存在或其他错误
    console.error(err)
  }
})
```

<script setup>
const props = [
    {
        name: "path", 
        type: "string",
        default: "",
        required: true, 
        desc: "要判断是否存在的文件/目录路径 (本地路径)"
    }
]
</script>
