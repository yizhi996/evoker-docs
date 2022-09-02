# FileSystemManager.ftruncate

> 以 Promise 风格调用：不支持

对文件内容进行截断操作

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
const fd = fs.open({
  filePath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success: res => {
    fs.ftruncate({
      fd: res.fd,
      length: 10, // 从第10个字节开始截断文件
      success: res => {
        console.log(res)
      }
    })
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
        desc: `文件描述符。通过 <a href="./open">FileSystemManager.open</a> 接口获得`
    },
    {
        name: "length", 
        type: "number",
        default: "",
        required: false, 
        desc: "截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）"
    }
]

</script>
