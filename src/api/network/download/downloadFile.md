# ek.downloadFile

下载文件资源到本地。客户端直接发起一个 GET 请求，返回文件的本地临时路径 (本地路径)。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### 返回值

**[DownloadTask](./DownloadTask.md)**

### Example

```ts
ek.downloadFile({
  url: 'https://example.com/file/test.png',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: res => {
    ek.showToast({ title: 'network error', icon: 'error' })
  }
})
```

<script setup>
const props = [
    {
        name: "url", 
        type: "string",
        default: "",
        required: true, 
        desc: "下载资源的 ur"
    },
    {
        name: "header", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP 请求的 Header，Header 中不能设置 Referrer"
    },
    {
        name: "timeout", 
        type: "number",
        default: "60000",
        required: false, 
        desc: "超时时间，单位为毫秒"
    },
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: false, 
        desc: "指定文件下载后存储的路径 (本地路径)",
    },
]

const results = [
  {
    name: 'tempFilePath',
    type: 'string',
    desc: "临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件",
    version: '0.1.0',
  },
  {
    name: 'filePath',
    type: 'string',
    desc: "用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致",
    version: '0.1.0',
  },
  {
    name: 'statusCode',
    type: 'number',
    desc: "开发者服务器返回的 HTTP 状态码",
    version: '0.1.0',
  },
]
</script>
