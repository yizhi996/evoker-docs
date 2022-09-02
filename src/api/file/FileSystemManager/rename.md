# FileSystemManager.rename

> 以 Promise 风格调用：不支持

重命名文件的同步方法。可以把文件从 oldPath 移动到 newPath

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.rename({
  oldPath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  newPath: `${ek.env.USER_DATA_PATH}/hello_new.txt`,
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
        name: "oldPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "源文件路径，支持本地路径"
    },
    {
        name: "newPath", 
        type: "string",
        default: "",
        required: true, 
        desc: "新文件路径，支持本地路径"
    }
]

</script>
