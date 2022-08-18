# [SocketTask](../SocketTask.md).onMessage

监听 WebSocket 接受到服务器的消息事件。

### Result

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'data',
    type: 'string | ArrayBuffer',
    desc: '服务器返回的消息',
    version: '0.1.0',
  }
]
</script>
