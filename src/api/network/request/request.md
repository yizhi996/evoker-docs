# ek.request

发起 HTTP 网络请求。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### 返回值

**[RequestTask](./RequestTask.md)**

### Example

```ts
ek.request({
  url: 'https://example.com/api/profile',
  method: 'POST',
  data: { uid: 10001 },
  success: res => {
    if (res.statusCode === 200) {
      console.log(res.data.profile)
    }
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
        desc: "服务器接口地址"
    },
    {
        name: "data", 
        type: "string | Object | ArrayBuffer",
        default: "",
        required: false, 
        desc: "请求的参数"
    },
    {
        name: "header", 
        type: "Object",
        default: "",
        required: false, 
        desc: "设置请求的 header，header 中不能设置 Referrer，content-type 默认为 application/json"
    },
    {
        name: "timeout", 
        type: "number",
        default: "60000",
        required: false, 
        desc: "超时时间，单位为毫秒"
    },
    {
        name: "method", 
        type: "string",
        default: "GET",
        required: false, 
        desc: "HTTP 请求方法",
        values: [
          { value: "OPTIONS", desc: "HTTP 请求 OPTIONS" },
          { value: "GET", desc: "HTTP 请求 GET" },
          { value: "HEAD", desc: "HTTP 请求 HEAD" },
          { value: "POST", desc: "HTTP 请求 POST" },
          { value: "PUT", desc: "HTTP 请求 PUT" },
          { value: "DELETE", desc: "HTTP 请求 DELETE" },
          { value: "TRACE", desc: "HTTP 请求 TRACE" },
          { value: "CONNECT", desc: "HTTP 请求 CONNECT" },
        ]
    },
    {
        name: "dataType", 
        type: "string",
        default: "json",
        required: false, 
        desc: "返回的数据格式",
        values: [
          { value: "json", desc: "返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse" },
          { value: "其他", desc: "不对返回的内容进行 JSON.parse" },
        ]
    },
    {
        name: "responseType", 
        type: "string",
        default: "text",
        required: false, 
        desc: "响应的数据类型",
        values: [
          { value: "text", desc: "响应的数据为文本" },
          { value: "arraybuffer", desc: "响应的数据为 ArrayBuffer" },
        ]
    },
]

const results = [
  {
    name: 'data',
    type: 'string | Object | ArrayBuffer',
    desc: "服务器返回的数据",
    version: '0.1.0',
  },
  {
    name: 'statusCode',
    type: 'number',
    desc: "服务器返回的 HTTP 状态码",
    version: '0.1.0',
  },
  {
    name: 'header',
    type: 'Object',
    desc: "服务器返回的 HTTP Response Header",
    version: '0.1.0',
  },
  {
    name: 'cookies',
    type: 'string[]',
    desc: "服务器返回的 cookies，格式为字符串数组",
    version: '0.1.0',
  },
]
</script>
