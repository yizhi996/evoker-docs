# nz.onLocationChange

监听实时地理位置变化事件，需结合 [nz.startLocationUpdate](./startLocationUpdate.md) 使用。

### 参数

**function callback**

实时地理位置变化事件的回调函数

#### 回调参数

Object

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'latitude',
    type: 'number',
    desc: "纬度，范围为 -90~90，负数表示南纬",
    version: '0.1.0',
  },
  {
    name: 'longitude',
    type: 'number',
    desc: "经度，范围为 -180~180，负数表示西经",
    version: '0.1.0',
  },
  {
    name: 'speed',
    type: 'number',
    desc: "速度，单位 m/s",
    version: '0.1.0',
  },
  {
    name: 'accuracy',
    type: 'number',
    desc: "位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确",
    version: '0.1.0',
  },
  {
    name: 'altitude',
    type: 'number',
    desc: "高度，单位 m",
    version: '0.1.0',
  },
  {
    name: 'verticalAccuracy',
    type: 'number',
    desc: "垂直精度，单位 m",
    version: '0.1.0',
  },
  {
    name: 'horizontalAccuracy',
    type: 'number',
    desc: "水平精度，单位 m",
    version: '0.1.0',
  },
]
</script>
