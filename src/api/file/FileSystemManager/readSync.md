# FileSystemManager.readSync

[FileSystemManager.read](./read.md) 的同步方法

### 参数

<Props :data="props" />

### 返回值

**[ReadResult](../ReadResult.md)**

文件读取结果

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const fd = fs.openSync({ filePath: `${ek.env.USER_DATA_PATH}/hello.txt`, flag: 'a+' })
  const ab = new ArrayBuffer(1024)
  const res = fs.readSync({
    fd,
    arrayBuffer: ab,
    length: 10
  })
  console.log(res)
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
        name: "arrayBuffer", 
        type: "ArrayBuffer",
        default: "",
        required: true, 
        desc: "数据写入的缓冲区，必须是 ArrayBuffer 实例"
    },
    {
        name: "offset", 
        type: "number",
        default: "0",
        required: false, 
        desc: "缓冲区中的写入偏移量，默认0"
    },
    {
        name: "length", 
        type: "number",
        default: "0",
        required: false, 
        desc: "要从文件中读取的字节数，默认0"
    },
    {
        name: "position", 
        type: "number",
        default: "",
        required: false, 
        desc: "文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件"
    }
]
</script>
