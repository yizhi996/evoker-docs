# FileSystemManager.fstatSync

[FileSystemManager.fstat](./fstat.md) 的同步方法

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
  const stats = fs.fstatSync({ fd })
  console.log(stats)
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
    }
]
</script>
