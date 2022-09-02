# FileSystemManager.close

> 以 Promise 风格调用：不支持

关闭文件。

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
const filePath = `${ek.env.USER_DATA_PATH}/hello.txt`
const fd = fs.open({
  filePath,
  flag: 'a+',
  success: res => {
    // ...
    fs.close({ fd: res.fd })
  }
})
```

<script setup>
const props = [
    {
        name: "fd", 
        type: "string",
        default: "",
        required: true, 
        desc: `需要被关闭的文件描述符。fd 通过 <a href="./open">FileSystemManager.open</a> 接口获得`
    }
]
</script>
