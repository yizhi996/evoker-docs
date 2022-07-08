# nz.getBatteryInfo

> <Icon type="success" /> 支持 Promise

获取设备电量。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { level, isCharging } = await nz.getBatteryInfo()
```

<script setup>
const results = [
  {
    name: 'level',
    type: 'number',
    desc: "设备电量，范围 1 - 100",
    version: '0.1.0',
  },
  {
    name: 'isCharging',
    type: 'boolean',
    desc: "是否正在充电中",
    version: '0.1.0',
  },
]
</script>
