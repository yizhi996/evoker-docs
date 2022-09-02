# ek.onNetworkStatusChange

监听网络状态变化事件。

### 参数

**function callback**

网络状态变化事件的回调函数

#### 回调参数

Object

<Results :data="results" />

### Example

```ts
ek.onNetworkStatusChange(({ isConnected, networkType }) => {
  console.log(isConnected)
  console.log(networkType)
})
```

<script setup>
const results = [
  {
    name: 'isConnected',
    type: 'boolean',
    desc: "当前是否有网络连接"
  },
  {
    name: 'networkType',
    type: 'string',
    desc: "网络类型",
    values: [
      { value: "wifi", desc: "WiFi 网络" },
      { value: "2g", desc: "2g 网络" },
      { value: "3g", desc: "3g 网络" },
      { value: "4g", desc: "4g 网络" },
      { value: "5g", desc: "5g 网络" },
      { value: "unknown", desc: "未知网络" },
      { value: "none", desc: "无网络" },
    ]
  },
]
</script>
