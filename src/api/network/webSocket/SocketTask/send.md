# [SocketTask](../SocketTask.md).send

通过 WebSocket 连接发送数据。

### 参数

<Props :data="props" options />

<script setup>
const props = [
    {
        name: "data", 
        type: "string | ArrayBuffer",
        default: "",
        required: true, 
        desc: "需要发送的内容", 
        version: "0.1.0"
    }
]

</script>
