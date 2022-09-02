# FileSystemManager.unlink

> 以 Promise 风格调用：不支持

删除文件

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.unlink({
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
        desc: "要删除的文件路径 (本地路径)"
    }
]
</script>
