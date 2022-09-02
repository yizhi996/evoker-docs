# ek.uploadFile

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
  const result = await ek.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album']
  })

  const filePath = result.tempFilePaths[0]
  const key = filePath.substr(filePath.lastIndexOf('/') + 1)

  ek.uploadFile({
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
        desc: "服务器地址"
    },
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "要上传文件资源的路径 (本地路径)"
    },
    {
        name: "name", 
        type: "string",
        default: "",
        required: true, 
        desc: "文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容"
    },
    {
        name: "header", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP 请求的 Header"
    },
    {
        name: "formData", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP 请求中其他额外的 form data"
    },
    {
        name: "timeout", 
        type: "number",
        default: "60000",
        required: false, 
        desc: "超时时间，单位为毫秒"
    }
]

const results = [
  {
    name: 'data',
    type: 'string',
    desc: "服务器返回的数据"
  },
  {
    name: 'statusCode',
    type: 'number',
    desc: "服务器返回的 HTTP 状态码"
  },
  {
    name: 'header',
    type: 'Object',
    desc: "服务器返回的 HTTP Response Header"
  }
]
</script>
