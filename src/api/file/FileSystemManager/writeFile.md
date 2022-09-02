# FileSystemManager.writeFile

> 以 Promise 风格调用：不支持

写文件

### 参数

<Props :data="props" options />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.writeFile({
  filePath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text or arrayBuffer',
  encoding: 'utf8',
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
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要写入的文件路径 (本地路径)"
    },
    {
        name: "data", 
        type: "string | ArrayBuffer",
        default: "",
        required: true, 
        desc: "要写入的文本或二进制数据"
    },
    {
        name: "encoding", 
        type: "string",
        default: "utf8",
        required: false, 
        desc: "指定写入文件的字符编码",
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
    }
]

</script>
