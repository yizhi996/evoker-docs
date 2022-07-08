# ek.getSystemSetting

获取设备设置。

### 返回

<Results :data="results" />

### Example

```ts
const setting = ek.getSystemSetting()
```

<script setup>
const results = [
  {
    name: 'bluetoothEnabled',
    type: 'boolean',
    desc: '蓝牙的系统开关',
    version: '0.1.0',
  },
  {
    name: 'locationEnabled',
    type: 'boolean',
    desc: '地理位置的系统开关',
    version: '0.1.0',
  },
  {
    name: 'wifiEnabled',
    type: 'boolean',
    desc: 'Wi-Fi 的系统开关',
    version: '0.1.0',
  },
  {
    name: 'deviceOrientation',
    type: 'string',
    desc: '设备方向',
    version: '0.1.0',
    values: [
      { value: "portrait", desc: "竖屏" },
      { value: "landscape", desc: "横屏" },
    ]
  },
]

</script>
