# nz.startLocationUpdate

> <Icon type="success" /> 支持 Promise

> 需要用户授权 `scope.userLocation`。

开启小程序在前台时接收位置更新消息。

### 参数

<Props :data="props" options />

### Example

```ts
nz.onLocationChange(res => {
  console.log('当前位置: ', res.latitude, res.longitude)
})

nz.startLocationUpdate({
  type: 'gcj02'
})
```

<script setup>
const props = [
    {
        name: "type", 
        type: "string",
        default: "gcj02",
        required: false, 
        desc: "返回的 gps 坐标系", 
        version: "0.1.0",
        values: [
          { value: "wgs84", desc: "地球坐标" },
          { value: "gcj02", desc: "火星坐标" },
        ]
    },
]
</script>
