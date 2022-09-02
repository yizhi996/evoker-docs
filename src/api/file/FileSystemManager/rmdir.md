# FileSystemManager.rmdir

> 以 Promise 风格调用：不支持

删除目录。

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.rmdir({
  dirPath: `${ek.env.USER_DATA_PATH}/example`,
  recursive: true,
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
        name: "dirPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要删除的目录路径 (本地路径)"
    },
    {
        name: "recursive", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件"
    }
]
</script>
