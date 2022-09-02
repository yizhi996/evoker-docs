# FileSystemManager.mkdir

> 以 Promise 风格调用：不支持

创建目录。

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.mkdir({
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
        desc: "创建的目录路径 (本地路径)"
    },
    {
        name: "recursive", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。"
    }
]
</script>
