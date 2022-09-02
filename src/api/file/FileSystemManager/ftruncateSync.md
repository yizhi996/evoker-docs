# FileSystemManager.ftruncateSync

[FileSystemManager.ftruncate](./ftruncate.md) 的同步方法

### 参数

<Props :data="props" />

### 返回值

**string fd**

文件描述符

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const fd = fs.openSync({ filePath: `${ek.env.USER_DATA_PATH}/hello.txt`, flag: 'a+' })
  fs.ftruncateSync({ fd, length: 10 })
} catch (e) {
  console.log(e)
}
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
