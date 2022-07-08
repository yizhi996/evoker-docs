# nz.getNetworkType

> <Icon type="success" /> 支持 Promise

获取当前的网络类型。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { networkType } = await nz.getNetworkType()
```

<script setup>
const results = [
  {
    name: 'networkType',
    type: 'string',
    desc: "网络类型",
    version: '0.1.0',
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
