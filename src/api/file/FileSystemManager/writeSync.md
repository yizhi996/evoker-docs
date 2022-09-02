# FileSystemManager.writeSync

[FileSystemManager.write](./write.md) 的同步方法

### 参数

<Props :data="props" />

### 返回值

**[WriteResult](../WriteResult.md)**

文件读取结果

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const fd = fs.openSync({ filePath: `${ek.env.USER_DATA_PATH}/hello.txt`, flag: 'a+' })
  const res = fs.writeSync({
    fd,
    data: 'some text'
  })
  console.log(res.bytesWritten)
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
        name: "data", 
        type: "string | ArrayBuffer",
        default: "",
        required: true, 
        desc: "写入的内容，类型为 string 或 ArrayBuffer"
    },
    {
        name: "offset", 
        type: "number",
        default: "0",
        required: false, 
        desc: "只在 data 类型是 ArrayBuffer 时有效，决定 arrayBuffe 中要被写入的部位，即 arrayBuffer 中的索引，默认0"
    },
    {
        name: "length", 
        type: "number",
        default: "",
        required: false, 
        desc: "只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 arrayBuffer 从0开始偏移 offset 个字节后剩余的字节数"
    },
    {
        name: "encoding", 
        type: "string",
        default: "utf8",
        required: false, 
        desc: "只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8",
        values: [
          { value: "ascii", desc: "" },
          { value: "base64", desc: "" },
          { value: "binary", desc: "" },
          { value: "hex", desc: "" },
          { value: "ucs2", desc: "以小端序读取" },
          { value: "ucs-2", desc: "以小端序读取" },
          { value: "utf16le", desc: "以小端序读取" },
          { value: "utf-16le", desc: "以小端序读取" },
          { value: "utf-8", desc: "" },
          { value: "utf8", desc: "" },
          { value: "latin1", desc: "" }
        ]
    },
    {
        name: "position", 
        type: "number",
        default: "",
        required: false, 
        desc: "指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置"
    }
]
</script>
