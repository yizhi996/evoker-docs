# ek.getDeviceInfo

获取设备基础信息。

### 返回

<Results :data="results" />

### Example

```ts
const info = ek.getDeviceInfo()
```

<script setup>
const results = [
  {
    name: 'brand',
    type: 'string',
    desc: '设备品牌',
    version: '0.1.0',
  },
  {
    name: 'model',
    type: 'string',
    desc: '设备型号',
    version: '0.1.0',
  },
  {
    name: 'system',
    type: 'string',
    desc: '操作系统及版本',
    version: '0.1.0',
  },
  {
    name: 'platform',
    type: 'string',
    desc: '客户端平台',
    version: '0.1.0',
  },
]

</script>
