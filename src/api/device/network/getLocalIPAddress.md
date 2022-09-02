# ek.getLocalIPAddress

> <Icon type="success" /> 支持 Promise

获取局域网 IP 地址。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { localip } = await ek.getLocalIPAddress()
```

<script setup>
const results = [
  {
    name: 'localip',
    type: 'string',
    desc: "本机局域网 IP 地址"
  },
]
</script>
