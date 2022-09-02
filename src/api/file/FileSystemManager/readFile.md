# FileSystemManager.readFile

> 以 Promise 风格调用：不支持

读取本地文件内容

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.readFile({
  filePath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  encoding: 'utf8',
  position: 0,
  success: res => {
    console.log(res.data)
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
        desc: "要读取的文件的路径 (本地路径)"
    },
    {
        name: "encoding", 
        type: "string",
        default: "utf8",
        required: false, 
        desc: "指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容",
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
        desc: "从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte"
    },
    {
        name: "length", 
        type: "number",
        default: "",
        required: false, 
        desc: "指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte"
    },
]

const results = [
  {
    name: 'data',
    type: 'string | ArrayBuffer',
    desc: "文件内容"
  }
]
</script>
