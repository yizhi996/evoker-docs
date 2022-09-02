# ek.getAppBaseInfo

获取宿主 APP 基础信息。

### 返回

<Results :data="results" />

### Example

```ts
const info = ek.getAppBaseInfo()
```

<script setup>
const results = [
  {
    name: 'SDKVersion',
    type: 'string',
    desc: '客户端JS基础库版本'
  },
  {
    name: 'nativeSDKVersion',
    type: 'string',
    desc: '原生客户端基础库版本'
  },
  {
    name: 'version',
    type: 'string',
    desc: '宿主版本号'
  },
  {
    name: 'language',
    type: 'string',
    desc: '系统语言'
  },
  {
    name: 'theme',
    type: 'string',
    desc: '系统当前主题',
    types: [
      { type: "light", desc:"浅色主题" },
      { type: "dark", desc:"深色主题" },
    ]
  },
]
</script>
