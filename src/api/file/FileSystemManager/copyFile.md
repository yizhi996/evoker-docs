# FileSystemManager.copyFile

> 以 Promise 风格调用：不支持

复制文件。

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
await fs.copyFile({
  srcPath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  destPath: `${ek.env.USER_DATA_PATH}/hello_copy.txt`
})
```

<script setup>
const props = [
    {
        name: "srcPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "源文件路径，支持本地路径"
    },
    {
        name: "destPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "目标文件路径，支持本地路径"
    }
]
</script>
