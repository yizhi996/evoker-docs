# nz.uploadFile

将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### 返回值

**[UploadTask](./UploadTask.md)**

### Example

```ts
const chooseImage = async () => {
  const result = await nz.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album']
  })

  const filePath = result.tempFilePaths[0]
  const key = filePath.substr(filePath.lastIndexOf('/') + 1)

  nz.uploadFile({
    url: 'https://example.com/upload',
    name: 'file',
    filePath,
    formData: {
      // cos auth
      key,
      success_action_status: 200,
      Signature: 'abcd...',
      'x-cos-security-token': 'abcd...',
      'Content-Type': ''
    },
    success: res => {
      const src = 'https://cdn.example.com/' + key
      // <img :src="src" />
    },
    fail: err => {
      console.log(err)
    }
  })
}
```

<script setup>
const props = [
    {
        name: "url", 
        type: "string",
        default: "",
        required: true, 
        desc: "下载资源的 ur", 
        version: "0.1.0"
    },
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要上传文件资源的路径 (本地路径)", 
        version: "0.1.0"
    },
    {
        name: "name", 
        type: "string",
        default: "",
        required: true, 
        desc: "文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容", 
        version: "0.1.0"
    },
    {
        name: "header", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP 请求的 Header，Header 中不能设置 Referer", 
        version: "0.1.0"
    },
    {
        name: "formData", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP 请求中其他额外的 form data", 
        version: "0.1.0"
    },
    {
        name: "timeout", 
        type: "number",
        default: "60000",
        required: false, 
        desc: "超时时间，单位为毫秒", 
        version: "0.1.0"
    },
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: false, 
        desc: "指定文件下载后存储的路径 (本地路径)", 
        version: "0.1.0",
    },
]

const results = [
  {
    name: 'data',
    type: 'string',
    desc: "开发者服务器返回的数据",
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
