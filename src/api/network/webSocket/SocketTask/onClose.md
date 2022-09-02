# [SocketTask](../SocketTask.md).onClose

监听 WebSocket 连接关闭事件。

### Result

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'code',
    type: 'number',
    desc: '一个数字值表示关闭连接的状态号，表示连接被关闭的原因'
  },
  {
    name: 'reason',
    type: 'string',
    desc: '一个可读的字符串，表示连接被关闭的原因'
  }
]
</script>
