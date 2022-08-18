# [SocketTask](../SocketTask.md).close

关闭 WebSocket 连接。

### 参数

<Props :data="props" options />

<script setup>
const props = [
    {
        name: "code", 
        type: "number",
        default: "1000",
        required: false, 
        desc: "一个数字值表示关闭连接的状态号，表示连接被关闭的原因。", 
        version: "0.1.0"
    },
    {
        name: "reason", 
        type: "string",
        default: "",
        required: false, 
        desc: "一个可读的字符串，表示连接被关闭的原因。", 
        version: "0.1.0"
    }
]
</script>
