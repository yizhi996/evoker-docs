# FileSystemManager.removeSavedFile

> 以 Promise 风格调用：不支持

删除该小程序下已保存的本地缓存文件

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.removeSavedFile({
  filePath:"ekfile://store_balabala.ext"
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
        desc: "需要删除的文件路径 (本地路径)"
    }
]
</script>
