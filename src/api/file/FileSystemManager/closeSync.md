# FileSystemManager.closeSync

[FileSystemManager.close](./close.md) 的同步方法

### 参数

<Props :data="props" />

### Example

```ts
const fs = ek.getFileSystemManager()
const filePath = `${ek.env.USER_DATA_PATH}/hello.txt`
try {
  const fd = fs.openSync({ filePath })
  // ...
  fs.closeSync({ fd })
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
        desc: `需要被关闭的文件描述符。fd 通过 <a href="./open">FileSystemManager.open</a> 接口获得`
    }
]
</script>
