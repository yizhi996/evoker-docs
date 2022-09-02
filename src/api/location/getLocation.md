# ek.getLocation

> <Icon type="success" /> 支持 Promise

> 需要用户授权 `scope.userLocation`。

获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。 高频率调用会导致耗电，如有需要可使用持续定位接口 [ek.onLocationChange](./onLocationChange)。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.getLocation({
  type: 'gcj02'
})
console.log(res.latitude, res.longitude)
```

<script setup>
const props = [
    {
        name: "type", 
        type: "string",
        default: "wgs84",
        required: false, 
        desc: "返回的 gps 坐标系", 
        values: [
          { value: "wgs84", desc: "地球坐标" },
          { value: "gcj02", desc: "火星坐标" },
        ]
    },
    {
        name: "altitude", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "传入 true 会返回高度信息"
    },
    {
        name: "isHighAccuracy", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "开启高精度定位"
    },
    {
        name: "highAccuracyExpireTime", 
        type: "number",
        default: "",
        required: false, 
        desc: "高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果"
    },
]

const results = [
  {
    name: 'latitude',
    type: 'number',
    desc: "纬度，范围为 -90~90，负数表示南纬"
  },
  {
    name: 'longitude',
    type: 'number',
    desc: "经度，范围为 -180~180，负数表示西经"
  },
  {
    name: 'speed',
    type: 'number',
    desc: "速度，单位 m/s"
  },
  {
    name: 'accuracy',
    type: 'number',
    desc: "位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确"
  },
  {
    name: 'altitude',
    type: 'number',
    desc: "高度，单位 m"
  },
  {
    name: 'verticalAccuracy',
    type: 'number',
    desc: "垂直精度，单位 m"
  },
  {
    name: 'horizontalAccuracy',
    type: 'number',
    desc: "水平精度，单位 m"
  },
]
</script>
