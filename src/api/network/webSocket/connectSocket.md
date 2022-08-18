# ek.connectSocket

创建一个 WebSocket 连接。

### 参数

<Props :data="props" options />

### 返回值

**[SocketTask](./SocketTask.md)**

### Example

```ts
const ws = ek.connectSocket({
  url: 'wss://lilithvue.com/echo'
})

ws.onOpen(() => {
  console.log('open')

  ws.send({ data: 'Hello' })
})

ws.onClose(() => {
  console.log('close')
})

ws.onError(error => {
  console.log('err:', error)
})

ws.onMessage(message => {
  console.log('recv:', message.data)
})
```

<script setup>
const props = [
    {
        name: "url", 
        type: "string",
        default: "",
        required: true, 
        desc: "服务器 wss 接口地址"
    },
    {
        name: "header", 
        type: "Object",
        default: "",
        required: false, 
        desc: "HTTP Header"
    },
    {
        name: "protocols", 
        type: "string[]",
        default: "",
        required: false, 
        desc: "子协议数组"
    },
    {
        name: "timeout", 
        type: "number",
        default: "",
        required: false, 
        desc: "超时时间，单位为毫秒"
    }
]

</script>
